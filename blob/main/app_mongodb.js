const express = require("express");
const mongodb = require("./mongoose");

const app = express();

mongodb.connect();

app.listen(3000, () => {
  console.log("Server started. port 3000.");
});

app.get("/customers", async (req, res) => {});
