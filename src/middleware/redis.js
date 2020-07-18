const redis = require("../config/redis");
const qs = require("query-string");
const helper = require("../helpers");

module.exports = {
  getBooksRedis: function (req, res, next) {
    if (req.query.page === undefined || req.query.page === "") {
      req.query.page = 1;
    }

    if (req.query.limit === undefined || req.query.limit === "") {
      req.query.limit = 6;
    }
    if (req.query.sort === "true") {
      req.query.sort = "ASC";
    } else {
      req.query.sort = "DESC";
    }
    if (req.query.value === undefined || req.query.value === "") {
      req.query.value = "books.created_at";
    }
    if (req.query.search === undefined || req.query.value === "") {
      req.query.search = "";
    }
    const value = req.query.value;
    const sort = req.query.sort;
    const limit = parseInt(req.query.limit);
    const start = (req.query.page - 1) * limit;
    const search = `%${req.query.search}%`;
    key = qs.stringify({
      search,
      value,
      sort,
      start,
      limit,
    });
    redis.get(key, (err, result) => {
      if (err) throw err;
      if (result !== null) {
        console.log("Get from Redis");
        const data = JSON.parse(result);
        return helper.response(res, 200, data.result, data.pagination);
      } else {
        next();
      }
    });
  },
  deleteRedis: function (req, res, next) {
    redis.flushdb();
    next();
  },
};
