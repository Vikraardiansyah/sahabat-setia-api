const borrowModels = require('../models/borrow')
const helper = require('../helpers')

module.exports = {
    getBorrow: async function(request, response){
        try {

            const result = await borrowModels.getBorrow()
            
            return helper.response(response, 200, result)
        } catch (error) {
            return helper.response(response, 500, error)
        }
    },
    getBorrowById: async function(request, response){
        try {

            const id = request.params.id

            const result = await borrowModels.getBorrowById(id)
            
            return helper.response(response, 200, result)
        } catch (error) {
            return helper.response(response, 500, error)
        }
    },
    postBorrow: async function(request, response){
        try {
            const id_book = parseInt(request.body.id_book)
            const id_user = parseInt(request.body.id_user)
            const status = parseInt(request.body.status)
            const setData = request.body
            setData.id_book = id_book
            setData.id_user = id_user
            setData.status = status
            
            const result = await borrowModels.postBorrow(id_book, id_user, status, setData)

            return helper.response(response, 200, result)
        } catch (error) {
            return helper.response(response, 500, error)
        }
    },
    putBorrow: async function(request, response){
        try {
            const id_book = parseInt(request.body.id_book)
            const id_user = parseInt(request.body.id_user)
            const status = parseInt(request.body.status)
            const setData = request.body
            setData.id_book = id_book
            setData.id_user = id_user
            setData.status = status

            const result = await borrowModels.putBorrow(status, id_book, id_user, setData)

            return helper.response(response, 200, result)
        } catch (error) {
            return helper.response(response, 500, error)
        }
    },
    deleteBorrow: async function(request, response){
        try {
            const id = request.params.id
            const result = await borrowModels.deleteBorrow(id)

            return helper.response(response, 200, result)
        } catch (error) {
            return helper.response(response, 500, error)
        }
    }
}