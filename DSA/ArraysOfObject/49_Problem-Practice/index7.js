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
];


const updateData = {
  name: "Rahul Sharma",
  age: 25,
  city: "Mumbai",
};

const email = "rahul@gmail.com";

function updatedUser(email,updateData) {
    const user = users.find(user => user.email === email)
    if (!user) {
        return "User not Found";
    }
    if (!user.active) {
        return "User is Inactive";
    }
    // const updateuser =  {
    //     ...user,
    //     ...updateData
    // }
    // return updateuser;
    return Object.assign(user, updateData);

}


const result = updatedUser(email, updateData);
// console.log(result)

console.log(users)