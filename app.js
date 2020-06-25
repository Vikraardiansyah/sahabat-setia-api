const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const morgan = require("morgan");
const cors = require("cors");
const routeNavigator = require("./src/index");
require("dotenv").config();

const server = app.listen(process.env.PORT, "0.0.0.0", function () {
  const host = server.address().address;
  const port = server.address().port;

  console.log("You're connected at " + host + ":" + port);
});
app.use(express.static("public"));
app.use(morgan("dev"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/", routeNavigator);
app.use(cors());
