import React from 'react'
import { NavLink } from 'react-router'
import { LayoutDashboard, UserRoundCog,ShoppingCart,Truck, Settings } from 'lucide-react';

const Nav = () => {
  return (
    <div>
      <nav className="flex flex-col p-4 gap-5 text-xl bg-[#24160f] text-[#efd1c0] min-h-screen shadow-lg pt-20">
        <NavLink to="/dashboard" className='flex items-center gap-5 border-2 rounded-2xl p-2'><LayoutDashboard />Dashboard</NavLink>
        <NavLink to="/users" className='flex items-center gap-5 border-2 rounded-2xl p-2'><UserRoundCog />Users</NavLink>
        <NavLink to="/products" className='flex items-center gap-5 border-2 rounded-2xl p-2'><ShoppingCart />Products</NavLink>
        <NavLink to="/orders" className='flex items-center gap-5 border-2 rounded-2xl p-2'><Truck />Orders</NavLink>
        <NavLink to="/settings" className='flex items-center gap-5 border-2 rounded-2xl p-2'> <Settings />Settings</NavLink>
      </nav>

    </div>
  )
}

export default Nav