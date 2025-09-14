const resumeModel = require('../models/resume.model')
const fs = require('fs')
const pdfParse = require('pdf-parse')
const mammoth = require('mammoth')

async function resumeController(req, res){

    try {
        const file = req.file

        if(!file) return res.status(400).json({ message: "No file uploaded" })
        
        let extractedText = ""

        if(file.mimetype === 'application/pdf'){
            
            const dataBuffer = fs.readFileSync(file.path)
            const pdfData = await pdfParse(dataBuffer)

            extractedText = pdfData.text

        }else if(file.mimetype === "application/vnd.openxmlformats-officedocument.wordprocessingml.document"){

            const result = await mammoth.extractRawText({path: file.path})

            extractedText = result.value
        }else{
            return res.status(400).json({ message: "Only PDF and DOCX supported" })
        }

        const newResume = await resumeModel.create({
            userId: req.user.id,
            fileName: file.originalname,
            filetype: file.mimetype,
            content: extractedText
        })

        res.status(201).json({
            message: "Resume uploaded and text extracted successfully",
            newResume
        })
    } catch (error) {
        res.status(500).json({ message: "Server error", error: error.message })
    }
}

module.exports = resumeController