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


const result = [];

for (const emp of employees) {
    const neEmp = {
        First_name: emp.firstName,
        Last_name: emp.lastName,
        Email: emp.email,
        Annual_Salary : emp.salary,
    }
result.push(neEmp)

}
console.log(result)


const newpro = employees.map((emp) =>{
    
   const neEmp = {
     First_name: emp.firstName,
     Last_name: emp.lastName,
     Email: emp.email,
     Annual_Salary: emp.salary,
   };
    return neEmp;
})

console.log(newpro);
