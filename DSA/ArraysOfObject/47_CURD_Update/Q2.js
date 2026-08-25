const employees = [
  {
    id: 201,
    firstName: "Amit",
    lastName: "Sharma",
    email: "amit@company.com",
    salary: 55000,
    age: 22,
    department: "IT",
  },
  {
    id: 202,
    firstName: "Priya",
    lastName: "Patel",
    email: "priya@company.com",
    salary: 40000,
    age: 25,
    department: "HR",
  },
  {
    id: 203,
    firstName: "Rahul",
    lastName: "Verma",
    email: "rahul@company.com",
    salary: 65000,
    age: 18,
    department: "Finance",
  },
  {
    id: 204,
    firstName: "Neha",
    lastName: "Joshi",
    email: "neha@company.com",
    salary: 35000,
    age: 20,
    department: "IT",
  },
];



// update salary 

const index = employees.findIndex((emp) => emp.id === 204);

if (index !== -1) {
    employees[index].salary = 44000;
    console.log("updated successfully..")
} else {
    console.log("user not found")
}

console.log(employees[index])


// update multiple fields 