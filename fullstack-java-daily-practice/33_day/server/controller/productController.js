import mongoose from "mongoose";
import Product from "../model/productModel.js"

export const createProduct = async (req, res) => {
    try {
        const newProduct = new Product(req.body);

        const productCreated = await newProduct.save();
        res.status(201).json(productCreated);
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}

export const getAllProducts = async (req, res) => {
    try {
        const products = await Product.find();
        if (!products || products.length === 0) {
            return res.status(404).json({
                message: "no product found "
            })
        }
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({
            message: error.message,
        });
    }
}

export const getProductById = async (req, res) => {
    try {
        const id = req.params.id
        const product = await Product.findById(id);
        if (!product) {
            return;
            res.status(404).json({
                message: "product not found ",
            });
        }
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({
            message: error.message,
        });
    }
}

export const updateProduct = async (req, res) => {
    try {
        const id = req.params.id;
        const product = await Product.findByIdAndUpdate(id, req.body, {
            new: true,
            runValidators:true
        });
        if (!product) {
          return;
          res.status(404).json({
            message: "product not found",
          });
        }
        res.status(200).json(product);
       
    } catch (error) {
        res.status(500).json({
            message: error.message,
        });
    }
}

export const deleteProduct = async (req, res) => {
    try {
        const product = await Product.findByIdAndDelete(req.params.id);
        if (!product) {
            return
            res.status(404).json({message:"product not found"})
        }
        res.status(200).json({message:"Product Deleted Successfully"})
        
    } catch (error) {
         res.status(500).json({
           message: error.message,
         });
    }
}