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


// Manually through loops 1

// for (user of users) {
//     console.log(user.name)
// }


// Manually through loops 2
const names = [];
for (user of users) {
    names.push(user.name);
}
console.log(names)

// By using Method map()
const Names = users.map(user => user.name);
// console.log(Names) 