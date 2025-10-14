"use client";

import React from "react";
import Image from "next/image";
import Navbar from "./Navbar";
import numbers from "../assets/numbers.png"; // replace with your image

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-[#f9f7f3] overflow-hidden">
      {/* Navbar (transparent) */}
      <Navbar />

      {/* Hero Section Content */}
      <div className="flex flex-col md:flex-row justify-between items-center px-10 md:px-20 pt-32 md:pt-48 pb-20">
        {/* Left Text */}
        <div className="max-w-xl">
          <p className="text-[#b19768] font-semibold mb-3">
            CONSULTATION FOR FREE
          </p>
          <h1 className="text-5xl md:text-6xl font-bold leading-tight text-[#1d1d1d] mb-6">
            Infinite power of <br /> numerology
          </h1>
          <p className="text-gray-600 mb-8">
            Fusce sit amet velit eleifend, iaculis velit quis, malesuada lacus.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
          <button className="bg-[#ff4d00] hover:bg-[#e64400] text-white px-8 py-3 rounded shadow-lg transition">
            Get started
          </button>

          {/* Mini Features */}
          <div className="flex gap-12 mt-16">
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

        {/* Right Image */}
        <div className="mt-12 md:mt-0">
          <Image
            src={numbers}
            alt="Numerology"
            width={400}
            height={500}
            className="object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
