import React from 'react';
import Layout from '../components/Layout';
import img1 from '../assets/hero1.jpeg';
import WomensClothing from '../components/WomensClothing';
import WomenShoes from '../components/WomenShoes';
import WomenJewellery from '../components/WomenJewellry';
import WomenCollection from '../components/WomenCollection';
import { Link } from 'react-router-dom';

const Women = () => {
  return (
    <div className="bg-[#EFD1C0] min-h-screen">
      <Layout>
        {/* Hero Section with Gradient Overlay */}
        <div className="relative">
          <div className="bg-[#24160f] py-4">
            <h1 className="text-center text-[#efd1c0] text-2xl md:text-3xl font-bold tracking-wide">
              Redefine Elegance: Timeless Attire for Every Woman
            </h1>
          </div>
          <div
            style={{ backgroundImage: `linear-gradient(rgba(36, 22, 15, 0.3), rgba(36, 22, 15, 0.3)), url(${img1})` }}
            className="flex justify-center items-center text-center h-96 md:h-screen/75 bg-cover bg-center bg-no-repeat"
          >
            <div className="max-w-4xl px-6">
              <h1 className="text-4xl md:text-6xl font-bold text-[#efd1c0] mb-6 animate-fade-in">
                Adoring You with Timeless Beauty!
              </h1>
              <Link
                to="/collections"
                className="inline-block bg-[#6b1d1d] hover:bg-[#501414] text-[#efd1c0] font-semibold px-8 py-3 rounded-md transition-all duration-300 transform hover:scale-105"
              >
                Discover Collections
              </Link>
            </div>
          </div>
        </div>

        {/* Category Sections */}
        <div className="max-w-7xl mx-auto px-6 py-12 space-y-20">
          {/* Clothing Section */}
          <section className="group">
            <div className="">

              <div className="mr-16 ml-16 space-y-6">
                <Link to="/collections?category=Women&subcategory=Womens Clothing" ><h2 className="text-3xl font-bold text-[#24160f] border-b-2 border-[#6b1d1d] pb-2">
                  WOMEN'S CLOTHING
                </h2>
                </Link>
                <p className="text-[#24160f] text-lg leading-relaxed">
                  Hyderabadi women's clothing is nothing short of a royal legacy stitched into fabric — a symphony of heritage, elegance, and storytelling. These aren't just garments; they are living artworks that carry the soul of an era when grace walked through marble corridors and tradition danced beneath chandeliers.
                </p>
              </div>
              <div className="">
                <WomensClothing />
              </div>
            </div>
          </section>

          {/* Shoes Section - Reverse Layout */}
          <section className="group">
            <div className="">

              <div className="mr-16 ml-16 space-y-6">
                <Link to="/collections?category=Women&subcategory=Womens Shoes" ><h2 className="text-3xl font-bold text-[#24160f] border-b-2 border-[#6b1d1d] pb-2">
                  WOMEN'S SHOES
                </h2>
                </Link>
                <p className="text-[#24160f] text-lg leading-relaxed">
                  Hyderabadi footwear is where comfort meets sheer artistry – a seamless blend of tradition, craftsmanship, and elegance that completes the royal look from head to toe. These are not just shoes; they are a continuation of the story woven through Hyderabadi fashion.
                </p>
              </div>
              <div className="">
                <WomenShoes />
              </div>
            </div>
          </section>

          {/* Jewellery Section */}
          <section className="group">
            <div className="">

              <div className="mr-16 ml-16 space-y-6">
                <Link to="/collections?category=Women&subcategory=Womens Jewellery"
                ><h2 className="text-3xl font-bold text-[#24160f] border-b-2 border-[#6b1d1d] pb-2">
                    WOMEN'S JEWELLERY
                  </h2></Link>
                <p className="text-[#24160f] text-lg leading-relaxed">
                  Hyderabadi accessories are more than adornments — they are treasures of a bygone era, whispering tales of queens, palaces, and timeless elegance. These pieces are drenched in history and artistry, crafted to transform your look into a statement of royal heritage.
                </p>
                
              </div>
              <div className="">
                <WomenJewellery />
              </div>
            </div>
          </section>
        </div>

        {/* Featured Collection */}
        <div className="bg-[#24160f] py-12">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-[#efd1c0] mb-8 text-center">
              CURATED COLLECTIONS
            </h2>
            <WomenCollection />
            <div className="text-center mt-10">
              <Link
                to="/collections"
                className="inline-block border-2 border-[#efd1c0] text-[#efd1c0] hover:bg-[#efd1c0] hover:text-[#24160f] font-semibold px-8 py-3 rounded-md transition-all duration-300"
              >
                View All Collections
              </Link>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default Women;