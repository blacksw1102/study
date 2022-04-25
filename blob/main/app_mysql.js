const express = require("express");
// mysql 폴더에 있는 .env 파일을 찾아서 환경변수를 설정
require("dotenv").config({ path: "mysql/.env" });
const mysql = require("./mysql");
const app = express();

// request body를 json으로 파싱 처리
app.use(
  express.json({
    limit: "50mb",
  })
);

app.listen(3000, () => {
  console.log("Server started. port 3000.");
});

app.get("/api/customers", async (req, res) => {
  const customers = await mysql.query("customerList");
  console.log(customers);
  res.send(customers);
});

app.post("/api/customer/insert", async (req, res) => {
  const result = await mysql.query("customerInsert", req.body.param);
  res.send(result);
});

app.put("/api/customer/update", async (req, res) => {
  const result = await mysql.query("customerUpdate", req.body.param);
  res.send(result);
});

app.delete("/api/customer/delete/:id", async (req, res) => {
  const { id } = req.params;
  const result = await mysql.query("customerDelete", id);
  res.send(result);
});
