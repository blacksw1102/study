const express = require("express");
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
