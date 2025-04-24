import React, { useEffect, useState, createContext } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { products } from "../assets/products.js";

export const ShopContext = createContext();

const ShopContextProvider = (props) => {
  const currency = "₹";
  const delivery_fee = 10;
  const backendUrl = import.meta.env.VITE_BACKEND_URL;
  const [search, setSearch] = useState("");
  const [showSearch, setShowSearch] = useState(false);
  const [cartItems, setCartItems] = useState({});
  const [wishlistItems, setWishlistItems] = useState({});
  const navigate = useNavigate();

  const addToCart = (productId, size) => {
    const key = size ? `${productId}_${size}` : `${productId}`;
    setCartItems((prev) => ({
      ...prev,
      [key]: (prev[key] || 0) + 1,
    }));
    toast.success("Added to cart");
  };

  const addToWishlist = (productId, size = "default") => {
    const key = `${productId}_${size}`;
    setWishlistItems((prev) => ({
      ...prev,
      [key]: (prev[key] || 0) + 1,
    }));
    toast.success("Added to wishlist");
  };

  const getCartCount = () => {
    return Object.values(cartItems).reduce((acc, val) => acc + val, 0);
  };

  const getWishCount = () => {
    return Object.values(wishlistItems).reduce((acc, val) => acc + val, 0);
  };

  const updateQuantity = (itemId, quantity) => {
    setCartItems((prev) => ({
      ...prev,
      [itemId]: quantity,
    }));
  };

  const updateWishQuantity = (itemId, quantity = 0) => {
    setWishlistItems((prev) => {
      const updated = { ...prev };
      if (quantity <= 0) {
        delete updated[itemId];
      } else {
        updated[itemId] = quantity;
      }
      return updated;
    });
  };

  const getCartAmount = () => {
    let totalAmount = 0;
    for (const key in cartItems) {
      const [productId] = key.split("_");
      const product = products.find((p) => p.id.toString() === productId);
      if (product) {
        totalAmount += product.price * cartItems[key];
      }
    }
    return totalAmount;
  };

  useEffect(() => {
    console.log("Cart:", cartItems);
    console.log("Wishlist:", wishlistItems);
  }, [cartItems, wishlistItems]);

  const value = {
    products,
    currency,
    delivery_fee,
    backendUrl,
    search,
    setSearch,
    showSearch,
    setShowSearch,
    cartItems,
    addToCart,
    getCartCount,
    getCartAmount,
    wishlistItems,
    addToWishlist,
    updateWishQuantity,
    getWishCount,
    setWishlistItems,
  };

  return (
    <ShopContext.Provider value={value}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
