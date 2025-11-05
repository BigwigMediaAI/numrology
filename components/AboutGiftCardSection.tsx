"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import bgPattern from "../assets/yellow-star-bg.png";
import numFront from "../assets/line-bg-cs.png";
import numBack from "../assets/cta-numbers-q3 (1).png";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";

const AboutGiftCardSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  return (
    <section className="relative py-12  bg-[var(--background-color)] text-white overflow-hidden ">
      {/* Background pattern */}
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
      {/* Overlay */}
      <div className="absolute inset-0 bg-neutral/60 z-0"></div>
      <div className="w-11/12 md:w-4/5 mx-auto flex flex-col md:flex-row items-center justify-between">
        {/* Left Section */}
        <div className="max-w-xl mb-10 md:mb-0">
          <h1
            className="text-3xl md:text-5xl leading-tight text-[var(--title)] mb-6 montserrat "
            data-aos="fade-right"
            data-aos-delay="200"
          >
            Free numerological express consultation
          </h1>
          <p
            className="text-[var(--text)] mb-8 montserrat text-justify"
            data-aos="fade-right"
            data-aos-delay="200"
          >
            At Destiny By Nummbers, we believe everyone deserves a glimpse into
            the power of numerology. That’s why we offer a free express
            consultation. a brief, personalized session designed to give you
            immediate insights into your core numbers and life patterns. In just
            a few minutes, you’ll gain clarity, understand your strengths, and
            see how numerology can guide your next steps toward alignment and
            success.
          </p>
        </div>

        {/* Right Section */}
        <div
          className="relative w-full md:w-1/2 flex justify-center items-center"
          data-aos="zoom-in"
          data-aos-delay="400"
        >
          {/* Enlarged Image Container */}
          <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-[22rem] md:h-[22rem] lg:w-[26rem] lg:h-[26rem]">
            <Image
              src={numBack}
              alt="Number Background"
              fill
              className="object-contain opacity-95 animate-slow-bounce z-10"
            />
            <Image
              src={numFront}
              alt="Number Foreground"
              fill
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutGiftCardSection;
