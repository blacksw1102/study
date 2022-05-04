require("dotenv").config({ path: "../nodemailer/.env" }); // nodemailer 폴더에 있는 .env 파일을 환경 변수로 설정
const nodemailer = require("../nodemailer");
const express = require("express");
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

app.post("/api/email", async (req, res) => {
  const data = await nodemailer.send(req.body);
  res.send(data);
});
