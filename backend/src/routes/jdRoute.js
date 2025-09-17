const express = require('express')
const authUser = require('../Middleware/auth.middleware')
const jd = require('../controller/jd.controller')

const router = express.Router()

router.post('/upload-jd', authUser, jd)

module.exports = router