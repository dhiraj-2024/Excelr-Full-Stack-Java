console.log(a);

var a = 10;

function a() {
  console.log("Hello");
}

console.log(a);

for (var i = 0; i < 3; i++) {
  // setTimeout(() => {
  //     console.log(i)
  // },1000)
  console.log(i);
}

function outer() {
  let count = 0;
  return function () {
    count++;
    return count;
  };
}

const incriment = outer();
console.log(incriment());
console.log(incriment());
console.log(incriment());


console.log("next")
function outer() {
  let count = 0;

  return function inner() {
    count++;
    console.log(count);
  };
}

const fn1 = outer();
const fn2 = outer();

fn1();
fn1();
fn2();
fn1();
fn2();