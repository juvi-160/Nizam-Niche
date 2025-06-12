import React from "react";
import Layout from "./components/Layout";
import Carosel from "./components/carosel";
import img1 from "./assets/1.1.png";
import img2 from "./assets/1.2.png";
import img3 from "./assets/1.3.png";
import img4 from "./assets/1.4.png";
import img5 from "./assets/1.5.png";
import img6 from "./assets/1.6.png";
import "flowbite";
import { Link } from "react-router";
import TopCollections from "./components/TopCollections.jsx";
import { Flower2, PackageCheck, Wallet, Truck } from "lucide-react";
import img8 from "./assets/us1.png";
import img9 from "./assets/us2.png";
import img10 from "./assets/us3.png";
import img11 from "./assets/us4.png";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import WomenCollection from "./components/WomenCollection.jsx";
import MenTopCollection from "./components/MenTopCollection.jsx";
import ArtifactsTopCollection from "./components/ArtifactsTopCollection.jsx";
import BooksTopCollection from "./components/BooksTopCollection.jsx";
import { Star } from 'lucide-react'; // or wherever your icons are from


function App() {
  return (
    <div className="bg-[#EFD1C0]">
      <Layout>
        <Carosel />
        <ToastContainer />

        {/* Category Section */}
        <section className="category bg-[#EFD1C0] px-4 sm:px-6 md:px-10 py-6">
          <h1 className="text-[#6b1d1d] text-xl sm:text-2xl md:text-3xl font-bold text-center mb-6">
            SHOP YOUR ROYAL COLLECTION
          </h1>
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
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
          <div className="grid grid-cols-2 md:grid-cols-2">
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
        <div>
          <h1 className="text-[#6b1d1d] text-2xl sm:text-3xl md:text-4xl font-bold text-center mt-10 mb-4">
            Explore Our Top Women Collections
          </h1>
          <WomenCollection />
        </div>

        <div>
          <h1 className="text-[#6b1d1d] text-2xl sm:text-3xl md:text-4xl font-bold text-center mt-10 mb-4">
            Explore Our Top Mens Collections
          </h1>
          <MenTopCollection />
        </div>

        <div>
          <h1 className="text-[#6b1d1d] text-2xl sm:text-3xl md:text-4xl font-bold text-center mt-10 mb-4">
            Explore Our Top Artifacts Collections
          </h1>
          <ArtifactsTopCollection />
        </div>
        <div>
          <h1 className="text-[#6b1d1d] text-2xl sm:text-3xl md:text-4xl font-bold text-center mt-10 mb-4">
            Explore Our Top Book Collections
          </h1>
         <BooksTopCollection />
        </div>
        
        
        
        
        <TopCollections />


        {/* About Us */}
        <section className="bg-[#6b1d1d] text-[#efd1c0] py-16 px-4 sm:px-8 lg:px-24">
          <div className="max-w-6xl mx-auto">
            {/* Heading */}
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium leading-tight mb-6 px-4 sm:px-8">
                At The Nizam's Niche, we collaborate with local artisans to revive
                <span className="block mt-2 text-[#f8d5b8] font-normal">
                  traditional crafts and empower small-scale businesses.
                </span>
              </h2>
            </div>

            {/* Image Gallery */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8 my-10">
              {[img8, img9, img10, img11].map((img, index) => (
                <div key={index} className="group relative overflow-hidden rounded-xl shadow-2xl hover:shadow-[#efd1c0]/20 transition-all duration-300">
                  <img
                    src={img}
                    alt={`value${index + 1}`}
                    className="w-full h-48 sm:h-56 object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#6b1d1d]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <span className="text-white font-medium">Artisan Craft #{index + 1}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Value Propositions */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
              {[
                { icon: <PackageCheck size={48} />, text: "Guaranteed Quality" },
                { icon: <Flower2 size={48} />, text: "Sustainability" },
                { icon: <Wallet size={48} />, text: "Affordable Prices" },
                { icon: <Truck size={48} />, text: "Fast Delivery" },
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center p-6 bg-[#7a2a2a] rounded-xl hover:bg-[#8a3a3a] transition-all duration-300 group"
                >
                  <div className="p-3 mb-4 text-[#f8d5b8] group-hover:text-white transition-colors">
                    {item.icon}
                  </div>
                  <p className="text-lg font-semibold text-center group-hover:text-[#f8d5b8] transition-colors">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Reviews Section */}
        <section className="py-16 px-4 sm:px-8">
          <div className="max-w-7xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-[#6b1d1d] mb-4">
                Voices of Our Customers
              </h2>
              <div className="w-20 h-1 bg-[#6b1d1d] mx-auto"></div>
            </div>

            {/* Review Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Review 1 */}
              <div className="bg-[#24160f] rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
                <div className="p-6 h-full flex flex-col">
                  <div className="flex items-center mb-4">
                    <div className="text-yellow-400 flex">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={18} fill="currentColor" />
                      ))}
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-[#6b1d1d] mb-3">
                    Exquisite Craftsmanship
                  </h3>
                  <p className="text-[#efd1c0] mb-4 flex-grow">
                    "The pearl earrings I purchased are absolutely stunning. The attention to detail is remarkable - you can see the artisan's skill in every curve. They've become my favorite accessory for special occasions."
                  </p>
                  <div className="flex items-center">
                    <div className="bg-[#6b1d1d] text-white rounded-full w-10 h-10 flex items-center justify-center mr-3">
                      <span className="font-medium">SR</span>
                    </div>
                    <div>
                      <p className="font-medium text-[#6b1d1d]">Shreya R.</p>
                      <p className="text-sm text-[#efd1c0]">Hyderabad</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Review 2 */}
              <div className="bg-[#24160f] rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
                <div className="p-6 h-full flex flex-col">
                  <div className="flex items-center mb-4">
                    <div className="text-yellow-400 flex">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={18} fill="currentColor" />
                      ))}
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-[#6b1d1d] mb-3">
                    Authentic Heritage Pieces
                  </h3>
                  <p className="text-[#efd1c0] mb-4 flex-grow">
                    "As someone who collects traditional Indian crafts, I was impressed by the authenticity of Nizam's Niche products. The Bidriware box I bought is a masterpiece that perfectly represents Deccani art."
                  </p>
                  <div className="flex items-center">
                    <div className="bg-[#6b1d1d] text-white rounded-full w-10 h-10 flex items-center justify-center mr-3">
                      <span className="font-medium">AK</span>
                    </div>
                    <div>
                      <p className="font-medium text-[#6b1d1d]">Arjun K.</p>
                      <p className="text-sm text-[#efd1c0]">Delhi</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Review 3 */}
              <div className="bg-[#24160f] rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
                <div className="p-6 h-full flex flex-col">
                  <div className="flex items-center mb-4">
                    <div className="text-yellow-400 flex">
                      {[...Array(4)].map((_, i) => (
                        <Star key={i} size={18} fill="currentColor" />
                      ))}
                      <Star size={18} fill="#e5e7eb" />
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-[#6b1d1d] mb-3">
                    Beautiful but Delivery Delayed
                  </h3>
                  <p className="text-[#efd1c0] mb-4 flex-grow">
                    "The Pochampally silk scarf is gorgeous and the colors are vibrant. However, it arrived a week later than expected. The quality makes up for the delay though!"
                  </p>
                  <div className="flex items-center">
                    <div className="bg-[#6b1d1d] text-white rounded-full w-10 h-10 flex items-center justify-center mr-3">
                      <span className="font-medium">PM</span>
                    </div>
                    <div>
                      <p className="font-medium text-[#6b1d1d]">Priya M.</p>
                      <p className="text-sm text-[#efd1c0]">Mumbai</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Review 4 */}
              <div className=" bg-[#24160f] rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
                <div className="p-6 h-full flex flex-col">
                  <div className="flex items-center mb-4">
                    <div className="text-yellow-400 flex">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={18} fill="currentColor" />
                      ))}
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-[#6b1d1d] mb-3">
                    Perfect Gift Choice
                  </h3>
                  <p className="text-[#efd1c0] mb-4 flex-grow">
                    "I bought the Kalamkari wall hanging as a housewarming gift. My friends were amazed by the intricate details! The packaging was elegant and it came with a handwritten note - lovely personal touch."
                  </p>
                  <div className="flex items-center">
                    <div className="bg-[#6b1d1d] text-white rounded-full w-10 h-10 flex items-center justify-center mr-3">
                      <span className="font-medium">RS</span>
                    </div>
                    <div>
                      <p className="font-medium text-[#6b1d1d]">Rahul S.</p>
                      <p className="text-sm text-[#efd1c0]">Bangalore</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

        
          </div>
        </section>
      </Layout>
    </div>
  );
}

export default App;
