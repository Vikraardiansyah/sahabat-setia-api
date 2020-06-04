const bookModels = require('../models/books')
const helper = require('../helpers')

module.exports = {
    getBooks: async function(request, response){
        try {
            if(request.query.page === undefined || request.query.page === ""){
                request.query.page = 1
            }

            if(request.query.limit === undefined || request.query.limit === "") {
                request.query.limit = 6
            }
            if(request.query.sort === "false") {
                request.query.sort = "DESC"
            } else {
                request.query.sort = "ASC"
            }
            if(request.query.value === undefined || request.query.value === ""){
                request.query.value = "books.id"
            }
            if(request.query.search === undefined || request.query.value === ""){
                request.query.search = ""
            }
            const value = request.query.value
            const sort = request.query.sort
            const limit = parseInt(request.query.limit)
            const start = ((request.query.page) - 1) * limit
            const page = parseInt(request.query.page)
            const next = parseInt(page + 1)
            const previous = parseInt(page - 1)
            const search = `%${request.query.search}%`
            const data = await bookModels.getCountBooks(search)
            const result = await bookModels.getBooks(search, value, sort, start, limit)
            const totalData = data[0]['COUNT(*)']
            const totalPage = Math.ceil(totalData/limit)
            const pagination = {
                "totalPage" : totalPage,
                "totalData" : totalData,
                "page" : page,
                "limit" : limit,
                "next" : next,
                "previous" : previous
            }
            
            return helper.response(response, 200, result, pagination)
        } catch (error) {
            return helper.response(response, 500, error)
        }
    },
    getBookById: async function(request, response){
        try {
            const id = request.params.id

            const result = await bookModels.getBookById(id)

            return helper.response(response, 200, result)
        } catch (error) {
            return helper.response(response, 500, error)
        }
    },
    postBooks: async function(request, response){
        try {
            const setData = request.body
            
            if(request.file) {
                setData.image = request.file.filename
            }
            
            const result = await bookModels.postBooks(setData)

            return helper.response(response, 200, result)
        } catch (error) {
            return helper.response(response, 500, error)
        }
    },
    putBooks: async function(request, response){
        try {
            const id = parseInt(request.params.id)
            const id_author = parseInt(request.body.id_author)
            const id_genre = parseInt(request.body.id_genre)
            const id_status = parseInt(request.body.id_status)
            const title = request.body.title
            const description = request.body.description
            const newSetData = {
                ...request.body,
                id_author,
                id_genre,
                id_status
            }
            const setData = {
                title,
                description,
                id_author,
                id_genre,
                id_status
            }
            if(request.file) {
                setData.image = request.file.filename
            }

            const result = await bookModels.putBooks(newSetData, setData, id)

            return helper.response(response, 200, result)
        } catch (error) {
            return helper.response(response, 500, error)
        }
    },
    deleteBooks: async function(request, response){
        try {
            const id = request.params.id
            console.log(request.body)
            const result = await bookModels.deleteBooks(id)

            return helper.response(response, 200, result)
        } catch (error) {
            return helper.response(response, 500, error)
        }
    }
}