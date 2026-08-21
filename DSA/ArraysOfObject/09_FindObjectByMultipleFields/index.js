const users = [
  {
    id: 101,
    username: "rahul123",
    name: "Rahul",
    age: 22,
    city: "Pune",
    active: true,
  },
  {
    id: 102,
    username: "priya25",
    name: "Priya",
    age: 25,
    city: "Mumbai",
    active: true,
  },
  {
    id: 103,
    username: "amit19",
    name: "Amit",
    age: 19,
    city: "Nashik",
    active: false,
  },
  {
    id: 104,
    username: "neha28",
    name: "Neha",
    age: 28,
    city: "Pune",
    active: true,
  },
  {
    id: 105,
    username: "rohit31",
    name: "Rohit",
    age: 31,
    city: "Delhi",
    active: false,
  },
];

// Find the user where both conditions are true:

// city = "Pune"
// AND
// active = true


// manually find all object with multiple fields conditions : 

for (const user of users) {
    if (user.city == "Pune" && user.active === true) {
        console.log(user);
    }
}



// usgin method for finding one object : 
const userss = users.find(user => user.city === "Pune" && user.active === true);
console.log(userss);