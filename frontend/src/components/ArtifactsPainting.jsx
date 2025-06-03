import React, { useContext, useEffect, useState, useRef } from 'react';
import { ShopContext } from "../context/ShopContext";
import ProductItem from "./ProductItem";
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

const ArtifactsPainting = () => {
  const { products } = useContext(ShopContext);
  const [mensProducts, setMensProducts] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const sliderRef = useRef(null);

  useEffect(() => {
    const filteredProducts = products.filter(
      (product) => product.artifactCategory?.toLowerCase() === "paintings"
    );
    setMensProducts(filteredProducts);
  }, [products]);

  const nextSlide = () => {
    if (currentIndex < mensProducts.length - 5) {
      setCurrentIndex(prev => prev + 1);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(prev => prev - 1);
    }
  };

  // Calculate visible products based on currentIndex
  const visibleProducts = mensProducts.slice(currentIndex, currentIndex + 5);

  return (
    <div className="relative px-4 sm:px-6 lg:px-8 py-8">
      
      <div className="relative group">
        {/* Left Arrow */}
        <button 
          onClick={prevSlide}
          disabled={currentIndex === 0}
          className={`absolute left-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center hover:bg-gray-100 transition-all ${
            currentIndex === 0 ? 'opacity-50 cursor-not-allowed' : 'opacity-100 cursor-pointer'
          }`}
        >
          <FiChevronLeft className="text-gray-700 text-xl" />
        </button>

        {/* Slider Container */}
        <div 
          ref={sliderRef}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 px-10 transition-transform duration-300"
        >
          {visibleProducts.map((product, index) => (
            <ProductItem
              key={product._id}
              id={product._id}
              image={product.images}
              title={product.title}
              price={product.price}
              rating={product.rating}
              category={product.category}
            />
          ))}
        </div>

        {/* Right Arrow */}
        <button 
          onClick={nextSlide}
          disabled={currentIndex >= mensProducts.length - 5}
          className={`absolute right-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center hover:bg-gray-100 transition-all ${
            currentIndex >= mensProducts.length - 5 ? 'opacity-50 cursor-not-allowed' : 'opacity-100 cursor-pointer'
          }`}
        >
          <FiChevronRight className="text-gray-700 text-xl" />
        </button>
      </div>

      {/* Dots indicator */}
      {mensProducts.length > 5 && (
        <div className="flex justify-center mt-4 space-x-2">
          {Array.from({ length: Math.ceil(mensProducts.length / 5) }).map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i * 5)}
              className={`w-3 h-3 rounded-full ${
                currentIndex >= i * 5 && currentIndex < (i + 1) * 5 
                  ? 'bg-[#6b1d1d]' 
                  : 'bg-gray-300'
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default ArtifactsPainting;