const url = require("url");
const myUrl = "https://user:pass@sub.example.com:8080/p/a/t/h?name=tom&age=23#hash";

console.table(url.parse(myUrl, true));
console.table(url.parse(myUrl, true).query);
