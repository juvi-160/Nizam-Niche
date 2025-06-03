import React, { useContext } from 'react';
import { ShopContext } from '../context/ShopContext';

const CartTotal = () => {
    const { currency, getCartAmount, delivery_fee } = useContext(ShopContext);
    const subtotal = getCartAmount();
    const total = subtotal + delivery_fee;
    const freeDeliveryThreshold = 100; // Set your free delivery threshold

    return (
        <div className="border-2 bg-[#24160f] rounded-xl shadow-lg p-6">
            <h3 className="text-xl font-bold text-[#efd1c0] mb-4 pb-2 border-b border-[#efd1c0]">
                Order Summary
            </h3>
            
            <div className="space-y-3 mb-4">
                <div className="flex justify-between">
                    <span className="text-[#efd1c0]">Subtotal:</span>
                    <span className="font-medium text-[#efd1c0]">{currency}{subtotal.toFixed(2)}</span>
                </div>
                
                <div className="flex justify-between">
                    <div className="flex items-center gap-2">
                        <span className="text-[#efd1c0]">Delivery:</span>
                        {subtotal >= freeDeliveryThreshold && (
                            <span className="text-xs bg-[#6b1d1d] text-[#efd1c0] px-2 py-1 rounded-full">
                                FREE
                            </span>
                        )}
                    </div>
                    <span className="font-medium text-[#efd1c0]">
                        {subtotal >= freeDeliveryThreshold ? `${currency}0.00` : `${currency}${delivery_fee.toFixed(2)}`}
                    </span>
                </div>
            </div>

            {subtotal < freeDeliveryThreshold && (
                <div className="mb-4 p-3 bg-[#f9e9e0] rounded-lg text-center text-sm text-[#6b1d1d]">
                    Spend {currency}{(freeDeliveryThreshold - subtotal).toFixed(2)} more for free delivery!
                </div>
            )}

            <div className="flex justify-between items-center pt-4 mt-4 border-t border-[#efd1c0]">
                <span className="text-lg font-bold text-[#efd1c0]">Total:</span>
                <span className="text-xl font-bold text-[#efd1c0]">
                    {currency}{(subtotal >= freeDeliveryThreshold ? subtotal : total).toFixed(2)}
                </span>
            </div>
        </div>
    );
};

export default CartTotal;