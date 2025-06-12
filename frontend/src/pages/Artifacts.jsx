import React from "react";
import Layout from "../components/Layout";
import img from "../assets/hero4.jpeg";
import BookFiction from "../components/BookFiction";
import BookHistory from "../components/BookHistory";
import BookCulture from "../components/BookCulture";
import BookCooks from "../components/BookCooks";
import BooksTopCollection from "../components/BooksTopCollection";
import { Link } from "react-router-dom";

const Books = () => {
  return (
    <div className="bg-[#EFD1C0] min-h-screen">
      <Layout>
        {/* Hero Section with Gradient Overlay */}
        <div className="relative">
          <div className="bg-[#24160f] py-4">
            <h1 className="text-center text-[#efd1c0] text-2xl md:text-3xl font-bold tracking-wide">
              Discover Hyderabad's Legacy, One Page at a Time
            </h1>
          </div>
          <div
            style={{ backgroundImage: `linear-gradient(rgba(36, 22, 15, 0.3), rgba(36, 22, 15, 0.3)), url(${img})` }}
            className="flex justify-center items-center text-center h-96 md:h-screen/75 bg-cover bg-center bg-no-repeat"
          >
            <div className="max-w-4xl px-6">
              <h1 className="text-4xl md:text-6xl font-bold text-[#efd1c0] mb-6 animate-fade-in">
                Explore the Stories, Flavors and Traditions of Hyderabad
              </h1>
              <Link 
                to="/collections" 
                className="inline-block bg-[#6b1d1d] hover:bg-[#501414] text-[#efd1c0] font-semibold px-8 py-3 rounded-md transition-all duration-300 transform hover:scale-105"
              >
                Browse Our Library
              </Link>
            </div>
          </div>
        </div>

        {/* Category Sections */}
        <div className="max-w-7xl mx-auto px-6 py-12 space-y-20">
          {/* Fiction and Poetry Section */}
          <section className="group">
            <div className="">
              
              <div className="ml-15 mr-10 space-y-6">
                <Link to="/collections?category=Books&genre=Fiction & Poetry">
                  <h2 className="text-3xl font-bold text-[#24160f] border-b-2 border-[#6b1d1d] pb-2">
                    FICTION AND POETRY
                  </h2>
                </Link>
                <p className="text-[#24160f] text-lg leading-relaxed">
                  Experience the creativity of Hyderabad through its fiction and poetry. 
                  Our collection features works by renowned Hyderabadi authors like 
                  Sarojini Naidu and Jeelani Bano, whose words capture the city's soul. 
                  From contemporary novels to timeless ghazals, each book offers a 
                  window into Hyderabad's literary heritage.
                </p>
                <p className="text-[#24160f] text-lg leading-relaxed">
                  Discover award-winning regional literature translated into English, 
                  preserving the beauty of Urdu and Telugu storytelling for global readers.
                </p>
            
              </div>
              <div className="">
                <BookFiction />
              </div>
            </div>
          </section>

          {/* History Section - Reverse Layout */}
          <section className="group">
            <div className="">
              
              <div className="mr-15 ml-15 space-y-6">
                <Link to="/collections?category=Books&genre=History">
                  <h2 className="text-3xl font-bold text-[#24160f] border-b-2 border-[#6b1d1d] pb-2">
                    HISTORY
                  </h2>
                </Link>
                <p className="text-[#24160f] text-lg leading-relaxed">
                  Unveil the fascinating stories of Hyderabad's past through our 
                  meticulously curated history collection. From the Qutb Shahi dynasty 
                  to the Nizams' golden era, these books document the political intrigue, 
                  architectural marvels, and cultural evolution that shaped the city.
                </p>
                <p className="text-[#24160f] text-lg leading-relaxed">
                  Featured works include rare archival photographs, first-hand accounts 
                  from British residents, and newly translated Persian manuscripts that 
                  reveal untold chapters of Deccan history.
                </p>
                
              </div>
              <div className="">
                <BookHistory />
              </div>
            </div>
          </section>

          {/* Culture and Heritage Section */}
          <section className="group">
            <div className="">
              
              <div className=" mr-15 ml-15 space-y-6">
                <Link to="/collections?category=Books&genre=Culture & Heritage">
                  <h2 className="text-3xl font-bold text-[#24160f] border-b-2 border-[#6b1d1d] pb-2">
                    CULTURE AND HERITAGE
                  </h2>
                </Link>
                <p className="text-[#24160f] text-lg leading-relaxed">
                  Immerse yourself in Hyderabad's vibrant cultural tapestry through 
                  our heritage collection. These books explore the city's iconic festivals 
                  like Bonalu and Bathukamma, traditional crafts such as Bidriware and 
                  Kalamkari, and the evolution of Hyderabadi Urdu.
                </p>
                <p className="text-[#24160f] text-lg leading-relaxed">
                  Special editions document the restoration of historic landmarks 
                  like Chowmahalla Palace and the musical legacy of the Taramati 
                  Baradari cultural complex.
                </p>
                
              </div>
              <div className="">
                <BookCulture />
              </div>
            </div>
          </section>

          {/* Cook Books Section - Reverse Layout */}
          <section className="group">
            <div className="">
              
              <div className="mr-15 ml-15 space-y-6">
                <Link to="/collections?category=Books&genre=Cook Books">
                  <h2 className="text-3xl font-bold text-[#24160f] border-b-2 border-[#6b1d1d] pb-2">
                    COOK BOOKS
                  </h2>
                </Link>
                <p className="text-[#24160f] text-lg leading-relaxed">
                  Discover the secrets of Hyderabadi cuisine with our authentic 
                  cookbook collection. These volumes preserve royal kitchen traditions, 
                  featuring heirloom recipes from the Nizams' palaces alongside 
                  beloved street food classics.
                </p>
                <p className="text-[#24160f] text-lg leading-relaxed">
                  From the perfect Dum Biryani to Irani chai and Double Ka Meetha, 
                  each recipe comes with historical notes about its origins and 
                  cultural significance in Hyderabad's culinary landscape.
                </p>
              
              </div>
              <div className="">
                <BookCooks />
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
            <BooksTopCollection />
            <div className="text-center mt-10">
              <Link 
                to="/collections" 
                className="inline-block border-2 border-[#efd1c0] text-[#efd1c0] hover:bg-[#efd1c0] hover:text-[#24160f] font-semibold px-8 py-3 rounded-md transition-all duration-300"
              >
                View All Book Collections
              </Link>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default Books;