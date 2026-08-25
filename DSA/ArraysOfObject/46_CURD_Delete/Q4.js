const users = [
  {
    id: 101,
    name: "Rahul",
    city: "Pune",
    active: true,
  },
  {
    id: 102,
    name: "Priya",
    city: "Mumbai",
    active: false,
  },
  {
    id: 103,
    name: "Amit",
    city: "Pune",
    active: false,
  },
  {
    id: 104,
    name: "Neha",
    city: "Nashik",
    active: true,
  },
  {
    id: 105,
    name: "Rohit",
    city: "Delhi",
    active: false,
  },
];


// Delete all inactive users.


// using methods filter
const deleteInactive = users.filter((user) => user.active !== false);
console.log(deleteInactive)


// using the manuall logic 

const result = [];
for (const user of users) {
    if (user.active !== false) {
        result.push(user);
    }
}
console.log(result)