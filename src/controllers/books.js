const bookModels = require("../models/books");
const helper = require("../helpers");
const redis = require("../config/redis");
const qs = require("query-string");

module.exports = {
  getBooks: async function (request, response) {
    try {
      if (request.query.page === undefined || request.query.page === "") {
        request.query.page = 1;
      }

      if (request.query.limit === undefined || request.query.limit === "") {
        request.query.limit = 6;
      }
      if (request.query.sort === "true") {
        request.query.sort = "ASC";
      } else {
        request.query.sort = "DESC";
      }
      if (request.query.value === undefined || request.query.value === "") {
        request.query.value = "books.created_at";
      }
      if (request.query.search === undefined || request.query.value === "") {
        request.query.search = "";
      }
      const value = request.query.value;
      const sort = request.query.sort;
      const limit = parseInt(request.query.limit);
      const start = (request.query.page - 1) * limit;
      const page = parseInt(request.query.page);
      const next = parseInt(page + 1);
      const previous = parseInt(page - 1);
      const search = `%${request.query.search}%`;
      const count = await bookModels.getCountBooks(search);
      const result = await bookModels.getBooks(
        search,
        value,
        sort,
        start,
        limit
      );
      const totalData = count[0]["COUNT(*)"];
      const totalPage = Math.ceil(totalData / limit);
      const pagination = {
        totalPage: totalPage,
        totalData: totalData,
        page: page,
        limit: limit,
        next: next,
        previous: previous,
      };
      const key = qs.stringify({ search, value, sort, start, limit });
      const redisData = {
        result,
        pagination,
      };
      const data = JSON.stringify(redisData);
      redis.setex(key, 60, data);
      return helper.response(response, 200, result, pagination);
    } catch (error) {
      return helper.response(response, 500, error);
    }
  },
  getBookById: async function (request, response) {
    try {
      const id = request.params.id;

      const result = await bookModels.getBookById(id);

      return helper.response(response, 200, result);
    } catch (error) {
      return helper.response(response, 500, error);
    }
  },
  getBookByRecommended: async function (request, response) {
    try {
      const result = await bookModels.getBookByRecommended();

      return helper.response(response, 200, result);
    } catch (error) {
      return helper.response(response, 500, error);
    }
  },
  postBooks: async function (request, response) {
    try {
      const id_author = parseInt(request.body.id_author);
      const id_genre = parseInt(request.body.id_genre);
      const id_status = parseInt(request.body.id_status);
      const title = request.body.title;
      const description = request.body.description;
      const newSetData = {
        ...request.body,
        id_author,
        id_genre,
        id_status,
      };
      const setData = {
        title,
        description,
        id_author,
        id_genre,
        id_status,
      };
      if (request.file) {
        setData.image = request.file.filename;
      }

      const result = await bookModels.postBooks(newSetData, setData);

      return helper.response(response, 200, result);
    } catch (error) {
      return helper.response(response, 500, error);
    }
  },
  putBooks: async function (request, response) {
    try {
      const id = parseInt(request.params.id);
      const id_author = parseInt(request.body.id_author);
      const id_genre = parseInt(request.body.id_genre);
      const id_status = parseInt(request.body.id_status);
      const title = request.body.title;
      const description = request.body.description;
      const newSetData = {
        ...request.body,
        id_author,
        id_genre,
        id_status,
      };
      const setData = {
        title,
        description,
        id_author,
        id_genre,
        id_status,
      };
      if (request.file) {
        setData.image = request.file.filename;
        newSetData.image = request.file.filename;
      }

      const result = await bookModels.putBooks(newSetData, setData, id);

      return helper.response(response, 200, result);
    } catch (error) {
      return helper.response(response, 500, error);
    }
  },
  deleteBooks: async function (request, response) {
    try {
      const id = request.params.id;
      const result = await bookModels.deleteBooks(id);

      return helper.response(response, 200, result);
    } catch (error) {
      return helper.response(response, 500, error);
    }
  },
};
