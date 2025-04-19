import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isShopOpen, setIsShopOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleShop = () => setIsShopOpen(!isShopOpen);

  return (
    <header className="bg-[#EFD1C0] p-4 shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link to="/">
          <img src={logo} alt="THE NIZAM'S NICHE" className="h-16" />
        </Link>

        {/* Hamburger Icon */}
        <button
          className="md:hidden text-[#6B1D1D] text-2xl focus:outline-none"
          onClick={toggleMenu}
        >
          <i className={isMenuOpen ? "fas fa-times" : "fas fa-bars"}></i>
        </button>

        {/* Navigation Links */}
        <nav
          className={`${
            isMenuOpen ? "block" : "hidden"
          } md:flex md:items-center md:gap-6 absolute md:static bg-[#EFD1C0] top-20 left-0 w-full md:w-auto px-6 md:px-0 py-4 md:py-0 shadow-md md:shadow-none z-40`}
        >
          <Link
            to="/"
            className="block py-2 md:py-0 text-[#6B1D1D] hover:text-[#24160f] font-bold"
          >
            HOME
          </Link>

          {/* SHOP DROPDOWN */}
          <div className="relative group md:block">
            <span
              className="flex items-center gap-1 py-2 md:py-0 text-[#6B1D1D] hover:text-[#24160f] font-bold cursor-pointer"
              onClick={() => {
                if (window.innerWidth < 768) toggleShop();
              }}
            >
              SHOP <i className="fa-solid fa-chevron-down text-xs mt-1"></i>
            </span>

            {/* Desktop Dropdown (on hover) */}
            <div className="hidden group-hover:block absolute bg-[#6b1d1d] rounded shadow-xl mt-2 z-50 md:w-40">
              <ul className="text-sm text-[#efd1c0]">
                <li>
                  <Link
                    to="/women"
                    className="block px-4 py-2 hover:bg-[#24160f] hover:text-[#efd1c0]"
                  >
                    Women
                  </Link>
                </li>
                <li>
                  <Link
                    to="/men"
                    className="block px-4 py-2 hover:bg-[#24160f] hover:text-[#efd1c0]"
                  >
                    Men
                  </Link>
                </li>
                <li>
                  <Link
                    to="/artifacts"
                    className="block px-4 py-2 hover:bg-[#24160f] hover:text-[#efd1c0]"
                  >
                    Artifacts
                  </Link>
                </li>
                <li>
                  <Link
                    to="/books"
                    className="block px-4 py-2 hover:bg-[#24160f] hover:text-[#efd1c0]"
                  >
                    Books
                  </Link>
                </li>
              </ul>
            </div>

            {/* Mobile Dropdown (on click) */}
            {isShopOpen && (
              <div className="md:hidden mt-2 bg-[#EFD1C0] rounded shadow-md border z-40">
                <ul className="text-sm text-[#6B1D1D]">
                  <li>
                    <Link
                      to="/women"
                      className="block px-4 py-2 hover:bg-[#f8e4d8] hover:text-[#24160f]"
                    >
                      Women
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/men"
                      className="block px-4 py-2 hover:bg-[#f8e4d8] hover:text-[#24160f]"
                    >
                      Men
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/artifacts"
                      className="block px-4 py-2 hover:bg-[#f8e4d8] hover:text-[#24160f]"
                    >
                      Artifacts
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/books"
                      className="block px-4 py-2 hover:bg-[#f8e4d8] hover:text-[#24160f]"
                    >
                      Books
                    </Link>
                  </li>
                </ul>
              </div>
            )}
          </div>

          <Link
            to="/culture-heritage"
            className="block py-2 md:py-0 text-[#6B1D1D] hover:text-[#24160f] font-bold"
          >
            CULTURAL HERITAGE
          </Link>
          <Link
            to="/about"
            className="block py-2 md:py-0 text-[#6B1D1D] hover:text-[#24160f] font-bold"
          >
            ABOUT
          </Link>
        </nav>

        {/* Icons */}
        {/* Icons */}
        <div className="hidden md:flex gap-4 items-center text-[#6B1D1D] text-xl relative">
          <Link to="/search" className="hover:text-[#24160f]">
            <i className="fa-solid fa-magnifying-glass"></i>
          </Link>

          {/* User Dropdown */}
          <div className="relative group">
            <Link to="/login" className="hover:text-[#24160f]">
              <i className="fa-regular fa-user"></i>
            </Link>
            {/* Dropdown Menu on Hover */}
            <div className="absolute right-0 hidden group-hover:flex flex-col gap-2 w-36 py-3 px-5 bg-[#6b1d1d] text-[#efd1c0] rounded shadow-lg mt-2 z-50">
              <Link to="/profile" className="cursor-pointer hover:text-white">
                My Profile
              </Link>
              <Link to="/orders" className="cursor-pointer hover:text-white">
                Orders
              </Link>
              <button className="cursor-pointer hover:text-white text-left">
                Logout
              </button>
            </div>
          </div>

          <Link to="/wishlist" className="hover:text-[#24160f]">
            <i className="fa-regular fa-heart"></i>
          </Link>
          <Link to="/cart" className="hover:text-[#24160f] relative">
  <i className="fa-solid fa-cart-shopping"></i>
  <p className="absolute right-[-8px] bottom-[-8px] w-4 h-4 flex items-center justify-center bg-[#6b1d1d] text-white rounded-full text-[8px]">
    10
  </p>
</Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
