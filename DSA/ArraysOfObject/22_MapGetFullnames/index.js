const employees = [
  {
    id: 201,
    firstName: "Amit",
    lastName: "Sharma",
    email: "amit@company.com",
    department: "IT",
    salary: 55000,
  },
  {
    id: 202,
    firstName: "Priya",
    lastName: "Patel",
    email: "priya@company.com",
    department: "HR",
    salary: 60000,
  },
  {
    id: 203,
    firstName: "Rahul",
    lastName: "Verma",
    email: "rahul@company.com",
    department: "Finance",
    salary: 65000,
  },
  {
    id: 204,
    firstName: "Neha",
    lastName: "Joshi",
    email: "neha@company.com",
    department: "IT",
    salary: 75000,
  },
];

// method 1 using loops logic

const fN = [];
for (const emp of employees) {  
    // fN.push(emp.firstName + " " + emp.lastName);
    fN.push(`${emp.firstName} ${emp.lastName}`)
}
console.log(fN)

// method 2 using inbuild map method 
const getfullname = employees.map(emp => emp.firstName + " " + emp.lastName);
// console.log(getfullname);