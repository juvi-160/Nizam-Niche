import React from "react";
import Layout from "../components/Layout";
import { Flower2, PackageCheck, Wallet, Truck } from "lucide-react";
import { motion } from "framer-motion";
import img1 from "../assets/us1.png";
import img2 from "../assets/us2.png";
import img3 from "../assets/us3.png";
import img4 from "../assets/us4.png";
import img5 from "../assets/us5.png";
import img6 from "../assets/us6.png";
import img7 from "../assets/us7.png";
import img8 from "../assets/juveria.jpg";
import img9 from "../assets/afsheen.jpg";
import img10 from "../assets/saniya.jpg";

const About = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <div className="bg-[#EFD1C0] text-[#24160f]">
      <Layout>
        {/* Hero Section */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="bg-[#6b1d1d] text-[#efd1c0] flex flex-col justify-center items-center p-10 h-[32rem] text-center relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-opacity-20 bg-black z-0"></div>
          <div className="relative z-10 max-w-4xl mx-auto">
            <motion.h1 
              initial={{ y: -20 }}
              animate={{ y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-5xl md:text-7xl font-bold p-4 font-serif"
            >
              About Us
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-xl md:text-2xl px-4 font-medium text-[#EFD1C0]"
            >
              Welcome to THE NIZAM'S NICHE, your gateway to the rich heritage and
              vibrant culture of Hyderabad.
            </motion.p>
          </div>
        </motion.div>

        {/* Our Story Section */}
        <section className="py-16 px-6 md:px-16 max-w-screen-xl mx-auto">
          <motion.div
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl font-bold mb-8 text-center font-serif border-b-2 border-[#6b1d1d] pb-4 inline-block">
              Our Story
            </h2>
            <p className="text-lg mb-8 text-center leading-relaxed">
              NIZAM'S NICHE - Your One-Stop Destination for Authentic Hyderabadi
              clothing, jewellery, footwear, accessories, artifacts, and books
              that celebrate the rich culture and timeless heritage of Hyderabad.
            </p>

            <div className="grid md:grid-cols-2 gap-10 mt-12">
              <div>
                <h2 className="text-2xl font-semibold mb-4 text-[#6b1d1d] font-serif">Our Mission</h2>
                <p className="text-lg leading-relaxed">
                  To preserve and promote the rich heritage of Hyderabad by connecting
                  artisans with a global audience through a seamless e-commerce
                  experience.
                </p>
              </div>
              <div>
                <h2 className="text-2xl font-semibold mb-4 text-[#6b1d1d] font-serif">Our Vision</h2>
                <p className="text-lg leading-relaxed">
                  We envision a world where traditional crafts and heritage thrive in
                  harmony with modern technology, empowering artisans and inspiring
                  future generations.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Image Gallery */}
          <motion.div
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16"
          >
            {[img1, img2, img3, img4, img5].map((img, index) => (
              <motion.div 
                key={index}
                whileHover={{ scale: 1.03 }}
                className="overflow-hidden rounded-lg shadow-lg"
              >
                <img
                  src={img}
                  alt={`our-img-${index}`}
                  className="w-full h-64 object-cover hover:scale-105 transition duration-500"
                />
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* Our Values */}
        <section className="bg-[#6b1d1d] text-[#efd1c0] py-16 px-6 md:px-16">
          <motion.div
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-3xl font-semibold mb-8 font-serif">
              At The Nizam's Niche, we collaborate with local artisans to revive
              traditional crafts and empower small-scale businesses.
            </h2>

            <div className="flex flex-col md:flex-row justify-center items-center gap-8 my-12">
              <motion.div 
                whileHover={{ scale: 1.02 }}
                className="overflow-hidden rounded-xl shadow-xl"
              >
                <img
                  src={img6}
                  alt="value1"
                  className="w-full md:w-80 h-80 object-cover hover:scale-110 transition duration-700"
                />
              </motion.div>
              <motion.div 
                whileHover={{ scale: 1.02 }}
                className="overflow-hidden rounded-xl shadow-xl"
              >
                <img
                  src={img7}
                  alt="value2"
                  className="w-full md:w-80 h-80 object-cover hover:scale-110 transition duration-700"
                />
              </motion.div>
            </div>

            {/* Icons */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12">
              {[
                { icon: <PackageCheck size={48} />, text: "Guaranteed Quality" },
                { icon: <Flower2 size={48} />, text: "Sustainability" },
                { icon: <Wallet size={48} />, text: "Affordable Prices" },
                { icon: <Truck size={48} />, text: "Fast Delivery" },
              ].map((item, index) => (
                <motion.div 
                  key={index}
                  whileHover={{ y: -5 }}
                  className="flex flex-col items-center p-6 bg-[#6b1d1d]/80 rounded-lg backdrop-blur-sm"
                >
                  <div className="mb-4 text-[#EFD1C0]">{item.icon}</div>
                  <p className="text-xl font-semibold">{item.text}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Founders */}
        <section className="py-16 px-6 md:px-16 bg-[#fff3ec]">
          <motion.div
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="max-w-6xl mx-auto"
          >
            <h2 className="text-3xl font-bold text-center mb-12 font-serif border-b-2 border-[#6b1d1d] pb-4 inline-block">
              Meet Our Founders
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {[
                { 
                  img: img8, 
                  name: "Juveria Yameen", 
                  desc: "A passionate full-stack developer with a flair for building meaningful platforms that connect communities and preserve heritage." 
                },
                { 
                  img: img9, 
                  name: "Afsheen Wasay", 
                  desc: "With a strong entrepreneurial spirit, she envisions empowering artisans and sharing Hyderabadi heritage globally." 
                },
                { 
                  img: img10, 
                  name: "Saniya Sultana", 
                  desc: "A creative mind and cultural enthusiast who brings life to the brand with her vision for artistic expression and design." 
                },
              ].map((founder, index) => (
                <motion.div 
                  key={index}
                  whileHover={{ y: -10 }}
                  className="flex flex-col items-center text-center bg-white p-8 rounded-xl shadow-lg"
                >
                  <div className="relative mb-6">
                    <img
                      src={founder.img}
                      alt={founder.name}
                      className="w-40 h-40 object-cover rounded-full shadow-xl border-4 border-[#6b1d1d]"
                    />
                  </div>
                  <h3 className="text-2xl font-semibold text-[#6b1d1d] mb-2 font-serif">{founder.name}</h3>
                  <p className="text-[#24160f] mt-2 leading-relaxed">{founder.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Story Behind */}
        <section className="bg-[#efd1c0] py-16 px-6 md:px-16">
          <motion.div
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl font-bold text-center mb-12 font-serif border-b-2 border-[#6b1d1d] pb-4 inline-block">
              Story Behind "The Nizam's Niche"
            </h2>
            <div className="space-y-6 text-lg leading-relaxed">
              <p className="bg-white/50 p-6 rounded-xl backdrop-blur-sm">
                The idea for this platform emerged from a simple yet powerful
                observation: while Hyderabad's cultural treasures are deeply
                admired, they often remain inaccessible due to limited
                availability and lack of a curated space.
              </p>
              <p className="bg-white/50 p-6 rounded-xl backdrop-blur-sm">
                Our journey began with extensive research into customer needs,
                market trends, and local artisans. Using Agile methodology, we
                created a user-friendly platform that reflects the spirit of
                Hyderabad.
              </p>
              <p className="bg-white/50 p-6 rounded-xl backdrop-blur-sm">
                Nizam's Niche is not just a marketplace – it's a celebration of
                legacy. Through every product, we aim to support local
                craftsmanship, preserve cultural identity, and make Hyderabadi
                heritage accessible to all.
              </p>
            </div>
          </motion.div>
        </section>
      </Layout>
    </div>
  );
};

export default About;