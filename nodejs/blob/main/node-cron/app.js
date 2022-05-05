const cron = require("node-cron");
require("dotenv").config({ path: "../nodemailer/.env" });
const nodemailer = require("../nodemailer");
require("dotenv").config({ path: "../mysql/.env" });
const mysql = require("../mysql");

// 스케줄 포맷 : 초(생략 가능), 분, 시, 일, 월, 요일
cron.schedule("* * * * *", async () => {
  const customers = await mysql.query("customerList");

  let h = [];
  h.push('<table style="border:1px solid black; border-collapse:collapse;">');
  h.push("<thead>");
  h.push("<tr>");
  h.push('<th style="border:1px solid black;">Name</th>');
  h.push('<th style="border:1px solid black;">Email</th>');
  h.push('<th style="border:1px solid black;">Phone</th>');
  h.push("</tr>");
  h.push("</thead>");
  h.push("<tbody>");
  for (const customer of customers) {
    h.push("<tr>");
    h.push(`<td style="border:1px solid black;">${customer.name}</td>`);
    h.push(`<td style="border:1px solid black;">${customer.email}</td>`);
    h.push(`<td style="border:1px solid black;">${customer.phone}</td>`);
    h.push("</tr>");
  }
  h.push("</tbody>");
  h.push("</table>");

  const emailData = {
    from: "blacksw1102@gmail.com",
    to: "blacksw@musicen.com",
    subject: "신규 고객 목록",
    html: h.join(""),
  };

  await nodemailer.send(emailData);
});
