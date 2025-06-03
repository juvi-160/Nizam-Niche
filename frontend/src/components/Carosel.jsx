import React, { useState, useEffect } from "react";
import img1 from "../assets/101.jpg";
import img2 from "../assets/102.jpg";
import img3 from "../assets/b101.png";

// Animation styles
const animationStyles = `
  @keyframes fadeIn {
    from { opacity: 0.6; }
    to { opacity: 1; }
  }
  @keyframes fadeInReverse {
    from { opacity: 0.6; }
    to { opacity: 1; }
  }
  @keyframes slideIn {
    from { transform: translateY(20px); opacity: 0; }
    to { transform: translateY(0); opacity: 1; }
  }
  @keyframes slideInReverse {
    from { transform: translateY(-20px); opacity: 0; }
    to { transform: translateY(0); opacity: 1; }
  }
  .animate-fadeIn {
    animation: fadeIn 1s ease-in-out;
  }
  .animate-fadeInReverse {
    animation: fadeInReverse 1s ease-in-out;
  }
  .animate-slideIn {
    animation: slideIn 0.8s ease-out;
  }
  .animate-slideInReverse {
    animation: slideInReverse 0.8s ease-out;
  }
`;

const slides = [
  {
    image: img1,
    title: "Nizami Elegance",
    subtitle: "Traditional Attire",
    description: "Discover our curated collection of authentic Hyderabadi sherwanis, khada dupattas, and pearl accessories that embody centuries of royal fashion",
    cta: "Explore Collection",
    pattern: "arabesque"
  },
  {
    image: img3,
    title: "Deccan Chronicles",
    subtitle: "Literature & History",
    description: "Rare manuscripts, historical accounts, and culinary guides that preserve Hyderabad's rich cultural legacy",
    cta: "Browse Library",
    pattern: "geometric"
  },
  {
    image: img2,
    title: "Artisan Heritage",
    subtitle: "Handcrafted Wonders",
    description: "Authentic Bidriware, Kalamkari textiles, and Nirmal paintings crafted by master artisans of the Deccan",
    cta: "View Artifacts",
    pattern: "paisley"
  }
];

const Carousel = () => {
  const [index, setIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [direction, setDirection] = useState(1);

  useEffect(() => {
    if (isPaused) return;
    
    const interval = setInterval(() => {
      setDirection(1);
      setIndex((prev) => (prev + 1) % slides.length);
    }, 6000);
    
    return () => clearInterval(interval);
  }, [isPaused]);

  const nextSlide = () => {
    setDirection(1);
    setIndex((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setDirection(-1);
    setIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const goToSlide = (idx) => {
    setDirection(idx > index ? 1 : -1);
    setIndex(idx);
  };

  // Pattern overlays
  const PatternOverlay = ({ type }) => {
    if (type === "arabesque") return (
      <div className="absolute inset-0 opacity-10 mix-blend-overlay" 
           style={{ backgroundImage: "url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMDAgMTAwIj48cGF0aCBkPSJNMjAsMjBDMTAsMzAgMzAsNTAgMjAsODBDMTAsNzAgMzAsNTAgMjAsMjBaIiBmaWxsPSJub25lIiBzdHJva2U9IiNlZmQxYzAiIHN0cm9rZS13aWR0aD0iMSIvPjwvc3ZnPg==')" }}
      />
    );
    if (type === "geometric") return (
      <div className="absolute inset-0 opacity-10 mix-blend-overlay" 
           style={{ backgroundImage: "url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMDAgMTAwIj48cmVjdCB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHg9IjAiIHk9IjAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iI2VmZDFjMCIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9zdmc+')" }}
      />
    );
    return (
      <div className="absolute inset-0 opacity-10 mix-blend-overlay" 
           style={{ backgroundImage: "url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMDAgMTAwIj48cGF0aCBkPSJNMjAsNTBDMzAsMzAgNzAsMzAgODAsNTBDNzAsNzAgMzAsNzAgMjAsNTBaIiBmaWxsPSJub25lIiBzdHJva2U9IiNlZmQxYzAiIHN0cm9rZS13aWR0aD0iMSIvPjwvc3ZnPg==')" }}
      />
    );
  };

  return (
    <div 
      className="relative w-full h-screen overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Inject animation styles */}
      <style>{animationStyles}</style>

      {/* Background Image with Gradient Overlay */}
      <div className="relative w-full h-full">
        <img
          src={slides[index].image}
          alt={slides[index].title}
          className={`w-full h-full object-cover ${direction > 0 ? 'animate-fadeIn' : 'animate-fadeInReverse'}`}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#24160f]/30 to-[#6b1d1d]/30" />
      </div>

      {/* Content Container */}
      <div className="absolute inset-0 flex items-center justify-center px-4">
        <div className={`relative max-w-2xl w-full p-8 md:p-12 rounded-2xl backdrop-blur-lg bg-[#24160f]/80 border border-[#efd1c0]/20 overflow-hidden ${direction > 0 ? 'animate-slideIn' : 'animate-slideInReverse'}`}>
          {/* Pattern Overlay */}
          <PatternOverlay type={slides[index].pattern} />
          
          {/* Content */}
          <div className="relative text-center space-y-6">
            <div>
              <span className="text-[#efd1c0] font-light tracking-widest text-sm md:text-base">
                {slides[index].subtitle}
              </span>
              <h2 className="text-4xl md:text-5xl font-bold mt-2 mb-4 font-serif text-[#efd1c0]">
                {slides[index].title}
              </h2>
              <div className="w-20 h-1 mx-auto bg-[#6b1d1d] mb-6" />
              <p className="text-[#efd1c0]/90 text-lg md:text-xl leading-relaxed">
                {slides[index].description}
              </p>
            </div>
            <button 
              className="px-8 py-3 rounded-md font-medium tracking-wide transition-all hover:scale-105 hover:shadow-lg"
              style={{
                backgroundColor: "#6b1d1d",
                color: "#efd1c0",
                border: "1px solid #efd1c0"
              }}
            >
              {slides[index].cta}
            </button>
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 md:left-8 transform -translate-y-1/2 bg-[#24160f]/90 text-[#efd1c0] text-3xl w-12 h-12 flex items-center justify-center rounded-full hover:bg-[#6b1d1d] transition-all duration-300 hover:scale-110 shadow-lg"
        aria-label="Previous Slide"
      >
        ‹
      </button>
      
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 md:right-8 transform -translate-y-1/2 bg-[#24160f]/90 text-[#efd1c0] text-3xl w-12 h-12 flex items-center justify-center rounded-full hover:bg-[#6b1d1d] transition-all duration-300 hover:scale-110 shadow-lg"
        aria-label="Next Slide"
      >
        ›
      </button>

      {/* Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => goToSlide(idx)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${index === idx ? 'bg-[#efd1c0] w-6' : 'bg-[#efd1c0]/50'}`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;