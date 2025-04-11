import React from 'react';
import Layout from './components/Layout';
import Carosel from './components/carosel';
import Card from './components/Card';
import img1 from './assets/1.1.png';
import img2 from './assets/1.2.png';
import img3 from './assets/1.3.png';
import img4 from './assets/1.4.png';
import img5 from './assets/1.5.png';
import img6 from './assets/1.6.png';
import img7 from './assets/1.7.png';
import 'flowbite';


function App() {

  return (
    <div className='bg-[#EFD1C0]' >
    <Layout>
      <Carosel/>

      <div className='category bg-[#EFD1C0]'>
        <h1 className='flex justify-center text-[#6b1d1d] text-3xl font-bold'>SHOP YOUR ROYAL COLLECTION</h1>
        <div className='grid grid-cols-4 gap-2 m-5 p-5 pr-10 pl-10'>
        <img src= {img1} alt="WOMEN'S WEAR" />
        <img src={img2} alt="MEN'S WEAR" />
        <img src={img3} alt="ARTIFACTS" />
        <img src={img4} alt="BOOKS" />
        </div>       

      </div>

      <div className='image mt-5'>
        <div className='grid grid-cols-2'>
          <img src={img5} alt="women" className='h-96 w-full' />
          <img src={img6} alt="men" className='h-96 w-full' />
        </div>

      </div>

      {/* top collections */}
      <div>
        <h1 className='flex justify-center pt-10 text-[#6b1d1d] text-3xl font-bold'>TOP COLLECTIONS</h1>
        <div className='grid grid-cols-4 gap-4 m-5 p-5'>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
        </div>

      </div>

      {/* about us */}
      <div style={{ backgroundImage: `url(${img7})` }} className=' h-96 mb-10 p-10'>
        <div className='bg-[#6b1d1d] opacity-90 h-60 p-10 items-center flex flex-col justify-center'>
          <h1 className='flex justify-center text-2xl font-bold'>ABOUT US</h1>
          <p className='flex justify-center text-xl ' >Our story begins with a passion for the art of craftsmanship.</p>
          <button className='bg-[#24160f] p-4 m-3 text-white '>EXPLORE NOW</button>

        </div>
      </div>

      {/* reviews */}
      <div>
        <h1 className='flex justify-center text-[#6b1d1d] text-3xl font-bold'>REVIEWS FROM OUR LOYAL CUSTOMERS</h1>
        <div className='grid grid-cols-4 gap-4 m-5 '>
          <div className='bg-[#6b1d1d] rounded-2xl p-10'>
            <h1 className='text-xl font-bold'>A Perfect Blend of heritage and Craftsmanship!</h1>
            <p className='text-[#efd1c0] text-xl flex justify-center'>"The Nizam's niche offers an incredible range of products that reflect Hyderabads rich history"</p>
            <h5 className='text-l ml-10 font-bold'>- Ayesha R., Benguluru</h5>
          </div>
          <div className='bg-[#6b1d1d] rounded-2xl p-10'>
            <h1 className='text-xl font-bold'>A Perfect Blend of heritage and Craftsmanship!</h1>
            <p className='text-[#efd1c0] text-xl flex justify-center'>"The Nizam's niche offers an incredible range of products that reflect Hyderabads rich history"</p>
            <h5 className='text-l ml-10 font-bold'>- Ayesha R., Benguluru</h5>
          </div>
          <div className='bg-[#6b1d1d] rounded-2xl p-10'>
            <h1 className='text-xl font-bold'>A Perfect Blend of heritage and Craftsmanship!</h1>
            <p className='text-[#efd1c0] text-xl flex justify-center'>"The Nizam's niche offers an incredible range of products that reflect Hyderabads rich history"</p>
            <h5 className='text-l ml-10 font-bold'>- Ayesha R., Benguluru</h5>
          </div>
          <div className='bg-[#6b1d1d] rounded-2xl p-10'>
            <h1 className='text-xl font-bold'>A Perfect Blend of heritage and Craftsmanship!</h1>
            <p className='text-[#efd1c0] text-xl flex justify-center'>"The Nizam's niche offers an incredible range of products that reflect Hyderabads rich history"</p>
            <h5 className='text-l ml-10 font-bold'>- Ayesha R., Benguluru</h5>
          </div>
          
        </div>
      </div>


    </Layout>
    </div>
  )
}

export default App
