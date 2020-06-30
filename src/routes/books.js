const express = require('express')
const Route = express.Router()
const uploadImage = require('../helpers/uploadImage')
const { authentication, authorization } = require('../middleware/auth')

const bookController = require('../controllers/books')


Route
    .get('/', bookController.getBooks)
    // .get('/:id', authentication, bookController.getBookById)
    .get('/recommended', bookController.getBookByRecommended)
    .post('/', authentication, authorization, uploadImage, bookController.postBooks)
    .put('/:id', authentication, authorization, uploadImage, bookController.putBooks)
    .delete('/:id', authentication, authorization, bookController.deleteBooks)

module.exports = Route