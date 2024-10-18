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

const {checkParkirStatus} = require('../controllers/parkirliar.controller')
router.get("/parkir/:id", verifyUser, checkParkirStatus)


module.exports = router