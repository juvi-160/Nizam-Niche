import React from "react";
import img1 from "../assets/1.1.png";
import { Heart } from "lucide-react"; // Make sure to install lucide-react if not already

const Card = () => {
  return (
    <div className="w-full max-w-sm bg-[#6b1d1d] border border-[#24160f] rounded-lg shadow-sm flex flex-col justify-between">
      <a href="#">
        <img className="p-4 rounded-t-lg w-full object-cover" src={img1} alt="product image" />
      </a>
      <div className="px-5 pb-5 flex flex-col justify-between flex-grow">
        <a href="#">
          <h5 className="text-xl font-semibold tracking-tight text-[#efd1c0]">Khada Duppata</h5>
        </a>
        {/* Sub-category */}
        <p className="text-sm text-[#efd1c0] mt-1">Women's Clothing &gt; Traditional Wear</p>

        {/* Ratings */}
        <div className="flex items-center mt-3 mb-5">
          <div className="flex items-center space-x-1 rtl:space-x-reverse">
            {[...Array(4)].map((_, index) => (
              <svg
                key={index}
                className="w-4 h-4 text-yellow-300"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 22 20"
              >
                <path d="M20.924 7.625...Z" />
              </svg>
            ))}
            <svg
              className="w-4 h-4 text-gray-200 dark:text-gray-600"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 22 20"
            >
              <path d="M20.924 7.625...Z" />
            </svg>
          </div>
          <span className="bg-[#efd1c0] text-[#24160f] text-xs font-semibold px-2.5 py-0.5 rounded-sm ms-3">
            5.0
          </span>
        </div>

        {/* Price and buttons */}
        <div className="flex items-center justify-between gap-2 flex-wrap">
          <span className="text-3xl font-bold text-[#efd1c0]">$599</span>
          <div className="flex items-center gap-2 mt-2 sm:mt-0">
            <button
              className="text-[#efd1c0] hover:text-[#24160f] bg-[#24160f] hover:bg-[#efd1c0] focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-4 py-2 text-center transition-all duration-200"
            >
              Add to cart
            </button>
            {/* Heart Icon */}
            <button className="text-[#efd1c0] hover:text-[#ff5e5e] transition-all duration-200">
              <Heart size={20} className="stroke-2" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
