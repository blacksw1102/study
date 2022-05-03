const express = require("express");
const app = express();
const port = 3003;

app.listen(port, () => {
  console.log(`Server3 started. port ${port}.`);
});

setInterval(function () {
  console.log(new Date() + "app3.js에서 로그 날림..!");
}, 1000);
