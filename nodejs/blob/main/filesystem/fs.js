const fs = require("fs");

// 비동기 파일 읽기
fs.readFile("./resource/text.txt", "utf8", (err, data) => {
  if (err) {
    throw err;
  }
  console.log("비동기 file read => ", data);
});

// 동기 파일 읽기
var text = fs.readFileSync("./resource/text.txt", "utf8");
console.log("동기 file read => ", text);

// 비동기 파일 쓰기
let data = "파일 쓰기 텍스트 abc 123 !@#!$   ";

fs.writeFile("./resource/test_w_txt", data, "utf8", (err) => {
  if (err) {
    throw err;
  }
  console.log("비동기 파일 쓰기 완료");
});

// 동기 파일 쓰기
fs.writeFileSync("./resource/test_w2.txt", data, "utf8", (err) => {
  if (err) {
    throw err;
  }
  console.log("동기 파일 쓰기 완료");
});

// 파일 변경 사항 여부 감시
fs.watchFile("./resource/watch_w.txt", (curr, prev) => {
  console.log("파일이 수정됬어요..!");
  //delete require.cache[require.resolve("./resource/watch_w.txt")];
  //sql = require("./resource/watch_w.txt");
});
