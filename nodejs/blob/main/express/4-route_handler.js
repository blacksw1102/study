const express = require("express");
const app = express();
const port = 3000;

app.listen(port, () => {
  console.log(`Server started. port ${port}`);
});

/** next 오브젝트를 이용한 연속 라우트 처리 **/

app.get(
  "/example",
  (req, res, next) => {
    console.log("첫 번째 콜백 함수");
    next();
  },
  (req, res) => {
    res.send("두 번째 콜백 함수");
  }
);

/**  콜백 함수 배열을 이용한 라우트 처리 **/

const ex0 = function (req, res, next) {
  console.log("첫 번째 콜백 함수");
  next(); // 다음 콜백 함수 호출
};

const ex1 = function (req, res, next) {
  console.log("두 번째 콜백 함수");
  next(); // 다음 콜백 함수 호출
};

const ex2 = function (req, res) {
  res.send("세 번째 콜백 함수");
};

app.get("/examples", [ex0, ex1, ex2]);
