// 일반적인 로그
console.log("hello world");

console.log("hello %s", "world");

const world = "world";
console.log(`hello ${world}`);

console.error(new Error("에러 메시지 출력"));

// 테이블 형태로 배열/오브젝트 데이터 출력
const arr = [
  {
    name: "John Doe",
    email: "john@mail.com",
  },
  {
    name: "Jeremy Go",
    email: "jeremy@mail.com",
  },
];

console.table(arr);

// 출력할 오브젝트의 depth(깊이) 및 색상 적용
const obj = {
  students: {
    grade1: { class1: {}, class2: {} },
    grade2: { class1: {}, class2: {} },
    teachers: ["John Doe", "Jeremy Go"],
  },
};
console.dir(obj, { depth: 1, color: true });
console.dir(obj, { depth: 2, color: true });

// 실행 시간 측정
console.time("time for for-loop");

for (let i = 0; i < 9999999; i++) {}

console.timeEnd("time for for-loop");
