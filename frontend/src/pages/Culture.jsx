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
    <div className="bg-[#EFD1C0]">
      <Layout>
        {/* Header */}
        <h1 className="bg-[#24160f] text-[#efd1c0] text-center p-4 text-xl md:text-2xl font-semibold">
          Uncover the Rich Traditions and Timeless Heritage of Hyderabad
        </h1>

        {/* Top Images */}
        <div className="bg-[#6b1d1d] p-4 grid grid-cols-1 md:grid-cols-3 gap-4">
          <img src={img1} alt="1" className="w-full object-cover rounded-md" />
          <img src={img2} alt="2" className="w-full object-cover rounded-md" />
          <img src={img3} alt="3" className="w-full object-cover rounded-md" />
        </div>

        {/* Historical Highlights */}
        <section className="mt-10">
          <h2 className="text-center text-2xl md:text-3xl text-[#24160f] font-bold">Historical Highlights</h2>
          <div className="flex flex-col md:flex-row gap-4 p-4">
            <div className="grid grid-cols-2 gap-2 md:w-1/2">
              <img src={img4} alt="4" className="w-full h-60 object-cover rounded-md" />
              <img src={img5} alt="5" className="w-full h-60 object-cover rounded-md" />
            </div>
            <div className="bg-[#6b1d1d] text-white p-6 md:w-1/2 rounded-md text-justify">
              Hyderabad, known as the "City of Pearls," has a history rooted in grandeur and innovation. Founded in 1591 by Muhammad Quli Qutb Shah, it flourished under the Nizams' rule, blending Indo-Islamic, Persian, and Deccan cultures.
            </div>
          </div>

          <div className="flex flex-col md:flex-row-reverse gap-4 p-4">
            <div className="grid grid-cols-2 gap-2 md:w-1/2">
              <img src={img6} alt="6" className="w-full h-60 object-cover rounded-md" />
              <img src={img7} alt="7" className="w-full h-60 object-cover rounded-md" />
            </div>
            <div className="bg-[#6b1d1d] text-white p-6 md:w-1/2 rounded-md text-justify">
              The city is home to iconic landmarks like the Charminar and Chowmahalla Palace, which stand as symbols of its glorious past. Festivals like Bonalu and Eid reflect its vibrant cultural diversity.
            </div>
          </div>
          <div className="flex justify-center my-6">
            <button className="bg-[#24160f] text-[#efd1c0] px-6 py-2 text-lg rounded-2xl font-bold hover:bg-[#6b1d1d]">
              Buy Products
            </button>
          </div>
        </section>

        {/* Traditional Crafts */}
        <section className="mt-10">
          <h2 className="text-center text-2xl md:text-3xl text-[#24160f] font-bold">Traditional Crafts</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 p-4">
            <img src={img8} alt="11" className="h-60 md:h-80 object-cover rounded-md" />
            <img src={img9} alt="9" className="h-60 md:h-80 object-cover rounded-md" />
            <img src={img10} alt="10" className="h-60 md:h-80 object-cover rounded-md" />
            <img src={img11} alt="11" className="h-60 md:h-80 object-cover rounded-md" />
          </div>
          <div className="bg-[#6b1d1d] text-white p-6 mx-4 mt-4 rounded-md text-justify">
            Hyderabadi artifacts capture the essence of the city’s rich history and artistic legacy. Islamic wall art, with its intricate calligraphy and geometric designs, brings a sense of spiritual elegance to any space. The timeless Bidriware, featuring silver inlay on black metal, offers exquisite vases, trays, and decorative items. Paintings and miniatures, from brass figurines to replicas of iconic monuments, embody the city’s cultural heritage.
          </div>
          <div className="flex justify-center my-6">
            <button className="bg-[#24160f] text-[#efd1c0] px-6 py-2 text-lg rounded-2xl font-bold hover:bg-[#6b1d1d]">
              Buy Products
            </button>
          </div>
        </section>

        {/* Art and Architecture */}
        <section className="mt-10">
          <h2 className="text-center text-2xl md:text-3xl text-[#24160f] font-bold">Art and Architecture</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 p-4">
            <img src={img12} alt="12" className="h-60 md:h-80 object-cover rounded-md" />
            <img src={img13} alt="13" className="h-60 md:h-80 object-cover rounded-md" />
            <img src={img14} alt="14" className="h-60 md:h-80 object-cover rounded-md" />
            <img src={img15} alt="15" className="h-60 md:h-80 object-cover rounded-md" />
          </div>
          <div className="bg-[#6b1d1d] text-white p-6 mx-4 mt-4 rounded-md text-justify">
            Hyderabad's architecture showcases the grandeur of Indo-Islamic design. The Falaknuma Palace epitomizes royal living. The Golconda Fort, a 16th-century marvel, served as the Nizams’ stronghold, while the Mecca Masjid is one of the oldest mosques in India.
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 p-4">
            <img src={img16} alt="16" className="h-60 md:h-80 object-cover rounded-md" />
            <img src={img17} alt="17" className="h-60 md:h-80 object-cover rounded-md" />
            <img src={img18} alt="18" className="h-60 md:h-80 object-cover rounded-md" />
            <img src={img18} alt="18" className="h-60 md:h-80 object-cover rounded-md" />
          </div>
          <div className="flex justify-center my-6">
            <button className="bg-[#24160f] text-[#efd1c0] px-6 py-2 text-lg rounded-2xl font-bold hover:bg-[#6b1d1d]">
              Buy Products
            </button>
          </div>
        </section>

        {/* Fashion Attire */}
        <section className="mt-10">
          <h2 className="text-center text-2xl md:text-3xl text-[#24160f] font-bold">Fashion Attire</h2>
          <div className="p-4">
            <img src={img19} alt="19" className="w-full h-auto object-cover rounded-md" />
          </div>
          <div className="bg-[#6b1d1d] text-white p-6 mx-4 rounded-md text-justify">
            Hyderabad's fashion reflects its royal legacy. Sherwanis symbolize sophistication, while the Khada Dupatta exudes cultural grace. Pathani suits offer a stylish blend of tradition and comfort.
          </div>
          <div className="flex justify-center my-6">
            <button className="bg-[#24160f] text-[#efd1c0] px-6 py-2 text-lg rounded-2xl font-bold hover:bg-[#6b1d1d]">
              Buy Products
            </button>
          </div>
        </section>

        {/* Cuisine */}
        <section className="mt-10 mb-10">
          <h2 className="text-center text-2xl md:text-3xl text-[#24160f] font-bold">Cuisine</h2>
          <div className="bg-[#6b1d1d] text-white p-6 mx-4 mt-4 rounded-md text-justify">
            Hyderabad's culinary legacy is unparalleled, with iconic dishes like the fragrant biryani, hearty haleem, and Qubani ka Meetha.
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 p-4">
            <img src={img20} alt="20" className="h-60 md:h-80 object-cover rounded-md" />
            <img src={img21} alt="21" className="h-60 md:h-80 object-cover rounded-md" />
            <img src={img22} alt="22" className="h-60 md:h-80 object-cover rounded-md" />
            <img src={img23} alt="23" className="h-60 md:h-80 object-cover rounded-md" />
          </div>
          <div className="flex justify-center mt-6">
            <button className="bg-[#24160f] text-[#efd1c0] px-6 py-2 text-lg rounded-2xl font-bold hover:bg-[#6b1d1d]">
              Buy Products
            </button>
          </div>
        </section>
      </Layout>
    </div>
  );
};

export default Culture;
