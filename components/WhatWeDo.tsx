"use client";

import React from "react";
import Image from "next/image";
import bgPattern from "../assets/yellow-star-bg.png";
import numbers from "../assets/numbers.png";
import numbersBg from "../assets/bg-numerology.png";

const WhatWeDo = () => {
  return (
    <section className="relative py-20 md:py-32 bg-[#eeeeee] overflow-hidden">
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

      {/* Soft overlay for smooth background */}
      <div className="absolute inset-0 bg-[#f9f7f3]/70 z-0"></div>

      {/* Content Container */}
      <div className="relative z-10 w-11/12 md:w-5/6 mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
        {/* Left Side Artwork */}
        <div className="relative flex justify-center md:justify-start w-full md:w-1/2">
          <div className="relative w-[280px] md:w-[400px]">
            {/* Background circle */}
            <Image
              src={numbersBg}
              alt="Numbers Background Shape"
              width={400}
              height={400}
              className="absolute top-1/2 left-1/2 w-[130%] h-[120%] -translate-x-1/2 -translate-y-1/2 object-contain"
            />
            {/* Foreground numbers */}
            <Image
              src={numbers}
              alt="Numerology Illustration"
              width={360}
              height={400}
              className="relative z-10 object-contain animate-slow-bounce"
            />
          </div>
        </div>

        {/* Right Side Text */}
        <div className="max-w-xl text-center md:text-left w-full md:w-1/2">
          <p className="text-[#b19768] font-semibold mb-3 uppercase tracking-wide">
            What we do
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold text-[#1d1d1d] mb-6 leading-tight">
            Numerology helps to <br /> transform you
          </h2>
          <p className="text-gray-600 mb-8 text-sm sm:text-base leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam mi
            tellus, pulvinar vel tempus eget, finibus vitae ante. Fusce sit amet
            velit eleifend, iaculis velit quis, malesuada lacus. Vestibulum
            sodales magna a volutpat tempus. Mauris vestibulum id urna viverra
            ultrices. Nullam rhoncus elit eget libero varius dapibus.
          </p>
          <button className="bg-[#ff4d00] hover:bg-[#e64400] text-white px-8 py-3 rounded shadow-lg transition text-sm sm:text-base">
            Get started
          </button>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
