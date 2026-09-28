const employees = [
  { id: 1, name: "Rahul", department: "IT", salary: 60000 },
  { id: 2, name: "Priya", department: "HR", salary: 55000 },
  { id: 3, name: "Amit", department: "IT", salary: 75000 },
  { id: 4, name: "Neha", department: "HR", salary: 65000 },
  { id: 5, name: "Sneha", department: "IT", salary: 50000 },
  { id: 6, name: "Raj", department: "Sales", salary: 50000 },
];



//! group by count and total salray 


const result = employees.reduce((group, emp) => {
    const key = emp.department;
    if (!group[key]) {
        group[key] = {
            count : 0,
            totalSalary: 0
        }
    }
    group[key].count += 1;
    group[key].totalSalary += emp.salary;
    return group;
}, {})

console.log(result)