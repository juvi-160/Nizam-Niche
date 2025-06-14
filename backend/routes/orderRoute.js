// routes/orderRoutes.js
import express from 'express';
import {
  createOrder,
  getAllOrders,
  getRecentOrders,
  getOrderStats,
  updateOrderStatus
} from '../controllers/orderController.js';
import isAdmin from '../middleware/adminAuth.js';
import isAuthenticated from '../middleware/auth.js';

const router = express.Router();

// User routes
router.post('/', isAuthenticated, createOrder);

// Admin routes
router.get('/', isAdmin, getAllOrders);
router.get('/recent', getRecentOrders);
router.get('/stats', getOrderStats);
router.put('/:orderId', isAdmin, updateOrderStatus);

export default router;