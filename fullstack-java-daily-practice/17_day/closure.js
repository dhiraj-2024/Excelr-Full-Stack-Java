console.log("hello");

let count = 0;
const add = (function () {
  if (count === 0) {
    count += 1;
    console.log(`outer function count : ${count}`);
  }
  return function () {
    count += 1;
    console.log(`inner function count : ${count}`);
  };
})();

add();
add();
add();

function makeCounter() {
  let count = 0; // private variable
  return function () {
    count++;
    return count;
  };
}
const counter = makeCounter();
counter(); // 1
counter(); // 2
counter(); // 3
// 'count' is NOT accessible from outside — private!


for (var i = 0; i < 5; i++) {
  setTimeout(function() {
    console.log(i); // prints 5, 5, 5, 5, 5
  }, 100);
}


// FIX 1 — use let (block-scoped, new i each iteration)
for (let i = 0; i < 5; i++) {
  setTimeout(function() {
    console.log(i); // prints 0, 1, 2, 3, 4 ✓
  }, 100);
}