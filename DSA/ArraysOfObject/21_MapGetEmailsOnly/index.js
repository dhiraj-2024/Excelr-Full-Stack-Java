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


// usign loops
const em = [];
for (const emp of employees) {
    // console.log(emp.email)
    em.push(emp.email)
}
console.log(em)


// Using methods
const emails = employees.map(emp => emp.email);
// console.log(emails)