const models = require('../models')
const cloudinary = require('cloudinary').v2
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const {User} = models

module.exports = {

    
    Register: async (req, res) => {
        const { nama, email, jenis_kelamin, username, password, role } = req.body;
    
        // Cek apakah password ada
        if (!password) {
            return res.status(400).json({
                message: "Password tidak boleh kosong"
            });
        }
    
        try {
            const salt = await bcrypt.genSalt();
            const hashPassword = await bcrypt.hash(password, salt); // Pastikan password dan salt ada
    
            if (!req.file) {
                return res.status(400).json({
                    message: "Foto Profil Anda Tidak Ditemukan"
                });
            }
    
            console.log("Upload to Cloudinary");
    
            const result = await new Promise((resolve, reject) => {
                const uploadStream = cloudinary.uploader.upload_stream({
                    folder: 'foto profil',
                    resource_type: 'auto'
                },
                (error, result) => {
                    if (error) return reject(error);
                    resolve(result);
                });
    
                uploadStream.end(req.file.buffer);
            });
    
    
            console.log("Upload successful:", result);
            await User.create({
                nama: nama,
                email: email,
                jenis_kelamin: jenis_kelamin,
                username: username,
                password: hashPassword,
                foto_profil: result.secure_url,
                role: role
            });
    
            res.status(201).json({
                message: "Berhasil Register",
                gambarUrl: result.secure_url
            });
        } catch (error) {
            console.error("Terjadi kesalahan saat register:", error);
            res.status(500).json({
                message: "Gagal Menambahkan User",
                error: error.message
            });
        }
    },
    Login: async (req, res) =>{
        console.log("Received data:", req.body);
        if (!req.body.email || !req.body.password) {
            return res.status(400).json({ message: "Email dan password harus diisi." });
        }
        try {
            const user = await User.findAll({
                where:{
                    email: req.body.email
                }
            })

            console.log("User found:", user);

            if (user.length === 0) {
                return res.status(404).json({
                    message: "Email Anda belum terdaftar"
                });
            }
            const match = await bcrypt.compare(req.body.password, user[0].password)
            if(!match) return res.status(400).json({message:"Password anda tidak sesuai"})
                const nama = user[0].nama
                const email = user[0].email
                const username = user[0].username
                const role = user[0].role
                req.session.userId = user[0].id; // Menyimpan ID pengguna
                res.status(200).json({nama, email, username, role})
            } catch (error) {
                console.error("Error during login:", error); // Debugging
                res.status(500).json({ message: "Terjadi kesalahan saat login"
                })
            }
        
    },

    isME: async(req, res)=>{
        if (!req.session.userId) {
            return res.status(401).json({message: "Anda Belum Login"})
        }

        const user = await User.findOne({
            attributes:['nama', "email", "role"],
            where:{
                id: req.session.userId
            }
        })
        if(!user) return res.status(404).json({
            message: "User Tidak ditemukan"
        })
        res.status(200).json(user)
    },

    Logout: async(req, res)=>{
        req.session.destroy((err)=>{
            if(err) return res.status(400).json({
                message: "Tidak Berhasil Logout"

            })
            res.status(200).json({
                message: "Anda Berhasil Logout"
            })
        })
    }


    
}

