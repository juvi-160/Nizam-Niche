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

    setCartItems((prev) => {
      const updatedCart = {
        ...prev,
        [key]: (prev[key] || 0) + 1,
      };

      console.log("Updated Cart Items:", updatedCart);
      toast.success("added to cart");
      return updatedCart;
    });
  };

  const addToWishlist = (itemId, size) => {
    let wishData = { ...wishlistItems };
    if (!wishData[itemId]) wishData[itemId] = {};
    const key = size || "_default";
    wishData[itemId][key] = true;
    setWishlistItems(wishData);
    toast.success("Added to wishlist");
  };

  const getCartCount = () => {
    let totalCount = 0;
    for (const key in cartItems) {
      totalCount += cartItems[key];
    }
    return totalCount;
  };
  

  const getCartAmount = () => {
    let totalAmount = 0;
    for (const key in cartItems) {
      const [productId, size] = key.split("_");
      const product = products.find(p => p.id.toString() === productId);
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
    setWishlistItems,
    addToWishlist,
  };

  return (
    <ShopContext.Provider value={value}>{props.children}</ShopContext.Provider>
  );
};

export default ShopContextProvider;
