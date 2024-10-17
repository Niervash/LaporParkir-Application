const express = require('express')
const router = express.Router()



const {
    getAllPetugas,
    getPetugasById,
    addPetugas,
    updatePetugas,
    deletePetugas

} = require ('../controllers/admin.petugas.controller')

const {verifyUser, isAdmin} = require('../middleware/auth.router')
const upload = require('../middleware/upload')

router.get("/admin-petugas", verifyUser, isAdmin, getAllPetugas)
router.get("/admin-petugas/:id", verifyUser, isAdmin, getPetugasById)
router.post("/admin-petugas", verifyUser, upload.single('bukti'), isAdmin, addPetugas);
router.patch("/admin-petugas/:id", verifyUser, upload.single('bukti'), isAdmin, updatePetugas)
router.delete("/admin-petugas/:id", verifyUser, upload.single('bukti'), isAdmin, deletePetugas)

// router.get("/token", refreshToken)

// admin approval
const {approvePetugasParkir} = require('../middleware/adminApproval')
router.post("/admin-petugas/:id", verifyUser,  isAdmin, approvePetugasParkir);
module.exports = router