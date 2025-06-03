import React from "react";
import Layout from "../components/Layout";
import img6 from "../assets/a101.png";
import ArtifactSculpture from "../components/ArtifactsSculpture";
import ArtifactBidiriware from "../components/ArtifactBidiriware";
import ArtifactsIslamic from "../components/ArtifactsIslamic";
import ArtifactsPainting from "../components/ArtifactsPainting";
import ArtifactsTopCollection from "../components/ArtifactsTopCollection"

const Artifacts = () => {
  return (
    <div className="bg-[#EFD1C0]">
      <Layout>
        {/* Hero Section */}
        <div>
          <h1 className="bg-[#24160f] text-[#efd1c0] text-center font-bold p-3 text-xl md:text-2xl">
            Where heritage meets artistry in every piece
          </h1>
          <div
            style={{ backgroundImage: `url(${img6})` }}
            className="flex justify-center items-center h-[300px] md:h-160 bg-cover bg-center p-4"
          >
            <h1 className="text-[#efd1c0] font-bold text-2xl md:text-4xl text-center px-4 shadow-2xl">
              Preserve the past, adorn your present with timeless Hyderabadi craftsmanship
            </h1>
          </div>
        </div>

        {/* Sculptures */}
        <div>
          <h1 className="text-center pt-10 text-[#24160f] text-xl md:text-2xl font-bold">
            SCULPTURES AND MINIATURES
          </h1>
          {/* <div className="grid grid-cols-2 md:grid-cols-2 gap-4 p-5 m-5 pr-10 pl-10 ">
            <img src={img1} alt="1" className="w-full h-60 object-cover rounded-md" />
            <img src={img2} alt="2" className="w-full h-60 object-cover rounded-md" />
          </div> */}
          <ArtifactSculpture/>
          <p className="text-[#24160f] text-base md:text-xl text-center px-10 pb-10 font-bold">
            Hyderabadi sculptures and miniatures are a celebration of the city’s architectural and cultural grandeur. From finely crafted brass figurines to detailed replicas of iconic landmarks like Charminar, each piece reflects the artistry and heritage of Hyderabad.
          </p>
          <div className="flex justify-center items-center mb-10">
          <button className="bg-[#24160f] p-5 rounded-2xl text-[#efd1c0] items-center flex justify-center hover:bg-[#6b1d1d] font-bold ">SHOP ACCESSORIES NOW!</button>
          </div>
        </div>

        {/* Bidriware */}
        <div>
          <h1 className="text-center pt-10 text-[#24160f] text-xl md:text-2xl font-bold">BIDRIWARE</h1>
          {/* <div className="p-5 m-5 pr-10 pl-10">
            <img src={img3} alt="1" className="w-full h-75 object-cover rounded-md " />
          </div> */}
          <ArtifactBidiriware/>
          <p className="text-[#24160f] text-base md:text-xl text-center px-10 pb-10 font-bold">
            Bidriware, a hallmark of Hyderabadi artistry, features stunning silver inlay on dark metal. From vases to trays, each handcrafted piece is a masterpiece of elegance and tradition.
          </p>
          <div className="flex justify-center items-center mb-10">
          <button className="bg-[#24160f] p-5 rounded-2xl text-[#efd1c0] items-center flex justify-center hover:bg-[#6b1d1d] font-bold ">SHOP ACCESSORIES NOW!</button>
          </div>
        </div>

        {/* Islamic Art */}
        <div>
          <h1 className="text-center pt-10 text-[#24160f] text-xl md:text-2xl font-bold">ISLAMIC ART</h1>
          {/* <div className="p-5 m-5 pr-10 pl-10">
            <img src={img4} alt="1" className="w-full h-75 object-cover rounded-md" />
          </div> */}
          <ArtifactsIslamic/>
          <p className="text-[#24160f] text-base md:text-xl text-center px-10 pb-10 font-bold">
            Hyderabadi Islamic wall art beautifully blends spiritual grace with artistic mastery, showcasing intricate Arabic calligraphy and geometric patterns.
          </p>
          <div className="flex justify-center items-center mb-10">
          <button className="bg-[#24160f] p-5 rounded-2xl text-[#efd1c0] items-center flex justify-center hover:bg-[#6b1d1d] font-bold ">SHOP ACCESSORIES NOW!</button>
          </div>
        </div>

        {/* Paintings */}
        <div>
          <h1 className="text-center pt-10 text-[#24160f] text-xl md:text-2xl font-bold">PAINTINGS</h1>
          {/* <div className="px-5 py-5 p-5 m-5 pr-10 pl-10">
            <img src={img5} alt="1" className="w-full h-75 object-cover rounded-md" />
          </div> */}
          <ArtifactsPainting/>
          <p className="text-[#24160f] text-base md:text-xl text-center px-10 pb-10 font-bold">
            Hyderabadi paintings, including Nirmal art, bring to life the grandeur of royal courts and the beauty of Deccan landscapes. Each stroke reflects the vibrant history and artistic flair of the region.
          </p>
          <div className="flex justify-center items-center mb-10">
          <button className="bg-[#24160f] p-5 rounded-2xl text-[#efd1c0] items-center flex justify-center hover:bg-[#6b1d1d] font-bold ">SHOP ACCESSORIES NOW!</button>
          </div>
        </div>

        <div>
          <ArtifactsTopCollection/>
        </div>


      </Layout>
    </div>
  );
};

export default Artifacts;
