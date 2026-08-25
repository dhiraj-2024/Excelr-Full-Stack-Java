const employees = [
  {
    id: 201,
    name: "Amit",
    department: "IT",
    salary: 55000,
    active: true,
  },
  {
    id: 202,
    name: "Priya",
    department: "HR",
    salary: 60000,
    active: true,
  },
  {
    id: 203,
    name: "Rahul",
    department: "IT",
    salary: 65000,
    active: false,
  },
  {
    id: 204,
    name: "Neha",
    department: "IT",
    salary: 75000,
    active: true,
  },
  {
    id: 205,
    name: "Rohit",
    department: "HR",
    salary: 50000,
    active: true,
  },
  {
    id: 206,
    name: "Sneha",
    department: "Finance",
    salary: 80000,
    active: true,
  },
  {
    id: 207,
    name: "Vikas",
    department: "IT",
    salary: 70000,
    active: false,
  },
];


// Find the total salary of active IT employees whose salary is greater than ₹60,000.

const ItEmpSal =
    employees.filter((emp) => emp.department === "IT" && emp.active === true && emp.salary > 60000)
        .reduce((totalsal, emp) => {
            totalsal += emp.salary;
            return totalsal;
    },0)

console.log(ItEmpSal)