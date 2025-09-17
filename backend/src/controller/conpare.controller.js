const resumeModel = require('../models/resume.model')
const jdModel = require('../models/jd.model')
const ai = require('../services/ai.service')
async function resumeCompare(req, res){
   try {

    const userId = req.user.id

    const [resume, jd] = await Promise.all([
        resumeModel.findOne({userId}),
        jdModel.findOne({userId})
    ])

    if(!resume || !jd){
        return res.status(404).json({message: "Resume or JD not found for this user"})
    }

    let aiResult

    try {
        aiResult = await ai.compareResume(resume.content, jd.content)
    } catch (err) {
        console.error("AI comparison failed:", err.message)
        res.status(500).json({message: "AI service failed, try again later"})
    }

    res.status(200).json({
        message: "Resume compared successfully",
        result: aiResult
    })

   } catch (err) {
        console.error("server error", err)
        res.status(500).json({message: "Internal server error"})
   }
}

module.exports = resumeCompare