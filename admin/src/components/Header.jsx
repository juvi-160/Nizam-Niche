// Header.jsx - Top Navigation Component
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { LogOut, Bell, Search, User } from 'lucide-react';
import Logo from '../assets/adminlogo.png';

const Header = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate('/');
  };

  return (
    <header className="sticky top-0 z-20 bg-white shadow-sm">
      <div className="flex items-center justify-between px-4 py-3 md:px-6">
        <div className="flex items-center gap-4">
          <Link to="/dashboard" className="hidden md:block">
            <img src={Logo} alt="Company Logo" className="h-10" />
          </Link>
          <h1 className="text-xl font-semibold text-gray-800 hidden md:block">Admin Dashboard</h1>
        </div>
        
        <div className="flex items-center gap-4">
          <button className="p-2 rounded-full hover:bg-gray-100">
            <Search className="h-5 w-5 text-gray-600" />
          </button>
          <button className="p-2 rounded-full hover:bg-gray-100 relative">
            <Bell className="h-5 w-5 text-gray-600" />
            <span className="absolute top-1 right-1 h-2 w-2 rounded-full bg-red-500"></span>
          </button>
          
          <div className="hidden md:flex items-center gap-2 ml-4">
            <div className="h-8 w-8 rounded-full bg-gray-200 flex items-center justify-center">
              <User className="h-4 w-4 text-gray-600" />
            </div>
            <span className="text-sm font-medium">Admin</span>
          </div>
          
          <button
            onClick={handleLogout}
            className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-red-600 hover:bg-red-50 rounded-lg transition"
          >
            <LogOut className="h-4 w-4" />
            <span className="hidden md:inline">Logout</span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;