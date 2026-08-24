const users = [
  {
    id: 101,
    name: "Rahul",
    email: "rahul@gmail.com",
    age: 22,
    city: "Pune",
    active: true,
    role: "user",
  },
  {
    id: 102,
    name: "Priya",
    email: "priya@gmail.com",
    age: 25,
    city: "Mumbai",
    active: true,
    role: "user",
  },
  {
    id: 103,
    name: "Amit",
    email: "amit@gmail.com",
    age: 19,
    city: "Nashik",
    active: false,
    role: "user",
  },
];


const newUser = {
  name: "Neha",
  email: "neha@gmail.com",
  age: 28,
  city: "Pune",
};



let highId = users[0].id;
for (const user of users) {
  if (user.id > highId) {
    highId = user.id;
  }
}

let newid = highId + 1; 


const FinalNewUser = {
    id: newid,
    ...newUser,
    active: true,
    role:'user',
}


users.push(FinalNewUser);

console.log(users);