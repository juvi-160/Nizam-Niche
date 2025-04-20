import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { createContext } from 'react';
import {products} from '../assets/products.js';

export const ShopContext = createContext();



const ShopContextProvider = (props) => {
    const currency = '₹';
    const delivery_fee = 10;
    const backendUrl = import.meta.env.VITE_BACKEND_URL;
    const [search,setSearch] = useState('');
    const [showSearch, setShowSearch] = useState(false);
    const [cart, setCart] = useState({});
    const navigate = useNavigate();

    const addToCart = async (itemId, size) => {
        if(!size){
            toast.error('Please select a size');
            return;
        }
        let cartData = structuredClone(cartItems);

        if(cartData[itemId][size]) {
            cartData[itemId][size].quantity += 1;
        }else{
            cartData[itemId][size] = {
                quantity: 1,
                size: size
            }
            
        }
        setCartItems(cartData);
    }

    const getCartCount = () => {
        let totalCount = 0;
        for (const item in cartItems) {
            for (const size in cartItems[item]) {
                totalCOunt += cartItems[item][size].quantity;
            }
        }
        return totalCount;
    }

    const getCartAmount = () => {
        let totalAmount = 0;
        for (const items in cartItems) {
            let itemInfo = products.find((product._id == items));
            for(const size in cartItems[items]) {
                try {
                    if(itemInfo.sizes[size]) {
                        totalAmount += itemInfo.sizes[size].price * cartItems[items][size].quantity;
                    }
                    
                    
                } catch (error) {
                    console.log(error);
                    
                }
            }

        }
    }



    const value ={
        products, currency, delivery_fee, backendUrl,search, setSearch,showSearch, setShowSearch


    }

  return (
    <ShopContext.Provider value={value}>
        {props.children}
    </ShopContext.Provider>
  )
}

export default ShopContextProvider;