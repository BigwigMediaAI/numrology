"use client";

import React from "react";
import Image from "next/image";
import Navbar from "./Navbar";

// Image imports
import bgPattern from "../assets/yellow-star-bg.png";
import numbers from "../assets/numbers.png";
import numbersBg from "../assets/bg-numerology.png";

const Hero = () => {
  return (
    <section className="relative h-[100vh] bg-[#eeeeee] overflow-hidden">
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
          <p className="text-[#b19768] font-semibold mb-3 uppercase tracking-wide">
            Consultation for free
          </p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight text-[#1d1d1d] mb-6">
            Infinite power of <br /> numerology
          </h1>
          <p className="text-gray-600 mb-8 text-sm sm:text-base">
            Fusce sit amet velit eleifend, iaculis velit quis, malesuada lacus.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
          <button className="bg-[#ff4d00] hover:bg-[#e64400] text-white px-8 py-3 rounded shadow-lg transition text-sm sm:text-base">
            Get started
          </button>

          {/* Mini Features */}
          <div className="flex flex-col sm:flex-row gap-10 sm:gap-12 mt-12 sm:mt-16 justify-center md:justify-start">
            <div>
              <p className="font-bold text-[#1d1d1d]">Destiny</p>
              <p className="text-gray-600 text-sm">
                Understand current issues in your life
              </p>
            </div>
            <div>
              <p className="font-bold text-[#1d1d1d]">Life path</p>
              <p className="text-gray-600 text-sm">
                Discover your innate abilities
              </p>
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
    </section>
  );
};

export default Hero;
