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
    status: "cancelled",
  },
  {
    id: 1004,
    customerName: "Neha",
    room: 104,
    checkIn: "2026-08-23",
    checkOut: "2026-08-26",
    amount: 9000,
    status: "confirmed",
  },
  {
    id: 1005,
    customerName: "Rohit",
    room: 105,
    checkIn: "2026-08-24",
    checkOut: "2026-08-27",
    amount: 6500,
    status: "confirmed",
  },
];


// Find the booking for room number 103.

for (let i = 0; i < bookings.length; i++){
    if (bookings[i].room === 103) {
        console.log(bookings[i]);
        break;
    }
}

const Customer = bookings.find(booking => booking.room === 104);
console.log(Customer)