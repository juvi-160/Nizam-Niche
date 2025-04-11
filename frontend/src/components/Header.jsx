import React from "react";
import { Link } from "react-router";
import logo from "../assets/logo.png";

const Header = () => {
  return (
    <>
      <header className="flex justify-between items-center bg-[#EFD1C0] p-6" >

      <div className="flex items-center">
          <Link>
          <img src={logo} alt="THE NIZAM'S NICHE" className="h-18" />
          </Link>
        </div>

        <div className="flex gap-4 items-center text-[#6B1D1D] text-lg ">
          <Link to="/" className="hover:text-[#24160f] font-bold">
          HOME
          </Link>
          <Link to="/women" className="hover:text-[#24160f] font-bold">
          SHOP
          </Link>
          <Link to="/culture-heritage" className="hover:text-[#24160f] font-bold">
          CULTURAL HERITAGE
          </Link>
          <Link to="/about" className="hover:text-[#24160f] font-bold">
          ABOUT
          </Link>
        </div>


        <div className="flex gap-4 items-center text-[#6B1D1D] text-lg">
          <Link to='/search' className="hover:text-[#24160f] font-bold">
          <i class="fa-solid fa-magnifying-glass"></i>
          </Link>

          <Link to='/login' className="hover:text-[#24160f] font-bold">
          <i class="fa-regular fa-user"></i>
          </Link>

          <Link to='/wishlist' className="hover:text-[#24160f] font-bold">
          <i class="fa-regular fa-heart"></i>
          </Link>

          <Link to='/cart' className="hover:text-[#24160f] font-bold">
          <i class="fa-solid fa-cart-shopping"></i>
          </Link>
        </div>
      </header>
    </>
  );
};

export default Header;
