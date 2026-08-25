const employees = [
  {
    id: 201,
    name: "Amit",
    department: "IT",
    salary: 55000,
  },
  {
    id: 202,
    name: "Priya",
    department: "HR",
    salary: 60000,
  },
  {
    id: 203,
    name: "Rahul",
    department: "IT",
    salary: 65000,
  },
  {
    id: 204,
    name: "Neha",
    department: "Finance",
    salary: 75000,
  },
  {
    id: 205,
    name: "Rohit",
    department: "HR",
    salary: 50000,
  },
];


const Grouped = employees.reduce((group, emp) => {
    if (!group[emp.department]) {
        group[emp.department] = [];
    }
    group[emp.department].push(emp.name);

    return group;
}, {})

console.log(Grouped);