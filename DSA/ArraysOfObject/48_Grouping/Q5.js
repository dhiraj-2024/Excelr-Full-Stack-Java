const employees = [
  { id: 1, name: "Rahul", department: "IT" },
  { id: 2, name: "Priya", department: "HR" },
  { id: 3, name: "Amit", department: "IT" },
  { id: 4, name: "Neha", department: "HR" },
  { id: 5, name: "Sneha", department: "IT" },
  { id: 6, name: "Raj", department: "Sales" },
];


//! group by department and count 

const groupbyDeptAndCount = employees.reduce((group, emp) => {
    const key = emp.department;
    if (!group[key]) {
        group[key] = 0;
    }
    group[key] += 1;
    return group;
}, {})

console.log(groupbyDeptAndCount)