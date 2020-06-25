const mysql = require("mysql");
require("dotenv").config();

const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB,
});

connection.connect(function (error) {
  if (error) throw error;
  console.log("Database has connected.");
});
module.exports = connection;
