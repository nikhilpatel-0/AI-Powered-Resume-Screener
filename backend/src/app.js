const express = require('express')
const authRoute = require('./routes/authRoute')
const resumeRoute = require('./routes/resumeRoute')
const cookieParser = require('cookie-parser')
const jdRoute = require('./routes/jdRoute')
const compareRoute = require('./routes/compareRoute')
const cors = require('cors')
const path = require('path')

const app = express()
app.use(cors({
    origin:'http://localhost:5173',
    credentials:true
}))
app.use(express.json())
app.use(express.text())
app.use(cookieParser())
app.use(express.static(path.join(__dirname, "../public")))

app.use('/api/auth', authRoute)
app.use('/api/resume', resumeRoute)
app.use('/api/jd', jdRoute)
app.use('/api/resume', compareRoute)

app.get('*name', (req, res) => {
    res.sendFile(path.join(__dirname, "../public/index.html"))
})

module.exports = app