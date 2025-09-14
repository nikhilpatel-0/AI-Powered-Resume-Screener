const mongoose = require('mongoose')

const jdSchema = new mongoose.Schema({
    userId:{
        type: mongoose.Schema.ObjectId,
        ref: "user",
        required: true
    },
    content: {
        type: String,
        required: true
    }
},{timestamps: true})

const jdModel = mongoose.model("jobD", jdSchema)

module.exports = jdModel