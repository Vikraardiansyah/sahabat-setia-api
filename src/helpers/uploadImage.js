const multer = require('multer')
const path = require('path')
const helper = require('./index')
const storage = multer.diskStorage({
    destination: function (request, file, callback) {
      callback(null, './public')
    },
    filename: function (request, file, callback) {
      const fileExtension = file.originalname.split('.')
      const fileExt = fileExtension[fileExtension.length-1]
      callback(null, file.fieldname + "-" + Date.now() + "." + fileExt)
    }
})

const upload = multer({
    storage: storage,
    limits : {fileSize: 1*1024*1024},
    fileFilter: function (request, file, callback){
        
        checkFileType(file, callback)
    }
}).single('image')

function checkFileType(file, callback){
    const fileTypes = /jpg|jpeg|png/
    const extName = fileTypes.test(path.extname(file.originalname).toLowerCase())
    const mimeType = fileTypes.test(file.mimetype)
    if(extName && mimeType){
        return callback(null, true)
    } else {
        console.log(file)
        return callback("Upload Image only", false)
    }
}


module.exports = upload