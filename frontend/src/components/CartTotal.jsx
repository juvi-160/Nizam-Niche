import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'

const CartTotal = () => {
    const { currency, getCartAmount, delivery_fee } = useContext(ShopContext);
    const subtotal = getCartAmount();
    const total = subtotal + delivery_fee;

    return (
        <div className="border bg-[#f9e9e0] shadow-md p-6 ">
            <div className="flex justify-between mb-2">
                <span>Subtotal:</span>
                <span>{currency}{subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between mb-2">
                <span>Delivery:</span>
                <span>{currency}{delivery_fee.toFixed(2)}</span>
            </div>
            <div className="flex justify-between font-bold text-lg mt-4">
                <span>Total:</span>
                <span>{currency}{total.toFixed(2)}</span>
            </div>
        </div>
    );
};

export default CartTotal