const users = [
  {
    id: 101,
    name: "Rahul",
    email: "rahul@gmail.com",
    salary: 45000,
    active: true,
    role: "user",
  },
  {
    id: 102,
    name: "Priya",
    email: "priya@gmail.com",
    salary: 60000,
    active: true,
    role: "admin",
  },
  {
    id: 103,
    name: "Amit",
    email: "amit@gmail.com",
    salary: 50000,
    active: false,
    role: "user",
  },
];

const updateData = {
  salary: 70000,
  role: "admin",
};

const currentUser = users.find((user) => user.id === 102);

function updateUser(email, updateData) {
  const user = users.find((user) => user.email === email);
  if (!user) {
    return "User not Found";
  }
  if (!user.active) {
    return "User is Inactive";
  }
  if (updateData.role && currentUser.role !== "admin") {
    return "You are not allowed to change role";
  }

  Object.assign(user, updateData);
  return user;
}

const result = updateUser("rahul@gmail.com", updateData);

console.log(result);
console.log(users);