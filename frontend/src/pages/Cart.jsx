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
    const key = `${id}_${size}`;
    updateQuantity(key, (wishlistItems[key] || 0) + 1);
  };

  const decreaseQuantity = (id, size) => {
    const key = `${id}_${size}`;
    const current = wishlistItems[key] || 0;
    if (current > 1) updateQuantity(key, current - 1);
    else updateQuantity(key, 0);
  };


  const moveToWishlist = (id, size) => {
    removeFromCart(id, size);
    addToWishlist(id, size);
  };

  return (
    <div className='bg-[#EFD1C0]'>
      <Layout>
        <div>
          <div className='flex justify-center p-2 bg-[#24160f] text-[#efd1c0] text-2xl font-bold text-center'>
            <h1>SHOPPING CART</h1>
          </div>
          <div className='flex flex-wrap justify-center gap-6 sm:gap-10 md:gap-20 p-2 bg-[#6b1d1d] text-[#efd1c0] text-lg md:text-xl font-bold text-center'>
            <Link to='/women' className='hover:text-[#24160f]'>WOMEN</Link>
            <Link to='/men' className='hover:text-[#24160f]'>MEN</Link>
            <Link to='/artifacts' className='hover:text-[#24160f]'>ARTIFACTS</Link>
            <Link to='/books' className='hover:text-[#24160f]'>BOOKS</Link>
          </div>
        </div>

        {cartData.length === 0 ? (
          <>
            <div className='flex justify-center items-center text-6xl sm:text-7xl md:text-8xl text-[#24160f] pt-20 pb-10'>
              <i className="fa-solid fa-cart-shopping"></i>
            </div>
            <div className='flex flex-col justify-center items-center px-4 text-center p-5'>
              <h1 className='text-2xl sm:text-3xl md:text-4xl text-[#6b1d1d]'>Your Cart is empty!</h1>
              <h2 className='text-md sm:text-lg md:text-2xl text-[#24160f]'>Looks like you haven't added anything to your cart yet</h2>
            </div>
            <div className='flex justify-center items-center pt-6 pb-2'>
              <button className='bg-[#ffffff] rounded-full px-6 py-3 text-sm sm:text-base text-[#6b1d1d] font-bold hover:bg-[#24160f] hover:text-[#efd1c0]'>CHECK WISHLIST</button>
            </div>
            <div className='flex justify-center items-center pb-16'>
              <button className='bg-[#6b1d1d] rounded-full px-6 py-3 text-sm sm:text-base text-[#efd1c0] font-bold hover:bg-[#24160f] hover:text-[#efd1c0]'>START SHOPPING</button>
            </div>
          </>
        ) : (
          <div className='p-6'>
            {cartData.map((item, index) => {
              const product = products.find(p => p._id.toString() === item._id.toString());
              if (!product) return null;

              return (
                <div key={index} className='flex flex-col sm:flex-row items-center justify-between gap-4 border bg-[#f9e9e0] rounded-xl shadow-md p-4 mb-6'>
                  <img src={product.images[0]} alt={product.title} className='w-24 h-24 object-cover rounded-lg border' />

                  <div className='flex-1 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 w-full'>
                    <div>
                      <h3 className='text-xl font-bold text-[#24160f]'>{product.title || "Unnamed Product"}</h3>
                      <p className='text-sm text-[#6b1d1d]'>Size: {item.size}</p>
                      <p className="text-sm text-[#6b1d1d]">
                        Price: {currency}{product.price} × {item.quantity} = <span className="font-semibold">{currency}{product.price * item.quantity}</span>
                      </p>
                    </div>

                    <div className="flex gap-2 items-center">
                      <button onClick={() => decreaseQuantity(item.id, item.size)} className="px-2 py-1 bg-[#6b1d1d] text-[#efd1c0] rounded-full font-bold hover:bg-[#24160f]">-</button>
                      <span className="text-lg font-bold text-[#24160f]">{item.quantity}</span>
                      <button onClick={() => increaseQuantity(item.id, item.size)} className="px-2 py-1 bg-[#6b1d1d] text-[#efd1c0] rounded-full font-bold hover:bg-[#24160f]">+</button>
                    </div>

                    <div className='flex flex-col gap-2 sm:flex-row'>
                      <button onClick={() => moveToWishlist(item.id, item.size)} className='px-3 py-2 bg-[#efd1c0] text-[#6b1d1d] border border-[#6b1d1d] rounded-full hover:bg-[#6b1d1d] hover:text-[#efd1c0]'>
                        ❤️ Wishlist
                      </button>
                      <button onClick={() => removeFromCart(item.id, item.size)} className='px-3 py-2 bg-red-100 text-red-700 border border-red-400 rounded-full hover:bg-red-700 hover:text-white'>
                        🗑 Remove
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}

          </div>
        )}

        {cartData.length > 0 && (
          <div className='flex justify-end my-20 mr-10'>
            <div className='w-full sm:w-[450px]'>
              <CartTotal />
              <div className='w-full text-end'>
                <button onClick={() => navigate('/placeOrder')} className='bg-[#24160f] text-[#efd1c0] text-sm my-8 px-8 py-3'>PROCEED TO CHECKOUT</button>

              </div>
            </div>
          </div>
        )}
      </Layout>
    </div>
  );
};

export default Cart;
