const employees = [
  { id: 1, name: "Rahul", city: "Pune" },
  { id: 2, name: "Priya", city: "Mumbai" },
  { id: 3, name: "Amit", city: "Pune" },
  { id: 4, name: "Neha", city: "Nashik" },
  { id: 5, name: "Sneha", city: "Mumbai" },
];



//! grouping by cities 


const groupByCity = employees.reduce((group, emp) => {
    const key = emp.city;
    if (!group[key]) {
        group[key] = [];
    }
    group[key].push(emp)
    return group;
}, {})

console.log(groupByCity)