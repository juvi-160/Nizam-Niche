import React from "react";
import Layout from "../components/Layout";
import img16 from "../assets/hero2.jpeg";
import MensAccessories from "../components/MensAccessories";
import MenTopCollection from "../components/MenTopCollection";
import MensShoes from "../components/MensShoes";
import MensClothing from "../components/MensClothing";
import { Link } from "react-router-dom";

const Men = () => {
  return (
    <div className="bg-[#EFD1C0] min-h-screen">
      <Layout>
        {/* Hero Section with Gradient Overlay */}
        <div className="relative">
          <div className="bg-[#24160f] py-4">
            <h1 className="text-center text-[#efd1c0] text-2xl md:text-3xl font-bold tracking-wide">
              Timeless Styles: Regal Attire for Every Man
            </h1>
          </div>
          <div
            style={{ backgroundImage: `linear-gradient(rgba(36, 22, 15, 0.3), rgba(36, 22, 15, 0.3)), url(${img16})` }}
            className="flex justify-center items-center text-center h-96 md:h-screen/75 bg-cover bg-center bg-no-repeat"
          >
            <div className="max-w-4xl px-6">
              <h1 className="text-4xl md:text-6xl font-bold text-[#efd1c0] mb-6 animate-fade-in">
                Step Into Heritage with Royal Grace
              </h1>
              <Link 
                to="/collections" 
                className="inline-block bg-[#6b1d1d] hover:bg-[#501414] text-[#efd1c0] font-semibold px-8 py-3 rounded-md transition-all duration-300 transform hover:scale-105"
              >
                Explore Collections
              </Link>
            </div>
          </div>
        </div>

        {/* Category Sections */}
        <div className=" mx-auto px-6 py-12 space-y-20">
          {/* Clothing Section */}
          <section className="group">
            <div className="">
              
              <div className="mr-17 ml-17 space-y-6">
                <Link to='/collections'><h2 className="text-3xl font-bold text-[#24160f] border-b-2 border-[#6b1d1d] pb-2">
                  MEN'S CLOTHING
                </h2>
                </Link>
                <p className="text-[#24160f] text-lg leading-relaxed">
                  Hyderabadi men’s attire is a striking representation of noble elegance and cultural depth — a style that has been passed down through generations, preserving the charm of one of India’s most iconic royal legacies. Rooted in the aesthetics of the Nizami era, these garments are not just worn for style — they are a visual tribute to masculinity shaped by refinement, tradition, and grace
                </p>
                
              </div>
              <div className="">
                <MensClothing />
              </div>
            </div>
          </section>

          {/* Shoes Section - Reverse Layout */}
          <section className="group">
            <div className="">
              
              <div className=" mr-17 ml-17 space-y-6">
               <Link to='/collections'><h2 className="text-3xl font-bold text-[#24160f] border-b-2 border-[#6b1d1d] pb-2">
                  MEN'S SHOES
                </h2>
                </Link>
                <p className="text-[#24160f] text-lg leading-relaxed">
                  Hyderabadi men’s footwear is a masterclass in heritage craftsmanship – a seamless blend of tradition, artistry, and elegance that completes the royal silhouette from the ground up. These aren’t just shoes; they are the final stroke in a regal ensemble, each pair echoing the legacy of a time when even the smallest detail spoke volumes of one’s stature and style.
                  </p>
                
              </div>
              <div className="">
                <MensShoes />
              </div>
            </div>
          </section>

          {/* Accessories Section */}
          <section className="group">
            <div className="">
              
              <div className=" mr-17 ml-17 space-y-6">
                <Link to='/collections'><h2 className="text-3xl font-bold text-[#24160f] border-b-2 border-[#6b1d1d] pb-2">
                  MEN'S ACCESSORIES
                </h2>
                </Link>
                <p className="text-[#24160f] text-lg leading-relaxed">
                  Hyderabadi men’s accessories are the crowning glory of traditional elegance — timeless pieces that transform an outfit into a royal statement. Every detail, from the stately turban wrapped with precision and pride, to the ornate brooches gleaming with heritage, speaks of a culture where refinement wasn’t optional — it was expected.
                  </p>
                
                
              </div>
              <div className="">
                <MensAccessories />
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
            <MenTopCollection />
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

export default Men;