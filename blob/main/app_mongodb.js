const express = require("express");
const mongodb = require("./mongoose");
const Customer = require("./mongoose/schemas/customer");
const app = express();

// request body를 json으로 파싱 처리
app.use(
  express.json({
    limit: "50mb",
  })
);

mongodb.connect();

app.listen(3000, () => {
  console.log("Server started. port 3000.");
});

app.get("/customers", async (req, res) => {
  console.log(req.body);
  const result = await Customer.find();
  res.send(result);

  // # Model find()
  // await MyModel.find({}); // 전체 문서 모두 조회
  // await MyModel.find({ name : 'john', age : { $gte : 18 } }).exec(); // name이 john이고 age가 18보다 큰 문서 조회
  // MyModel.find({ name : 'john', age : { %gte : 18 } }, function(err, docs) {}); // 문서 조회 결과를 콜백 함수로 처리
  // await MyModel.find({ name : /john/i }, 'name email').exec(); // name에 john이 포함되면, 문서에서 name 및 email 필드를 조회
  // await MyModel.find({ name : /john/i }, null, { skip : 10 }).exec(); // name에 john이 포함되면, 첫 10개의 데이터를 생략하고 11번째부터 문서를 조회

  // # Model.findById()
  // await MyModel.findById(id).exec(); // 주어진 id 값에 해당하는 문서 한 건 조회
  // MyModel.findById(id, function(err, doc) {}); // 쿼리 결과를 콜백 함수로 전달
  // await MyModel.findById(id, 'name email').exec(); // 주어진 id 값에 해당하는 문서에서 name 및 email 필드를 조회

  // # Model.findOne()
  // await MyModel.findOne({ name : "John" }).exec(); // name이 John인 문서 한 건만 조회
  // MyModel.findOne({ name : 'John' }, function(err, doc) {}); // 쿼리 결과를 콜백 함수로 전달
  // await MyModel.findOne({ name : 'John' }, 'name email').exec(); // name이 John인 문서의 name 및 email 조회
});

app.post("/customer", async (req, res) => {
  console.log(req.body);
  const result = await Customer.create(req.body);
  res.send(result);
});

app.put("/customer", async (req, res) => {
  console.log(req.body);
  const result = await Customer.updateMany({ name: /Customer/ }, { phone: "010-7777-5555" });
  // await Customer.updateOne({ name: 'Jeremy Go' }, { phone: '010-7777-5555' });
  res.send(result);
});

app.delete("/customer", async (req, res) => {
  console.log(req.body);
  const result = await Customer.deleteMany({ name: /John/ });
  // await Customer.deleteOne({ name: 'Jeremy Go' });
  res.send(result);
});
