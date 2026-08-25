const users = [
  {
    id: 101,
    name: "Rahul",
    city: "Pune",
  },
  {
    id: 102,
    name: "Priya",
    city: "Mumbai",
  },
  {
    id: 103,
    name: "Amit",
    city: "Pune",
  },
  {
    id: 104,
    name: "Neha",
    city: "Nashik",
  },
  {
    id: 105,
    name: "Rohit",
    city: "Mumbai",
  },
];



// Group the users by city.
const group = {};
const data = users.filter((user) => {
    if (!group[user.city]) {
        group[user.city] = [];
    }
    group[user.city].push(user);
})

// console.log(group)



const groups = {};

for (const user of users) {
    let key = user.city;
    if (!groups[key]) {
        groups[key] = [];
    }
    groups[key].push(user);
}

console.log(groups);