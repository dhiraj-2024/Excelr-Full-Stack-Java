const employees = [
  {
    id: 201,
    firstName: "Amit",
    lastName: "Sharma",
    email: "amit@company.com",
    salary: 55000,
    department: "IT",
  },
  {
    id: 202,
    firstName: "Priya",
    lastName: "Patel",
    email: "priya@company.com",
    salary: 60000,
    department: "HR",
  },
  {
    id: 203,
    firstName: "Rahul",
    lastName: "Verma",
    email: "rahul@company.com",
    salary: 65000,
    department: "Finance",
  },
  {
    id: 204,
    firstName: "Neha",
    lastName: "Joshi",
    email: "neha@company.com",
    salary: 75000,
    department: "IT",
  },
];

let maxs = 0;
for (const emp of employees) {
    if (emp.salary > maxs) {
        maxs = emp.salary;
    }
}

console.log(maxs)



const maxSalary = employees.reduce((sal, emp) => {
    if (emp.salary > sal) {
        sal = emp.salary;
    }
    return sal;
}, 0)

console.log(maxSalary)