const employees = [
  {
    id: 201,
    firstName: "Amit",
    lastName: "Sharma",
    email: "amit@company.com",
        salary: 55000,
    age: 22,
    department: "IT",
  },
  {
    id: 202,
    firstName: "Priya",
    lastName: "Patel",
    email: "priya@company.com",
      salary: 40000,
    age:25,
    department: "HR",
  },
  {
    id: 203,
    firstName: "Rahul",
    lastName: "Verma",
    email: "rahul@company.com",
      salary: 65000,
    age: 18,
    department: "Finance",
  },
  {
    id: 204,
    firstName: "Neha",
    lastName: "Joshi",
    email: "neha@company.com",
      salary: 35000,
    age:20,
    department: "IT",
  },
];


// sort by name method 1
for (let i = 0; i < employees.length; i++){
    for (let j = 0; j < employees.length - 2; j++){
        if (employees[j].firstName.localeCompare(employees[j + 1].firstName) > 0) {
            let temp = employees[j];
            employees[j] = employees[j + 1];
            employees[j + 1] = temp;
        }
    }
}
console.log(employees)

// sort by name method 2
const sortbyname = employees.sort((a, b) => a.firstName.localeCompare(b.firstName));
// console.log(sortbyname);

// sort by age method 1
const sortbyage = employees.sort((a, b) => a.age - b.age);
// console.log(sortbyage)


// sort by salary method 1
for (let i = 0; i < employees.length - 1; i++) {
    for (let j = 0; j < employees.length - 1 - i; j++) {
        if (employees[j].salary > employees[j + 1].salary) {
            let temp = employees[j];
            employees[j] = employees[j + 1];
            employees[j + 1] = temp;
        }
    }
}
// console.log(employees)

// sort by salary method 2
const sortbysalary = employees.sort((a, b) => a.salary - b.salary);
// console.log(sortbysalary);