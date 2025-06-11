import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import { FaGithub, FaDiscord, FaTwitter, FaFacebookF, FaInstagram, FaLinkedinIn, FaArrowRight } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-[#5a1515] to-[#3a0a0a] text-[#EFD1C0]">
      <div className="mx-auto max-w-screen-xl px-6 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 lg:gap-16">
          {/* Brand Section */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-3 group">
              <img 
                src={logo} 
                alt="Logo" 
                className="w-14 h-14 transition-all duration-500 group-hover:rotate-12" 
              />
              <span className="text-2xl font-bold tracking-tight text-[#F8E6DC] group-hover:text-white transition-colors duration-300">
                THE NIZAM'S NICHE
              </span>
            </Link>
            <p className="text-sm leading-relaxed text-[#EFD1C0]/90">
              Curating the grandeur of Hyderabad's heritage through timeless collections and stories.
            </p>
            
            {/* Social Media Icons */}
            <div className="flex space-x-4 pt-2">
              <a href="#" className="p-2 bg-[#EFD1C0]/10 rounded-full hover:bg-[#EFD1C0]/20 transition-all duration-300 hover:-translate-y-1">
                <FaFacebookF className="text-[#EFD1C0] w-4 h-4" />
              </a>
              <a href="#" className="p-2 bg-[#EFD1C0]/10 rounded-full hover:bg-[#EFD1C0]/20 transition-all duration-300 hover:-translate-y-1">
                <FaInstagram className="text-[#EFD1C0] w-4 h-4" />
              </a>
              <a href="#" className="p-2 bg-[#EFD1C0]/10 rounded-full hover:bg-[#EFD1C0]/20 transition-all duration-300 hover:-translate-y-1">
                <FaLinkedinIn className="text-[#EFD1C0] w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h2 className="mb-6 text-sm font-semibold uppercase tracking-wider text-[#F8E6DC] border-b border-[#EFD1C0]/30 pb-2">
              Collections
            </h2>
            <ul className="space-y-3">
              {["Women", "Men", "Artifacts", "Books", "Cultural Heritage"].map((item) => (
                <li key={item}>
                  <Link 
                    to={`/${item.toLowerCase().replace(' ', '-')}`} 
                    className="flex items-center text-[#EFD1C0]/90 hover:text-white transition-all duration-300 group"
                  >
                    <FaArrowRight className="mr-2 text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h2 className="mb-6 text-sm font-semibold uppercase tracking-wider text-[#F8E6DC] border-b border-[#EFD1C0]/30 pb-2">
              Connect
            </h2>
            <ul className="space-y-3">
              <li>
                <a 
                  href="https://github.com/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center text-[#EFD1C0]/90 hover:text-white transition-all duration-300 group"
                >
                  <FaGithub className="mr-3 w-4 h-4" />
                  GitHub
                </a>
              </li>
              <li>
                <a 
                  href="https://discord.com/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center text-[#EFD1C0]/90 hover:text-white transition-all duration-300 group"
                >
                  <FaDiscord className="mr-3 w-4 h-4" />
                  Discord
                </a>
              </li>
              <li>
                <a 
                  href="https://twitter.com/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center text-[#EFD1C0]/90 hover:text-white transition-all duration-300 group"
                >
                  <FaTwitter className="mr-3 w-4 h-4" />
                  Twitter
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h2 className="mb-6 text-sm font-semibold uppercase tracking-wider text-[#F8E6DC] border-b border-[#EFD1C0]/30 pb-2">
              Newsletter
            </h2>
            <p className="mb-4 text-sm text-[#EFD1C0]/90">
              Join our community to receive updates on new collections and heritage events.
            </p>
            <div className="flex flex-col space-y-3">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="px-4 py-3 rounded-md bg-[#EFD1C0]/10 text-[#EFD1C0] placeholder-[#EFD1C0]/50 focus:outline-none focus:ring-2 focus:ring-[#EFD1C0]/50 transition-all"
              />
              <button className="bg-gradient-to-r from-[#8B3A3A] to-[#6b1d1d] hover:from-[#9B4A4A] hover:to-[#7b2d2d] text-white px-6 py-3 rounded-md transition-all duration-300 flex items-center justify-center group">
                Subscribe
                <FaArrowRight className="ml-2 transition-all duration-300 group-hover:translate-x-1" />
              </button>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-[#EFD1C0]/10 flex flex-col md:flex-row justify-between items-center">
          <div className="text-sm text-[#EFD1C0]/60 mb-4 md:mb-0">
            © {new Date().getFullYear()} THE NIZAM'S NICHE. All rights reserved.
          </div>
          
          <div className="flex space-x-6">
            <Link to="/privacy-policy" className="text-sm text-[#EFD1C0]/60 hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms-conditions" className="text-sm text-[#EFD1C0]/60 hover:text-white transition-colors">
              Terms & Conditions
            </Link>
            <Link to="/contact" className="text-sm text-[#EFD1C0]/60 hover:text-white transition-colors">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;