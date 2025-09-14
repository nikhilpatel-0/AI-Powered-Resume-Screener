const userModel = require('../models/user.model')
const jwt = require('jsonwebtoken')
async function authUser(req, res, next){

    const token = req.cookies.token

    if(!token) return res.status(401).json({ message: "Unathorized" })
    
    try {
        const decoded = jwt.verify(token, process.env.JWT_TOKEN)

        const user = await userModel.findById(decoded.id)

        if(!user) return res.status(401).json({ message: "Unauthoeized - user not found"})

        req.user = user
        next()

    } catch (error) {
        return res.status(401).json({ message: "Unathorized", error: error.message })
    }
}

module.exports = authUser