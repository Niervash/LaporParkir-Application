const models = require('../models')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const { where } = require('sequelize')
const {User} = models

module.exports = {
    getAllUser: async (get, res)=>{
        const users = await User.findAll({
            attributes: ["id", "nama", "jenis_kelamin", "username", "email" , "role"]
        })
        res.json({
            message: "success get data",
            data: users
        })

    },

    getUserByID: async (req, res) =>{
        const user = await User.findOne({
            where: {
                id: req.params.id
            },
            attributes: ['id','nama', 'email', 'jenis_kelamin', 'username', 'foto_profil']
        })

        res.status(200).json({
            message: "sukses mengambil data"
        })
    },

    updateUser: async (req, res) => {
        try {
            const user = await User.findOne({
                where: {
                    id: req.params.id
                }
            });
    
            if (!user) {
                return res.status(404).json({
                    message: "User Tidak Ditemukan"
                });
            }
    
            const { nama, email, jenis_kelamin, username, password, role } = req.body;
            let hashPassword;
    
            
            if (password && password !== "") {
                const salt = await bcrypt.genSalt();
                hashPassword = await bcrypt.hash(password, salt);
            } else {
                hashPassword = user.password; 
            }
    
            let foto_profil = user.foto_profil; 
            if (req.file) {
                console.log("Menerima file baru untuk diupload:", req.file);
            
                if (foto_profil) {
                    const publicId = foto_profil.split('/').slice(-2).join('/').split('.')[0];
                    console.log("Deleting old image with publicId:", publicId);
                    
                    try {
                        const deleteResponse = await cloudinary.uploader.destroy(publicId);
                        console.log("Delete response:", deleteResponse);
                        if (deleteResponse.result !== 'ok') {
                            console.error("Gagal menghapus gambar:", deleteResponse);
                        }
                    } catch (error) {
                        console.error("Terjadi kesalahan saat menghapus gambar:", error);
                    }
                }
            
               
                const result = await new Promise((resolve, reject) => {
                    const uploadStream = cloudinary.uploader.upload_stream({
                        folder: 'foto_profil',
                        resource_type: 'auto',
                    },
                    (error, result) => {
                        if (error) return reject(error);
                        resolve(result);
                    });
            
                    uploadStream.end(req.file.buffer);
                });
            
                console.log("Upload successful:", result.secure_url); 
                foto_profil = result.secure_url; 
            }
    
            
            await User.update({
                nama: nama,
                email: email,
                jenis_kelamin: jenis_kelamin,
                username: username,
                password: hashPassword,
                foto_profil: foto_profil,
                role: role
            }, {
                where: {
                    id: user.id
                }
            });
    
            res.status(200).json({
                message: "User Berhasil Diupdate",
                foto_profil: foto_profil
            });
        } catch (error) {
            console.error("Terjadi kesalahan saat mengupdate user:", error);
            res.status(500).json({
                message: "Gagal Mengupdate User",
                error: error.message
            });
        }
    },

    deleteUser: async(req, res) =>{
        const user = await User.findOne({
            where:{
                id: req.params.id
            }
        })
        if (!user) return res.status(404).json({
            message: "User Not Found"
        }) 

        const foto_profil = user.foto_profil
        if (foto_profil) {
            const publicId = foto_profil.split('/').slice(-2).join('/').split('.')[0];
            console.log("Deleting old image with publicId:", publicId);
            

            await cloudinary.uploader.destroy(publicId);
        }
        try {
            await User.destroy({
                
                where: {
                    id: user.id
                }
            })

            res.status(200).json({
                message: "User Deleted"
            })
        } catch (error) {
            res.status(400).json({
                message: error.message
            })
        }

    }

    // addUser: async (get, res) =>{
    //     const {nama, email, jenis_kelamin, username, password,role} = req.body
    //     const hashPassword = await bcrypt.hash(password)
    //     try {
    //         await User.create({
    //             nama: nama,
    //             email: email,
    //             jenis_kelamin: jenis_kelamin,
    //             username: username,
    //             password: hashPassword,
    //             role: role
                
    //         })

    //         res.Status(201).json({
    //             message: "Berhasil Register"
    //         })
    //     } catch (error) {
            
    //     }
    // }



   
}

