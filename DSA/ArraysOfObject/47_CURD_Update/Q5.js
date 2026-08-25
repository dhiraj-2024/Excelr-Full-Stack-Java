const users = [
  {
    id: 101,
    name: "Rahul",
    email: "rahul@gmail.com",
    active: true,
    deleted: false,
  },
  {
    id: 102,
    name: "Priya",
    email: "priya@gmail.com",
    active: false,
    deleted: false,
  },
  {
    id: 103,
    name: "Amit",
    email: "amit@gmail.com",
    active: true,
    deleted: false,
  },
  {
    id: 104,
    name: "Neha",
    email: "neha@gmail.com",
    active: false,
    deleted: false,
  },
];



const user = users.find((user) => user.id === 102);

if (user) {
    user.deleted = !user.deleted
}