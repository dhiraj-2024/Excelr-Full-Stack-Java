const employees = [
  {
    id: 201,
    name: "Amit Sharma",
    email: "amit@company.com",
    department: "IT",
    salary: 55000,
    age: 24,
    active: true,
  },
  {
    id: 202,
    name: "Priya Patel",
    email: "priya@company.com",
    department: "HR",
    salary: 60000,
    age: 29,
    active: true,
  },
  {
    id: 203,
    name: "Rahul Verma",
    email: "rahul@company.com",
    department: "Finance",
    salary: 65000,
    age: 35,
    active: false,
  },
  {
    id: 204,
    name: "Neha Joshi",
    email: "neha@company.com",
    department: "IT",
    salary: 75000,
    age: 27,
    active: true,
  },
  {
    id: 205,
    name: "Rohit Singh",
    email: "rohit@company.com",
    department: "Marketing",
    salary: 50000,
    age: 31,
    active: true,
  },
];



let oldestage = employees[0].age;
let oldest = employees[0];
for (let emp = 1; emp < employees.length; emp++){
    if (employees[emp].age > oldest.age) {
        oldest = employees[emp];
        oldestage = employees[emp].age;
    }
}
console.log(oldest);

const oldestEmp = employees.find(emp => emp.age === oldestage);
console.log(oldestEmp)


