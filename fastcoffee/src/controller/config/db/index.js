const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: "containers-us-west-62.railway.app",
  user: "root",
  port: "6378",
  password: "QQgD8tSGMXWPsUemEOW4",
  database: "railway_fastcoffee",
});

connection.connect((error) => {
  if (error) {
    throw error;
  }
  console.log("Connect to the database successfull !!!");
});

module.exports = connection;
