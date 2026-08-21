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
    price: 2200,
    stock: 20,
  },
];


// Find the product whose category is "Footwear".

// manuall solution 
for (const pro of products) {
    if (pro.category === "Clothing") // so we can find all product of this category 
    {
      console.log(pro);
    }
}


// Solution using method; 
const Footw = products.find(pro => pro.category === "Footwear");
console.log(Footw);