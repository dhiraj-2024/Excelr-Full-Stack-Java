const users = [
  {
    id: 101,
    name: "Rahul",
    email: "rahul@gmail.com",
    age: 22,
    city: "Pune",
    active: true,
  },
  {
    id: 102,
    name: "Priya",
    email: "priya@gmail.com",
    age: 25,
    city: "Mumbai",
    active: true,
  },
];



const newUser = {
  id: 103,
  name: "Amit",
  email: "amitgmail.com",
  age: 24,
  city: "Nashik",
};

// const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
// let isvalid = emailRegex.test(newUser.email);

// if (isvalid) {
//     users.push(newUser);
// }


if (newUser.email.includes("@")) {
    users.push(newUser);

}
// console.log(users)

let newDate = new Date();

console.log(newDate);


