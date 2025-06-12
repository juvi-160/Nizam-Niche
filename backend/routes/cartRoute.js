import express from 'express';
import { addToCart, getUserCart, updateCart} from '../controllers/cartController.js';
import authUser from '../middleware/auth.js';

const router = express.Router();

// Corrected Route Setup
router.post('/add', authUser, addToCart);      // Add item to cart
router.get('/get', authUser, getUserCart);     // Get user cart
router.put('/update', authUser, updateCart);   // Update quantity


export default router;