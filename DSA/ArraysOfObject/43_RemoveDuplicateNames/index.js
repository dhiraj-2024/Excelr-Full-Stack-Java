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
    name: "Rahul",
    email: "rahul123@gmail.com",
    city: "Delhi",
  },
  {
    id: 105,
    name: "Neha",
    email: "neha@gmail.com",
    city: "Pune",
  },
  {
    id: 106,
    name: "Priya",
    email: "priya123@gmail.com",
    city: "Mumbai",
  },
];


// method 1

const result = [];
const duplicateNames = [];
for (const user of users) {
    let duplicate = false;
    for (const existingUser of result) {
        if (existingUser.name === user.name) {
            duplicate = true;
            duplicateNames.push(user.name);
            break;
        }
    }

    if (!duplicate) {
        result.push(user);
    }
}

console.log(result)
console.log(duplicateNames)