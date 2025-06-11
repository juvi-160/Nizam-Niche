import React from 'react';
import Layout from '../components/Layout';
import img1 from '../assets/w101.png';
import WomensClothing from '../components/WomensClothing';
import WomenShoes from '../components/WomenShoes';
import WomenJewellery from '../components/WomenJewellry';
import WomenCollection from '../components/WomenCollection';
import { Link } from 'react-router';

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
          <WomensClothing />
          <p className="text-[#24160f] text-justify text-sm sm:text-base pb-6 font-bold">
            Hyderabadi women’s clothing captures the essence of royalty, blending intricate embroidery and luxurious fabrics to create timeless elegance. From khada dupattas to shararas, each piece tells a story of tradition and grace.
          </p>
          <div className="flex justify-center items-center mb-10">
            <Link to="/collections?category=Women&subcategory=Womens Clothing" ><button className="bg-[#24160f] p-5 rounded-2xl text-[#efd1c0] items-center flex justify-center hover:bg-[#6b1d1d] font-bold ">SHOP COLLECTION NOW!</button></Link>
          </div>
        </div>

        {/* Shoes Section */}
        <div className="px-4 md:px-10">
          <h1 className="text-center pt-10 text-[#24160f] text-xl sm:text-2xl font-bold">
            WOMEN'S SHOES
          </h1>
          <WomenShoes />
          <p className="text-[#24160f] text-justify text-sm sm:text-base pb-6 font-bold">
            Hyderabadi footwear combines comfort with artistry, featuring handcrafted mojris and sandals adorned with delicate embellishments. Perfect for completing both traditional and modern ensembles.
          </p>
          <div className="flex justify-center items-center mb-10">
            <Link to="/collections?category=Women&subcategory=Womens Jwewllery" ><button className="bg-[#24160f] p-5 rounded-2xl text-[#efd1c0] items-center flex justify-center hover:bg-[#6b1d1d] font-bold ">SHOP COLLECTION NOW!</button></Link>
          </div>
        </div>

        {/* Jewellery Section */}
        <div className="px-4 md:px-10">
          <h1 className="text-center pt-10 text-[#24160f] text-xl sm:text-2xl font-bold">
            WOMEN'S JEWELLERY
          </h1>
          <WomenJewellery />
          <p className="text-[#24160f] text-justify text-sm sm:text-base pb-6 font-bold">
            Hyderabadi accessories are a testament to timeless elegance, featuring iconic pieces like the Rani Haar, a necklace that exudes regal sophistication with its layers of pearls and gemstones. Complementing this are intricate jhumkas, delicate naths, and dazzling bangles that bring the royal legacy to life.
          </p>
          <div className="flex justify-center items-center mb-10">
            <Link to="/collections?category=Women&subcategory=Womens Clothing" ><button className="bg-[#24160f] p-5 rounded-2xl text-[#efd1c0] items-center flex justify-center hover:bg-[#6b1d1d] font-bold ">SHOP COLLECTION NOW!</button></Link>
          </div>
        </div>

        {/* Top Collection */}
        <div className="px-4 md:px-10 pb-10">
          <WomenCollection />
        </div>
      </Layout>
    </div>
  );
};

export default Women;
