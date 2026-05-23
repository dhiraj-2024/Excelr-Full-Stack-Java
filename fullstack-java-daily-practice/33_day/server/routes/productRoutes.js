import express from "express"
import { createProduct,getAllProducts,getProductById, updateProduct,deleteProduct } from "../controller/productController.js";
import { getUserById } from "../controller/userController.js";

const router = express.Router();

router.post("/product", createProduct);
router.get("/products", getAllProducts);
router.get("/product/:id", getProductById);
router.put("/update/product/:id", updateProduct);
router.delete("/delete/product/:id", deleteProduct);


export default router;