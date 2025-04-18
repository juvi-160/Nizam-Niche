import React from "react";
import Layout from "./components/Layout";
import Carosel from "./components/carosel";
import Card from "./components/Card";
import img1 from "./assets/1.1.png";
import img2 from "./assets/1.2.png";
import img3 from "./assets/1.3.png";
import img4 from "./assets/1.4.png";
import img5 from "./assets/1.5.png";
import img6 from "./assets/1.6.png";
import img7 from "./assets/1.7.png";
import "flowbite";
import { Link } from "react-router";

function App() {
  return (
    <div className="bg-[#EFD1C0]">
      <Layout>
        <Carosel />

        {/* Category Section */}
        <section className="category bg-[#EFD1C0] px-4 sm:px-6 md:px-10 py-6">
          <h1 className="text-[#6b1d1d] text-xl sm:text-2xl md:text-3xl font-bold text-center mb-6">
            SHOP YOUR ROYAL COLLECTION
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link
              to="/women"
              className="flex flex-col items-center text-center font-bold text-lg sm:text-xl text-[#6b1d1d] space-y-2 hover:scale-105 transition-transform"
            >
              <img
                src={img1}
                alt="WOMEN'S WEAR"
                className="w-full h-60 sm:h-64 md:h-72 rounded-lg object-cover"
              />
              <span>Women's Section</span>
            </Link>
            <Link
              to="/men"
              className="flex flex-col items-center text-center font-bold text-lg sm:text-xl text-[#6b1d1d] space-y-2 hover:scale-105 transition-transform"
            >
              <img
                src={img2}
                alt="MEN'S WEAR"
                className="w-full h-60 sm:h-64 md:h-72 rounded-lg object-cover"
              />
              <span>Men's Section</span>
            </Link>
            <Link
              to="/artifacts"
              className="flex flex-col items-center text-center font-bold text-lg sm:text-xl text-[#6b1d1d] space-y-2 hover:scale-105 transition-transform"
            >
              <img
                src={img3}
                alt="ARTIFACTS"
                className="w-full h-60 sm:h-64 md:h-72 rounded-lg object-cover"
              />
              <span>Artifacts Section</span>
            </Link>
            <Link
              to="/books"
              className="flex flex-col items-center text-center font-bold text-lg sm:text-xl text-[#6b1d1d] space-y-2 hover:scale-105 transition-transform"
            >
              <img
                src={img4}
                alt="BOOKS"
                className="w-full h-60 sm:h-64 md:h-72 rounded-lg object-cover"
              />
              <span>Books Section</span>
            </Link>
          </div>
        </section>

        {/* Horizontal Promo Images */}
        <section className="image mt-10">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <img
              src={img5}
              alt="women"
              className="w-full h-64 md:h-96 object-cover"
            />
            <img
              src={img6}
              alt="men"
              className="w-full h-64 md:h-96 object-cover"
            />
          </div>
        </section>

        {/* Top Collections */}
        <section className="pt-10 px-4 md:px-10">
          <h1 className="text-[#6b1d1d] text-2xl md:text-3xl font-bold text-center mb-6">
            TOP COLLECTIONS
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
        </section>

        {/* About Us */}
        <section
          style={{ backgroundImage: `url(${img7})` }}
          className="h-auto md:h-96 mt-10 bg-cover bg-center bg-no-repeat"
        >
          <div className="bg-[#6b1d1d] bg-opacity-90 h-full flex flex-col items-center justify-center p-6 text-center">
            <h1 className="text-2xl md:text-3xl font-bold text-[#efd1c0] mb-2">
              ABOUT US
            </h1>
            <p className="text-lg md:text-xl text-[#efd1c0] mb-4">
              Our story begins with a passion for the art of craftsmanship.
            </p>
            <button className="bg-[#24160f] text-white px-6 py-2 text-sm rounded-lg hover:bg-[#efd1c0] hover:text-[#24160f] transition">
              EXPLORE NOW
            </button>
          </div>
        </section>

        {/* Reviews */}
        <section className="mt-10 px-4 md:px-10 mb-10">
          <h1 className="text-[#6b1d1d] text-2xl md:text-3xl font-bold text-center mb-6">
            REVIEWS FROM OUR LOYAL CUSTOMERS
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[...Array(4)].map((_, index) => (
              <div
                key={index}
                className="bg-[#6b1d1d] rounded-2xl p-6 flex flex-col justify-between h-full text-[#efd1c0]"
              >
                <h1 className="text-lg md:text-xl font-bold mb-2">
                  A Perfect Blend of Heritage and Craftsmanship!
                </h1>
                <p className="text-sm md:text-base mb-4">
                  "The Nizam's Niche offers an incredible range of products that
                  reflect Hyderabad's rich history"
                </p>
                <h5 className="text-sm md:text-base font-semibold text-right">
                  - Ayesha R., Bengaluru
                </h5>
              </div>
            ))}
          </div>
        </section>
      </Layout>
    </div>
  );
}

export default App;
