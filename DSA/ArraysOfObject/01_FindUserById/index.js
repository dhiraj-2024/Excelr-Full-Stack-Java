const users = [
  {
    id: 101,
    name: "Rahul",
    age: 22,
    city: "Pune",
    salary: 45000,
    active: true,
  },
  {
    id: 102,
    name: "Priya",
    age: 25,
    city: "Mumbai",
    salary: 60000,
    active: true,
  },
  {
    id: 103,
    name: "Amit",
    age: 19,
    city: "Nashik",
    salary: 35000,
    active: false,
  },
  {
    id: 104,
    name: "Neha",
    age: 28,
    city: "Pune",
    salary: 75000,
    active: true,
  },
  {
    id: 105,
    name: "Rohit",
    age: 31,
    city: "Delhi",
    salary: 55000,
    active: false,
  },
];


// Find the user whose ID is 103.

// const user = users.find(user => user.id === 103);
// console.log(user)

for (let i = 0; i < users.length; i++) {
    if (users[i].id === 104) {
        console.log(users[i])
    }
}