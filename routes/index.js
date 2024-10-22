const express = require('express')
const router = express.Router()

const userRouter = require('./user.router')
const authRouter = require ('./auth.router')
const authParkir = require('./parkir.router')
const authPetugas = require('./petugasparkir.router')
const authAdminParkir = require('./admin.parkirliar,router')
const authAdminPetugas = require('./admin.petugas.router')
const authDashboard = require('./dashboard.router')


router.use("/", userRouter)
router.use("/", authRouter)
router.use("/", authParkir) 
router.use("/", authPetugas)
router.use("/", authAdminParkir)
router.use("/", authAdminPetugas)
router.use("/", authDashboard)


module.exports = router