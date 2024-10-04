const models = require('../models')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const {User} = models

module.exports = {

    
    Register: async (req, res) =>{
        const {nama, email, jenis_kelamin, username, password, role} = req.body
        const salt  = await bcrypt.genSalt();
        const hashPassword = await bcrypt.hash(password, salt)
        try {
            await User.create({
                nama: nama,
                email: email,
                jenis_kelamin: jenis_kelamin,
                username: username,
                password: hashPassword,
                role: role
                
            })

            res.status(201).json({
                message: "Berhasil Register"
            })
        } catch (error) {
            res.status(400).json({
                message: error.message
            })
        }
    },

    Login: async (req, res) =>{
        try {
            const user = await User.findAll({
                where:{
                    email: req.body.email
                }
            })
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
                res.status(404).json({
                    message: "Email anda tidak ditemukan"
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

