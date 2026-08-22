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


// using loops and condition 
let min = Number.MAX_SAFE_INTEGER;
for (const emp of employees) {
    if (emp.salary < min) {
        min = emp.salary;
    }
}
console.log(min)


// using method reduce 

const minsal = employees.reduce((sal, emp) => {
    
    if (emp.salary < sal) {
        sal = emp.salary;
    }
    return sal;
},Number.MAX_VALUE)

console.log(minsal)