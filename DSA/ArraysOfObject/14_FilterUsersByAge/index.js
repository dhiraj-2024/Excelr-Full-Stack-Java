const users = [
  {
    id: 101,
    username: "rahul123",
    name: "Rahul",
    age: 22,
    city: "Pune",
    salary: 45000,
    active: true,
  },
  {
    id: 102,
    username: "priya25",
    name: "Priya",
    age: 25,
    city: "Mumbai",
    salary: 60000,
    active: true,
  },
  {
    id: 103,
    username: "amit19",
    name: "Amit",
    age: 19,
    city: "Nashik",
    salary: 35000,
    active: false,
  },
  {
    id: 104,
    username: "neha28",
    name: "Neha",
    age: 28,
    city: "Pune",
    salary: 75000,
    active: true,
  },
  {
    id: 105,
    username: "rohit31",
    name: "Rohit",
    age: 31,
    city: "Delhi",
    salary: 55000,
    active: false,
  },
];


for (const user of users) {
    if (user.age > 18) {
        console.log(user);
    }
}



// using filter methods

const above25 = users.filter(user => user.age > 25);
// console.log(above25)