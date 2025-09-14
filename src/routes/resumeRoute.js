const express = require('express')
const resumeController = require('../controller/resume.controller')
const authUser = require('../Middleware/auth.middleware')
const upload = require('../Middleware/upload.middleware')

const router = express.Router()

router.post('/upload', authUser,upload.single("resume"), resumeController)

module.exports = router