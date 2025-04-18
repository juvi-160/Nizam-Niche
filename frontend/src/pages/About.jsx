import React from "react";
import Layout from "../components/Layout";
import { Flower2, PackageCheck, Wallet, Truck } from "lucide-react";
import img1 from "../assets/us1.png";
import img2 from "../assets/us2.png";
import img3 from "../assets/us3.png";
import img4 from "../assets/us4.png";
import img5 from "../assets/us5.png";
import img6 from "../assets/us6.png";
import img7 from "../assets/us7.png";
import img8 from "../assets/juveria.jpg"
import img9 from "../assets/afsheen.jpg";
import img10 from "../assets/saniya.jpg";

const About = () => {
  return (
    <div className="bg-[#EFD1C0] text-[#24160f]">
      <Layout>
        {/* Heading Section */}
        <div className="bg-[#6b1d1d] text-[#efd1c0] flex flex-col justify-center p-10 h-96 text-center">
          <h1 className="text-4xl md:text-6xl font-bold p-4">About Us!</h1>
          <p className="text-lg md:text-xl px-4 font-semibold text-[#24160f]">
            Welcome to THE NIZAM'S NICHE, your gateway to the rich heritage and
            vibrant culture of Hyderabad.
          </p>
        </div>

        {/* Our Story Section */}
        <section className="py-12 px-6 md:px-16 max-w-screen-xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-center">Our Story</h2>
          <p className="text-lg mb-6 text-justify">
            NIZAM'S NICHE - Your One-Stop Destination for Authentic Hyderabadi
            clothing, jewellery, footwear, accessories, artifacts, and books
            that celebrate the rich culture and timeless heritage of Hyderabad.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Our Mission</h2>
          <p className="text-lg text-justify">
            To preserve and promote the rich heritage of Hyderabad by connecting
            artisans with a global audience through a seamless e-commerce
            experience.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Our Vision</h2>
          <p className="text-lg text-justify">
            We envision a world where traditional crafts and heritage thrive in
            harmony with modern technology, empowering artisans and inspiring
            future generations.
          </p>

          {/* Image Gallery */}
          <div className="grid grid-cols-5 md:grid-cols-5 lg:grid-cols-5 gap-2 mt-10">
            {[img1, img2, img3, img4, img5].map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`our-img-${index}`}
                className="rounded-md shadow-md hover:scale-105 transition duration-300 h-60 md:h-72 lg:h-80"
              />
            ))}
          </div>
        </section>

        {/* Our Values */}
        <section className="bg-[#6b1d1d] text-[#efd1c0] py-12 px-6 md:px-16">
          <h2 className="text-2xl md:text-3xl font-semibold text-center mb-6">
            At The Nizam's Niche, we collaborate with local artisans to revive
            traditional crafts and empower small-scale businesses.
          </h2>

          <div className="flex md:flex-row justify-center items-center gap-2 my-6">
            <img
              src={img6}
              alt="value1"
              className="w-72 h-72 object-cover rounded-xl shadow-lg"
            />
            <img
              src={img7}
              alt="value2"
              className="w-72 h-72 object-cover rounded-xl shadow-lg"
            />
          </div>

          {/* Icons */}
          <div className="grid grid-cols-4 md:grid-cols-4 gap-6 text-center mt-8 text-[#efd1c0]">
            <div className="flex flex-col items-center">
              <PackageCheck size={40} />
              <p className="mt-2 font-semibold">Guaranteed Quality</p>
            </div>
            <div className="flex flex-col items-center">
              <Flower2 size={40} />
              <p className="mt-2 font-semibold">Sustainability</p>
            </div>
            <div className="flex flex-col items-center">
              <Wallet size={40} />
              <p className="mt-2 font-semibold">Affordable Prices</p>
            </div>
            <div className="flex flex-col items-center">
              <Truck size={40} />
              <p className="mt-2 font-semibold">Fast Delivery</p>
            </div>
          </div>
        </section>

        {/* founders */}
        <section className="py-12 px-6 md:px-16 bg-[#fff3ec]">
          <h2 className="text-3xl font-bold text-center mb-10 text-[#24160f]">
            Meet Our Founders
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
            {/* Juveria */}
            <div className="flex flex-col items-center text-center">
              <img
                src={img8}
                alt="Juveria Yameen"
                className="w-40 h-40 object-cover rounded-full shadow-lg mb-4"
              />
              <h3 className="text-xl font-semibold text-[#6b1d1d]">
                Juveria Yameen
              </h3>
              <p className="text-[#24160f] mt-2">
                A passionate full-stack developer with a flair for building
                meaningful platforms that connect communities and preserve
                heritage.
              </p>
            </div>

            {/* Afsheen */}
            <div className="flex flex-col items-center text-center">
              <img
                src={img9}
                alt="Afsheen Wasay"
                className="w-40 h-40 object-cover rounded-full shadow-lg mb-4"
              />
              <h3 className="text-xl font-semibold text-[#6b1d1d]">
                Afsheen Wasay
              </h3>
              <p className="text-[#24160f] mt-2">
              With a strong entrepreneurial spirit, she envisions empowering
              artisans and sharing Hyderabadi heritage globally.               
              </p>
            </div>

            {/* Saniya */}
            <div className="flex flex-col items-center text-center">
              <img
                src={img10}
                alt="Saniya Sultana"
                className="w-40 h-40 object-cover rounded-full shadow-lg mb-4"
              />
              <h3 className="text-xl font-semibold text-[#6b1d1d]">
                Saniya Sultana
              </h3>
              <p className="text-[#24160f] mt-2">
                A creative mind and cultural enthusiast who brings life to the
                brand with her vision for artistic expression and design.
              </p>
            </div>
          </div>
        </section>

        {/* Story Behind */}
        <section className="bg-[#efd1c0] py-12 px-6 md:px-16 text-justify">
          <h2 className="text-3xl font-bold text-center mb-6">
            Story Behind "The Nizam's Niche"
          </h2>
          <div className="space-y-6 text-lg max-w-4xl mx-auto">
            <p>
              The idea for this platform emerged from a simple yet powerful
              observation: while Hyderabad’s cultural treasures are deeply
              admired, they often remain inaccessible due to limited
              availability and lack of a curated space.
            </p>
            <p>
              Our journey began with extensive research into customer needs,
              market trends, and local artisans. Using Agile methodology, we
              created a user-friendly platform that reflects the spirit of
              Hyderabad.
            </p>
            <p>
              Nizam’s Niche is not just a marketplace – it’s a celebration of
              legacy. Through every product, we aim to support local
              craftsmanship, preserve cultural identity, and make Hyderabadi
              heritage accessible to all.
            </p>
          </div>
        </section>
      </Layout>
    </div>
  );
};

export default About;
