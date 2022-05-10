const express = require("express");
const app = express();
const port = 3000;

app.use(express.static("public"));
//app.use("/static", express.static(__dirname + "/public"));

app.use(function (err, req, res, next) {
  res.status(500).json({ statusCode: res.statusCode, errMessage: err.message }); // 상태코드, 에러 메시지 전달
});

app.get("/", function (req, res) {
  console.log(__dirname);
  res.sendFile(__dirname + "/html/index.html");
});

app.get("/about", function (req, res) {
  res.sendFile(__dirname + "/html/about.html");
});

app.get("/success", function (req, res) {
  res.json({ result: "success", name: "홍길동", mail: "test@test.com", phone: "010-1234-2233" });
});

app.get("/error", function (req, res) {
  throw new Error("에러 발생");
});

app.get("/error2", function (req, res, next) {
  next(new Error("에러 발생")); // next() 함수를 사용해서 에러 처리 핸들러로 에러 전달
});

app.listen(port, () => {
  console.log(`Server started. port ${port}.`);
});
