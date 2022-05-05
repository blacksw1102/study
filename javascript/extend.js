/** 부모 클래스 **/
function Vehicle(name, speed) {
  this.name = name;
  this.speed = speed;
}
Vehicle.prototype.drive = function () {
  console.log(this.name + " runs at " + this.speed);
};

var tico = new Vehicle("tico", 50);
tico.drive();

/** 자식 클래스1 (상속 받은 클래스) **/
function Sedan(name, speed, maxSpeed) {
  Vehicle.apply(this, arguments);
  this.maxSpeed = maxSpeed;
}
Sedan.prototype = Object.create(Vehicle.prototype);
Sedan.prototype.constructor = Sedan;
Sedan.prototype.boost = function () {
  console.log(this.name + " boosts its speed at " + this.maxSpeed);
};

var sonata = new Sedan("sonata", 100, 200);
sonata.drive();
sonata.boost();

/** 자식 클래스2 (상속 받은 클래스) **/
function Truck(name, speed, capacity) {
  Vehicle.apply(this.arguments);
  this.capacity = capacity;
}
Truck.prototype = Object.create(Vehicle.prototype);
Truck.prototype.constructor = Truck;
Truck.prototype.load = function (weight) {
  if (weight > this.capacity) {
    return console.log("무게초과로 짐 못실음");
  } else {
    return console.log("짐 실음");
  }
};
var bongo = new Truck("bongo", 40, 100);
bongo.drive();
bongo.load(80);
bongo.load(120);
