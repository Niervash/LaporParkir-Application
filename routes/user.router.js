const express = require('express')
const router = express.Router()
const verifyToken = require('../middleware/verifyToken')
// const {refreshToken} = require('../controllers/refreshToken')


const {
    getAllUser,
    addUser,
    updateUser,
    deleteUser

} = require ("../controllers/user.controller")

const {verifyUser, isAdmin} = require('../middleware/auth.router')

router.get("/admin", getAllUser)
router.patch("/admin/:id",  updateUser )
router.delete("/admin/:id",  deleteUser )
// router.get("/token", refreshToken)


module.exports = router