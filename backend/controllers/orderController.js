// controllers/orderController.js
import Order from "../models/orderModel.js";
import Product from "../models/productModel.js";

// Create new order
export const createOrder = async (req, res) => {
  try {
    const { userId, items, shippingAddress, paymentMethod } = req.body;
    
    // Calculate total amount and validate products
    let totalAmount = 0;
    const productUpdates = [];
    
    for (const item of items) {
      const product = await Product.findById(item.productId);
      if (!product) {
        return res.status(400).json({ 
          success: false, 
          message: `Product ${item.productId} not found` 
        });
      }
      
      if (product.stock < item.quantity) {
        return res.status(400).json({ 
          success: false, 
          message: `Insufficient stock for product ${product.title}` 
        });
      }
      
      totalAmount += product.price * item.quantity;
      productUpdates.push({
        updateOne: {
          filter: { _id: item.productId },
          update: { $inc: { stock: -item.quantity } }
        }
      });
    }
    
    // Create order
    const order = new Order({
      userId,
      items,
      totalAmount,
      shippingAddress,
      paymentMethod,
      paymentStatus: 'pending',
      orderStatus: 'pending'
    });
    
    // Save order and update product stocks
    await Promise.all([
      order.save(),
      Product.bulkWrite(productUpdates)
    ]);
    
    res.status(201).json({ 
      success: true, 
      message: "Order created successfully",
      order 
    });
    
  } catch (error) {
    console.error("Error creating order:", error);
    res.status(500).json({ 
      success: false, 
      message: error.message 
    });
  }
};

// Get all orders (admin)
export const getAllOrders = async (req, res) => {
  try {
    const orders = await Order.find()
      .populate('userId', 'firstName lastName email')
      .populate('items.productId', 'title price images');
      
    res.status(200).json({ 
      success: true, 
      orders 
    });
    
  } catch (error) {
    console.error("Error fetching orders:", error);
    res.status(500).json({ 
      success: false, 
      message: "Failed to fetch orders" 
    });
  }
};

// Get recent orders
export const getRecentOrders = async (req, res) => {
  try {
    const orders = await Order.find()
      .sort({ createdAt: -1 })
      .limit(5)
      .populate('userId', 'firstName lastName')
      .populate('items.productId', 'title');
      
    res.status(200).json({ 
      success: true, 
      orders 
    });
    
  } catch (error) {
    console.error("Error fetching recent orders:", error);
    res.status(500).json({ 
      success: false, 
      message: "Failed to fetch recent orders" 
    });
  }
};

// Get order statistics
export const getOrderStats = async (req, res) => {
  try {
    const totalOrders = await Order.countDocuments();
    
    const sevenDaysAgo = new Date();
    sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);
    
    const recentOrders = await Order.countDocuments({
      createdAt: { $gte: sevenDaysAgo }
    });
    
    const ordersByStatus = await Order.aggregate([
      {
        $group: {
          _id: "$orderStatus",
          count: { $sum: 1 }
        }
      }
    ]);
    
    res.status(200).json({
      success: true,
      stats: {
        totalOrders,
        recentOrders,
        ordersByStatus
      }
    });
    
  } catch (error) {
    console.error("Error fetching order stats:", error);
    res.status(500).json({ 
      success: false, 
      message: "Failed to fetch order statistics" 
    });
  }
};

// Update order status
export const updateOrderStatus = async (req, res) => {
  try {
    const { orderId } = req.params;
    const { status } = req.body;
    
    const order = await Order.findByIdAndUpdate(
      orderId,
      { orderStatus: status },
      { new: true }
    );
    
    if (!order) {
      return res.status(404).json({ 
        success: false, 
        message: "Order not found" 
      });
    }
    
    res.status(200).json({ 
      success: true, 
      message: "Order status updated",
      order 
    });
    
  } catch (error) {
    console.error("Error updating order status:", error);
    res.status(500).json({ 
      success: false, 
      message: error.message 
    });
  }
};