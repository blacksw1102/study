const { delimiter } = require("path");
const path = require("path");

// path.basename(path[,ext])
console.log(__filename); // 현재 파일의 절대 경로
console.log(path.basename(__filename)); // 경로의 마지막 부분
console.log(path.basename(__filename, ".js")); // 경로의 마지막 부분에서 확장자를 제거한 이름
console.dir(path.delimiter); // 환경 변수 구분자

// path.delimiter
console.log(process.env.PATH); // 환경변수 설정정보
console.table(process.env.PATH.split(path.delimiter));

// path.dirname(path)
console.log(__filename); // 현재 파일의 절대 경로
console.log(path.dirname(__filename)); // 현재 파일이 위치한 디렉토리 경로

// path.extname(path)
console.log(path.extname("index.html"));

// path.format(pathObject)
console.log(
  path.format({
    root: "/ignored", // dir 값이 있으므로 root 무시됨
    dir: "/home/user/dir",
    base: "file.txt",
  })
);

console.log(
  path.format({
    root: "/",
    base: "file.txt",
    ext: "ignored", // base 값이 있으므로 ext는 무시됨
  })
);

console.log(
  path.format({
    root: "/",
    name: "file",
    ext: ".txt",
  })
);

// path.join([...paths])
console.log(path.join("/foo", "bar", "baz/asdf"));

// path.parse(path)
console.log(path.parse("/home/user/dir/file.txt"));

// path.sep
console.log(path.sep);
console.log("foo\\bar\\baz".split(path.sep));
