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

// console.log(answer)



//! map() 

//* problem 1

const containName = employees.map(emp => emp.name);
// console.log(containName)

//* problem 2
const nameSalary = employees.map((emp) =>
{
  return {
    name: emp.name,
    salary:emp.salary
  }
}
)

// console.log(nameSalary)


//* problem 3 

const salaryHike = employees.map((emp) => {
  return {
    name: emp.name,
    salary: emp.salary,
    hikesalary: 10 / 100 * emp.salary + emp.salary
  };
});
// console.log(salaryHike)
//* problem 4
const checkStatus = employees.map(emp => ({
  ...emp,
  status: emp.salary >= 60000 ? "Senior" : "Junior"
}))
// console.log(checkStatus);


//* problem 5  return the name of only active employes in it department 

const output = employees
  .filter(emp => emp.department === "IT")
  .map(emp => emp.name);


// console.log(output)
  

//! reduce()
//* problem 1 : Calculate the total salary of all employees.

const totalSal = employees.reduce((total, emp) => {
 return total += emp.salary;

},0)

// console.log(totalSal);


//* problem 2 : Calculate the average salary.
const avgsal = totalSal / employees.length;
// console.log(avgsal);


//* problem 3 : Find the employee with the minimum salary.

const minsalary = employees.reduce((minsal, emp) => {
  if (emp.salary < minsal) {
    minsal = emp.salary;
  }
  return minsal;

}, Number.MAX_VALUE)

// console.log(minsalary);


//* problem 4 : Count how many employees are active.

const activeemp = employees.reduce((count, emp) => {
  if (emp.active === true) {
    count++;
  }
  return count;
},0);
console.log(activeemp)


//* problem 5 : Calculate the total salary of IT employees only.

const itEmpTotalSalary = employees
  .filter((emp) => emp.department === "IT")
  .reduce((totalSal, emp) => {
    return totalSal += emp.salary;
  }, 0);

// console.log(itEmpTotalSalary);


//* problem 6 : Create a department-wise salary summary:


const salarySummury = employees.reduce((group, emp) => {
  if (!group[emp.department]) {
    group[emp.department] = 0;
  }
  group[emp.department] += emp.salary;
  return group;
},{})


// console.log(salarySummury)


//! sort() 
//* problem 1 : Sort employees from lowest salary → highest salary.

const sortBySalary = [...employees].sort((a, b) => a.salary - b.salary)
  .map(emp => ({name: emp.name , salary: emp.salary}));
console.log(sortBySalary)