const express = require("express");
const Route = express.Router();

const bookRoutes = require("./routes/books");
const genreRoutes = require("./routes/genre");
const authorRoutes = require("./routes/author");
const statusRoutes = require("./routes/status");
const sortRoutes = require("./routes/sort");
const searchRoutes = require("./routes/search");
const userRoutes = require("./routes/user");
const authRoutes = require("./routes/auth");
const borrowRoutes = require("./routes/borrow");
const orderRoutes = require("./routes/order");

Route.use("/books", bookRoutes)
  .use("/genre", genreRoutes)
  .use("/author", authorRoutes)
  .use("/status", statusRoutes)
  .use("/books/sort", sortRoutes)
  .use("/books/search", searchRoutes)
  .use("/books/user", userRoutes)
  .use("/auth", authRoutes)
  .use("/borrow", borrowRoutes)
  .use("/order", orderRoutes);
module.exports = Route;
