const orders = [
  { id: 1, customer: "Rahul", category: "Electronics", amount: 50000 },
  { id: 2, customer: "Priya", category: "Clothing", amount: 3000 },
  { id: 3, customer: "Amit", category: "Electronics", amount: 20000 },
  { id: 4, customer: "Neha", category: "Clothing", amount: 5000 },
  { id: 5, customer: "Sneha", category: "Electronics", amount: 10000 },
  { id: 6, customer: "Raj", category: "Clothing", amount: 2000 },
];



// Generate a category-wise order report containing:

// Number of orders
// Total sales
// Average order value


const result = orders.reduce((group, order) => {
    const key = order.category;
    if (!group[key]) {
        group[key] = {
            totalNumberOfOrder: 0,
            toatlSales: 0,
            avgOrderValue: 0,
        }
    }
    group[key].totalNumberOfOrder++;
    group[key].toatlSales += order.amount;
    group[key].avgOrderValue = group[key].toatlSales / group[key].totalNumberOfOrder;

    return group;
}, {});

console.log(result)