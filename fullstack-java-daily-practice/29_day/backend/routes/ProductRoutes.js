import express from "express";
import Products from "../model/Product.js";

const router = express.Router();

// CREATE PRODUCT
router.post("/products", async (req, res) => {
  try {
    const product = await Products.create(req.body);

    res.status(201).json({
      success: true,
      data: product,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});

// GET PRODUCTS
router.get("/products", async (req, res) => {
  try {
    const products = await Products.find();

    res.status(200).json({
      success: true,
      data: products,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});

export default router;
