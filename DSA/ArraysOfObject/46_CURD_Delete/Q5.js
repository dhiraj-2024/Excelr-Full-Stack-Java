const users = [
  {
    id: 101,
    name: "Rahul",
    city: "Pune",
    age: 22,
    active: true,
  },
  {
    id: 102,
    name: "Priya",
    city: "Mumbai",
    age: 25,
    active: false,
  },
  {
    id: 103,
    name: "Amit",
    city: "Pune",
    age: 19,
    active: false,
  },
  {
    id: 104,
    name: "Neha",
    city: "Pune",
    age: 28,
    active: true,
  },
  {
    id: 105,
    name: "Rohit",
    city: "Delhi",
    age: 31,
    active: true,
  },
];


// Delete all users who are BOTH inactive AND from Pune.

const deletePuneUsers = users.filter((user) => !(user.active === false && user.city === "Pune"));
// console.log(deletePuneUsers)


// manuall code logic 
const result = [];
for (const user of users) {
    if (!(user.active === false && user.city === "Pune")) {
        result.push(user);
    }
}
console.log(result)