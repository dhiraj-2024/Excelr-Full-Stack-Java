const users = [
  {
    id: 101,
    name: "Rahul",
    email: "rahul@gmail.com",
    city: "Pune",
    active: true,
  },
  {
    id: 102,
    name: "Priya",
    email: "priya@gmail.com",
    city: "Mumbai",
    active: true,
  },
  {
    id: 103,
    name: "Amit",
    email: "amit@gmail.com",
    city: "Pune",
    active: false,
  },
  {
    id: 104,
    name: "Neha",
    email: "neha@gmail.com",
    city: "Pune",
    active: true,
  },
  {
    id: 105,
    name: "Rohit",
    email: "rohit@gmail.com",
    city: "Delhi",
    active: false,
  },
];



// Delete ALL users whose city is "Pune".

// using filter method 
const userswithoutpune = users.filter((user) => user.city !== "Pune");
// console.log(userswithoutpune)


const result = [];
for (const user of users) {
    if (user.city !== "Pune") {
        result.push(user);
    }
};
console.log(result);