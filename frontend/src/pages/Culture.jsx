import React from "react";
import Layout from "../components/Layout";
import img1 from "../assets/c1.png";
import img2 from "../assets/c2.png";
import img3 from "../assets/c3.png";
import img4 from "../assets/c4.png";
import img5 from "../assets/c5.png";
import img6 from "../assets/c6.png";
import img7 from "../assets/c7.png";
import img8 from "../assets/c8.png";
import img9 from "../assets/c9.png";
import img10 from "../assets/c10.png";
import img11 from "../assets/c11.png";
import img12 from "../assets/c12.png";
import img13 from "../assets/c13.png";
import img14 from "../assets/c14.png";
import img15 from "../assets/c15.png";
import img16 from "../assets/c16.png";
import img17 from "../assets/c17.png";
import img18 from "../assets/c18.png";
import img19 from "../assets/c19.png";
import img20 from "../assets/c20.png";
import img21 from "../assets/c21.png";
import img22 from "../assets/c22.png";
import img23 from "../assets/c23.png";

const Culture = () => {
  return (
    <div className="bg-[#efd1c0]">
      <Layout>
        {/* Hero Header */}
        <div className="relative h-96 overflow-hidden">
          <div className="absolute inset-0 bg-[#24160f]/70 flex items-center justify-center">
            <div className="text-center px-4">
              <h1 className="text-3xl md:text-5xl font-bold text-[#efd1c0] mb-4">
                Uncover Hyderabad's Rich Heritage
              </h1>
              <p className="text-xl text-[#f8d5b8] max-w-2xl mx-auto">
                Explore the timeless traditions and royal legacy of the City of Pearls
              </p>
            </div>
          </div>
          <img 
            src={img1} 
            alt="Hyderabad Heritage" 
            className="w-full h-full object-cover"
          />
        </div>

        {/* Introduction Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0.5 bg-[#6b1d1d] max-w-7xl mx-auto my-12 rounded-xl overflow-hidden shadow-xl">
          {[img2, img3, img4].map((img, index) => (
            <div key={index} className="relative group overflow-hidden h-64">
              <img 
                src={img} 
                alt={`Cultural Highlight ${index + 1}`} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <button className="px-6 py-2 bg-[#efd1c0] text-[#24160f] rounded-full font-medium">
                  View Collection
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Historical Highlights */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#24160f] mb-2">
              Historical Highlights
            </h2>
            <div className="w-24 h-1 bg-[#6b1d1d] mx-auto"></div>
          </div>

          <div className="flex flex-col lg:flex-row gap-8 mb-12">
            <div className="lg:w-1/2 grid grid-cols-2 gap-4">
              <div className="relative h-80 rounded-xl overflow-hidden">
                <img src={img5} alt="Charminar" className="w-full h-full object-cover" />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                  <h3 className="text-white font-medium">The Iconic Charminar</h3>
                </div>
              </div>
              <div className="relative h-80 rounded-xl overflow-hidden">
                <img src={img6} alt="Golconda" className="w-full h-full object-cover" />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                  <h3 className="text-white font-medium">Golconda Fort</h3>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2 bg-[#6b1d1d] text-[#efd1c0] p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold mb-4">A Legacy of Grandeur</h3>
              <p className="mb-4">
                Founded in 1591 by Muhammad Quli Qutb Shah, Hyderabad flourished under the Nizams' rule, blending Indo-Islamic, Persian, and Deccan cultures into a unique heritage.
              </p>
              <p>
                The city's landmarks like the Charminar and Chowmahalla Palace stand as symbols of its glorious past, while festivals like Bonalu and Eid reflect its vibrant diversity.
              </p>
            </div>
          </div>

          <div className="flex justify-center">
            <button className="px-8 py-3 bg-[#24160f] text-[#efd1c0] rounded-full font-bold hover:bg-[#6b1d1d] transition-colors shadow-lg">
              Explore Historical Artifacts
            </button>
          </div>
        </section>

        {/* Traditional Crafts */}
        <section className="bg-[#6b1d1d] py-16 px-4 sm:px-6 mb-20">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-[#efd1c0] mb-2">
                Traditional Crafts
              </h2>
              <div className="w-24 h-1 bg-[#efd1c0] mx-auto"></div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
              {[img8, img9, img10, img11].map((img, index) => (
                <div key={index} className="group relative overflow-hidden rounded-xl h-80">
                  <img 
                    src={img} 
                    alt={`Craft ${index + 1}`} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <button className="px-4 py-2 bg-[#efd1c0] text-[#24160f] rounded-full font-medium">
                      View Details
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-[#24160f] text-[#efd1c0] p-8 rounded-xl shadow-inner max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold mb-4 text-center">Artisanal Masterpieces</h3>
              <p className="text-center">
                Hyderabadi artifacts capture the city's artistic legacy, from intricate Islamic calligraphy to timeless Bidriware with silver inlay. Our collection includes exquisite vases, trays, and decorative items that embody centuries of craftsmanship.
              </p>
            </div>

            <div className="flex justify-center mt-12">
              <button className="px-8 py-3 bg-[#efd1c0] text-[#24160f] rounded-full font-bold hover:bg-[#f8d5b8] transition-colors shadow-lg">
                Shop Traditional Crafts
              </button>
            </div>
          </div>
        </section>

        {/* Art and Architecture */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#24160f] mb-2">
              Art & Architecture
            </h2>
            <div className="w-24 h-1 bg-[#6b1d1d] mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {[img12, img13, img14, img15].map((img, index) => (
              <div key={index} className="relative group overflow-hidden rounded-xl h-80">
                <img 
                  src={img} 
                  alt={`Architecture ${index + 1}`} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end p-4">
                  <h3 className="text-white font-medium text-lg">
                    {['Falaknuma Palace', 'Mecca Masjid', 'Qutb Shahi Tombs', 'Salar Jung Museum'][index]}
                  </h3>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-[#6b1d1d] text-[#efd1c0] p-8 rounded-xl shadow-lg mb-12">
            <h3 className="text-2xl font-bold mb-4">Indo-Islamic Splendor</h3>
            <p>
              Hyderabad's architecture showcases the grandeur of Indo-Islamic design. The Falaknuma Palace epitomizes royal living, while the 16th-century Golconda Fort served as the Nizams' stronghold. The Mecca Masjid remains one of India's oldest and most revered mosques.
            </p>
          </div>

          <div className="flex justify-center">
            <button className="px-8 py-3 bg-[#24160f] text-[#efd1c0] rounded-full font-bold hover:bg-[#6b1d1d] transition-colors shadow-lg">
              Discover Architectural Replicas
            </button>
          </div>
        </section>

        {/* Fashion Attire */}
        <section className="bg-[#f8d5b8] py-16 px-4 sm:px-6 mb-20">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-[#24160f] mb-2">
                Royal Fashion Attire
              </h2>
              <div className="w-24 h-1 bg-[#6b1d1d] mx-auto"></div>
            </div>

            <div className="flex flex-col lg:flex-row gap-8 mb-12">
              <div className="lg:w-2/3 relative rounded-xl overflow-hidden h-96">
                <img 
                  src={img19} 
                  alt="Hyderabadi Fashion" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-transparent flex items-center pl-12">
                  <div className="max-w-md">
                    <h3 className="text-2xl font-bold text-white mb-4">Regal Elegance</h3>
                    <p className="text-white">
                      Experience the sophistication of traditional Hyderabadi attire that blends Mughal influences with Deccani charm.
                    </p>
                  </div>
                </div>
              </div>
              <div className="lg:w-1/3 bg-[#6b1d1d] text-[#efd1c0] p-8 rounded-xl shadow-lg">
                <h3 className="text-2xl font-bold mb-4">Signature Styles</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-[#efd1c0] rounded-full mt-2 mr-2"></span>
                    <span>Sherwanis - Symbol of royal sophistication</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-[#efd1c0] rounded-full mt-2 mr-2"></span>
                    <span>Khada Dupatta - The epitome of cultural grace</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-[#efd1c0] rounded-full mt-2 mr-2"></span>
                    <span>Pathani suits - Traditional yet contemporary</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="flex justify-center">
              <button className="px-8 py-3 bg-[#24160f] text-[#efd1c0] rounded-full font-bold hover:bg-[#6b1d1d] transition-colors shadow-lg">
                Browse Royal Fashion
              </button>
            </div>
          </div>
        </section>

        {/* Cuisine */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#24160f] mb-2">
              Delectable Cuisine
            </h2>
            <div className="w-24 h-1 bg-[#6b1d1d] mx-auto"></div>
          </div>

          <div className="bg-[#6b1d1d] text-[#efd1c0] p-8 rounded-xl shadow-lg mb-12">
            <h3 className="text-2xl font-bold mb-4 text-center">A Culinary Legacy</h3>
            <p className="text-center">
              Hyderabad's culinary heritage is unparalleled, with iconic dishes like the fragrant biryani, hearty haleem, and the decadent Qubani ka Meetha. Each recipe carries centuries of royal tradition and local innovation.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[img20, img21, img22, img23].map((img, index) => (
              <div key={index} className="relative group overflow-hidden rounded-xl h-64">
                <img 
                  src={img} 
                  alt={`Cuisine ${index + 1}`} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="text-white font-medium text-lg">
                    {['Hyderabadi Biryani', 'Haleem', 'Double Ka Meetha', 'Irani Chai'][index]}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-12">
            <button className="px-8 py-3 bg-[#24160f] text-[#efd1c0] rounded-full font-bold hover:bg-[#6b1d1d] transition-colors shadow-lg">
              Explore Culinary Products
            </button>
          </div>
        </section>
      </Layout>
    </div>
  );
};

export default Culture;