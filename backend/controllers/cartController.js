import userModel from "../models/userModel.js";

// ✅ Add product to user cart
// Updated addToCart controller
const addToCart = async (req, res) => {
  try {
    const userId = req.user.id;
    const { itemId, size } = req.body;

    const user = await userModel.findById(userId);
    if (!user) return res.status(404).json({ message: "User not found" });

    // Initialize cartData as array if not exists
    if (!user.cartData) {
      user.cartData = [];
    }

    // Check if item already exists in cart
    const existingItemIndex = user.cartData.findIndex(
      item => item.itemId === itemId && item.size === size
    );

    if (existingItemIndex >= 0) {
      // Increment quantity if exists
      user.cartData[existingItemIndex].quantity += 1;
    } else {
      // Add new item
      user.cartData.push({ itemId, size, quantity: 1 });
    }

    await user.save();
    res.status(200).json({ 
      success: true, 
      message: "Item added to cart",
      cartData: user.cartData
    });

  } catch (error) {
    console.error("Error adding to cart:", error);
    res.status(500).json({ success: false, message: error.message });
  }
};

// ✅ Update product quantity in user cart
const updateCart = async (req, res) => {
  try {
    const userId = req.user.id;
    const { itemId, size, quantity } = req.body;

    const user = await userModel.findById(userId);
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
    const user = await userModel.findById(userId);
    
    if (!user) return res.status(404).json({ message: "User not found" });

    res.status(200).json({ 
      success: true, 
      cartData: user.cartData || [] 
    });

  } catch (error) {
    console.error("Error fetching cart:", error);
    res.status(500).json({ success: false, message: error.message });
  }
};

export { addToCart, updateCart, getUserCart };
