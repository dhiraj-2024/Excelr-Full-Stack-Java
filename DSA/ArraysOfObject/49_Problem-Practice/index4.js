const bookings = [
  {
    id: 1001,
    customerName: "Rahul",
    room: 101,
    amount: 5000,
    status: "confirmed",
  },
  {
    id: 1002,
    customerName: "Priya",
    room: 102,
    amount: 7500,
    status: "confirmed",
  },
  {
    id: 1003,
    customerName: "Amit",
    room: 101,
    amount: 6000,
    status: "cancelled",
  },
  {
    id: 1004,
    customerName: "Neha",
    room: 103,
    amount: 9000,
    status: "confirmed",
  },
  {
    id: 1005,
    customerName: "Rohit",
    room: 102,
    amount: 6500,
    status: "confirmed",
  },
  {
    id: 1006,
    customerName: "Sneha",
    room: 104,
    amount: 8000,
    status: "cancelled",
  },
  {
    id: 1007,
    customerName: "Vikas",
    room: 103,
    amount: 7000,
    status: "confirmed",
  },
];


// Calculate the total confirmed booking amount for each room.

const groupbyroomamount =
    bookings.filter(booking => booking.status === "confirmed")
        .reduce((group, booking) => {
            if (!group[booking.room]) {
                group[booking.room] = 0;
            }
            group[booking.room] += booking.amount;
            return group;
        }, {});

    console.log(groupbyroomamount)