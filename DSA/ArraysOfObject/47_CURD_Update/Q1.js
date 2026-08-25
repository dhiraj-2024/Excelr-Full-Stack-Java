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


// Update user with id = 103.
// Change:
// city: "Nashik"
// to:
// city: "Pune"


const user = users.find((user) => user.id === 103);
if (user) {
    user.city = "Pune";
    console.log("User Updated Successfully" + " " + user.name)
} else {
    console.log("User Not Found");
}



for (const user of users) {
    if (user.id === 103) {
        user.city = "Pune";
        console.log("User Updated Successfully" + " " + user.name);
        break;
    } else {
        console.log("User Not Found");
    }
}
