/** 전역에서의 this 확인 **/
console.log(this); // scope: window

/** 객체안에서의 this 확인 **/
var obj = {
  a: function () {
    console.log(this);
  },
};
obj.a(); // scope: obj

/** 함수의 객체를 밖으로 꺼내서 this 확인 **/
var a2 = obj.a;
a2(); // scope: obj2

/** 명시적으로 this를 바꾼 후, this 확인 **/
var obj2 = { c: "d" };

function b() {
  console.log(this);
}
b(); // scope: window
b.bind(obj2).call(); // scope: obj2
b.call(); // scope: obj2
b.apply(obj2); // scope: obj2

/** 생성자에서 this 확인 **/
function Person(name, age) {
  this.name = name;
  this.age = age;
}
Person.prototype.sayHi = function () {
  console.log(this.name, this.age);
};
Person("ZeroCho", 25); // scope: window
console.log(name, age); // scope: window

/** 생성자에서 this 확인 (전역 변수로 선언 방지) **/
var hero = new Person("Hero", 33); // scope: Person
hero.sayHi(); // scope: Person

/** (헷갈림 주의) 내부적으로 this 자동 변경 - click 이벤트 리스너 **/
document.body.onclick = function () {
  console.log(this); // scope: <body>
};

/** (헷갈림 주의) 내부적으로 this 자동 변경 - jQuery **/
$("div").on("click", function () {
  console.log(this); // scope: <div>
});

/** (헷갈림 주의) 내부적으로 this 변경 안하는 경우 - jQuery  **/
$("div").on("click", function () {
  console.log(this); // scope: <div>
  function inner() {
    console.log("inner", this); // scope: window
  }
  inner();
});

/** es6 화살표 함수 적용을 통해서 this 변경 안되는 현상 해결  **/
$("div").on("click", () => {
  console.log(this); // scope: <div>
  const inner = () => {
    console.log("inner", this); // scope: <div>
  };
  inner();
});
