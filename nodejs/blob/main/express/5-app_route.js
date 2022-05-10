const express = require("express");
const app = express();
const port = 3000;

app.listen(port, () => {
  console.log(`Server started. port ${port}`);
});

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
