import React, { useState } from "react";
import img1 from "../assets/101.jpg";
import img2 from "../assets/102.jpg";
import img3 from "../assets/b101.png";

const images = [img1, img3, img2, img1, img2];

const Carousel = () => {
  const [index, setIndex] = useState(0);

  const nextSlide = () => {
    setIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="relative w-full h-screen overflow-hidden rounded-none">
      <img
        src={images[index]}
        alt="carousel"
        className="w-full h-full object-cover"
      />

      {/* Previous Arrow */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-6 transform -translate-y-1/2 bg-gradient-to-r from-black/60 to-transparent text-white text-4xl px-3 py-2 rounded-full shadow-lg hover:scale-110 transition"
        aria-label="Previous Slide"
      >
        ‹
      </button>

      {/* Next Arrow */}
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-6 transform -translate-y-1/2 bg-gradient-to-l from-black/60 to-transparent text-white text-4xl px-3 py-2 rounded-full shadow-lg hover:scale-110 transition"
        aria-label="Next Slide"
      >
        ›
      </button>
    </div>
  );
};

export default Carousel;
