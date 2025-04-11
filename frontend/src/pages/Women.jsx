import React from 'react'
import Layout from '../components/Layout'
import Card from '../components/Card';
import img1 from '../assets/w101.png';
import img2 from '../assets/w1.png';
import img3 from '../assets/w2.png';
import img4 from '../assets/w3.png';
import img5 from '../assets/w4.png';
import img6 from '../assets/w5.png';
import img7 from '../assets/w6.png';
import img8 from '../assets/w7.png';
import img9 from '../assets/w8.png';
import img10 from '../assets/w9.png';
import img11 from '../assets/w10.png';
import img12 from '../assets/w11.png';


const Women = () => {
  return (
    <div className='bg-[#EFD1C0]'>
    <Layout>

      {/* main */}
      <div >
        <h1 className='bg-[#24160f] text-[#efd1c0] flex justify-center p-2 text-2xl'>Redefine Elegance: Timeless Attire for Every Women</h1>
        <div style={{ backgroundImage: `url(${img1})` }} className='flex justify-center p-2 text-xl h-80'>
          <h1 className='flex justify-center items-center text-[#efd1c0] font-bold text-4xl'>Adoring You with Timeless Beauty!</h1>
        </div>
      </div>

      {/* clothing */}
      <div>
        <h1 className='flex justify-center pt-10 text-[#24160f] text-2xl font-bold'>WOMEN'S CLOTHING</h1>
        <div className='grid grid-cols-5 gap-2 p-5 mr-15 ml-15'>
          <img src={img2} alt="1" />
          <img src={img3} alt="2" />
          <img src={img4} alt="3" />
          <img src={img5} alt="4" />
          <img src={img6} alt="5" />
        </div>
        <p>
        Hyderabadi women’s clothing captures the essence of royalty, blending intricate embroidery and luxurious fabrics to create timeless elegance. From khada dupattas to shararas, each piece tells a story of tradition and grace.
        </p>
      </div>

      {/* shoes */}
      <div>
        <h1 className='flex justify-center pt-10 text-[#24160f] text-2xl font-bold'>WOMEN'S SHOES</h1>
        <div className='p-5 mr-15 ml-15'>
          <img src={img7} alt="1" />
        </div>
        <p>
        Hyderabadi footwear combines comfort with artistry, featuring handcrafted mojris and sandals adorned with delicate embellishments. Perfect for completing both traditional and modern ensembles
        </p>
      </div>

      {/* accessories */}
      <div>
        <h1 className='flex justify-center pt-10 text-[#24160f] text-2xl font-bold'>WOMEN'S JEWELLERY</h1>
        <div className='grid grid-cols-5 gap-2 p-5 mr-15 ml-15 '>
          <img src={img8} alt="1" />
          <img src={img8} alt="2" />
          <img src={img11} alt="3" />
          <img src={img11} alt="4" />
          <img src={img12} alt="5" />
        </div>
        <p>
        Hyderabadi accessories are a testament to timeless elegance, featuring iconic pieces like the Rani Haar, a necklace that exudes regal sophistication with its layers of pearls and gemstones. Complementing this are intricate jhumkas, delicate naths, and dazzling bangles that bring the royal legacy to life. Each accessory tells a story of heritage, craftsmanship, and unmatched grandeur
        </p>
      </div>

      {/* collections */}
      <div>
        <h1 className='flex justify-center pt-10 text-[#24160f] text-2xl font-bold'>WOMEN'S TOP COLLECTION</h1>
        <div className='grid grid-cols-5 gap-2 p-5 mr-15 ml-15 mb-10'>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
        </div>
      </div>
      
    </Layout>
    
    </div>
  )
}

export default Women