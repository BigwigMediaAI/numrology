"use client";
import React from "react";
import Image from "next/image";
import bgPattern from "../assets/yellow-star-bg.png"; // your background image
import numFront from "../assets/line-bg-cs.png"; // top overlapping image
import numBack from "../assets/cta-numbers-q3 (1).png"; // bottom image

const AboutGiftCardSection = () => {
  return (
    <section
      className="relative w-full h-[85vh] bg-[#21212c] bg-cover bg-center text-white py-20 px-6 md:px-16 lg:px-24 flex flex-col md:flex-row items-center justify-between"
      style={{
        backgroundImage: `url(${bgPattern.src})`,
      }}
    >
      {/* Left Section */}
      <div className="max-w-xl mb-10 md:mb-0">
        <p className="text-yellow-400 font-semibold tracking-wider uppercase mb-3">
          Gift Cards
        </p>
        <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
          Free numerological express consultation
        </h1>
        <p className="text-gray-300 text-lg leading-relaxed mb-6">
          Fusce sit amet velit eleifend, iaculis velit quis, malesuada lacus.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
        <a
          href="#"
          className="inline-block text-yellow-400 font-semibold hover:text-yellow-300 transition-colors"
        >
          Learn more
          <span className="ml-2 border-b border-yellow-400"></span>
        </a>
      </div>

      {/* Right Section */}
      <div className="relative w-full md:w-1/2 flex justify-center items-center">
        {/* Enlarged Image Container */}
        <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-[22rem] md:h-[22rem] lg:w-[26rem] lg:h-[26rem]">
          <Image
            src={numBack}
            alt="Number Background"
            fill
            className="object-contain opacity-95 animate-slow-bounce z-40"
          />
          <Image
            src={numFront}
            alt="Number Foreground"
            fill
            className="object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutGiftCardSection;
