const express = require("express");
const Product = require("../models/Product");
const router = express.Router();
const mongoose = require('mongoose')
// Router 1: To Create the Product---------------------------------------------------------

router.post("/add-product", async (req, res) => {
  try {
    const { name, category, rating, brand, color, price, url } = req.body;
    const findProduct = await Product.find({name});
    if(findProduct.length > 0){
       return res.status(400).json({success: false , message: "Product already exists with this Name"});
    }
    const newProduct = new Product({
      name,
      category,
      rating,
      brand,
      color,
      price,
      url,
    });
    
    const saveProduct = await newProduct.save();
    return res.json({ success: true, message: "Product added successfully" });
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ success: false, message: "Internal Server Error" });
  }
});

// --------------------------------END OF ROUTER 1---------------------------------------------

// Router 2: To update the Product--------------------------------------------------------------

router.put("/update-product/:id", async (req, res) => {
  try {
    const { name, category, rating, brand, color, price, url } = req.body;
    const newProduct = {};
    Object.entries({
      name,
      category,
      rating,
      brand,
      color,
      price,
      url,
    }).forEach(([key, value]) => {
      if (value !== null) {
        newProduct[key] = value;
      }
    });

    let product = await Product.findById(req.params.id);
    if (!product) {
      return res
        .status(400)
        .json({ success: false, message: "Product with this ID not found" });
    }

    product = await Product.findByIdAndUpdate(req.params.id, newProduct, {
      new: true,
    });

    return res.json({ success: true, message: "Product Updated SuccessFully" });
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ success: false, message: "Internal Server Error" });
  }
});

// --------------------------------END OF ROUTER 2---------------------------------------------

// Router 3: To get all the products

router.get("/fetch-products", async (req, res) => {
  try {
    const products = await Product.find();
    return res.json({ success: true, products: products });
  } catch (error) {
     console.log(error);
     return res.status(500).json({success: false , message: "Internal Server Error"})
  }
});

// Router 4: To get the Particular Product with Product ID

router.get("/get-product/:id", async (req, res) => {
  try {
    if (!mongoose.Types.ObjectId.isValid(req.params.id.toString().padStart(24, '0'))) {
      return res.status(400).json({ success: false, message: "Invalid ObjectId" });
    }
    const id = new mongoose.Types.ObjectId(req.params.id.toString())
    const findProduct = await Product.findById(id);
    if (!findProduct) {
      console.log(findProduct);
      return res.status(404).json({ success: false, message: "No product with this id exists." });
    }
    return res.json({ success: true, findProduct });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: error });
  }
});


module.exports = router;
