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
  const navigate = useNavigate();

  const addToCart = async (itemId, size) => {
    if (!size) {
      toast.error("Please select a size");
      return;
    }
  
    let cartData = structuredClone(cartItems);
  
    // Fix: Initialize if undefined
    if (!cartData[itemId]) {
        if (cartData[itemId][size]) {
            cartData[itemId][size].quantity += 1;
          } else {
            cartData[itemId][size] = {
              quantity: 1,
              size: size,
            };
          }
    }else{
        cartData[itemId] = {};
        cartData[itemId][size] = 1
    }   
  
    setCartItems(cartData);
    toast.success("Added to cart!");
  };
  

  const getCartCount = () => {
    let totalCount = 0;
    for (const item in cartItems) {
      for (const size in cartItems[item]) {
        totalCount += cartItems[item][size].quantity; // fixed typo
      }
    }
    return totalCount;
  };

  const getCartAmount = () => {
    let totalAmount = 0;
    for (const itemId in cartItems) {
      let itemInfo = products.find(
        (product) => product.id.toString() === itemId
      );
      if (!itemInfo) continue;

      for (const size in cartItems[itemId]) {
        try {
          // Assuming a single price for product, regardless of size
          totalAmount += itemInfo.price * cartItems[itemId][size].quantity;
        } catch (error) {
          console.log(error);
        }
      }
    }
    return totalAmount;
  };

  useEffect(() => {
    console.log(cartItems);
  }, [cartItems]);

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
  };

  return (
    <ShopContext.Provider value={value}>{props.children}</ShopContext.Provider>
  );
};

export default ShopContextProvider;
