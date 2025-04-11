import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../../assets/logo-white.png'

const Header = () => {
  return (
    <div className='header flex justify-between items-center p-5 bg-white shadow-md '>
        <Link><img src={Logo} alt="" className='h-15' /></Link>
        <h1 className='font-bold text-xl'>Admin Panel</h1>
    </div>
  )
}

export default Header