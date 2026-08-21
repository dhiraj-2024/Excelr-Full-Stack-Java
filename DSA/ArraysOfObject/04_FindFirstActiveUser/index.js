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


// Find First Active user 

// Manually code 

for (let i = 0; i < users.length; i++){
    if (users[i].active === true) {
        console.log(users[i]);
        break;
    }
}

// Using methods

const FirstActiveUser = users.find(user => user.active === true);
console.log(FirstActiveUser);