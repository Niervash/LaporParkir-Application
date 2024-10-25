const express = require('express')
const router = express.Router()
const verifyToken = require('../middleware/verifyToken')
// const {refreshToken} = require('../controllers/refreshToken')


const {
    getAllUser,
    updateUser,
    deleteUser,
    getUserByID

} = require ("../controllers/user.controller")

const {verifyUser, isAdmin, isUser} = require('../middleware/auth.router')
const upload = require('../middleware/upload')
router.get("/admin", verifyUser, isAdmin, getAllUser)
router.patch("/admin/:id", verifyUser, isAdmin, upload.single('foto_profil'), updateUser )
router.delete("/admin/:id", verifyUser, isAdmin, deleteUser )



router.get('/userprofil/:id', verifyUser, isUser, getUserByID)
router.patch("/userprofil/:id", verifyUser, isUser, upload.single('foto_profil'), updateUser)
// router.get("/token", refreshToken)


module.exports = router