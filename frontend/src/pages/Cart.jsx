import React from 'react'
import Layout from '../components/Layout'
import { Link } from 'react-router-dom';

const Cart = () => {
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
      </Layout>
    </div>
  )
}

export default Cart
