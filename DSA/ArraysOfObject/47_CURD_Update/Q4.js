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
    active: false,
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


const replacementUser = {
  id: 103,
  name: "Amit Kumar",
  email: "amitkumar@gmail.com",
  age: 21,
  city: "Aurangabad",
  active: true,
};



// replace object
const olduser = users.findIndex((user) => user.id === 103);

users[olduser] = replacementUser;

// console.log(users);


// toggle status change 

const userfind = users.find((user) => user.id === 102);
userfind.active = !userfind.active;

console.log(users)