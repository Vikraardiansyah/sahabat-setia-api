const express = require("express");
const Route = express.Router();
const uploadImage = require("../helpers/uploadImage");
const { authentication, authorization } = require("../middleware/auth");
const { getBooksRedis, deleteRedis } = require("../middleware/redis");

const bookController = require("../controllers/books");

Route.get("/", getBooksRedis, bookController.getBooks)
  // .get('/:id', authentication, bookController.getBookById)
  .get("/recommended", bookController.getBookByRecommended)
  .post(
    "/",
    authentication,
    authorization,
    uploadImage,
    deleteRedis,
    bookController.postBooks
  )
  .put(
    "/:id",
    authentication,
    authorization,
    uploadImage,
    deleteRedis,
    bookController.putBooks
  )
  .delete(
    "/:id",
    authentication,
    authorization,
    deleteRedis,
    bookController.deleteBooks
  );

module.exports = Route;
