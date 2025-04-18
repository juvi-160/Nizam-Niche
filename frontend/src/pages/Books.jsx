import React from "react";
import Layout from "../components/Layout";
import Card from "../components/Card";
import img from "../assets/b101.png";

const Books = () => {
  return (
    <div className="bg-[#EFD1C0]">
      <Layout>
        {/* main */}
        <div>
          <h1 className="bg-[#24160f] text-[#efd1c0] font-bold flex justify-center p-2 text-xl md:text-2xl text-center">
            Discover Hyderabad's legacy, one page at a time
          </h1>
          <div
            style={{ backgroundImage: `url(${img})` }}
            className="flex justify-center items-center h-[500px] md:h-[600px] bg-cover bg-center p-4"
          >
            <h1 className="text-[#efd1c0] font-bold text-xl md:text-4xl text-center px-4 shadow-2xl">
              Explore the stories, flavors and tradition that define Hyderabad
            </h1>
          </div>
        </div>

        {/* fiction and poetry */}
        <div>
          <h1 className="text-center pt-10 text-[#24160f] text-xl md:text-2xl font-bold">
            FICTION AND POETRY
          </h1>
          <div className="grid grid-cols-4 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-4 gap-2 p-8">
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
          <div className="text-[#24160f] text-sm md:text-xl text-center px-6 md:px-10 pb-10 font-bold">
            <p>
              Experience the creativity of Hyderabad through its fiction and
              poetry. Each page offers a glimpse into the city’s literary soul,
              filled with stories and verses of love, life, and culture.
            </p>
          </div>
        </div>

        {/* history */}
        <div>
          <h1 className="text-center pt-10 text-[#24160f] text-xl md:text-2xl font-bold">
            HISTORY
          </h1>
          <div className="grid grid-cols-4 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-4 gap-2 p-8">
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
          <div className="text-[#24160f] text-sm md:text-xl text-center px-6 md:px-10 pb-10 font-bold">
            <p>
              Unveil the stories of Hyderabad’s past through captivating history
              books. Dive into the rich legacy that shaped the city’s culture,
              traditions, and heritage.
            </p>
          </div>
        </div>

        {/* culture and heritage */}
        <div>
          <h1 className="text-center pt-10 text-[#24160f] text-xl md:text-2xl font-bold">
            CULTURE AND HERITAGE
          </h1>
          <div className="grid grid-cols-4 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-4 gap-2 p-8">
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
          <div className="text-[#24160f] text-sm md:text-xl text-center px-6 md:px-10 pb-10 font-bold">
            <p>
              Immerse yourself in the cultural fabric of Hyderabad. Our
              collection of books celebrates the traditions, festivals, and
              vibrant history that define this timeless city.
            </p>
          </div>
        </div>

        {/* cook books */}
        <div>
          <h1 className="text-center pt-10 text-[#24160f] text-xl md:text-2xl font-bold">
            COOK BOOK'S
          </h1>
          <div className="grid grid-cols-4 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-4 gap-2 p-8">
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
          <div className="text-[#24160f] text-sm md:text-xl text-center px-6 md:px-10 pb-10 font-bold">
            <p>
              Discover the rich culinary heritage of Hyderabad. From biryanis to
              desserts, these cookbooks bring you closer to the flavors that
              have been passed down through generations.
            </p>
          </div>
        </div>

        {/* explore */}
        <div className="bg-red-700 p-6 md:p-10 mb-10 text-white text-center">
          <h1 className="text-lg md:text-xl font-bold">EXPLORE MORE BOOKS</h1>
          <button className="bg-red-600 rounded-xl px-4 py-2 mt-3 text-sm md:text-base hover:bg-red-800 transition">
            EXPLORE
          </button>
        </div>
      </Layout>
    </div>
  );
};

export default Books;
