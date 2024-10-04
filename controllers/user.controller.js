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

    updateUser: async(req, res) =>{
        const user = await User.findOne({
            where:{
                id: req.params.id
            }
        })
        if (!user) return res.status(404).json({
            message: "User Not Found"
        }) 
        const {nama, email, jenis_kelamin, username, password, role} = req.body
        const salt  = await bcrypt.genSalt();
        let hashPassword
        if (password === "" || password === null) {
            hashPassword = user.password
        }else{
            hashPassword = await bcrypt.hash(password, salt)
        }
        try {
            await User.update({
                nama: nama,
                email: email,
                jenis_kelamin: jenis_kelamin,
                username: username,
                password: hashPassword,
                role: role
                
            }, {
                where: {
                    id: user.id
                }
            })

            res.status(200).json({
                message: "User Berhasil diUpdate"
            })
        } catch (error) {
            res.status(400).json({
                message: error.message
            })
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

