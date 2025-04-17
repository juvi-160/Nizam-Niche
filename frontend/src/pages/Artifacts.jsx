import React from "react";
import Layout from "../components/Layout";
import img1 from "../assets/a1.png";
import img2 from "../assets/a2.png";
import img3 from "../assets/a3.png";
import img4 from "../assets/a4.png";
import img5 from "../assets/a5.png";
import img6 from "../assets/a101.png";

const Artifacts = () => {
  return (
    <div className='bg-[#EFD1C0]'>
      <Layout>
        {/* main */}
        <div>
          <h1 className="bg-[#24160f] text-[#efd1c0] flex justify-center p-2 text-2xl">
            Where heritage meets artistry in every piece
          </h1>
          <div style={{ backgroundImage: `url(${img6})` }} className=" flex justify-center p-2 text-xl h-160">
            <h1 className="flex justify-center items-center text-[#efd1c0] font-bold text-4xl">
              Preserve the past, adorn your present with timeless hyderabadi craftsmanship
            </h1>
          </div>
        </div>

        {/* figures */}
        <div>
          <h1 className="flex justify-center pt-10 text-[#24160f] text-2xl font-bold">SCULPTURES AND MINIATURES</h1>
          <div className="grid grid-cols-2  gap-4 pr-30 pl-30 pt-5 mr-15 ml-15 justify-center items-center">
            <img src={img1} alt="1" className="w-full h-80"/>
            <img src={img2} alt="2" className="w-full h-80"/>
          </div>
          <div className="flex justify-center pr-10 pt-10 pl-10 pb-10 mr-10 ml-10 mb-10 text-[#24160f] text-2xl">
            <p> Hyderabadi sculptures and miniatures are a celebration of the city’s architectural and cultural grandeur. From finely crafted brass figurines to detailed replicas of iconic landmarks like Charminar  each piece reflects the artistry and heritage of Hyderabad, making them perfect decor for any space.</p>
          </div>
        </div>

        {/* bidiriware */}
        <div>
          <h1 className="flex justify-center pt-10 text-[#24160f] text-2xl font-bold">BIDRIWARE</h1>
          <div className="p-5 mr-15 ml-15">
            <img src={img3} alt="1" className="w-full h-80" />
          </div>
          <div className="flex justify-center pr-10 pt-5 pl-10 pb-10 mr-10 ml-10 mb-10 text-[#24160f] text-2xl">
            <p> Bidriware, a hallmark of Hyderabadi artistry, features stunning silver inlay on dark metal. From vases to trays, each handcrafted piece is a masterpiece of elegance and tradition, rooted in the Deccan’s rich heritage.</p>
          </div>
        </div>

        {/* islamic art */}
        <div>
          <h1 className="flex justify-center pt-10 text-[#24160f] text-2xl font-bold">ISLAMIC ART</h1>
          <div className="p-5 mr-15 ml-15">
            <img src={img4} alt="1" className="w-full h-80" />
          </div>
          <div className="flex justify-center pr-10 pt-5 pl-10 pb-10 mr-10 ml-10 mb-10 text-[#24160f] text-2xl">
            <p> Hyderabadi Islamic wall art beautifully blends spiritual grace with artistic mastery, showcasing intricate Arabic calligraphy and geometric patterns. These pieces serve as timeless decor, embodying the essence of faith and culture</p>
          </div>
        </div>

        {/* paintings */}
        <div>
          <h1 className="flex justify-center pt-10 text-[#24160f] text-2xl font-bold">PAINTINGS</h1>
          <div className="pr-10 pl-10 m-10">
            <img src={img5} alt="1" className="w-full h-80" />
          </div>
          <div className="flex justify-center pr-10 pl-10 pb-10 mr-10 ml-10 mb-10 text-[#24160f] text-2xl">
            <p> Hyderabadi paintings, including Nirmal art, bring to life the grandeur of royal courts and the beauty of Deccan landscapes. Each stroke reflects the vibrant history and artistic flair of the region</p>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default Artifacts;
