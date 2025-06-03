import React, { useContext, useEffect, useState } from 'react';
import Layout from '../components/Layout';
import { Link } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';
import CartTotal from '../components/CartTotal';

const Cart = () => {
  const { products, currency, cartItems, addToWishlist, removeFromCart, updateQuantity, navigate } = useContext(ShopContext);
  const [cartData, setCartData] = useState([]);

  useEffect(() => {
    const tempData = Object.entries(cartItems).map(([key, quantity]) => {
      const [id, size = "default"] = key.split("_");
      return {
        id,
        size,
        quantity,
      };
    });
    setCartData(tempData);
  }, [cartItems]);

  const increaseQuantity = (id, size) => {
    updateQuantity(id, size, (cartItems[`${id}_${size}`] || 0) + 1);
  };

  const decreaseQuantity = (id, size) => {
    const key = `${id}_${size}`;
    const current = cartItems[key] || 0;
    if (current > 1) updateQuantity(id, size, current - 1);
    else updateQuantity(id, size, 0);
  };

  const moveToWishlist = (id, size) => {
    removeFromCart(id, size);
    addToWishlist(id, size);
  };

  return (
    <div className='bg-[#EFD1C0] min-h-screen'>
      <Layout>
        {/* Header Section */}
        <div className='sticky top-0 z-10 shadow-lg'>
          <div className='flex justify-center p-4 bg-[#24160f] text-[#efd1c0] text-2xl font-bold text-center'>
            <h1>YOUR SHOPPING CART</h1>
          </div>
          <div className='flex flex-wrap justify-center gap-6 sm:gap-10 md:gap-20 p-3 bg-[#6b1d1d] text-[#efd1c0] text-lg md:text-xl font-bold text-center'>
            <Link to='/women' className='hover:text-[#24160f] transition-colors duration-200'>WOMEN</Link>
            <Link to='/men' className='hover:text-[#24160f] transition-colors duration-200'>MEN</Link>
            <Link to='/artifacts' className='hover:text-[#24160f] transition-colors duration-200'>ARTIFACTS</Link>
            <Link to='/books' className='hover:text-[#24160f] transition-colors duration-200'>BOOKS</Link>
          </div>
        </div>

        {cartData.length === 0 ? (
          // Empty Cart State
          <div className='flex flex-col items-center justify-center py-16 px-4'>
            <div className='relative mb-8'>
              <i className="fa-solid fa-cart-shopping text-[#24160f] text-8xl md:text-9xl opacity-20"></i>
              <div className='absolute inset-0 flex items-center justify-center'>
                <i className="fa-regular fa-face-sad-tear text-[#6b1d1d] text-4xl"></i>
              </div>
            </div>
            
            <div className='text-center max-w-md'>
              <h1 className='text-3xl md:text-4xl font-bold text-[#6b1d1d] mb-4'>Your Cart Feels Lonely</h1>
              <p className='text-lg text-[#24160f] mb-8'>Your shopping cart is waiting to be filled with beautiful Hyderabadi treasures</p>
              
              <div className='flex flex-col sm:flex-row gap-4 justify-center'>
                <button 
                  onClick={() => navigate('/wishlist')} 
                  className='bg-white border-2 border-[#6b1d1d] rounded-full px-8 py-3 text-[#6b1d1d] font-bold hover:bg-[#24160f] hover:text-[#efd1c0] hover:border-[#24160f] transition-all duration-300'
                >
                  CHECK WISHLIST
                </button>
                <button 
                  onClick={() => navigate('/')} 
                  className='bg-[#6b1d1d] rounded-full px-8 py-3 text-[#efd1c0] font-bold hover:bg-[#24160f] hover:scale-105 transition-all duration-300 shadow-md'
                >
                  START SHOPPING
                </button>
              </div>
            </div>
          </div>
        ) : (
          // Cart with Items
          <div className='container mx-auto px-4 py-8'>
            <div className='grid gap-6 mb-8'>
              {cartData.map((item, index) => {
                const product = products.find(p => p._id.toString() === item.id);
                if (!product) return null;

                return (
                  <div key={index} className='flex flex-col sm:flex-row items-center gap-6 bg-white rounded-xl shadow-lg p-4 border border-[#efd1c0] hover:shadow-xl transition-shadow duration-300'>
                    <img 
                      src={product.images[0]} 
                      alt={product.title} 
                      className='w-32 h-32 object-cover rounded-lg border-2 border-[#efd1c0]'
                    />

                    <div className='flex-1 w-full'>
                      <div className='flex flex-col md:flex-row md:items-center md:justify-between gap-4'>
                        <div className='space-y-2'>
                          <h3 className='text-xl font-bold text-[#24160f]'>{product.title}</h3>
                          <p className='text-sm text-[#6b1d1d] font-medium'>Size: {item.size}</p>
                          <p className="text-lg text-[#6b1d1d] font-semibold">
                            {currency}{product.price} × {item.quantity} = {currency}{product.price * item.quantity}
                          </p>
                        </div>

                        <div className='flex items-center gap-4'>
                          <div className='flex items-center gap-2 bg-[#f5f5f5] rounded-full p-1'>
                            <button 
                              onClick={() => decreaseQuantity(item.id, item.size)} 
                              className='w-8 h-8 flex items-center justify-center bg-[#6b1d1d] text-white rounded-full hover:bg-[#24160f] transition-colors'
                            >
                              -
                            </button>
                            <span className='w-8 text-center'>{item.quantity}</span>
                            <button 
                              onClick={() => increaseQuantity(item.id, item.size)} 
                              className='w-8 h-8 flex items-center justify-center bg-[#6b1d1d] text-white rounded-full hover:bg-[#24160f] transition-colors'
                            >
                              +
                            </button>
                          </div>
                        </div>
                      </div>

                      <div className='flex gap-4 mt-4'>
                        <button 
                          onClick={() => moveToWishlist(item.id, item.size)} 
                          className='flex items-center gap-2 text-[#6b1d1d] font-medium hover:text-[#24160f] transition-colors'
                        >
                          <i className="fa-regular fa-heart"></i> Save for Later
                        </button>
                        <button 
                          onClick={() => removeFromCart(item.id, item.size)} 
                          className='flex items-center gap-2 text-red-600 font-medium hover:text-red-800 transition-colors'
                        >
                          <i className="fa-regular fa-trash-can"></i> Remove
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <CartTotal />
            
            <div className='flex flex-col sm:flex-row justify-between gap-4 mt-8'>
              <button 
                onClick={() => navigate('/')} 
                className='bg-white border-2 border-[#6b1d1d] rounded-full px-8 py-3 text-[#6b1d1d] font-bold hover:bg-[#24160f] hover:text-[#efd1c0] hover:border-[#24160f] transition-all duration-300'
              >
                Continue Shopping
              </button>
              <button 
                onClick={() => navigate('/placeOrder')} 
                className='bg-[#6b1d1d] rounded-full px-8 py-3 text-[#efd1c0] font-bold hover:bg-[#24160f] hover:scale-105 transition-all duration-300 shadow-md'
              >
                Proceed to Checkout
              </button>
            </div>
          </div>
        )}
      </Layout>
    </div>
  );
};

export default Cart;