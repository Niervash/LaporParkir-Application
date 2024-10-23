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

const {verifyUser, isAdmin} = require('../middleware/auth.router')

router.get("/admin", getAllUser)
router.patch("/admin/:id",  updateUser )
router.delete("/admin/:id",  deleteUser )

router.get('/userprofil', getUserByID)
router.patch("/userprofil/:id", updateUser)
// router.get("/token", refreshToken)


module.exports = router