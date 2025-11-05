"use client";

import React, { useEffect, useState } from "react";
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
import AOS from "aos";
import "aos/dist/aos.css";

const Hero = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  return (
    <section className="relative bg-[var(--background-color)] overflow-hidden ">
      {/* Background pattern layer */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${bgPattern.src})`,
          backgroundRepeat: "repeat",
          backgroundSize: "contain",
          backgroundPosition: "center",
          opacity: 0.3,
        }}
      ></div>

      {/* Navbar */}
      <div className="relative z-20">
        <Navbar />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 w-11/12 md:w-4/5 mx-auto flex flex-col lg:flex-row items-center justify-between mt-16 lg:mt-5  py-12 lg:pt-24 min-h-[65vh] md:min-h-[70vh] lg:min-h-[80vh] ">
        {/* Left Section */}
        <div className="max-w-xl z-10 text-center md:text-left">
          <h1
            className="text-4xl md:text-5xl text-left leading-tight text-[var(--title)] mb-6 montserrat "
            data-aos="fade-right"
            data-aos-delay="400"
          >
            Infinite power of <br /> numerology
          </h1>
          <p
            className="text-[var(--text)] mb-8 montserrat text-justify"
            data-aos="fade-right"
            data-aos-delay="600"
          >
            At Destiny By Nummbers, we believe numerology is far more than the
            study of numbers. It’s the sacred language of the universe that
            reveals the story of who you are and why you are here. Every number
            resonates with planetary energies and vibrates with its own unique
            energy, shaping your personality, emotions, and the soul journey
            you’ve chosen in this lifetime. From your date of birth to the
            letters of your name, these numbers hold the keys to your inner
            strengths, hidden challenges, and true purpose. Through the art and
            science of numerology, we guide you to uncover the deeper meaning
            behind life’s patterns and align with your highest potential. Each
            reading becomes a transformative journey of self-discovery bringing
            clarity, healing, and direction, so you can move forward with
            confidence, peace, and purpose.
          </p>

          {/* Mini Features */}
          <div className="flex gap-10 sm:gap-12 mt-12 sm:mt-16 justify-center md:justify-start">
            {/* Destiny */}
            <div
              className="flex flex-col items-center md:items-start text-center md:text-left"
              data-aos="fade-up"
              data-aos-delay="1000"
            >
              <div className="flex items-center gap-3 mb-2">
                <Image
                  src={destinyIcon}
                  alt="Destiny Icon"
                  width={60}
                  height={60}
                  className="object-contain w-[40px] h-[40px] md:w-[60px] md:h-[60px] "
                />
                <div>
                  <p className="font-bold text-[var(--title)] text-lg sm:text-xl montserrat tracking-widest">
                    Destiny
                  </p>
                  <p className="text-[var(--text)] text-sm sm:text-base max-w-[220px]">
                    Understand current issues in your life
                  </p>
                </div>
              </div>
            </div>

            {/* Life Path */}
            <div
              className="flex flex-col items-center md:items-start text-center md:text-left"
              data-aos="fade-up"
              data-aos-delay="1200"
            >
              <div className="flex items-center gap-3 mb-2">
                <Image
                  src={pathIcon}
                  alt="Life Path Icon"
                  width={60}
                  height={60}
                  className="object-contain w-[40px] h-[40px] md:w-[60px] md:h-[60px] "
                />
                <div>
                  <p className="font-bold text-[var(--title)] text-lg sm:text-xl montserrat tracking-widest">
                    Life Path
                  </p>
                  <p className="text-[var(--text)] text-sm sm:text-base max-w-[220px]">
                    Discover your innate abilities
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Artwork */}
        <div
          className="relative mt-12 md:mt-0 flex justify-center md:justify-end md:items-center"
          data-aos="zoom-in"
          data-aos-delay="500"
        >
          <div className="relative w-[280px] md:w-[400px]">
            <Image
              src={numbers}
              alt="Numerology Illustration"
              width={360}
              height={400}
              className="relative z-10 object-contain animate-slow-bounce "
            />
          </div>
        </div>
      </div>
      <LeadPopup isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)} />
    </section>
  );
};

export default Hero;
