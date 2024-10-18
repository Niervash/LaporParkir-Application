const express = require('express')
const router = express.Router()
const verifyToken = require('../middleware/verifyToken')
// const {refreshToken} = require('../controllers/refreshToken')

const {
    Register,
    Login,
    Logout,
    isME
} = require ("../controllers/auth")

const {isUser, verifyUser} = require('../middleware/auth.router')

const upload = require('../middleware/upload')
router.get("/me",  isME )
router.post("/user", upload.single('foto_profil'), Register)
router.post("/login", Login)
router.delete("/logout", Logout)
// router.get("/token", refreshToken)


module.exports = router