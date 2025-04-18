import React from 'react';
import Layout from '../components/Layout';
import Card from '../components/Card';
import img1 from '../assets/w101.png';
import img2 from '../assets/w1.png';
import img3 from '../assets/w2.png';
import img4 from '../assets/w3.png';
import img5 from '../assets/w4.png';
import img6 from '../assets/w5.png';
import img7 from '../assets/w6.png';
import img8 from '../assets/w7.png';
import img9 from '../assets/w8.png';
import img10 from '../assets/w9.png';
import img11 from '../assets/w10.png';
import img12 from '../assets/w11.png';

const Women = () => {
  return (
    <div className="bg-[#EFD1C0]">
      <Layout>
        {/* Main banner */}
        <div>
          <h1 className="bg-[#24160f] text-[#efd1c0] flex justify-center p-3 text-xl md:text-2xl text-center font-bold">
            Redefine Elegance: Timeless Attire for Every Woman
          </h1>
          <div
            style={{ backgroundImage: `url(${img1})` }}
            className="flex justify-center items-center text-center text-[#efd1c0] font-bold h-160 sm:h-72 md:h-100 bg-cover bg-center shadow-2xl"
          >
            <h1 className="text-2xl sm:text-3xl md:text-4xl px-4">
              Adoring You with Timeless Beauty!
            </h1>
          </div>
        </div>

        {/* Clothing Section */}
        <div className="px-4 md:px-10">
          <h1 className="text-center pt-10 text-[#24160f] text-xl sm:text-2xl font-bold">
            WOMEN'S CLOTHING
          </h1>
          <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-5 gap-4 py-5">
            <img src={img2} alt="1" className="rounded-md" />
            <img src={img3} alt="2" className="rounded-md" />
            <img src={img4} alt="3" className="rounded-md" />
            <img src={img5} alt="4" className="rounded-md" />
            <img src={img6} alt="5" className="rounded-md" />
          </div>
          <p className="text-[#24160f] text-justify text-sm sm:text-base pb-6 font-bold">
            Hyderabadi women’s clothing captures the essence of royalty, blending intricate embroidery and luxurious fabrics to create timeless elegance. From khada dupattas to shararas, each piece tells a story of tradition and grace.
          </p>
          <div className="flex justify-center items-center mb-10">
          <button className="bg-[#24160f] p-5 rounded-2xl text-[#efd1c0] items-center flex justify-center hover:bg-[#6b1d1d] font-bold ">SHOP CLOTHES NOW!</button>
          </div>
        </div>

        {/* Shoes Section */}
        <div className="px-4 md:px-10">
          <h1 className="text-center pt-10 text-[#24160f] text-xl sm:text-2xl font-bold">
            WOMEN'S SHOES
          </h1>
          <div className="py-5">
            <img src={img7} alt="Shoes" className="rounded-md w-full" />
          </div>
          <p className="text-[#24160f] text-justify text-sm sm:text-base pb-6 font-bold">
            Hyderabadi footwear combines comfort with artistry, featuring handcrafted mojris and sandals adorned with delicate embellishments. Perfect for completing both traditional and modern ensembles.
          </p>
          <div className="flex justify-center items-center mb-10">
          <button className="bg-[#24160f] p-5 rounded-2xl text-[#efd1c0] items-center flex justify-center hover:bg-[#6b1d1d] font-bold ">SHOP SHOES NOW!</button>
          </div>
        </div>

        {/* Jewellery Section */}
        <div className="px-4 md:px-10">
          <h1 className="text-center pt-10 text-[#24160f] text-xl sm:text-2xl font-bold">
            WOMEN'S JEWELLERY
          </h1>
          <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-5 gap-4 py-5">
            <img src={img8} alt="1" className="rounded-md h-96" />
            <img src={img9} alt="2" className="rounded-md h-96" />
            <img src={img10} alt="3" className="rounded-md h-96" />
            <img src={img11} alt="4" className="rounded-md h-96" />
            <img src={img12} alt="5" className="rounded-md h-96" />
          </div>
          <p className="text-[#24160f] text-justify text-sm sm:text-base pb-6 font-bold">
            Hyderabadi accessories are a testament to timeless elegance, featuring iconic pieces like the Rani Haar, a necklace that exudes regal sophistication with its layers of pearls and gemstones. Complementing this are intricate jhumkas, delicate naths, and dazzling bangles that bring the royal legacy to life.
          </p>
          <div className="flex justify-center items-center mb-10">
          <button className="bg-[#24160f] p-5 rounded-2xl text-[#efd1c0] items-center flex justify-center hover:bg-[#6b1d1d] font-bold">SHOP JEWELLERY NOW!</button>
          </div>
        </div>

        {/* Top Collection */}
        <div className="px-4 md:px-10 pb-10">
          <h1 className="text-center pt-10 text-[#24160f] text-xl sm:text-2xl font-bold">
            WOMEN'S TOP COLLECTION
          </h1>
          <div className="grid grid-cols-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 py-5">
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default Women;
