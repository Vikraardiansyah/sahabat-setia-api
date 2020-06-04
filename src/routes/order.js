const express = require('express')
const Route = express.Router()

const {authentication} = require('../middleware/auth')

const orderController = require('../controllers/order')


Route
    .get('/', authentication, orderController.getOrder)
    .get('/:id', authentication, orderController.getOrderById)
    .post('/', authentication, orderController.postOrder)
    .put('/', authentication, orderController.putOrder)
    .delete('/', authentication, orderController.deleteOrder)
module.exports = Route