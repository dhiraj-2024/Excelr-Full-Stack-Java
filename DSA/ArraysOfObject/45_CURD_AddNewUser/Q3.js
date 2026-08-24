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



let existinguser = false;
for (const user of users) {
    if (user.id === newUser.id || user.email === newUser.email) {
        existinguser = true;
        break;
    }
}

if (!existinguser) {
    users.push(newUser);
}

console.log(users)