import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Logo from '../assets/adminlogo.png'

const Header = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate('/');
    window.location.reload(); // to reset state if needed
  };

  return (
    <div className='header flex justify-between items-center p-5 bg-white shadow-md'>
      <Link><img src={Logo} alt="" className='h-15' /></Link>
      <div className='flex items-center gap-4'>
        <h1 className='font-bold text-xl'>Admin Panel</h1>
        <button
          onClick={handleLogout}
          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition"
        >
          Logout
        </button>
      </div>
    </div>
  );
}

export default Header;
