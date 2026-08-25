const users = [
  {
    id: 101,
    name: "Rahul",
    email: "rahul@gmail.com",
    age: 22,
    city: "Pune",
    active: true,
  },
  {
    id: 102,
    name: "Priya",
    email: "priya@gmail.com",
    age: 25,
    city: "Mumbai",
    active: true,
  },
  {
    id: 103,
    name: "Amit",
    email: "amit@gmail.com",
    age: 19,
    city: "Nashik",
    active: false,
  },
  {
    id: 104,
    name: "Neha",
    email: "neha@gmail.com",
    age: 28,
    city: "Pune",
    active: true,
  },
];



// Delete the user whose email is "priya@gmail.com".

const index = users.findIndex((user) => user.email === "priya@gmail.com");
if (index !== -1) {
    users.splice(index, 1);
    console.log("User deleted successfylly...");
}



// manuall logic 
const result = [];
for (const user of users) {
    if (user.email !== "priya@gmail.com") {
        result.push(user);
    }
}
console.log(result)