const mysql = require("mysql");
const { resolve } = require("path");
const sql = require("./sql.js");

const pool = mysql.createPool({
  connectionLimit: 10,
  host: "127.0.0.1",
  port: 3306,
  user: "dev01",
  password: "1234",
  database: "dev",
});

const query = async (alias, values) => {
  return new Promise((resolve, reject) =>
    pool.query(sql[alias], values, (error, results) => {
      if (error) {
        console.log(error);
        reject({
          error,
        });
      } else {
        resolve(results);
      }
    })
  );
};

module.exports = {
  query,
};
