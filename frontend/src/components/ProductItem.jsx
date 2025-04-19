import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import { Link } from 'react-router-dom';
import { Heart } from "lucide-react";

const ProductItem = ({ id, image, title, price,rating, category }) => {
  const { currency } = useContext(ShopContext);

  return (
    <div className="w-full max-w-sm bg-[#6b1d1d]  border border-[#24160f] rounded-lg shadow-sm flex flex-col justify-between">
      <Link to={`/product/${id}`}>
        <img
          className="p-4 rounded-t-lg w-full h-64 object-cover"
          src={Array.isArray(image) ? image[0] : image}
          alt={title}
        />
      </Link>
      <div className="px-5 pb-5 flex flex-col justify-between flex-grow">
        <Link to={`/product/${id}`}>
          <h5 className="text-xl font-semibold tracking-tight text-[#efd1c0]">{title}</h5>
          <h2 className="text-white">{category}</h2>
        </Link>
        

        {/* Ratings (dummy static for now) */}
        <div className="flex items-center mt-3 mb-5">
          <div className="flex items-center space-x-1 rtl:space-x-reverse">
            {[...Array(5)].map((_, index) => (
              <svg
                key={index}
                className="w-4 h-4 text-yellow-300"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 22 20"
              >
                <path d="M10.98 1.75L13.09 7.36L19.14 8.18L14.57 12.58L15.91 18.63L10.98 15.77L6.05 18.63L7.39 12.58L2.82 8.18L8.87 7.36L10.98 1.75Z" />
              </svg>
            ))}
            <svg
              className="w-4 h-4 text-gray-200"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 22 20"
            >
              <path d="M10.98 1.75L13.09 7.36L19.14 8.18L14.57 12.58L15.91 18.63L10.98 15.77L6.05 18.63L7.39 12.58L2.82 8.18L8.87 7.36L10.98 1.75Z" />
            </svg>
          </div>
          <span className="bg-[#efd1c0] text-[#24160f] text-xs font-semibold px-2.5 py-0.5 rounded-sm ms-3">
            {rating}
          </span>
        </div>

        {/* Price & Buttons */}
        <div className="flex items-center justify-between gap-2 flex-wrap">
          <span className="text-2xl font-bold text-[#efd1c0]">
            {currency}{price}
          </span>
          <div className="flex items-center gap-2 mt-2 sm:mt-0">
            <button className="text-[#efd1c0] hover:text-[#24160f] bg-[#24160f] hover:bg-[#efd1c0] font-medium rounded-lg text-sm px-4 py-2 transition-all duration-200">
              Add to cart
            </button>
            <button className="text-[#efd1c0] hover:text-[#ff5e5e] transition-all duration-200">
              <Heart size={20} className="stroke-2" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
