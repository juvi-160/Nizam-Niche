
import Product from "../models/productModel.js";
import User from "../models/userModel.js";

// ✅ Add product to user cart
export const addToCart = async (req, res) => {
  try {
    const userId = req.user.id;
    const { productId, size } = req.body;

    if (!userId || !productId) {
      return res.status(400).json({ success: false, message: "Missing user or product ID" });
    }

    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ success: false, message: "User not found" });
    }

    const product = await Product.findById(productId);
    if (!product) {
      return res.status(404).json({ success: false, message: "Product not found" });
    }

    // Check if product already in cart
    const existingItemIndex = user.cartData.findIndex(
      item => item.productId.toString() === productId && item.size === size
    );

    if (existingItemIndex > -1) {
      // If already exists, increase quantity
      user.cartData[existingItemIndex].quantity += 1;
    } else {
      // If not, add new item
      user.cartData.push({
        productId: product._id,
        size,
        quantity: 1,
      });
    }

    await user.save();

    res.status(200).json({ success: true, message: "Added to cart", cartData: user.cartData });

  } catch (error) {
    console.error("Add to Cart Error:", error);
    res.status(500).json({ success: false, message: error.message });
  }
};

// ✅ Update product quantity in user cart
const updateCart = async (req, res) => {
  try {
    const userId = req.user.id;
    const { itemId, size, quantity } = req.body;

    const user = await User.findById(userId);
    if (!user) return res.status(404).json({ message: "User not found" });

    const itemIndex = user.cartData.findIndex(
      item => item.itemId === itemId && item.size === size
    );

    if (itemIndex >= 0) {
      if (quantity <= 0) {
        // Remove item if quantity is 0 or less
        user.cartData.splice(itemIndex, 1);
      } else {
        // Update quantity
        user.cartData[itemIndex].quantity = quantity;
      }
    }

    await user.save();
    res.status(200).json({ 
      success: true, 
      message: "Cart updated",
      cartData: user.cartData
    });

  } catch (error) {
    console.error("Error updating cart:", error);
    res.status(500).json({ success: false, message: error.message });
  }
};

// ✅ Get user cart
const getUserCart = async (req, res) => {
  try {
    const userId = req.user.id;
    const user = await User.findById(userId);
    
    if (!user) return res.status(404).json({ message: "User not found" });
    if (!user.cartData || user.cartData.length === 0) {
      return res.status(200).json({ 
        success: true, 
        message: "Cart is empty", 
        cartData: [] 
      });
    }
    res.status(200).json({ 
      success: true, 
      cartData: user.cartData || [] 
    });

  } catch (error) {
    console.error("Error fetching cart:", error);
    res.status(500).json({ success: false, message: error.message });
  }
};

export {  updateCart, getUserCart };
