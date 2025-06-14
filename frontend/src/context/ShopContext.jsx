import React, { useEffect, useState, createContext } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from 'axios'
//import { products } from "../assets/products.js";

export const ShopContext = createContext();

const ShopContextProvider = (props) => {
  const currency = "₹";
  const delivery_fee = 10;
  const backendUrl = import.meta.env.VITE_BACKEND_URL;
  const [search, setSearch] = useState("");
  const [showSearch, setShowSearch] = useState(false);
  const [cartItems, setCartItems] = useState({});
  const [wishlistItems, setWishlistItems] = useState({});
  const [products, setProducts] = useState([])
  const [token, setToken] = useState('');
  const navigate = useNavigate();

  // const addToCart = (productId, size) => {
  //   const key = size ? `${productId}_${size}` : `${productId}`;
  //   setCartItems((prev) => ({
  //     ...prev,
  //     [key]: (prev[key] || 0) + 1,
  //   }));
  //   toast.success("Added to cart");
  // };



  const addToCart = async (productId, size = "default") => {
    const key = size ? `${productId}_${size}` : `${productId}`;
    const token = localStorage.getItem("token");

    try {
      const response = await axios.post(
        `${backendUrl}/api/cart/add`,
        { productId, size },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.data.success) {
        setCartItems((prev) => ({
          ...prev,
          [key]: (prev[key] || 0) + 1,
        }));
        toast.success("Added to cart");
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.error("Add to Cart Error:", error.response || error);
      toast.error(
        error?.response?.data?.message || "Failed to add to cart"
      );
    }
  };

  const removeFromCart = (productId, size = "default") => {
    const key = size ? `${productId}_${size}` : `${productId}`
    setCartItems(prev => {
      const updated = { ...prev };
      delete updated[key];
      return updated;
    });
    toast.info("Removed from cart");
  };

  const clearCart = () => {
    setCartItems({});
    toast.info("Cart cleared");
  };


  const addToWishlist = (productId, size = "default") => {
    const key = size ? `${productId}_${size}` : `${productId}`
    setWishlistItems((prev) => ({
      ...prev,
      [key]: (prev[key] || 0) + 1,
    }));
    toast.success("Added to wishlist");
  };

  const removeFromWishlist = (productId, size = "default") => {
    const key = size ? `${productId}_${size}` : `${productId}`
    setWishlistItems(prev => {
      const updated = { ...prev };
      delete updated[key];
      return updated;
    });
    toast.info("Removed from wishlist");
  };

  const clearWishlist = () => {
    setWishlistItems({});
    toast.info("Wishlist cleared");
  };


  const getCartCount = () => {
    if (!cartItems || Object.keys(cartItems).length === 0) {
      return 0;
    }
    // If cartItems is an array, use reduce to sum quantities
    if (Array.isArray(cartItems)) {
      return cartItems.reduce((total, item) => total + item.quantity, 0);
    }
    // If cartItems is an object, sum the values
    return Object.values(cartItems).reduce((total, quantity) => total + quantity, 0);


};


  const getWishCount = () => {
    return Object.values(wishlistItems).reduce((acc, val) => acc + val, 0);
  };

  const updateQuantity = async (id, size, quantity) => {
    const key = `${id}_${size}`;
    setCartItems(prev => {
      const updated = { ...prev };
      if (quantity === 0) {
        delete updated[key];
      } else {
        updated[key] = quantity;
      }
      return updated;
    });

    if (token) {
      try {
        const response = await axios.put(
          `${backendUrl}/api/cart/update`,
          { itemId: id, size, quantity },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        if (response.data.success) {
          toast.success("Cart updated successfully");
        } else {
          toast.error(response.data.message);
        }
      } catch (error) {
        console.error("Update Cart Error:", error.response || error);
        toast.error(
          error?.response?.data?.message || "Failed to update cart"
        );
      }
    }
    else {
      toast.error("Please login to update cart");
      navigate("/login");
    }
  };

  const getUserCart = async () => {
    try {
      const token = localStorage.getItem("token");

      const response = await axios.post(
        `${backendUrl}/api/cart/get`,
        {}, // ✅ Empty body
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.data.success) {
        setCartItems(response.data.cartData);
      }
    } catch (error) {
      console.error("Error fetching user cart:", error);
      toast.error("Unauthorized! Please login again.");
    }
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

    Object.entries(cartItems).forEach(([key, quantity]) => {
      const [productId] = key.split('_'); // Extract just the product ID
      const product = products.find(p => p._id.toString() === productId);

      if (product && quantity > 0) {
        totalAmount += product.price * quantity;
      }
    });

    return totalAmount;
  };

  const getProductsData = async () => {
    try {

      const response = await axios.get(`${backendUrl}/api/product/all`)
      if (response.data) {
        setProducts(response.data.products)
      } else {
        toast.error(response.data.message)
      }

    } catch (error) {
      console.log(error);
      toast.error(error.message)

    }
  }

  useEffect(() => {
    getProductsData()
  }, [])

  useEffect(() => {
  const storedToken = localStorage.getItem("token");
  if (storedToken) {
    setToken(storedToken);
    getUserCart(); // no need to pass token
  }
}, []);



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
    setCartItems,
    addToCart,
    getCartCount,
    getCartAmount,
    wishlistItems,
    addToWishlist,
    updateWishQuantity,
    getWishCount,
    setWishlistItems,
    updateQuantity,
    removeFromCart,
    clearCart,
    removeFromWishlist,
    clearWishlist,
    navigate,
    token,
    setToken
  };

  return (
    <ShopContext.Provider value={value}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;