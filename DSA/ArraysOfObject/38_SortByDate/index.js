const bookings = [
  {
    id: 1001,
    customerName: "Rahul",
    room: 101,
    checkIn: "2026-08-24",
    checkOut: "2026-08-27",
    amount: 5000,
    status: "confirmed",
  },
  {
    id: 1002,
    customerName: "Priya",
    room: 102,
    checkIn: "2026-08-20",
    checkOut: "2026-08-22",
    amount: 7500,
    status: "confirmed",
  },
  {
    id: 1003,
    customerName: "Amit",
    room: 103,
    checkIn: "2026-08-23",
    checkOut: "2026-08-25",
    amount: 6000,
    status: "cancelled",
  },
  {
    id: 1004,
    customerName: "Neha",
    room: 104,
    checkIn: "2026-08-21",
    checkOut: "2026-08-26",
    amount: 9000,
    status: "confirmed",
  },
  {
    id: 1005,
    customerName: "Rohit",
    room: 105,
    checkIn: "2026-08-22",
    checkOut: "2026-08-24",
    amount: 6500,
    status: "confirmed",
  },
];

for (let i = 0; i < bookings.length - 1; i++) {
  for (let j = 0; j < bookings.length - 1 - i; j++) {
    if (new Date(bookings[j].checkIn) > new Date(bookings[j+1].checkIn)) {
      let temp = bookings[j];
      bookings[j] = bookings[j + 1];
        bookings[j + 1] = temp;
    }
  }
}

// console.log(bookings);


const sortbyBookings = bookings.sort((a, b) => {
    return new Date(b.checkIn) - new Date(a.checkIn);
        
})
console.log(sortbyBookings)

