const express = require('express')
const router = express.Router()



const {
    getAllPetugas,
    getPetugasById,
    addPetugas,
    updatePetugas

} = require ("../controllers/petugasparkir.controller")

const {verifyUser, isUser} = require('../middleware/auth.router')
const upload = require('../middleware/upload')
const {checkPetugasParkirStatus} = require('../controllers/petugasparkir.controller')

router.get("/petugas",   getAllPetugas)
router.get("/petugas/:id",  getPetugasById)
router.get("/petugas/status/:id",checkPetugasParkirStatus)
router.post("/petugas",  upload.single('bukti'), addPetugas);
router.patch("/petugas/:id",  upload.single('bukti'), updatePetugas )



module.exports = router

