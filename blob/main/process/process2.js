const { nextTick } = require("process");

console.log("start");

setTimeout(() => {
  console.log("timeout callback");
}, 0);

nextTick(() => {
  console.log("nextTick callback");
});

console.log("end");
