/** ex 내부함수에서 외부함수의 프로퍼티 참조 **/

// 외부함수
let outter = (function () {
  var title = "coding everyday";

  // 내부함수
  return {
    inner: function () {
      console.log(title);
    },
  };
})();

outter.inner();

/** ex 외부함수 프로퍼티에 대한 private 접근제어 **/
function factory_movie(title) {
  return {
    get_title: function () {
      return title;
    },
    set_title: function (_title) {
      title = _title;
    },
  };
}

ghost = factory_movie("Ghost in the shell");
matrix = factory_movie("Matrix");
console.log(ghost.get_title());
console.log(matrix.get_title());

ghost.set_title("Spider man");
console.log(ghost.get_title());
console.log(matrix.get_title());

/** ex 함수가 외부변수를 참조하지 못하는 경우  **/
var arr = [];
for (var i = 0; i < 5; i++) {
  arr[i] = function () {
    console.log(i);
  };
}

for (var index in arr) {
  console.log(arr[index]());
}

/** ex 외부함수-내부함수 구조를 형성해서 함수가 외부변수를 참조가능하도록 변경 **/

var arr = [];
for (var i = 0; i < 5; i++) {
  arr[i] = (function (id) {
    return function () {
      return id;
    };
  })(i);
}

for (var index in arr) {
  console.log(arr[index]());
}
