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
    salary: 70000,
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
    department: "Finance",
    salary: 90000,
    active: true,
  },
  {
    id: 206,
    name: "Sneha",
    department: "IT",
    salary: 68000,
    active: true,
  },
  {
    id: 207,
    name: "Vikas",
    department: "HR",
    salary: 75000,
    active: false,
  },
];



// Find the highest-paid active employee in the IT department.

// const ItEmployees = employees.filter((user) => user.active === true && user.department === "IT");
// let maxsalary = Number.MIN_SAFE_INTEGER;
// for (const emp of ItEmployees) {
//     if (emp.salary > maxsalary) {
//         maxsalary = emp.salary;
//     }
// };

// const findFinalUser = employees.find((emp) => emp.salary === maxsalary && emp.active === true && emp.department === "IT")

// console.log(findFinalUser)




const ItEmployees = employees
    .filter(
(user) => user.active === true && user.department === "IT",)
    .reduce((maxsal, emp) => {
        if (emp.salary > maxsal) {
            maxsal = emp.salary;
        }
        return maxsal;
    }, 0)

const highpaiditemp = employees.find((emp) => emp.salary === ItEmployees);
console.log(highpaiditemp)