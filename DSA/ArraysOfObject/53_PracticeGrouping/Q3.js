const employees = [
  { name: "Rahul", department: "IT", salary: 60000 },
  { name: "Amit", department: "IT", salary: 75000 },
  { name: "Priya", department: "HR", salary: 55000 },
  { name: "Neha", department: "HR", salary: 65000 },
  { name: "Raj", department: "Sales", salary: 50000 },
];


/*
number of employees 
toatl salary 
average salary

*/


const result = employees.reduce((group, emp) => {
    const key = emp.department;
    if (!group[key]) {
        group[key] = {
            count: 0,
            totalsalary: 0,
            avgSalary:0,
        }
    }
    group[key].count++;
    group[key].totalsalary += emp.salary;
    group[key].avgSalary = group[key].totalsalary / group[key].count;

    return group;
}, {})

console.log(result)