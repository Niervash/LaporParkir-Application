const express = require('express')
const router = express.Router()



const {
    getAllLaporan,
    addLaporan,
    updateLaporan,


} = require ("../controllers/parkirliar.controller")

const {verifyUser, isUser} = require('../middleware/auth.router')
const upload = require('../middleware/upload')
router.get("/parkir", verifyUser, isUser, getAllLaporan)
router.post("/parkir",  verifyUser, isUser,  upload.single('bukti'), addLaporan);
router.patch("/parkir/:id",verifyUser, isUser, upload.single('bukti'), updateLaporan )


const {checkParkirStatus} = require('../controllers/parkirliar.controller')
router.get("/parkir/:id", verifyUser, isUser, checkParkirStatus)


module.exports = router