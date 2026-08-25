const users = [
  {
    id: 101,
    name: "Rahul",
    email: "rahul@gmail.com",
    age: 22,
    city: "Pune",
    salary: 45000,
    active: true,
  },
  {
    id: 102,
    name: "Priya",
    email: "priya@gmail.com",
    age: 25,
    city: "Mumbai",
    salary: 60000,
    active: true,
  },
  {
    id: 103,
    name: "Amit",
    email: "amit@gmail.com",
    age: 19,
    city: "Nashik",
    salary: 50000,
    active: false,
  },
  {
    id: 104,
    name: "Neha",
    email: "neha@gmail.com",
    age: 28,
    city: "Pune",
    salary: 75000,
    active: true,
  },
];



// Find a user by email. If the user exists and is active, increase their salary by 10% and return the updated user. If they don't exist, return "User not found". If they are inactive, return "User is inactive".




function updatedSalaryByEmail(email) {
    const user = users.find((user) => user.email === email);
    if (!user) {
      console.log("User not found...");
    } else if (!user.active) {
      console.log("User is inactive...");
    } else {
        user.salary = user.salary + (user.salary * 10) / 100;
        console.log("Updated user ...")
        return user;
    }
};

const result = updatedSalaryByEmail("neha@gmail.com");
console.log(result)

