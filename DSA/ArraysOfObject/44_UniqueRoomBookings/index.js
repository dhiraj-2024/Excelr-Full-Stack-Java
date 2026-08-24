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
    room: 101,
    checkIn: "2026-08-22",
    checkOut: "2026-08-25",
    amount: 6000,
    status: "confirmed",
  },
  {
    id: 1004,
    customerName: "Neha",
    room: 103,
    checkIn: "2026-08-23",
    checkOut: "2026-08-26",
    amount: 9000,
    status: "confirmed",
  },
  {
    id: 1005,
    customerName: "Rohit",
    room: 102,
    checkIn: "2026-08-24",
    checkOut: "2026-08-27",
    amount: 6500,
    status: "confirmed",
  },
  {
    id: 1006,
    customerName: "Sneha",
    room: 104,
    checkIn: "2026-08-25",
    checkOut: "2026-08-28",
    amount: 8000,
    status: "confirmed",
  },
];

// method 1
const result = [];
const seen = new Set();

for (const booking of bookings) {
    if (!seen.has(booking.room)) {
        result.push(booking);
        seen.add(booking.room);
    }
}
// console.log(result);


// method 2

const res = [];
for (const booking of bookings) {
    let duplicate = false;
    for (const exbooking of res) {
        if (exbooking.room === booking.room) {
            duplicate = true;
            break;
        }
    }
    if (!duplicate) {
        res.push(booking);
    }
}

console.log(res)