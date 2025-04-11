import React from "react";
import Layout from "../components/Layout";
import Card from "../components/Card";

const Books = () => {
  return (
    <div className='bg-[#EFD1C0]'>
      <Layout>
        {/* main */}
        <div>
          <h1 className="bg-slate-400 flex justify-center p-2 text-2xl">
            Discover Hyderabad's legacy, one page at a time
          </h1>
          <div className="bg-slate-300 flex justify-center p-2 text-xl h-96">
            <h1 className="flex justify-center items-center">
              Explore the stories, flavors and tradition that define hyderabad
            </h1>
          </div>
        </div>

        {/* fiction and poetry */}
        <div>
          <h1 className="flex justify-center p-10">FICTION AND POETRY</h1>
          <div className="grid grid-cols-5 gap-2 p-5 ">
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
          <div className="flex justify-center p-10 m-10">
            <p> Experience the creativity of Hyderabad through its fiction and poetry. Each page offers a glimpse into the city’s literary soul, filled with stories and verses of love, life, and culture</p>
          </div>
        </div>

        {/* history */}
        <div>
          <h1 className="flex justify-center p-10">HISTORY</h1>
          <div className="grid grid-cols-5 gap-2 p-5 ">
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
          <div className="flex justify-center p-10 m-10">
            <p> Unveil the stories of Hyderabad’s past through captivating history books. Dive into the rich legacy that shaped the city’s culture, traditions, and heritage.</p>
          </div>
        </div>

        {/* CULTURE AND HERITAGE */}
        <div>
          <h1 className="flex justify-center p-10">CULTURE AND HERITAGE</h1>
          <div className="grid grid-cols-5 gap-2 p-5 ">
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
          <div className="flex justify-center p-10 m-10">
            <p> Immerse yourself in the cultural fabric of Hyderabad. Our collection of books celebrates the traditions, festivals, and vibrant history that define this timeless city</p>
          </div>
        </div>

        {/* COOK BOOKS */}
        <div>
          <h1 className="flex justify-center p-10">COOK BOOK'S</h1>
          <div className="grid grid-cols-5 gap-2 p-5 ">
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
          <div className="flex justify-center p-10 m-10">
            <p> Discover the rich culinary heritage of Hyderabad. From biryanis to desserts, these cookbooks bring you closer to the flavors that have been passed down through generations</p>
          </div>
        </div>

        {/* EXPLORE */}
        <div className="bg-red-700 p-10 mb-10 ">
          <h1 className="ml-10">EXPLORE MORE BOOKS</h1>
          <button className="bg-red-600 rounded-xl p-2 ml-10 mb-10 mt-2">EXPLORE</button>
        </div>
      </Layout>
    </div>
  );
};

export default Books;
