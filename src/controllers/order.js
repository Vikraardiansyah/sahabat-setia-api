const orderModels = require('../models/order')
const helper = require('../helpers')

module.exports = {
    getOrder: async function(request, response){
        try {

            const result = await orderModels.getOrder()
            
            return helper.response(response, 200, result)
        } catch (error) {
            return helper.response(response, 500, error)
        }
    },
    getOrderById: async function(request, response){
        try {

            const id = request.params.id

            const result = await orderModels.getOrderById(id)
            
            return helper.response(response, 200, result)
        } catch (error) {
            return helper.response(response, 500, error)
        }
    },
    postOrder: async function(request, response){
        try {
            const setData = request.body

            const result = await orderModels.postOrder(setData)

            return helper.response(response, 200, result)
        } catch (error) {
            return helper.response(response, 500, {message: "You have already ordered this book"})
        }
    },
    putOrder: async function(request, response){
        try {
            
            const result = await orderModels.putOrder()

            return helper.response(response, 200, result)
        } catch (error) {
            return helper.response(response, 500, error)
        }
    },
    deleteOrder: async function(request, response){
        try {
            const id = request.params.id
            const result = await orderModels.deleteOrder(id)

            return helper.response(response, 200, result)
        } catch (error) {
            return helper.response(response, 500, error)
        }
    }
}