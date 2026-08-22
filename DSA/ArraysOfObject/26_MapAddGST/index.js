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
    stock: 25,
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
    stock: 8,
  },
  {
    id: 305,
    name: "Jeans",
    category: "Clothing",
    price: 500,
    stock: 20,
  },
];


const priceWithGst = products.map(pro => pro.price * 1.18);
console.log(priceWithGst)