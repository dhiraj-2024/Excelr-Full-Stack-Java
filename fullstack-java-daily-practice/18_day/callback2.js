function greet(user, cal1, cal2) {
  console.log(`hello ${user}`);
  cal1(user);
  cal2(user);
}

function cal1(user) {
  console.log(`how are you ${user}`);
}

function cal2(user) {
  console.log(` bye bye  ${user}`);
}

const result = greet("dhiraj",cal1,cal2);

console.log(result);


// sum of two numbers 

function displySum(num1, num2, add){
    console.log("sum of the numbers are : ")
    add(num1, num2);
}

function add(n, m) {
    console.log(n + m);

}

let output = displySum(10, 12, add);
console.log(output)