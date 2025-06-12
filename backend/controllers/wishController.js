import userModel from "../models/userModel.js";

//add products to user cart
const addToWish = async (req, res) => {
  try {
    const { userId, itemId, size } = req.body;
    const userData = await userModel.findById(userId);
    let cartData = await userData.cartData;

    if (cartData[itemId]) {
      if (cartData[itemId][size]) {
        cartData[itemId][size] += 1; // Increment quantity if item already exists with the same size
      } else {
        cartData[itemId][size] = 1; // Add new size with quantity 1
      }
    } else {
      cartData[itemId] = {}; // Add new item with size and quantity 1
      cartData[itemId][size] = 1;
    }

    await userModel.findByIdAndUpdate(userId, { cartData });
    res
      .status(200)
      .json({ message: "Item added to cart successfully.", cartData });
  } catch (error) {
    console.error("Error adding to cart:", error);
    res.status(500).json({ message: error.message });
  }
};

//update products to user cart
const updateWish = async (req, res) => {
  try {
    const { userId, itemId, size, quantity } = req.body;
    const userData = await userModel.findById(userId);
    let cartData = await userData.cartData;

    cartData[itemId][size] = quantity; // Update the quantity for the specified size

    await userModel.findByIdAndUpdate(userId, { cartData });
    res.status(200).json({ message: "Cart Updated", cartData });
  } catch (error) {
    console.error("Error updating cart item:", error);
    res.status(500).json({ message: error.message });
  }
};

//get user cart
const getUserWish = async (req, res) => {
  try {
    const userId = req.user.id; // Corrected destructuring
    const userData = await userModel.findById(userId);
    const cartData = userData.cartData;

    res.status(200).json({ success: true, cartData });
  } catch (error) {
    console.error("Error fetching cart:", error);
    res.status(500).json({ message: error.message });
  }
};


export { addToWish, updateWish, getUserWish };

