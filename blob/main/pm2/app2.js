const express = require("express");
const app = express();
const port = 3002;

app.listen(port, () => {
  console.log(`Server started. port ${port}.`);
});

setInterval(function () {
  console.log(new Date() + "app2.js에서 로그 날림..!");
}, 1000);
