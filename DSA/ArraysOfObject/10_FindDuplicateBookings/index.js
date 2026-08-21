const bookings = [
  {
    id: 1001,
    customerName: "Rahul",
    room: 101,
    checkIn: "2026-08-20",
    checkOut: "2026-08-22",
    amount: 5000,
    status: "confirmed",
  },
  {
    id: 1002,
    customerName: "Priya",
    room: 102,
    checkIn: "2026-08-21",
    checkOut: "2026-08-24",
    amount: 7500,
    status: "confirmed",
  },
  {
    id: 1003,
    customerName: "Amit",
    room: 103,
    checkIn: "2026-08-22",
    checkOut: "2026-08-25",
    amount: 6000,
    status: "confirmed",
  },
  {
    id: 1004,
    customerName: "Rahul",
    room: 101,
    checkIn: "2026-08-23",
    checkOut: "2026-08-25",
    amount: 5000,
    status: "confirmed",
  },
  {
    id: 1005,
    customerName: "Neha",
    room: 104,
    checkIn: "2026-08-24",
    checkOut: "2026-08-27",
    amount: 9000,
    status: "confirmed",
  },
];



// find duplicate bookings using customer name and room number 

// using loops and coditions approach 1
for (let b = 0; b < bookings.length; b++) {
    for (let d = b+1; d < bookings.length; d++) {
        if (bookings[b].customerName === bookings[d].customerName && bookings[b].room === bookings[d].room) {
            console.log(bookings[d]);
        }
    }
}


// using sets approach 2
const seen = new Set();
for (const booking of bookings) {
    const key = booking.customerName + "-" + booking.room;
    if (seen.has(key)) {
        console.log("Duplicate found")
        console.log(booking);
        break;
    }
    seen.add(key);
}