require("dotenv").config({ path: "../mysql/.env" });
const mysql = require("../mysql");
const xlsx = require("xlsx");

const downloadDBToExcel = async () => {
  const workbook = xlsx.utils.book_new();
  const customers = await mysql.query("customerList");

  const firstSheet = xlsx.utils.json_to_sheet(customers, { header: ["id", "name", "email", "phone", "address"] });
  firstSheet["!cols"] = [{ wpx: 50 }, { wpx: 200 }, { wpx: 200 }, { wpx: 140 }, { wpx: 200 }];

  xlsx.utils.book_append_sheet(workbook, firstSheet, "Customers");

  xlsx.writeFile(workbook, "./resource/customersFromDB.xlsx");
};

downloadDBToExcel();
