import React from 'react'
import Layout from '../components/Layout'
import { Link } from 'react-router-dom';

const Cart = () => {
  return (
    <div className='bg-[#EFD1C0]'>
    <Layout>
      <div>
        <div className='flex justify-center p-2 bg-[#24160f] text-[#efd1c0] text-2xl font-bold'>
          <h1>SHOPPING CART</h1>
        </div>
        <div className='flex justify-center gap-20 p-2 bg-[#6b1d1d] text-[#efd1c0] text-xl font-bold'>
          <Link to='/women' className='hover:text-[#24160f]'>WOMEN</Link>
          <Link to='/men' className='hover:text-[#24160f]'>MEN</Link>
          <Link to='/artifacts' className='hover:text-[#24160f]'>ARTIFACTS</Link>
          <Link to='/books' className='hover:text-[#24160f]'>BOOKS</Link>
        </div>
      </div>

      <div className='flex justify-center items-center text-8xl text-[#24160f] pt-20 pb-10'>
      <i class="fa-solid fa-cart-shopping"></i>
      </div>

      <div className='flex flex-col justify-center items-center  p-10'>
        <h1 className='text-4xl text-[#6b1d1d]'>Your Cart is empty!</h1>
        <h1 className='text-2xl text-[#24160f]'>Looks like you haven't added anything to your cart yet</h1>
      </div>

     <div className='flex justify-center items-center pt-10 pb-2'>
     <button className='bg-[#ffffff] rounded-full p-5 text-l text-[#6b1d1d] flex justify-center items-center font-bold hover:bg-[#24160f] hover:text-[#efd1c0] '>CHECK WISHLISH</button>
     </div>
      
      <div className='flex justify-center items-center pb-20'>
      <button className='bg-[#6b1d1d] rounded-full p-5 text-l text-[#efd1c0] flex justify-center items-center font-bold hover:bg-[#24160f] hover:text-[#efd1c0]' >START SHOPPING</button>
      </div>
      
    

      
    </Layout>
    
    </div>
  )
}

export default Cart