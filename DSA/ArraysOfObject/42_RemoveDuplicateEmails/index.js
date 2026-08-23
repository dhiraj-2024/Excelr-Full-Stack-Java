const users = [
  {
    id: 101,
    name: "Rahul",
    email: "rahul@gmail.com",
    city: "Pune",
  },
  {
    id: 102,
    name: "Priya",
    email: "priya@gmail.com",
    city: "Mumbai",
  },
  {
    id: 103,
    name: "Amit",
    email: "amit@gmail.com",
    city: "Nashik",
  },
  {
    id: 104,
    name: "Neha",
    email: "rahul@gmail.com",
    city: "Pune",
  },
  {
    id: 105,
    name: "Rohit",
    email: "rohit@gmail.com",
    city: "Delhi",
  },
  {
    id: 106,
    name: "Sneha",
    email: "priya@gmail.com",
    city: "Mumbai",
  },
];


// method 1 

const result = [];
for (const user of users) {
    let duplicate = false;
    for (const existinguser of result) {
        if (existinguser.email === user.email) {
            duplicate = true;
            break;
        }
    }

    if (!duplicate) {
        result.push(user);
    }
};

// console.log(result);



// method 2

const seen = new Set();
const res = [];
const duplicatemails = [];
for (const user of users) {
    if (!seen.has(user.email)) {
        seen.add(user.email);
        res.push(user);
    } else {
        duplicatemails.push(user.email);
    }
};
// console.log(res);
console.log(duplicatemails);