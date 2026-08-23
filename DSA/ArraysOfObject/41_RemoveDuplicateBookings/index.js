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
    id: 1001,
    customerName: "Rahul",
    room: 101,
    checkIn: "2026-08-20",
    checkOut: "2026-08-22",
    amount: 5000,
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
    id: 1002,
    customerName: "Priya",
    room: 102,
    checkIn: "2026-08-21",
    checkOut: "2026-08-24",
    amount: 7500,
    status: "confirmed",
  },
];


// method 1
const result = [];
for (const booking of bookings) {
    let duplicate = false;
    for(const existingboking of result) {
        if(existingboking.id === booking.id && existingboking.room === booking.room) {
            duplicate = true;
            break;
        }
    }
    if(!duplicate) {
        result.push(booking);
    }
};
// console.log(result);





// method 2

const seen = new Set();
const res = [];

for (const booking of bookings) {
    let key = booking.id + "-" + booking.room
    if (!seen.has(key)) {
        seen.add(key);
        res.push(booking);
    }
}

console.log(res);
console.log(seen)