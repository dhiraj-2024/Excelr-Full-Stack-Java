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
    department: "Finance",
    salary: 70000,
    active: false,
  },
];


// For active employees only, calculate the total salary for each department.

const caltotalsalary =
    employees.filter(emp => emp.active === true)
        .reduce((group, emp) => {
            if (!group[emp.department]) {
                group[emp.department] = 0;
            }
            group[emp.department] += emp.salary;
            return group;
        }, {})
        
        
console.log(caltotalsalary)