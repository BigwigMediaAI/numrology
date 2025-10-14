"use client";

import React from "react";
import Image from "next/image";
import bgPattern from "../assets/bg.png"; // 👈 add your stars/moon pattern image here

const Footer = () => {
  return (
    <footer className="relative bg-[#f6f2ec] text-[#1a1a1a] pt-16 pb-10 overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0">
        <Image
          src={bgPattern}
          alt="Background Pattern"
          fill
          className="object-cover opacity-70 pointer-events-none"
        />
      </div>

      {/* Main content */}
      <div className="relative w-11/12 md:w-10/12 mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 z-10">
        {/* Column 1 */}
        <div>
          <h2 className="text-2xl font-semibold mb-3">Mysta</h2>
          <p className="text-base leading-relaxed text-gray-700">
            Reinventing the way of creating websites, we aim to create the most
            master-paced WordPress theme available on the market.
          </p>
        </div>

        {/* Column 2 */}
        <div>
          <h3 className="text-sm font-semibold tracking-wider mb-3">
            CONTACT US
          </h3>
          <p className="text-gray-700 mb-1">
            202 Helga Springs Rd, Crawford, TN 38554
          </p>
          <p className="text-gray-700 mb-1">
            Call Us: <span className="font-semibold">800.275.8777</span>
          </p>
          <p className="text-gray-700">alex@company.com</p>
        </div>

        {/* Column 3 */}
        <div>
          <h3 className="text-sm font-semibold tracking-wider mb-3">
            SIGN UP FOR EMAIL UPDATES
          </h3>
          <div className="flex">
            <input
              type="email"
              placeholder="Your e-mail address"
              className="flex-1 px-4 py-3 border border-gray-300 rounded-l-lg outline-none text-sm placeholder-gray-500"
            />
            <button className="bg-[#b7925b] text-white px-6 rounded-r-lg font-medium hover:bg-[#a47f45] transition">
              Subscribe
            </button>
          </div>
          <p className="text-sm italic text-gray-600 mt-2">
            Sign up with your email address to receive news and updates
          </p>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="relative border-t border-gray-300 mt-10 pt-6 z-10 w-11/12 md:w-10/12 mx-auto flex flex-col md:flex-row items-center justify-between text-sm text-gray-600 gap-4">
        <p>Copyright ©2025 Mysta. All rights reserved.</p>
        <div className="flex flex-wrap gap-4 justify-center md:justify-end">
          <a href="#" className="hover:text-[#b7925b] transition">
            Home
          </a>
          <a href="#" className="hover:text-[#b7925b] transition">
            About Us
          </a>
          <a href="#" className="hover:text-[#b7925b] transition">
            Our Team
          </a>
          <a href="#" className="hover:text-[#b7925b] transition">
            Blog
          </a>
          <a href="#" className="hover:text-[#b7925b] transition">
            Contact Us
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
