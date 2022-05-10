const express = require("express");
const app = express();
const port = 3000;

app.listen(port, () => {
  console.log(`Server started. port ${port}`);
});

app.get("/customer", function (req, res) {
  res.send("get 요청에 대한 응답");
});

app.post("/customer", function (req, res) {
  res.send("post 요청에 대한 응답");
});

// HTTP 메소드에 상관없이 요청 받음
app.all("/customer", function (req, res) {
  res.send("HTTP 요청 메소드 종류에 상관없이 응답");
});
