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
    <div className='bg-[#EFD1C0]'>
      <Layout>
        {/* main */}
        <div>
          <div>
            <h1 className='bg-[#24160f] text-[#efd1c0] flex justify-center p-2 text-2xl'>
              Uncover the Rich traditions and timless heriatge of Hyderabad
            </h1>
          </div>
          <div className="bg-[#6b1d1d]">
            <div className="grid grid-cols-3 gap-10 p-10">
              <img src={img1} alt="1" className="h-120 w-full" />
              <img src={img2} alt="2" className="h-120 w-full" />
              <img src={img3} alt="3" className="h-120 w-full" />
            </div>
          </div>
        </div>

        {/* Historical highlights */}
        <div>
          <h1 className='flex justify-center pt-10 text-[#24160f] text-3xl font-bold'>Historical Highlights</h1>
          <div className="flex gap-2 m-10">
            <div className="grid grid-cols-2 ">
              <img src={img4} alt="1" className="h-60 w-full" />
              <img src={img5} alt="2" className="h-60 w-full" />
            </div>
            <div className="flex justify-center items-center bg-[#6b1d1d] text-white w-full p-20 text-xl">
              <p>
              Hyderabad, known as the "City of Pearls," has a history rooted in grandeur and innovation. Founded in 1591 by Muhammad Quli Qutb Shah, it flourished under the Nizams' rule, blending Indo-Islamic, Persian, and Deccan cultures. 
              </p>
            </div>
          </div>

          <div className="flex gap-2 mt-5 m-10">
            <div className="flex justify-center items-center bg-[#6b1d1d] text-white w-full p-20 text-xl">
              <p>
              The city is home to iconic landmarks like the Charminar and Chowmahalla Palace, which stand as symbols of its glorious past. Festivals like Bonalu and Eid reflect its vibrant cultural diversity.
              </p>
            </div>
            <div className="grid grid-cols-2 ">
              <img src={img6} alt="1" className="h-60 w-full"/>
              <img src={img7} alt="2" className="h-60 w-full"/>
            </div>
          </div>
          <div className="flex justify-center mt-10">
          <button className="bg-[#24160f] text-[#efd1c0] flex justify-center items-center pl-10 pr-10 pt-2 pb-2 text-2xl font-bold rounded-2xl hover:bg-[#6b1d1d] hover:text-[#efd1c0] ">
              {" "}
              Buy Products
            </button>
          </div>
        </div>

        {/* Traditional crafts */}
        <div className="mt-10">
          <h1 className='flex justify-center pt-10 text-[#24160f] text-3xl pb-5 font-bold'>Traditional Crafts</h1>
          <div>
            <div className="grid grid-cols-4 gap-2 p-2 m-2">
              <img src={img11} alt="1" className="h-80 w-full"/>
              <img src={img9} alt="2" className="h-80 w-full"/>
              <img src={img10} alt="3" className="h-80 w-full"/>
              <img src={img11} alt="4" className="h-80 w-full"/>
            </div>

            <div className="flex justify-center items-center bg-[#6b1d1d] text-white p-10 text-xl">
              <p>
                
              Hyderabadi artifacts capture the essence of the city’s rich history and artistic legacy. Islamic wall art, with its intricate calligraphy and geometric designs, brings a sense of spiritual elegance to any space. The timeless Bidriware, featuring silver inlay on black metal, offers exquisite vases, trays, and decorative items that speak of unparalleled craftsmanship. Paintings, , celebrating Hyderabad's regal past. Sculptures and miniatures, from brass figurines to replicas of iconic monuments like Charminar, embody the city’s architectural grandeur and cultural heritage
              </p>
            </div>
            <div className="flex justify-center mt-10">
            <button className="bg-[#24160f] text-[#efd1c0] flex justify-center items-center pl-10 pr-10 pt-2 pb-2 text-2xl font-bold rounded-2xl hover:bg-[#6b1d1d] hover:text-[#efd1c0] ">
              {" "}
              Buy Products
            </button>
            </div>
          </div>
        </div>

        {/*art and architecture*/}
        <div className="mt-10">
          <h1 className='flex justify-center pt-10 text-[#24160f] text-3xl pb-5 font-bold'>Art And Architecture</h1>
          <div className="grid grid-cols-4">
            <img src={img12} alt="1" className="h-80 w-full"/>
            <img src={img13} alt="2" className="h-80 w-full"/>
            <img src={img14} alt="3" className="h-80 w-full"/>
            <img src={img15} alt="4" className="h-80 w-full"/>
          </div>
          <div className="flex justify-center items-center bg-[#6b1d1d] text-white p-10 text-xl ">
            <p>
            Hyderabad's architecture showcases the grandeur of Indo-Islamic design. The Falaknuma Palace, built in the 19th century, epitomizes luxury and royal living. The Golconda Fort, a 16th-century marvel, served as the Nizams’ stronghold, while the Mecca Masjid stands as one of the oldest mosques in India, representing architectural finesse.
            </p>
          </div>
          <div className="grid grid-cols-4">
            <img src={img16} alt="1" className="h-80 w-full" />
            <img src={img17} alt="2" className="h-80 w-full"/>
            <img src={img18} alt="3" className="h-80 w-full"/>
            <img src={img18} alt="4" className="h-80 w-full" />
          </div>
          <div className="flex justify-center mt-10">
          <button className="bg-[#24160f] text-[#efd1c0] flex justify-center items-center pl-10 pr-10 pt-2 pb-2 text-2xl font-bold rounded-2xl hover:bg-[#6b1d1d] hover:text-[#efd1c0] ">
              {" "}
              Buy Products
            </button>
          </div>
        </div>

        {/* fashion attire */}
        <div className="mt-10">
          <h1 className='flex justify-center pt-10 text-[#24160f] text-3xl pb-5 font-bold'>Fashion Attire</h1>
          <div className={img1}>
            <img src={img19} alt="1"  />
          </div>
          <div className="flex justify-center items-center bg-[#6b1d1d] text-white p-10 text-xl">
            <p>
            Hyderabad's fashion reflects its royal legacy, blending tradition with elegance. Sherwanis symbolize sophistication, while the Khada Dupatta, a bridal favorite, exudes cultural grace. Pathani suits offer a stylish blend of tradition and comfort, embodying the city’s timeless sartorial heritage.
            </p>
          </div>

          <div className="flex justify-center mt-10">
          <button className="bg-[#24160f] text-[#efd1c0] flex justify-center items-center pl-10 pr-10 pt-2 pb-2 text-2xl font-bold rounded-2xl hover:bg-[#6b1d1d] hover:text-[#efd1c0] ">
              {" "}
              Buy Products
            </button>
          </div>
        </div>

        {/* cusine */}
        <div className="mt-10 mb-10">
          <h1 className='flex justify-center pt-10 text-[#24160f] text-3xl pb-5 font-bold'>Cuisine</h1>

          <div className="flex justify-center items-center bg-[#6b1d1d] text-white p-10 text-xl ">
            <p>
            Hyderabad's culinary legacy is unparalleled, with iconic dishes like the fragrant biryani perfected during the Nizam era, hearty haleem enjoyed during Ramadan, and Qubani ka Meetha, a sweet treat with Persian roots.
            </p>
          </div>
          <div className="grid grid-cols-4">
            <img src={img20} alt="1" className="h-80 w-full" />
            <img src={img21} alt="2" className="h-80 w-full" />
            <img src={img22} alt="3" className="h-80 w-full" />
            <img src={img23} alt="4" className="h-80 w-full" />
          </div>

          <div className="flex justify-center mt-10">
            <button className="bg-[#24160f] text-[#efd1c0] flex justify-center items-center pl-10 pr-10 pt-2 pb-2 text-2xl font-bold rounded-2xl hover:bg-[#6b1d1d] hover:text-[#efd1c0] ">
              {" "}
              Buy Products
            </button>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default Culture;
