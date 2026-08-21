const bookings = [
  { id: 1001, customerName: "Rahul", room: 101 },
  { id: 1002, customerName: "Priya", room: 102 },
  { id: 1003, customerName: "Amit", room: 103 },
  { id: 1004, customerName: "Rahul", room: 101 },
  { id: 1005, customerName: "Neha", room: 104 },
];


const seen = new Set();

const duplicateBookings = bookings.filter((booking) => {
    const key = booking.customerName + "-" + booking.room;
    if (seen.has(key)) {
        return true;
    }

    seen.add(key);
    return false;
})

console.log(duplicateBookings)