"use client";

import React from "react";
import Image from "next/image";
import bgImage from "../assets/yellow-star-bg.png"; // replace with your background image path

const GetInTouch = () => {
  return (
    <section className="relative py-12 bg-[#0d0d0d] text-white overflow-hidden">
      {/* Background pattern */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${bgImage.src})`,
          backgroundRepeat: "repeat",
          backgroundSize: "contain",
          backgroundPosition: "center",
          opacity: 0.3,
        }}
      ></div>
      {/* Overlay */}
      <div className="absolute inset-0 bg-neutral/60 z-0"></div>

      <div className="relative w-11/12 md:w-4/5 mx-auto py-12 text-center flex flex-col items-center">
        <h2 className="text-[#b19768] font-semibold uppercase tracking-wide mb-2">
          Get in Touch
        </h2>
        <p className="max-w-2xl text-3xl sm:text-4xl md:text-5xl font-bold mb-12">
          Get your free daily number every day when you sign up!
        </p>
        <p className="text-sm sm:text-base mb-8 max-w-xl">
          Fusce sit amet velit eleifend, iaculis velit quis, malesuada lacus.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
        <button className="bg-[#ff4d00] hover:bg-[#e64400] text-white px-8 py-3 rounded shadow-lg transition text-sm sm:text-base">
          Get started
        </button>
      </div>
    </section>
  );
};

export default GetInTouch;
