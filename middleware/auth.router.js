const { where } = require('sequelize')
const models = require('../models')
const {User} = models

module.exports = {

    verifyUser: async (req, res, next) => {
        if (!req.session.userId) {
            return res.status(401).json({ message: "Anda Belum Login" });
        }

        const user = await User.findOne({
            where: {
                id: req.session.userId
            }
        });
        if (!user) {
            return res.status(404).json({ message: "User Tidak ditemukan" });
        }

        req.userId = user.id;
        req.role = user.role;

        console.log(`User ID: ${req.userId}, Role: ${req.role}`);
        next(); 
    },


    isAdmin: (req, res, next) => {
        console.log(`Checking role for User ID: ${req.userId}`); 
        if (req.role !== "admin") {
            return res.status(403).json({
                message: "Akses ditolak! Hanya Admin yang dapat masuk."
            });
        }
        next(); 
    },

    isUser: (req, res, next) => {
        console.log(`Checking role for User ID: ${req.userId}`); 
        if (req.role !== "user") {
            return res.status(403).json({
                message: "Akses ditolak! Hanya User yang dapat masuk."
            });
        }
        next(); 
    }

}