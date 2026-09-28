const users = [
  { id: 1, name: "Rahul", active: true },
  { id: 2, name: "Priya", active: true },
  { id: 3, name: "Amit", active: false },
  { id: 4, name: "Neha", active: true },
];



const updateage = users.map((user) => {
    if (user.name === "Amit") {
        return {
            ...user,
            age: 31
        }
    }
    return user;
});
console.log(updateage)



const toggleuser = users.map(user => {
    if (user.id === 3) {
        return {
            ...user,
            active : !user.active
        }
    }
    return user;
})

console.log(toggleuser)


// soft delete 

