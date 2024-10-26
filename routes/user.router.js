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
router.get("/admin",  getAllUser)
router.patch("/admin/:id",  upload.single('foto_profil'), updateUser )
router.delete("/admin/:id",  deleteUser )



router.get('/userprofil/:id',  getUserByID)
router.patch("/userprofil/:id",  upload.single('foto_profil'), updateUser)
// router.get("/token", refreshToken)


module.exports = router