const employees = [
  { id: 101, name: "Rahul", email: "rahul@gmail.com", department: "IT" },
  { id: 102, name: "Priya", email: "priya@gmail.com", department: "HR" },
  { id: 103, name: "Amit", email: "amit@gmail.com", department: "IT" },
  { id: 104, name: "Rahul", email: "rahul2@gmail.com", department: "Sales" },
  { id: 105, name: "Neha", email: "neha@gmail.com", department: "HR" },
  { id: 106, name: "Amit", email: "amit2@gmail.com", department: "Sales" },
];


//! Remove duplicate employee names and keep the first occurrence.
const result = [];
for (const emp of employees) {
    let duplicate = false;
    for (const existingEmp of result) {
        if (existingEmp.name === emp.name) {
            duplicate = true;
            break;
        };
    };
    if (!duplicate) {
        result.push(emp);
    }
}

for (const emp of result) {
// console.log(emp.name)
}


const res = [];
const seen = new Set();
for (const emp of employees) {
    if (!seen.has(emp.name)) {
        res.push(emp);
        seen.add(emp.name);
    }
}
// console.log(res.map(item => item.name))





