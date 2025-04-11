import React from 'react'
import { Link } from 'react-router'

const Nav = () => {
  return (
    <div>
      <nav className="flex flex-col p-4 gap-5 text-xl bg-[#24160f] text-[#efd1c0] min-h-screen shadow-lg pt-20">
        <Link to="/admin/dashboard" className='flex items-center gap-5'><i class="fa-solid fa-table-columns gap-2"></i>Dashboard</Link>
        <Link to="/admin/users" className='flex items-center gap-5'><i class="fa-solid fa-user"></i>Users</Link>
        <Link to="/admin/products" className='flex items-center gap-5'><i class="fa-solid fa-shirt"></i>Products</Link>
        <Link to="/admin/orders" className='flex items-center gap-5'><i class="fa-solid fa-cart-shopping"></i>Orders</Link>
        <Link to="/admin/settings" className='flex items-center gap-5'><i class="fa-solid fa-gear"></i>Settings</Link>
      </nav>

    </div>
  )
}

export default Nav