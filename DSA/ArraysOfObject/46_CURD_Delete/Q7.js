const users = [
  { id: 1, name: "Rahul", active: true },
  { id: 2, name: "Priya", active: true },
  { id: 3, name: "Amit", active: false },
  { id: 4, name: "Neha", active: true },
];



const user = users.filter(user => user.id !== 2);
console.log(user)



