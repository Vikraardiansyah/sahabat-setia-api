const connection = require('../config/mysql')

module.exports = {
    getCountBooks: function(search, value, sort){
        return new Promise(function(resolve, reject){
            connection.query(`SELECT COUNT(*) FROM books INNER JOIN genre ON books.id_genre = genre.id INNER JOIN author ON books.id_author = author.id INNER JOIN status ON books.id_status = status.id WHERE books.id LIKE "${search}" OR books.title LIKE "${search}" OR genre.genre LIKE "${search}" OR author.author LIKE "${search}" OR status.status LIKE "${search}"`, function(error, result){
                if(!error){
                    resolve(result)
                } else {
                    reject(new Error(error))
                }
            })
        })
    },
    getBooks: function(search, value, sort, start, limit){
        return new Promise(function(resolve, reject){
            connection.query(`SELECT books.id, books.title, books.description, books.id_genre, genre.genre, books.id_author, author.author, books.id_status, status.status, books.image, books.email_borrow, books.updated_at, books.created_at FROM books INNER JOIN genre ON books.id_genre = genre.id INNER JOIN author ON books.id_author = author.id INNER JOIN status ON books.id_status = status.id WHERE books.id LIKE "${search}" OR books.title LIKE "${search}" OR genre.genre LIKE "${search}" OR author.author LIKE "${search}" OR status.status LIKE "${search}" ORDER BY ${value} ${sort} LIMIT ${start},${limit}`, function(error, result){
                if(!error){
                    resolve(result)
                } else {
                    reject(new Error(error))
                }
            })
        })
    },
    getBookById: function(id){
        return new Promise(function(resolve, reject){
            connection.query(`SELECT books.id, books.title, books.description, books.id_genre, genre.genre, books.id_author, author.author, books.id_status, status.status, books.image, books.email_borrow, books.updated_at, books.created_at FROM books INNER JOIN genre ON books.id_genre = genre.id INNER JOIN author ON books.id_author = author.id INNER JOIN status ON books.id_status = status.id WHERE books.id=${id}`, function(error, result){
                if(!error){
                    resolve(result)
                } else {
                    reject(new Error(error))
                }
            })
        })
    },
    postBooks: function(setData){
        return new Promise(function(resolve, reject){
            connection.query("INSERT INTO books SET ?", setData, function(error, result){
                if(!error){
                    const newData = {
                        id: result.insertId,
                        ...setData
                    }
                    resolve(newData)
                } else {
                    reject(new Error(error))
                }
            })
        })
    },
    putBooks: function(newSetData, setData, id){
        return new Promise(function(resolve, reject){
            connection.query('UPDATE books SET ? WHERE id=?', [setData, id], function(error, result){
                if(!error){
                    const newData = {
                        id: id,
                        ...newSetData
                    }
                    resolve(newData)
                } else {
                    reject(new Error(error))
                }
            })
        })
    },
    deleteBooks: function(id){
        return new Promise(function(resolve, reject){
            connection.query('DELETE FROM books WHERE id=?', id, function(error, result){
                if(!error){
                    resolve(result)
                } else {
                    reject(new Error(error))
                }
            })
        })
    }
}