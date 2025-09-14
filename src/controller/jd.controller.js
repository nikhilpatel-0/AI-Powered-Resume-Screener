const jdModel = require('../models/jd.model')

async function jdController(req, res){
    
    const text = req.body

    if(!text) return res.status(400).json({ message: "Job description text required" })
    
    const jd = await jdModel.create({
        
        userId: req.user.id,
        content: text

    })

    res.status(201).json({ message:"JD saved successfully", JDescription:jd})
}

module.exports = jdController