"use client";

import React from "react";
import Image from "next/image";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import bgPattern from "../assets/bg.png";

const Footer = () => {
  return (
    <footer className="relative bg-[var(--background-color)] text-[var(--primary-color)] pt-16 pb-10 overflow-hidden">
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
      <div className="relative w-11/12 md:w-10/12 mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 z-10">
        {/* Left Column - Logo & Description */}
        <div>
          <h2 className="text-2xl font-semibold mb-3">Destiny By Nummbers</h2>
          <p className="text-base leading-relaxed text-[var(--primary-color)] md:text-justify">
            Through Numbers, We Shape Destiny.
          </p>

          {/* Social Media */}
          <div className="flex gap-4 mt-5">
            <a
              href="https://www.facebook.com/destinybynummbers"
              className="p-2 bg-[#b7925b] text-white rounded-full hover:text-[#395693] transition"
              target="_blank"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://www.instagram.com/destinybynummbers/"
              className="p-2 bg-[#b7925b] text-white rounded-full hover:text-[#d40daf] transition"
              target="_blank"
            >
              <FaInstagram />
            </a>
          </div>
        </div>

        {/* Right Column - Address */}
        <div className="text-left md:text-right">
          <h3 className="text-sm font-semibold tracking-wider mb-3">
            CONTACT US
          </h3>
          <p className="text-[var(--primary-color)] mb-2 font-semibold">
            Head Office:
          </p>
          <p className="text-[var(--primary-color)] mb-2">
            Melbourne, Australia <br />
            21 Cuttlefish Circuit, Tarneit, VIC, 3029, Australia
          </p>
          <p className="text-[var(--primary-color)] mb-1">
            <span className="font-semibold">Phone:</span> +61 457 733 000
          </p>
        </div>
      </div>

      {/* Bottom Links */}
      <div className="relative border-t border-gray-300 mt-10 pt-6 z-10 w-11/12 md:w-10/12 mx-auto flex flex-col items-center text-sm text-[var(--primary-color)] gap-4">
        <div className="flex flex-wrap justify-center gap-5">
          <a href="#" className="hover:text-[#b7925b] transition">
            Home
          </a>
          <a href="/our-services" className="hover:text-[#b7925b] transition">
            Our Services
          </a>
          <a href="/team" className="hover:text-[#b7925b] transition">
            Team
          </a>

          <a href="/contact-us" className="hover:text-[#b7925b] transition">
            Contact
          </a>
        </div>
        <p className="text-center text-[var(--primary-color)] mt-2">
          Copyright ©2025 Destiny By Nummbers. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
