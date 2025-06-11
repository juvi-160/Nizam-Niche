import React from "react";
import Layout from "../components/Layout";
import img16 from "../assets/m101.png";
import MensAccessories from "../components/MensAccessories";
import MenTopCollection from "../components/MenTopCollection";
import MensShoes from "../components/MensShoes";
import MensClothing from "../components/MensClothing";
import { Link } from "react-router-dom";

const Men = () => {
  return (
    <div className="bg-[#EFD1C0]">
      <Layout>
        {/* Main Section */}
        <div>
          <h1 className="bg-[#24160f] text-[#efd1c0] text-center p-2 text-xl md:text-2xl font-bold">
            Timeless Styles: Regal Attire for Every Man
          </h1>
          <div
            style={{ backgroundImage: `url(${img16})` }}
            className="flex justify-center items-center bg-cover bg-center min-h-[80vh]"
          >
            <h1 className="text-[#efd1c0] font-bold text-2xl md:text-4xl text-center px-4">
              Step Into Heritage with Royal Grace
            </h1>
          </div>
        </div>

        {/* Men's Clothing */}
        <section>
          <h2 className="text-center pt-10 text-[#24160f] text-xl md:text-2xl font-bold">
            MEN'S CLOTHING
          </h2>
          <MensClothing />
          <p className="px-5 md:px-10 pb-5 text-[#24160f] text-sm md:text-base text-center md:text-left shadow-8xl font-bold">
            Hyderabadi men’s attire reflects royal heritage, featuring classic sherwanis, intricately embroidered kurtas, and angarkhas. These garments combine tradition with elegance, making every occasion truly special.
          </p>
          <div className="flex justify-center items-center mb-10">
            <Link to="/collections?category=Men&subcategory=Mens Clothing">
              <button className="bg-[#24160f] p-5 rounded-2xl text-[#efd1c0] items-center flex justify-center hover:bg-[#6b1d1d] font-bold">
                SHOP COLLECTION NOW!
              </button>
            </Link>
          </div>
        </section>

        {/* Men's Shoes */}
        <section>
          <h2 className="text-center pt-10 text-[#24160f] text-xl md:text-2xl font-bold">
            MEN'S SHOES
          </h2>
          <MensShoes />
          <p className="px-5 md:px-10 pb-5 text-[#24160f] text-sm md:text-base text-center md:text-left font-bold">
            Hyderabadi footwear for men showcases exquisite craftsmanship, from the traditional mojris with detailed embroidery to leather sandals designed for both style and comfort. Perfect for adding a touch of heritage to your look.
          </p>
          <div className="flex justify-center items-center mb-10">
            <Link to="/collections?category=Men&subcategory=Mens Shoes">
              <button className="bg-[#24160f] p-5 rounded-2xl text-[#efd1c0] items-center flex justify-center hover:bg-[#6b1d1d] font-bold">
                SHOP COLLECTION NOW!
              </button>
            </Link>
          </div>
        </section>

        {/* Men's Accessories */}
        <section>
          <h2 className="text-center pt-10 text-[#24160f] text-xl md:text-2xl font-bold">
            MEN'S ACCESSORIES
          </h2>
          <MensAccessories />
          <p className="px-5 md:px-10 pb-5 text-[#24160f] text-sm md:text-base text-center md:text-left font-bold">
            Men’s accessories in Hyderabad are steeped in tradition, featuring elegant turbans, ornate brooches, and pearl-studded malas like the Satlada. These accessories complete the regal Hyderabadi look, blending heritage with modern style.
          </p>
          <div className="flex justify-center items-center mb-10">
            <Link to="/collections?category=Men&subcategory=Mens Accessories">
              <button className="bg-[#24160f] p-5 rounded-2xl text-[#efd1c0] items-center flex justify-center hover:bg-[#6b1d1d] font-bold">
                SHOP COLLECTION NOW!
              </button>
            </Link>
          </div>
        </section>

        {/* Top Collections */}
        <section>
          <MenTopCollection />
        </section>
      </Layout>
    </div>
  );
};

export default Men;
