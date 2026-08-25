const bookings = [
  {
    id: 1001,
    customerName: "Rahul",
    amount: 5000,
    status: "confirmed",
  },
  {
    id: 1002,
    customerName: "Priya",
    amount: 7500,
    status: "confirmed",
  },
  {
    id: 1003,
    customerName: "Amit",
    amount: 6000,
    status: "cancelled",
  },
  {
    id: 1004,
    customerName: "Neha",
    amount: 9000,
    status: "confirmed",
  },
  {
    id: 1005,
    customerName: "Rohit",
    amount: 4500,
    status: "confirmed",
  },
  {
    id: 1006,
    customerName: "Sneha",
    amount: 6500,
    status: "confirmed",
  },
];


// Get the names of all confirmed bookings whose amount is greater than ₹5,000, and sort the names alphabetically.

const customer = bookings.filter((booking) => booking.status === "confirmed" && booking.amount > 5000)
    .map((booking, index) => booking.customerName)
    .sort((a, b) => a.localeCompare(b))
    
    console.log(customer)