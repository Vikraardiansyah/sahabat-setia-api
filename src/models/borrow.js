const connection = require("../config/mysql");

module.exports = {
  getBorrow: function () {
    return new Promise(function (resolve, reject) {
      connection.query(
        `SELECT borrow.id, books.title, books.image, borrow.id_book, borrow.id_user, user.name, user.email, borrow.status, borrow.borrow_at, borrow.return_at FROM borrow INNER JOIN books ON borrow.id_book = books.id INNER JOIN user ON borrow.id_user = user.id `,
        function (error, result) {
          if (!error) {
            resolve(result);
          } else {
            reject(new Error(error));
          }
        }
      );
    });
  },
  getBorrowById: function (id) {
    return new Promise(function (resolve, reject) {
      connection.query(
        `SELECT borrow.id, books.title, books.image, borrow.id_book, borrow.id_user, user.name, user.email, borrow.status, borrow.borrow_at, borrow.return_at FROM borrow INNER JOIN books ON borrow.id_book = books.id INNER JOIN user ON borrow.id_user = user.id WHERE borrow.id_user=${id}`,
        function (error, result) {
          if (!error) {
            resolve(result);
          } else {
            reject(new Error(error));
          }
        }
      );
    });
  },
  postBorrow: function (id_book, id_user, status, setData) {
    return new Promise(function (resolve, reject) {
      connection.query(
        `INSERT INTO borrow (id_book, id_user, status) VALUES ('${id_book}', '${id_user}', '${status}')`,
        function (error, result) {
          if (!error) {
            const newData = {
              id: result.insertId,
              ...setData,
            };
            resolve(newData);
          } else {
            reject(new Error(error));
          }
        }
      );
    });
  },
  putBorrow: function (status, id_book, id_user, setData) {
    return new Promise(function (resolve, reject) {
      connection.query(
        "UPDATE borrow SET status=? WHERE id_book=? AND id_user=? AND status=2",
        [status, id_book, id_user],
        function (error, result) {
          if (!error) {
            const newData = {
              ...setData,
            };
            resolve(newData);
          } else {
            reject(new Error(error));
          }
        }
      );
    });
  },
  deleteBorrow: function (id) {
    return new Promise(function (resolve, reject) {
      connection.query("DELETE FROM borrow WHERE id=?", id, function (
        error,
        result
      ) {
        if (!error) {
          resolve(result);
        } else {
          reject(new Error(error));
        }
      });
    });
  },
};
