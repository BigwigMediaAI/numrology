"use client";

import React, { useState } from "react";
import Image from "next/image";
import Navbar from "./Navbar";

// Image imports
import bgPattern from "../assets/yellow-star-bg.png";
import numbers from "../assets/numbers.png";
import numbersBg from "../assets/bg-numerology.png";

// New icons for Destiny & Life Path
import destinyIcon from "../assets/destiny-num.png";
import pathIcon from "../assets/heart-numerology.png";
import LeadPopup from "./LeadPopup";
import ButtonFill from "./Button";

const Hero = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  return (
    <section className="relative min-h-screen bg-[#eeeeee] overflow-hidden">
      {/* Background pattern layer */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${bgPattern.src})`,
          backgroundRepeat: "repeat",
          backgroundSize: "contain",
          backgroundPosition: "center",
          opacity: 0.5,
        }}
      ></div>

      {/* Soft overlay */}
      <div className="absolute inset-0 bg-[#f9f7f3]/70 z-0"></div>

      {/* Navbar */}
      <div className="relative z-20">
        <Navbar />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 w-11/12 md:w-4/5 mx-auto flex flex-col md:flex-row justify-between items-center py-20 md:py-40">
        {/* Left Section */}
        <div className="max-w-xl z-10 text-center md:text-left">
          <p className="text-[var(--primary-color)] text-lg font-bold mb-3 uppercase tracking-widest">
            Consultation for free
          </p>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight text-[#1d1d1d] mb-6 playfair">
            Infinite power of <br /> numerology
          </h1>
          <p className="text-gray-600 mb-8 text-lg">
            Fusce sit amet velit eleifend, iaculis velit quis, malesuada lacus.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
          <ButtonFill onClick={() => setIsPopupOpen(true)} text="Get started" />

          {/* Mini Features */}
          <div className="flex gap-10 sm:gap-12 mt-12 sm:mt-16 justify-center md:justify-start">
            {/* Destiny */}
            <div className="flex flex-col items-center md:items-start text-center md:text-left">
              <div className="flex items-center gap-3 mb-2">
                <Image
                  src={destinyIcon}
                  alt="Destiny Icon"
                  width={60}
                  height={60}
                  className="object-contain w-[40px] h-[40px] md:w-[60px] md:h-[60px]"
                />
                <div>
                  <p className="font-bold text-[#1d1d1d] text-lg sm:text-xl playfair">
                    Destiny
                  </p>
                  <p className="text-gray-600 text-sm sm:text-base max-w-[220px]">
                    Understand current issues in your life
                  </p>
                </div>
              </div>
            </div>

            {/* Life Path */}
            <div className="flex flex-col items-center md:items-start text-center md:text-left">
              <div className="flex items-center gap-3 mb-2">
                <Image
                  src={pathIcon}
                  alt="Life Path Icon"
                  width={60}
                  height={60}
                  className="object-contain w-[40px] h-[40px] md:w-[60px] md:h-[60px]"
                />
                <div>
                  <p className="font-bold text-[#1d1d1d] text-lg sm:text-xl playfair">
                    Life Path
                  </p>
                  <p className="text-gray-600 text-sm sm:text-base max-w-[220px]">
                    Discover your innate abilities
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Artwork */}
        <div className="relative mt-12 md:mt-0 flex justify-center md:justify-end">
          <div className="relative w-[280px] md:w-[400px]">
            {/* Bigger Background Shape */}
            <Image
              src={numbersBg}
              alt="Numbers Background Shape"
              width={400}
              height={400}
              className="absolute top-1/2 left-1/2 w-[140%] h-[130%] -translate-x-1/2 -translate-y-1/2 object-contain"
            />
            {/* Foreground Numbers */}
            <Image
              src={numbers}
              alt="Numerology Illustration"
              width={360}
              height={400}
              className="relative z-10 object-contain animate-slow-bounce"
            />
          </div>
        </div>
      </div>
      {/* Popup */}
      <LeadPopup isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)} />
    </section>
  );
};

export default Hero;
