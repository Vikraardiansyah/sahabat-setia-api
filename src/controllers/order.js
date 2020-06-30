const orderModels = require('../models/order')
const helper = require('../helpers')

module.exports = {
    getOrder: async function (request, response) {
        try {

            const result = await orderModels.getOrder()

            return helper.response(response, 200, result)
        } catch (error) {
            return helper.response(response, 500, error)
        }
    },
    getOrderById: async function (request, response) {
        try {

            const id = request.params.id

            const result = await orderModels.getOrderById(id)

            return helper.response(response, 200, result)
        } catch (error) {
            return helper.response(response, 500, error)
        }
    },
    postOrder: async function (request, response) {
        try {
            const id_book = request.body.id_book
            const id_user = request.body.id_user
            const setData = {
                id_book,
                id_user,
            }
            const newSetData = request.body

            const result = await orderModels.postOrder(setData, newSetData)

            return helper.response(response, 200, result)
        } catch (error) {
            return helper.response(response, 500, { message: "You have already ordered this book" })
        }
    },
    putOrder: async function (request, response) {
        try {

            const result = await orderModels.putOrder()

            return helper.response(response, 200, result)
        } catch (error) {
            return helper.response(response, 500, error)
        }
    },
    deleteOrder: async function (request, response) {
        try {
            const id = request.params.id
            const result = await orderModels.deleteOrder(id)

            return helper.response(response, 200, result)
        } catch (error) {
            return helper.response(response, 500, error)
        }
    }
}