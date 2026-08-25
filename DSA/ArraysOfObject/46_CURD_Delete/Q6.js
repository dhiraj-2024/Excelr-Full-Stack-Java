const users = [
  {
    id: 101,
    name: "Rahul",
    city: "Pune",
    salary: 45000,
    active: true,
  },
  {
    id: 102,
    name: "Priya",
    city: "Mumbai",
    salary: 65000,
    active: true,
  },
  {
    id: 103,
    name: "Amit",
    city: "Pune",
    salary: 35000,
    active: false,
  },
  {
    id: 104,
    name: "Neha",
    city: "Pune",
    salary: 80000,
    active: true,
  },
  {
    id: 105,
    name: "Rohit",
    city: "Delhi",
    salary: 50000,
    active: false,
  },
];


// Delete all users whose salary is less than ₹50,000.

const usersAbove50k = users.filter((user) => user.salary > 50000);
console.log(usersAbove50k)