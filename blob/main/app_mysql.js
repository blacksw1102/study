const express = require("express");
require("dotenv").config({ path: "mysql/.env" }); // mysql 폴더에 있는 .env 파일을 찾아서 환경변수를 설정
const mysql = require("./mysql");
const app = express();

app.listen(3000, () => {
  console.log("Server started. port 3000.");
});

app.get("/api/customers", async (req, res) => {
  const customers = await mysql.query("customerList");
  console.log(customers);
  res.send(customers);
});
