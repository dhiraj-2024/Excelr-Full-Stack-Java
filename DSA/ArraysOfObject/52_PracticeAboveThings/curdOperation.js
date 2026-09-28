const users = [
  { id: 1, name: "Rahul", age: 25, active: true },
  { id: 2, name: "Priya", age: 28, active: true },
  { id: 3, name: "Amit", age: 30, active: false },
];



const newUser = {
  id: 4,
  name: "Neha",
  age: 26,
  active: true,
};

console.log(users.map(user => user.name));
//* add new user
users.push(newUser);
console.log(users.map((user) => user.name));


//* Delete user with id 2
const index = users.findIndex(user => user.id === 2)
if (index !== -1) {
    users.splice(index,1)
    console.log("user deleted successfully...")
}

console.log(users.map((user) => user.name));
//! IN DELETE I HAVE CONFUSIONS 


//* update user id ; 1 whose name is rahul to suyog 

const indexx = users.find(user => user.id === 1)
if (indexx != -1) {
    indexx.name = "suyog";
};
console.log(users.map((user) => user.name));

