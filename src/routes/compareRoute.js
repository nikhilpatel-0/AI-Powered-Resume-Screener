const express = require('express')
const resumeCompare = require('../controller/conpare.controller')
const authUser = require('../Middleware/auth.middleware')

const router = express.Router()

router.post('/compare', authUser, resumeCompare)

module.exports = router