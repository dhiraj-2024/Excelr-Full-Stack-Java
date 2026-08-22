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
    const newEmp = {
        name: `${emp.firstName} ${emp.lastName}`,
        department: `${emp.department}`
    };
    result.push(newEmp);
}
// console.log(result);


const modifiedObj = employees.map((emp) => {
    const newobj = {
      name: `${emp.firstName} ${emp.lastName}`,
      department: `${emp.department}`,
    };
    return newobj;
})

console.log(modifiedObj)