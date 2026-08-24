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
    id: 108,
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
    id: 105,
    name: "Neha",
    email: "neha@gmail.com",
    age: 28,
    city: "Pune",
    active: true,
  },
];



const newUser = {
  name: "Rohit",
  email: "rohit@gmail.com",
  age: 31,
  city: "Delhi",
  active: true,
};


let highId = users[0].id;
for (const user of users) {
    if (user.id > highId) {
        highId = user.id;
    }
}

let newid = highId + 1; 

newUser.id = newid;

users.push(newUser);
console.log(users)


