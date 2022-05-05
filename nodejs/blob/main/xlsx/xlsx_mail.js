require("dotenv").config({ path: "../mysql/.env" });
const mysql = require("../mysql");
require("dotenv").config({ path: "../nodemailer/.env" });
const nodemailer = require("../nodemailer");
const xlsx = require("xlsx");

const sendAttachedEmail = async () => {
  const workbook = xlsx.utils.book_new();
  const customers = await mysql.query("customerList");

  const firstSheet = xlsx.utils.json_to_sheet(customers, { header: ["id", "name", "email", "phone", "address"] });
  firstSheet["!cols"] = [{ wpx: 50 }, { wpx: 200 }, { wpx: 200 }, { wpx: 140 }, { wpx: 200 }];

  xlsx.utils.book_append_sheet(workbook, firstSheet, "Customers");

  const data = {
    from: "blacksw1102@gmail.com",
    to: "blacksw@musicen.com",
    subject: "파일 첨부 이메일",
    text: "엑셀 파일을 첨부해서 이메일을 보냅니다.",
    attachments: [
      {
        filename: "Customers.xlsx",
        content: Buffer.from(xlsx.write(workbook, { type: "buffer" }), "base64"),
      },
    ],
  };

  await nodemailer.send(data);
};

sendAttachedEmail();
