const products = [
  {
    id: 301,
    name: "Laptop",
    category: "Electronics",
    price: 65000,
    stock: 10,
  },
  {
    id: 302,
    name: "T-Shirt",
    category: "Clothing",
    price: 1200,
    stock: 0,
  },
  {
    id: 303,
    name: "Mobile Phone",
    category: "Electronics",
    price: 25000,
    stock: 15,
  },
  {
    id: 304,
    name: "Running Shoes",
    category: "Footwear",
    price: 3500,
    stock: 0,
  },
  {
    id: 305,
    name: "Jeans",
    category: "Clothing",
    price: 2200,
    stock: 20,
  },
];


for (const pro of products) {
    if(pro.stock > 0) {
        console.log(pro)
    }
}

const instock = products.filter(pro => pro.stock > 0);
// console.log(instock)