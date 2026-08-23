
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
    id: 101,
    name: "Rahul",
    email: "rahul@gmail.com",
    city: "Pune",
  },
  {
    id: 103,
    name: "Amit",
    email: "amit@gmail.com",
    city: "Nashik",
  },
  {
    id: 102,
    name: "Priya",
    email: "priya@gmail.com",
    city: "Mumbai",
  },
];


// method 1 :
const result = [];
for (const user of users) {
    let duplicate = false;

    for (const existingUser of result) {
        if (existingUser.id === user.id) {
            duplicate = true;
            break;
        }
    }
    if (!duplicate) {
        result.push(user);
    }
}
console.log(result);

const res = [];
// method 2:
const seen = new Set();
for (const user of users) {
    if (!seen.has(user.id)) {
        seen.add(user.id)
        res.push(user);
    }
}

console.log(res)