const sales = [
  { product: "Laptop", category: "Electronics", amount: 50000 },
  { product: "Phone", category: "Electronics", amount: 30000 },
  { product: "Shirt", category: "Clothing", amount: 2000 },
  { product: "Jeans", category: "Clothing", amount: 3000 },
  { product: "Mouse", category: "Electronics", amount: 1000 },
];


//! Calculate total sales for each category.


const result = sales.reduce((group, product) => {
    const key = product.category;
    if (!group[key]) {
        group[key] = 0;
    }
    group[key] += product.amount;
    return group;
},{})

console.log(result)