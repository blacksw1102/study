const express = require("express");
const app = express();
const port = 3000;

app.listen(port, () => {
  console.log(`Server started. port ${port}`);
});

// 'b?'는 문자 'b'가 0개 또는 1개 있음을 의미
app.get("/ab?cd", function (req, res) {
  res.send("ab?cd");
});

// 'b+'는 문자 'b'가 1개 이상 있음을 의미
app.get("/ab+cd", function (req, res) {
  res.send("ab+cd");
});

// 클라이언트에서 요청한 라우트 겨올가 abcd, abxcd, abanycd, ab123cd 등과 일치한 경우
app.get("/ab*cd", function (req, res) {
  res.send("ab*cd");
});

// '(cd)?'는 'cd'가 0개 또는 1개 있음을 의미
app.get("/ab(cd)?e", function (req, res) {
  res.send("ab(cd)e");
});

// 클라이언트에서 요청한 라우트 경로에 'a'가 포함되어 있는 경우
app.get(/a/, function (req, res) {
  res.send("/a/");
});

// 클라이언트에서 요청한 라우트 경로가 'insert'로 시작하는 경우
app.get(/^insert/, function (req, res) {
  res.send("/^insert/");
});

app.get("/concat", function (req, res) {
  res.send("concat");
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

/** app.route()을 활용한 여러 라우트 메소드를 한 곳에서 처리 **/

app
  .route("/customer")
  .get((req, res) => {
    res.send("고객 정보 조회");
  })
  .post((req, res) => {
    res.send("신규 고객 추가");
  })
  .put(function (req, res) {
    res.send("고객 정보 수정");
  })
  .delete(function (req, res) {
    res.send("고객 정보 삭제");
  });
