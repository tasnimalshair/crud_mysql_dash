const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "dash_users",
});

connection.connect();

module.exports = connection;
