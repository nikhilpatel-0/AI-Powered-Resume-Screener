const userModel = require('../models/user.model')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

async function registerController(req, res){

    const {name, email, password} = req.body

    const isUser = await userModel.findOne({email})

    if(isUser) { return res.status(400).json({message: "user already exists"}) }

    const hashedPassword = await bcrypt.hash(password, 10)

    const user = await userModel.create({
        name,
        email,
        password: hashedPassword
    })

    const token = await jwt.sign({id: user._id}, process.env.JWT_TOKEN)
    res.cookie('token', token)

    res.status(201).json({ message: "User registered successfully", user})

}

async function loginController(req, res){

    const {email, password} = req.body
    
    const user = await userModel.findOne({email})

    if(!user) return res.status(400).json({message: "Invalid credentials"})

    const isPassMatch = await bcrypt.compare(password, user.password)

    if(!isPassMatch) return res.status(400).json({message: "Invalid credentials"})
    
    const token = await jwt.sign({id: user._id}, process.env.JWT_TOKEN)
    res.cookie('token',token)

    res.status(200).json({
        message: "Login successful",
        user: {
            id: user._id,
            name: user.name,
            email: user.email

        }
    })

}

module.exports = {
    registerController,
    loginController
}