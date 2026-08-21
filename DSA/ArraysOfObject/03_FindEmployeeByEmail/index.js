const employees = [
  {
    id: 201,
    name: "Amit Sharma",
    email: "amit@company.com",
    department: "IT",
    salary: 55000,
    active: true,
  },
  {
    id: 202,
    name: "Priya Patel",
    email: "priya@company.com",
    department: "HR",
    salary: 60000,
    active: true,
  },
  {
    id: 203,
    name: "Rahul Verma",
    email: "rahul@company.com",
    department: "Finance",
    salary: 65000,
    active: false,
  },
  {
    id: 204,
    name: "Neha Joshi",
    email: "neha@company.com",
    department: "IT",
    salary: 75000,
    active: true,
  },
  {
    id: 205,
    name: "Rohit Singh",
    email: "rohit@company.com",
    department: "Marketing",
    salary: 50000,
    active: true,
  },
];



// Find the employee whose email is:

// "neha@company.com"


// Manually 
let result = null;
for (let i = 0; i < employees.length; i++){
    if (employees[i].email === "neha@company.com") {
        result = employees[i];
        break;
    }
}
console.log(result);


// Using Array method ; 

const Employee = employees.find(employee => employee.email === "neha@company.com");
console.log(Employee);