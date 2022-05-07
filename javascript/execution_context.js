/** ex 코드 실행 순서 **/
console.log("*******************");
console.log("ex 코드 실행 순서");
var name = "zero";

function wow(word) {
  console.log(word + " " + name);
}

function say() {
  var name = "nero";
  console.log(name);
  wow("hello");
}

say();

/** ex 호이스팅 **/
console.log("*******************");
console.log("ex 호이스팅");
console.log(zero);
sayWow();

function sayWow() {
  console.log("wow");
}
var zero = "zero";

/** ex 클로저 1 **/
console.log("*******************");
console.log("ex 클로저 1");
var makeClosure = function () {
  var name = "zero";
  return function () {
    console.log(name);
  };
};

var closure = makeClosure();
closure();

/** ex 클로저 2 **/
console.log("*******************");
console.log("ex 클로저 2");
var counter = function () {
  var count = 0;

  function changeCount(number) {
    count += number;
  }

  return {
    increase: function () {
      changeCount(1);
    },
    decrease: function () {
      changeCount(-1);
    },
    show: function () {
      console.log(count);
    },
  };
};

var counterClousre = counter();
counterClousre.increase();
counterClousre.show();
counterClousre.decrease();
counterClousre.show();

/** ex IIFE를 적용한 클로저 사용 **/
console.log("*******************");
console.log("ex IIFE를 적용한 클로저 사용");
var arr = [];
for (var i = 0; i < 5; i++) {
  arr[i] = (function () {
    return i;
  })(i);
}

for (var i = 0; i < 5; i++) {
  console.log(arr[i]);
}
