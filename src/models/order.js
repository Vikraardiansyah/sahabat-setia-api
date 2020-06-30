const connection = require('../config/mysql')

module.exports = {
    getOrder: function () {
        return new Promise(function (resolve, reject) {
            connection.query(`SELECT order_book.id, books.title, books.image, order_book.id_book, order_book.id_user, user.name, user.email, order_book.order_at FROM order_book INNER JOIN books ON order_book.id_book = books.id INNER JOIN user ON order_book.id_user = user.id`, function (error, result) {
                if (!error) {
                    resolve(result)
                } else {
                    reject(new Error(error))
                }
            })
        })
    },
    getOrderById: function (id) {
        return new Promise(function (resolve, reject) {
            connection.query(`SELECT order_book.id, books.title, books.image, order_book.id_book, order_book.id_user, user.name, user.email, order_book.order_at FROM order_book INNER JOIN books ON order_book.id_book = books.id INNER JOIN user ON order_book.id_user = user.id WHERE order_book.id_user=${id}`, function (error, result) {
                if (!error) {
                    resolve(result)
                } else {
                    reject(new Error(error))
                }
            })
        })
    },
    postOrder: function (setData, newSetData) {
        return new Promise(function (resolve, reject) {
            connection.query("SELECT * FROM order_book WHERE id_user=? AND id_book=?", [setData.id_user, setData.id_book], function (error, result) {
                if (result[0]) {
                    reject(new Error(error))
                } else {
                    connection.query("INSERT INTO order_book SET ?", setData, function (error, result) {
                        if (!error) {
                            const newData = {
                                id: result.insertId,
                                ...newSetData
                            }
                            resolve(newData)
                        } else {
                            reject(new Error(error))
                        }
                    })
                }
            })

        })
    },
    putOrder: function (status, id_book, id_user) {
        return new Promise(function (resolve, reject) {
            connection.query('UPDATE order_book SET status=? WHERE id_book=? AND id_user=?', [status, id_book, id_user], function (error, result) {
                if (!error) {
                    resolve(result)
                } else {
                    reject(new Error(error))
                }
            })
        })
    },
    deleteOrder: function (id) {
        return new Promise(function (resolve, reject) {
            connection.query('DELETE FROM order_book WHERE id=?', id, function (error, result) {
                if (!error) {
                    resolve(result)
                } else {
                    reject(new Error(error))
                }
            })
        })
    }
}