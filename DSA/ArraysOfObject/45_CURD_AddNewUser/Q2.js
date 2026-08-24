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
];


const newUser = {
  id: 104,
  name: "Neha",
  email: "neha@gmail.com",
  age: 28,
  city: "Pune",
  active: true,
};


// method 1 
let found = false;
for (const user of users) {
    if (newUser.email === user.email) {
        found = true;
        break;
    }
};
if (!found) {
    users.push(newUser);
}

console.log(users);




