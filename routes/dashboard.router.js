const express = require('express')
const router = express.Router()

const {
    getDashboard
} = require('../controllers/dashboard.controller')

router.use('dashboard', getDashboard)

module.exports = router