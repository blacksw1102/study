/** ex 생성자 함수 **/
/*
function Person(name, gender) {
  this.name = name;
  this.gender = gender;
  this.sayHello = function () {
    console.log(this.name + ' said "hello"');
  };
}
*/

/** ex 생성자 함수 - prototype 적용 **/
function Person(name, gender) {
  this.name = name;
  this.gender = gender;
}
Person.prototype.sayHello = function () {
  console.log(this.name + ' said "hello"');
};

var zero = new Person("Zero", "m");
var hero = new Person("Hero", "f");
zero.sayHello();
hero.sayHello();
console.log(zero);
