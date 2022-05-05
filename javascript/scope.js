/*** ex 스코프 체인 ***/
var x = "global";

function ex() {
  x = "change";
}

ex();
console.log(x);

/*** ex 스코프 체인 ***/
var name = "zero";

function outer() {
  console.log("외부", name);

  function inner() {
    var enemy = "nero";
    console.log("내부", name);
  }

  inner();
}

outer();

/*** ex 네임스페이스 ***/
var obj = {
  x: "local",
  y: function () {
    console.log(this.x);
  },
};

obj.y();

/*** ex 네임스페이스 (지역변수 수정 방지) ***/
var another = function () {
  var x = "local";

  function y() {
    console.log(x);
  }

  return { y: y };
};

var newScope = another();
newScope.y();

/*** ex 네임스페이스 (IIFE 적용) ***/
var newScope = (function () {
  var x = "local";
  return {
    y: function () {
      console.log(x);
    },
  };
})();
newScope.y();
