const bookings = [
  { id: 1, customer: "Rahul", room: 101 },
  { id: 2, customer: "Priya", room: 102 },
  { id: 3, customer: "Amit", room: 101 },
  { id: 4, customer: "Neha", room: 103 },
  { id: 5, customer: "Sneha", room: 102 },
];


//! group hotel booking by room number 

const result = bookings.reduce((group, booking) => {
    const key = booking.room;
    if (!group[key]) {
        group[key] = [];
    }
    group[key].push(booking);
    return group;
}, {})

// console.log(result)



const employees = [
  { id: 1, name: "Rahul", department: "IT", salary: 60000 },
  { id: 2, name: "Priya", department: "HR", salary: 55000 },
  { id: 3, name: "Amit", department: "IT", salary: 75000 },
  { id: 4, name: "Neha", department: "HR", salary: 65000 },
  { id: 5, name: "Sneha", department: "IT", salary: 50000 },
  { id: 6, name: "Raj", department: "Sales", salary: 50000 },
];


const totalsalary = employees.reduce((group, emp) => {
    const key = emp.department;
    if (!group[key]) {
        group[key] = {
            totalsalary : 0
        };
    }
    group[key].totalsalary += emp.salary;
    return group;

},{})

console.log(totalsalary);