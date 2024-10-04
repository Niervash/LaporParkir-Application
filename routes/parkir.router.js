const express = require('express')
const router = express.Router()



const {
    getAllLaporan,
    addLaporan,
    updateLaporan,


} = require ("../controllers/parkirliar.controller")

const {verifyUser} = require('../middleware/auth.router')
const upload = require('../middleware/upload')
router.get("/parkir", verifyUser, getAllLaporan)
router.post("/parkir", verifyUser, upload.single('bukti'), addLaporan);
router.patch("/parkir/:id", verifyUser, upload.single('bukti'), updateLaporan )

// router.get("/token", refreshToken)


module.exports = router