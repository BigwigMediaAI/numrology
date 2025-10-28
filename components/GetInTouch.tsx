"use client";

import React, { useState } from "react";
import Image from "next/image";
import bgImage from "../assets/yellow-star-bg.png"; // replace with your background image path
import LeadPopup from "./LeadPopup";
import Button from "./Button";

const GetInTouch = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  return (
    <section className="relative py-12 bg-[var(--background-color)] text-[var(--primary-color)] overflow-hidden">
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
        <p className="max-w-4xl text-3xl md:text-6xl font-bold leading-tight  mb-6 playfair">
          Unlock the power hidden in your numbers.
        </p>
        <p className="text-base md:text-lg  mb-8 max-w-xl">
          Fusce sit amet velit eleifend, iaculis velit quis, malesuada lacus.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
        <Button onClick={() => setIsPopupOpen(true)} text="Get started" />
      </div>
      {/* Popup */}
      <LeadPopup isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)} />
    </section>
  );
};

export default GetInTouch;
