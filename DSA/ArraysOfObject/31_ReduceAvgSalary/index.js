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



// Average salary 

let totalsal = 0;
const totalemp = employees.length;

for (const emp of employees) {
    totalsal += emp.salary;
}
const avgsal = totalsal / totalemp;
console.log(avgsal);


// method 2 using reduce 

const totalSalary = employees.reduce((total, emp) => {
  return total + emp.salary;
}, 0);

const averageSalary = totalSalary / employees.length;

console.log(averageSalary);
