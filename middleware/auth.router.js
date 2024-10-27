const { where } = require('sequelize')
const models = require('../models')
const {User} = models

module.exports = {

    verifyUser: async (req, res, next) => {
        if (!req.session.idPengguna) {
            return res.status(401).json({ message: "Anda Belum Login" });
        }

        const user = await User.findOne({
            where: {
                id: req.session.idPengguna
            }
        });
        if (!user) {
            return res.status(404).json({ message: "User Tidak ditemukan" });
        }

        req.idPengguna = user.id;
        req.role = user.role;

        console.log(`User ID: ${req.idPengguna}, Role: ${req.role}`);
        next(); 
    },


    isAdmin: (req, res, next) => {
        console.log(`Checking role for User ID: ${req.idPengguna}`); 
        if (req.role !== "admin") {
            return res.status(403).json({
                message: "Akses ditolak! Hanya Admin yang dapat masuk."
            });
        }
        next(); 
    },

    isUser: (req, res, next) => {
        console.log(`Checking role for User ID: ${req.idPengguna}`); 
        if (req.role !== "user") {
            return res.status(403).json({
                message: "Akses ditolak! Hanya User yang dapat masuk."
            });
        }
        next(); 
    }

}