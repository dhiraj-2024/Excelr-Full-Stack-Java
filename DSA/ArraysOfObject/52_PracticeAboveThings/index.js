const employees = [
  {
    id: 101,
    name: "Rahul",
    email: "rahul@gmail.com",
    department: "IT",
    salary: 60000,
    age: 25,
    active: true,
  },
  {
    id: 102,
    name: "Priya",
    email: "priya@gmail.com",
    department: "HR",
    salary: 55000,
    age: 28,
    active: false,
  },
  {
    id: 103,
    name: "Amit",
    email: "amit@gmail.com",
    department: "IT",
    salary: 75000,
    age: 30,
    active: true,
  },
  {
    id: 104,
    name: "Sneha",
    email: "sneha@gmail.com",
    department: "Sales",
    salary: 50000,
    age: 24,
    active: true,
  },
  {
    id: 105,
    name: "Neha",
    email: "neha@gmail.com",
    department: "HR",
    salary: 65000,
    age: 32,
    active: true,
  },
];

//! Find() problems

// problem 1
const emp = employees.find(emp => emp.id === 103);
// console.log(emp.name);

// problem 2
const empByEmail = employees.find(emp => emp.email === "sneha@gmail.com");
// console.log(empByEmail)

// problem 3
const ActiveUserFist = employees.find(emp => emp.active === true);
//  console.log(ActiveUserFist)

// problem 4
const newEmp = employees.find(emp => emp.salary === 75000 && emp.department === "IT");
// console.log(newEmp.name)

// problem 5
let highsal = 0;
for (const emp of employees) {
    if (emp.salary > highsal) {
        highsal = emp.salary;
    }
}
const hemp = employees.find(emp => highsal === emp.salary);
// console.log(hemp)

// problem 6

const olderEmp = employees.find(emp => emp.age > 30);
// console.log(olderEmp.name)



//! Filter() problems

//* problem 1 active Employee

const activeEmp = employees.filter((emp) =>  emp.active == true);
for (const emp of activeEmp) {
    // console.log(emp.name)
}

//* problem 2 salary > 55,000

const result = employees.filter((emp) => {
    if (emp.salary > 55000) {
        return emp.name;
    }
    return emp.name
});
// console.log(result)


//* problem 3 all IT employees

const itemp = employees.filter(emp => emp.department === "IT");
// console.log(itemp)

//* problem 4 multiple condition

const resultt = employees.filter((emp) => emp.salary > 55000 && emp.active === true);
// console.log(resultt);

//* problem 5 age range

const agerange = employees.filter((emp) => {
  if (emp.age >= 25 && emp.age <= 30) {
    return emp;
  }
});
// console.log(agerange)


//* problem 6 active , department it or hr and salarry >= 60000

const answer = employees.filter((emp) => emp.active === true && (emp.department === "IT" || emp.department === "HR") && emp.salary >= 60000);

console.log(answer)

