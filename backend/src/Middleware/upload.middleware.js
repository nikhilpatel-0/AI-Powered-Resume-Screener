const fs = require('fs')
const path = require('path')
const multer = require('multer')

const uploadPath = path.join(__dirname, "resume")

if(!fs.existsSync(uploadPath)){
    fs.mkdirSync(uploadPath)
}

const storage = multer.diskStorage({

    destination: (req, file, cb)=>{
         cb(null, uploadPath)
    },
    filename: (req, file, cb)=>{
        cb(null, Date.now() + "_" + file.originalname)
    }
})

const upload = multer({storage: storage})

module.exports = upload