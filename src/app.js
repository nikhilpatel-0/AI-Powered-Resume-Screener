const express = require('express')
const authRoute = require('./routes/authRoute')
const resumeRoute = require('./routes/resumeRoute')
const cookieParser = require('cookie-parser')
const jdRoute = require('./routes/jdRoute')

const app = express()
app.use(express.json())
app.use(express.text())
app.use(cookieParser())

app.use('/api/auth', authRoute)
app.use('/api/resume', resumeRoute)
app.use('/api/jd', jdRoute)

module.exports = app