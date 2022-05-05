const multer = require("multer");
const path = require("path");
const xlsx = require("xlsx");
require("dotenv").config({ path: "../mysql/.env" });
const mysql = require("../mysql");
const express = require("express");
const app = express();

app.use(
  express.json({
    limit: "50mb",
  })
);

app.listen(3000, () => {
  console.log("Server started. port 3000.");
});

// 디스크 저장소 정의
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "upload/"); // 전송된 파일의 저장 디렉토리 위치 설정
  },
  filename: function (req, file, cb) {
    cb(null, new Date().valueOf() + path.extname(file.originalname)); // 시스템 시간으로 파일 이름 설정
  },
});
const upload = multer({ storage: storage });

app.post("/upload/customers", upload.single("xlsx"), function (req, res, next) {
  const workbook = xlsx.readFile(`./upload/${req.file.filename}`);
  const sheetName = workbook.SheetNames[0];
  const sheet = workbook.Sheets[sheetName];
  const sheetJson = xlsx.utils.sheet_to_json(sheet);

  sheetJson.forEach(async (customer) => {
    await mysql.query("customerInsert", customer);
  });

  res.send("ok");
});
