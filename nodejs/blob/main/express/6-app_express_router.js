const express = require("express");
const customerRoute = require("./routes/customer");
const productRoute = require("./routes/product");
const app = express();
const port = 3000;

app.use(
  express.json({
    limit: "50mb",
  })
);

app.listen(port, () => {
  console.log(`Server started. port ${port}.`);
});

app.use("/customer", customerRoute); // customer 라우트를 추가하고 기본 경로로 /customer 사용
app.use("/product", productRoute); // product 라우트를 추가하고 기본 경로로 /product 사용
