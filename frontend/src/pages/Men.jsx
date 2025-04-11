import React from "react";
import Layout from "../components/Layout";
import Card from "../components/Card";
import img1 from "../assets/m1.png";
import img2 from "../assets/m2.png";
import img3 from "../assets/m3.png";
import img4 from "../assets/m4.png";
import img5 from "../assets/m5.png";
import img6 from "../assets/m6.png";
import img7 from "../assets/m7.png";
import img8 from "../assets/m8.png";
import img9 from "../assets/m9.png";
import img10 from "../assets/m10.png";
import img11 from "../assets/m11.png";
import img12 from "../assets/m12.png";
import img13 from "../assets/m13.png";
import img14 from "../assets/m14.png";
import img15 from "../assets/m15.png";
import img16 from "../assets/m101.png";


const Men = () => {
  return (
    <div className='bg-[#EFD1C0]'>
      <Layout>
        {/* main */}
        <div>
          <h1 className="bg-[#24160f] text-[#efd1c0] flex justify-center p-2 text-2xl">
            Redefine Elegance: Timeless Attire for Every Women
          </h1>
          <div style={{ backgroundImage: `url(${img16})` }} className=" flex justify-center p-2 text-xl h-96">
            <h1 className="flex justify-center items-center text-[#efd1c0] font-bold text-4xl">
              Adoring You with Timeless Beauty!
            </h1>
          </div>
        </div>

        {/* clothing */}
        <div>
          <h1 className="flex justify-center pt-10 text-[#24160f] text-2xl font-bold">MEN'S CLOTHING</h1>
          <div className="grid grid-cols-5 gap-2 p-5 mr-15 ml-15">
            <img src={img1} alt="1" />
            <img src={img2} alt="2" />
            <img src={img3} alt="3" />
            <img src={img4} alt="4" />
            <img src={img5} alt="5" />
          </div>
          <p>
          Hyderabadi men’s attire reflects royal heritage, featuring classic sherwanis, intricately embroidered kurtas, and angarkhas. These garments combine tradition with elegance, making every occasion truly special.
          </p>
        </div>

        {/* shoes */}
        <div>
          <h1 className="flex justify-center pt-10 text-[#24160f] text-2xl font-bold">MEN'S SHOES</h1>
          <div className="grid grid-cols-5 gap-2 p-5 mr-15 ml-15">
            <img src={img6} alt="1" />
            <img src={img7} alt="2" />
            <img src={img8} alt="3" />
            <img src={img9} alt="4" />
            <img src={img10} alt="5" />
          </div>
          <p>
          Hyderabadi footwear for men showcases exquisite craftsmanship, from the traditional mojris with detailed embroidery to leather sandals designed for both style and comfort. Perfect for adding a touch of heritage to your look
          </p>
        </div>

        {/* accessories */}
        <div>
          <h1 className="flex justify-center pt-10 text-[#24160f] text-2xl font-bold">MEN'S ACESSORIES</h1>
          <div className="grid grid-cols-5 gap-2 p-5 mr-15 ml-15">
            <img src={img11} alt="1" />
            <img src={img12} alt="2" />
            <img src={img13} alt="3" />
            <img src={img14} alt="4" />
            <img src={img15} alt="5" />
          </div>
          <p>
          Men’s accessories in Hyderabad are steeped in tradition, featuring elegant turbans, ornate brooches, and pearl-studded malas like the Satlada. These accessories complete the regal Hyderabadi look, blending heritage with modern style.
          </p>
          
        </div>

        {/* collections */}
        <div>
          <h1 className="flex justify-center pT-10 text-[#24160f] text-2xl font-bold">MEN'S TOP COLLECTION</h1>
          <div className="grid grid-cols-5 gap-2 p-5 mr-15 ml-15 mb-10">
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

export default Men;
