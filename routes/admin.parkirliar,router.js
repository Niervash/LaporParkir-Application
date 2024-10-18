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

router.get("/admin-parkir",  verifyUser, isAdmin, getAllLaporan)
router.get("/admin-parkir/:id", verifyUser, isAdmin, getLaporanById)
router.post("/admin-parkir",  verifyUser, isAdmin, upload.single('bukti'),  addLaporan);
router.patch("/admin-parkir/:id", verifyUser, isAdmin, upload.single('bukti'), updateLaporan)
router.delete("/admin-parkir/:id", verifyUser, isAdmin, upload.single('bukti'),  deleteParkir)

// admin approval
const {approveParkirLiar} = require('../middleware/adminApproval')
router.post("/admin-parkir/:id", verifyUser, isAdmin, approveParkirLiar);


module.exports = router