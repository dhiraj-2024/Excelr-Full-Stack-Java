function greet(user,callback1,callback2){
    console.log(`hello ${user}`);
    callback1(user);
    callback2(user);
};

function askquetion(person){
    console.log(`how are you ${person} ?`)
};

function saybye(user){
    console.log(`see you later ${user}`)
};


greet("dhiraj",askquetion,saybye);
greet("pramod",askquetion,saybye);
greet("pandu",askquetion,saybye);






function myDisplayer(some) {
console.log(`this is two numbers sum : ${some}`)
}

function myCalculator(num1, num2, myCallback) {
  let sum = num1 + num2;
  myCallback(sum);
}

myCalculator(5, 5, myDisplayer);

// callback functions meanse we pass other functions as a parameter in the parent function and execute it 



