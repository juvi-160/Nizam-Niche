import express from 'express';
import { addToWish, getUserWish, updateWish} from '../controllers/wishController.js';
import authUser from '../middleware/auth.js';

const router = express.Router();

// Corrected Route Setup
router.post('/add', authUser, addToWish);      // Add item to cart
router.get('/get', authUser, getUserWish);     // Get user cart
router.put('/update', authUser, updateWish);   // Update quantity


export default router;