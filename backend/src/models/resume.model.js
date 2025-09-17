const mongoose = require('mongoose')

const resumeSchema = new mongoose.Schema({

    userId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "users",
        required: true
    },
    fileName: String,
    filetype: String,
    content: String

},{timestamps: true})

const resumeModel = mongoose.model("Resume", resumeSchema)

module.exports = resumeModel
