console.log("hello how are you");

// for (let i = 0; i < 10; i++){
//     console.log(i)
// }

function add(num1, num2) {
  return num1 + num2;
}

console.log(add(2, 5));

const double = function (num) {
  return 2 * num;
};

console.log(double(5));

const greet = (name) => {
  console.log(`hello good morning ${name}`);
};

console.log(greet("dhiraj"));

// closures
function counter() {
  let count = 0;
  return function () {
    count++;
    console.log(count);
  };
}

const result = counter();

result();
// result();
// result()

// higher order function

const multiplier = function (arg) {
  return function (num) {
    return num * arg;
  };
};

let resultt = multiplier(6)(6);
console.log(resultt);

// this keyword

const user = {
  name: "dhiraj",
  age: 23,
  greet(name) {
    console.log(`hello ${this.name}`);
  },
};

// user.greet()

// prototype and prototype chaining

class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  greet() {
    console.log(`hello ${this.name}`);
  }
}

class Admin extends User {
  constructor(name, age, city) {
    super(name, age);
    this.city = city;
  }
}

const u1 = new Admin("Dhiraj", 23, "Nashik");
u1.greet();
console.log(u1.city);

// promises

function fetchUserId(id) {
  const url = `https://typicode.com{userId}`;

  return fetch(url).then((response) => {
    if (!response.ok) {
      throw new Error(`user not found Status code : ${response.status}`);
    }
    return response.json();
  });
}

// array

const arr = [1, 2, 3, 3, 7, 4, 5, 23, 7, 88, 34];

// reverse the array

const reverseArr = arr.toReversed();
console.log(`Reverse array using method ${reverseArr}`);
console.log(arr);

const rever = [];
for (let i = arr.length - 1; i >= 0; i--) [rever.push(arr[i])];
console.log(rever);

// find larges number

const largenum = Math.max(...arr);
console.log(`largest number is : ${largenum}`);

let largeNum = arr[0];
for (let i = 1; i <= arr.length; i++) {
  if (arr[i] > largeNum) {
    largeNum = arr[i];
  }
}
console.log(largeNum);

// remove duplicate

let removeDuplicate = [...new Set(arr)];
console.log(removeDuplicate);

// even numbers

let even = [];
for (let i = 1; i < arr.length; i++) {
  if (arr[i] % 2 === 0) {
    even.push(arr[i]);
  }
}

console.log(even);

// object

const person = {
  name: "dhiraj",
  age: 23,
  city: "Nashik",
};

person.role = "admin";

const key = Object.keys(person);
console.log(key);

const val = Object.values(person);
console.log(val);

const entries = Object.entries(person);
console.log(entries);

// string

const str = "Javascript";
let revs = "";
// manually
for (let i = str.length - 1; i >= 0; i--) {
  revs += str[i];
}
console.log(revs);

// using function
// function revStr(str) {
//   return str.split("").reverse().join("");
// }

// console.log(revStr("hello"));
// console.log(revStr("Javascript"));

// palindromic check

function revStr(str) {
    let revrsed = str.split("").reverse().join("");
    if (str === revrsed) {
      return  console.log("the given string is palindromic")
    }
    return console.log("not palindromic")
}

revStr("hello")