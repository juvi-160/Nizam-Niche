// Nav.jsx - Sidebar Component
import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { 
  LayoutDashboard, 
  UserRoundCog,
  ShoppingCart,
  Truck, 
  Settings,
  Menu,
  X,
  ChevronDown,
  ChevronUp
} from 'lucide-react';

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [expandedItems, setExpandedItems] = useState({});

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth >= 768) {
        setIsOpen(true);
      } else {
        setIsOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Initialize
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleItem = (item) => {
    setExpandedItems(prev => ({
      ...prev,
      [item]: !prev[item]
    }));
  };

  const navItems = [
    { path: "/dashboard", icon: <LayoutDashboard size={20} />, label: "Dashboard" },
    { path: "/users", icon: <UserRoundCog size={20} />, label: "Users" },
    { path: "/products", icon: <ShoppingCart size={20} />, label: "Products" },
    { path: "/orders", icon: <Truck size={20} />, label: "Orders" },
    { path: "/settings", icon: <Settings size={20} />, label: "Settings" }
  ];

  return (
    <>
      {/* Mobile Menu Button */}
      {isMobile && (
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="fixed top-4 left-4 z-50 p-2 rounded-md bg-[#24160f] text-[#efd1c0]"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      )}

      {/* Sidebar */}
      <div className={`fixed md:relative z-40 transition-all duration-300 ease-in-out ${isOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0`}>
        <nav className="flex flex-col p-4 gap-2 text-base bg-[#24160f] text-[#efd1c0] min-h-screen w-64 shadow-lg pt-20 md:pt-4">
          <div className="hidden md:block mb-6 px-4 py-2">
            <h2 className="text-xl font-bold">Admin Panel</h2>
          </div>
          
          {navItems.map((item) => (
            <NavLink 
              key={item.path}
              to={item.path}
              className={({ isActive }) => 
                `flex items-center gap-3 rounded-lg p-3 transition-colors hover:bg-[#3a2a1f] ${isActive ? 'bg-[#3a2a1f] text-white' : 'text-[#efd1c0]'}`
              }
              onClick={() => isMobile && setIsOpen(false)}
            >
              <span className="flex-shrink-0">{item.icon}</span>
              <span className="whitespace-nowrap">{item.label}</span>
            </NavLink>
          ))}
          
          <div className="mt-auto pt-4 border-t border-[#3a2a1f]">
            <div className="flex items-center gap-3 p-3 text-sm text-gray-400">
              <div className="h-8 w-8 rounded-full bg-[#3a2a1f] flex items-center justify-center">
                <span className="text-xs">AD</span>
              </div>
              <div>
                <p className="font-medium">Admin User</p>
                <p className="text-xs">admin@example.com</p>
              </div>
            </div>
          </div>
        </nav>
      </div>
      
      {/* Overlay for mobile */}
      {isOpen && isMobile && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-30"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
};

export default Nav;