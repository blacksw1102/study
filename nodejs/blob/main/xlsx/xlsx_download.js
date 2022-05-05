const express = require("express");
require("dotenv").config({ path: "../mysql/.env" });
const mysql = require("../mysql");
const xlsx = require("xlsx");

const app = express();

app.use(
  express.json({
    limit: "50mb",
  })
);

app.listen(3000, () => {
  console.log("Server started. port 3000.");
});

app.get("/download/customers", async (req, res) => {
  const workbook = xlsx.utils.book_new();
  const customers = await mysql.query("customerList");

  const firstSheet = xlsx.utils.json_to_sheet(customers, { header: ["id", "name", "email", "phone", "address"] });
  firstSheet["!cols"] = [{ wpx: 50 }, { wpx: 200 }, { wpx: 200 }, { wpx: 140 }, { wpx: 200 }];

  xlsx.utils.book_append_sheet(workbook, firstSheet, "Customer");

  res.setHeader("Content-disposition", "attachment; filename=Customer.xlsx");
  res.setHeader("Content-type", "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"); // mimetype 설정
  res.end(Buffer.from(xlsx.write(workbook, { type: "base64" }), "base64"));
});
