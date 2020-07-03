const express = require("express");
const Route = express.Router();
const cors = require("cors");
const corsOptions = {
  origin: "*",
  optionsSuccessStatus: 200,
};

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

Route.use("/books", cors(corsOptions), bookRoutes)
  .use("/genre", cors(corsOptions), genreRoutes)
  .use("/author", cors(corsOptions), authorRoutes)
  .use("/status", cors(corsOptions), statusRoutes)
  .use("/books/sort", cors(corsOptions), sortRoutes)
  .use("/books/search", cors(corsOptions), searchRoutes)
  .use("/books/user", cors(corsOptions), userRoutes)
  .use("/auth", cors(corsOptions), authRoutes)
  .use("/borrow", cors(corsOptions), borrowRoutes)
  .use("/order", cors(corsOptions), orderRoutes);
module.exports = Route;
