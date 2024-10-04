const express = require('express')
const router = express.Router()



const {
    getAllLaporan,
    addLaporan,
    updateLaporan,
    getLaporanById,
    deleteParkir

} = require ("../controllers/admin.parkirliar.controller")

const {verifyUser, isAdmin} = require('../middleware/auth.router')
const upload = require('../middleware/upload')

router.get("/admin-parkir", verifyUser, isAdmin, getAllLaporan)
router.get("/admin-parkir/:id", verifyUser, isAdmin, getLaporanById)
router.post("/admin-parkir", verifyUser, upload.single('bukti'), isAdmin, addLaporan);
router.patch("/admin-parkir/:id", verifyUser, upload.single('bukti'), isAdmin, updateLaporan)
router.delete("/admin-parkir/:id", verifyUser, upload.single('bukti'), isAdmin, deleteParkir)

// router.get("/token", refreshToken)


module.exports = router