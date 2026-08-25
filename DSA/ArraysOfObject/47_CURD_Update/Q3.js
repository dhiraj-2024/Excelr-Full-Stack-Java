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



// Update user 103.
// Change three fields:
// name   → "Amit Kumar"
// age    → 21
// city   → "Aurangabad"

const user = users.find((u) => u.id === 103);
if (user) {
    user.name = "Amit Kumar";
    user.age = 21;
    user.city = "Aurangabad";
    console.log("user updated successfully...");
}

// console.log(users)




const updatedDatauser = {
    name : "Amit Kumar",
    age :21,
    city :"Aurangabad",
}


