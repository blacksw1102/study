const express = require("express");
const app = express();
const port = 3001;

app.listen(port, () => {
  console.log(`Server started. port ${port}.`);
});

setInterval(function () {
  console.log(new Date() + "app1.js에서 로그 날림..!");
}, 1000);
