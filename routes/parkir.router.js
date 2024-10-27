const express = require('express')
const router = express.Router()



const {
    getAllLaporan,
    getParkirById,
    addLaporan,
    updateLaporan,


} = require ("../controllers/parkirliar.controller")

const {verifyUser, isUser} = require('../middleware/auth.router')
const upload = require('../middleware/upload')

router.get("/parkir/:id", getAllLaporan)
router.get("/parkir/",   getParkirById)
router.post("/parkir",    upload.single('bukti'), addLaporan);
router.patch("/parkir/:id", upload.single('bukti'), updateLaporan )

const {checkParkirStatus} = require('../controllers/parkirliar.controller')
router.get("/parkir/status/:id", verifyUser, isUser,  checkParkirStatus)


module.exports = router