const express = require("express");
const Route = express.Router();

const { authentication } = require("../middleware/auth");

const borrowController = require("../controllers/borrow");

Route.get("/", authentication, borrowController.getBorrow)
  .get("/:id", authentication, borrowController.getBorrowById)
  .post("/", authentication, borrowController.postBorrow)
  .put("/", authentication, borrowController.putBorrow)
  .delete("/", authentication, borrowController.deleteBorrow);
module.exports = Route;
