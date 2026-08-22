const employees = [
  {
    id: 201,
    name: "Amit",
    department: "IT",
    salary: 75000,
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
    salary: 55000,
  },
  {
    id: 204,
    name: "Neha",
    department: "HR",
    salary: 75000,
  },
  {
    id: 205,
    name: "Rohit",
    department: "Finance",
    salary: 50000,
  },
  {
    id: 206,
    name: "Sneha",
    department: "IT",
    salary: 65000,
  },
];



const sortemp = employees.sort((a, b) => {
    const deparsort = a.department.localeCompare(b.department);
    if (deparsort !== 0) {
        return deparsort;
    }
    return a.salary - b.salary;
    
})

console.log(sortemp);