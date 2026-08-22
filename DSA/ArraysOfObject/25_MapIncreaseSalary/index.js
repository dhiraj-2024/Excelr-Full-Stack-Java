const employees = [
  {
    id: 201,
    firstName: "Amit",
    lastName: "Sharma",
    email: "amit@company.com",
    phone: "9876543210",
    department: "IT",
    salary: 55000,
  },
  {
    id: 202,
    firstName: "Priya",
    lastName: "Patel",
    email: "priya@company.com",
    phone: "9876543211",
    department: "HR",
    salary: 60000,
  },
  {
    id: 203,
    firstName: "Rahul",
    lastName: "Verma",
    email: "rahul@company.com",
    phone: "9876543212",
    department: "Finance",
    salary: 65000,
  },
  {
    id: 204,
    firstName: "Neha",
    lastName: "Joshi",
    email: "neha@company.com",
    phone: "9876543213",
    department: "IT",
    salary: 75000,
  },
];

// method 1 
const increasesal = [];
for (const emp of employees) {
    increasesal.push(emp.salary + (15 / 100) * emp.salary)
}
console.log(increasesal)

// 15% salary increases 
const increaseSalary = employees.map((emp) => {
    return emp.salary + (15 / 100) * emp.salary;
})

// console.log(increaseSalary)