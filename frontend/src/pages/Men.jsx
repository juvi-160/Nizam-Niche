import React from "react";
import Layout from "../components/Layout";
import Card from "../components/Card";
import img1 from "../assets/m1.png";
import img2 from "../assets/m2.png";
import img3 from "../assets/m3.png";
import img4 from "../assets/m4.png";
import img5 from "../assets/m5.png";
import img6 from "../assets/m6.png";
import img7 from "../assets/m7.png";
import img8 from "../assets/m8.png";
import img9 from "../assets/m9.png";
import img10 from "../assets/m10.png";
import img11 from "../assets/m11.png";
import img12 from "../assets/m12.png";
import img13 from "../assets/m13.png";
import img14 from "../assets/m14.png";
import img15 from "../assets/m15.png";
import img16 from "../assets/m101.png";

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
          <div className="grid grid-cols-5 sm:grid-cols-3 md:grid-cols-5 gap-2 m-5 p-5 px-4">
            <img src={img1} alt="Clothing 1" />
            <img src={img2} alt="Clothing 2" />
            <img src={img3} alt="Clothing 3" />
            <img src={img4} alt="Clothing 4" />
            <img src={img5} alt="Clothing 5" />
          </div>
          <p className="px-5 md:px-10 pb-5 text-[#24160f] text-sm md:text-base text-center md:text-left shadow-8xl font-bold">
            Hyderabadi men’s attire reflects royal heritage, featuring classic sherwanis, intricately embroidered kurtas, and angarkhas. These garments combine tradition with elegance, making every occasion truly special.
          </p>
          <div className="flex justify-center items-center mb-10">
          <button className="bg-[#24160f] p-5 rounded-2xl text-[#efd1c0] items-center flex justify-center hover:bg-[#6b1d1d] font-bold ">SHOP CLOTHES NOW!</button>
          </div>
        </section>

        {/* Men's Shoes */}
        <section>
          <h2 className="text-center pt-10 text-[#24160f] text-xl md:text-2xl font-bold">
            MEN'S SHOES
          </h2>
          <div className="grid grid-cols-5 sm:grid-cols-3 md:grid-cols-5 gap-2 p-5 m-5 px-4">
            <img src={img6} alt="Shoes 1" />
            <img src={img7} alt="Shoes 2" />
            <img src={img8} alt="Shoes 3" />
            <img src={img9} alt="Shoes 4" />
            <img src={img10} alt="Shoes 5" />
          </div>
          <p className="px-5 md:px-10 pb-5 text-[#24160f] text-2xl md:text-base text-center md:text-left font-bold">
            Hyderabadi footwear for men showcases exquisite craftsmanship, from the traditional mojris with detailed embroidery to leather sandals designed for both style and comfort. Perfect for adding a touch of heritage to your look.
          </p>
          <div className="flex justify-center items-center mb-10">
          <button className="bg-[#24160f] p-5 rounded-2xl text-[#efd1c0] items-center flex justify-center hover:bg-[#6b1d1d] font-bold">SHOP SHOES NOW!</button>
          </div>
          
        </section>

        {/* Men's Accessories */}
        <section>
          <h2 className="text-center pt-10 text-[#24160f] text-xl md:text-2xl font-bold">
            MEN'S ACCESSORIES
          </h2>
          <div className="grid grid-cols-5 sm:grid-cols-3 md:grid-cols-5 gap-2 m-5 p-5 px-4">
            <img src={img11} alt="Accessory 1" />
            <img src={img12} alt="Accessory 2" />
            <img src={img13} alt="Accessory 3" />
            <img src={img14} alt="Accessory 4" />
            <img src={img15} alt="Accessory 5" />
          </div>
          <p className="px-5 md:px-10 pb-5 text-[#24160f] text-sm md:text-base text-center md:text-left font-bold">
            Men’s accessories in Hyderabad are steeped in tradition, featuring elegant turbans, ornate brooches, and pearl-studded malas like the Satlada. These accessories complete the regal Hyderabadi look, blending heritage with modern style.
          </p>
          <div className="flex justify-center items-center mb-10">
          <button className="bg-[#24160f] p-5 rounded-2xl text-[#efd1c0] items-center flex justify-center hover:bg-[#6b1d1d] font-bold ">SHOP ACCESSORIES NOW!</button>
          </div>
        </section>

        {/* Top Collections */}
        <section>
          <h2 className="text-center pt-10 text-[#24160f] text-xl md:text-2xl font-bold">
            MEN'S TOP COLLECTION
          </h2>
          <div className="grid grid-cols-3 sm:grid-cols-5 md:grid-cols-5 m-5 gap-4 p-5 px-4 mb-10">
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
        </section>
      </Layout>
    </div>
  );
};

export default Men;
