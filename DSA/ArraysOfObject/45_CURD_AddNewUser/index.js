const users = [
  {
    id: 101,
    name: "Rahul",
    email: "rahul@gmail.com",
    age: 22,
    city: "Pune",
    salary: 45000,
    active: true,
    deleted: false,
  },
  {
    id: 102,
    name: "Priya",
    email: "priya@gmail.com",
    age: 25,
    city: "Mumbai",
    salary: 60000,
    active: true,
    deleted: false,
  },
  {
    id: 103,
    name: "Amit",
    email: "amit@gmail.com",
    age: 19,
    city: "Nashik",
    salary: 35000,
    active: false,
    deleted: false,
  },
  {
    id: 104,
    name: "Neha",
    email: "neha@gmail.com",
    age: 28,
    city: "Pune",
    salary: 75000,
    active: true,
    deleted: false,
  },
];



const newUser = {
  id: 105,
  name: "Rohit",
  email: "rohit@gmail.com",
  age: 31,
  city: "Delhi",
  salary: 55000,
  active: true,
  deleted: false,
};



// Add New user  1

users.push(newUser);
console.log(users)



