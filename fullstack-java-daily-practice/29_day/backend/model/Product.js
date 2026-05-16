import mongoose from "mongoose";

const ProductsSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
  discription: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
    },
    rating: {
        type: Number,
        required:true
    }
    
}, {
timestamps:true
});

const Products = mongoose.model("products", ProductsSchema);

export default Products;