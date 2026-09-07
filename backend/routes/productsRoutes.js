import express from 'express';
import {
    createProduct,
    getProducts,
     updateProduct,
      deleteProduct,
} 
from '../controllers/productController.js';

const router=express.Router();

// Route to get Products
router.get("/",getProducts);

// Route to create a new Product

router.post("/add",createProduct);



// Route to updated all product by Id
router.put("/update/:id",updateProduct);

// Routes to delete a product by Id
router.delete("/delete/:id",deleteProduct);

export default router;