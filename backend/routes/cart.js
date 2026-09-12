import express from 'express';
import {
addToCart,
removeItem,
updateQuantity,
getCart
} from "../controllers/cartController";

const router=express.Router();
// Add items to cart 
router.post('/add',addToCart);
// Remove items from cart
router.post('/remove',removeItem);
// Update item quantity in cart
router.post('/update',updateQuantity);
// get user's cart
router.post('/:userId',getCart);

export default router;