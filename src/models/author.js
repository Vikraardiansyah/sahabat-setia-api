const connection = require('../config/mysql')

module.exports = {
    getAuthor: function () {
        return new Promise(function (resolve, reject) {
            connection.query("SELECT * FROM author ORDER BY author ASC", function (error, result) {
                if (!error) {
                    resolve(result)
                } else {
                    reject(new Error(error))
                }
            })
        })
    },
    postAuthor: function (setData) {
        return new Promise(function (resolve, reject) {
            connection.query("INSERT INTO author SET ?", setData, function (error, result) {
                if (!error) {
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
    putAuthor: function (setData, id) {
        return new Promise(function (resolve, reject) {
            connection.query('UPDATE author SET ? WHERE id=?', [setData, id], function (error, result) {
                if (!error) {
                    const newData = {
                        id: parseInt(id),
                        ...setData
                    }
                    resolve(newData)
                } else {
                    reject(new Error(error))
                }
            })
        })
    },
    deleteAuthor: function (id) {
        return new Promise(function (resolve, reject) {
            connection.query('DELETE FROM author WHERE id=?', id, function (error, result) {
                if (!error) {
                    const newData = {
                        id: parseInt(id)
                    }
                    resolve(newData)
                } else {
                    reject(new Error(error))
                }
            })
        })
    }
}