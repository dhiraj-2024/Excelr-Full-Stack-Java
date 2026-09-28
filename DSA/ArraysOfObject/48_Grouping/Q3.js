const employees = [
  { id: 1, name: "Rahul", department: "IT" },
  { id: 2, name: "Priya", department: "HR" },
  { id: 3, name: "Amit", department: "IT" },
  { id: 4, name: "Neha", department: "HR" },
  { id: 5, name: "Sneha", department: "Sales" },
];


//! group employees by department 

const groupingByDepratment = employees.reduce((group, emp) => {
    if (!group[emp.department]) {
        group[emp.department] = [];
    }
    group[emp.department].push(emp);
    return group;
}, {})

console.log(groupingByDepratment)