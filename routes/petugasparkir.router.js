const express = require('express')
const router = express.Router()



const {
    getAllPetugas,
    addPetugas,
    updatePetugas

} = require ("../controllers/petugasparkir.controller")

const {verifyUser} = require('../middleware/auth.router')
const upload = require('../middleware/upload')
const {checkPetugasParkirStatus} = require('../controllers/petugasparkir.controller')

router.get("/petugas", verifyUser, getAllPetugas)
router.get("/petugas/status/:id", verifyUser, checkPetugasParkirStatus)
router.post("/petugas", verifyUser, upload.single('bukti'), addPetugas);
router.patch("/petugas/:id", verifyUser, upload.single('bukti'), updatePetugas )



module.exports = router

