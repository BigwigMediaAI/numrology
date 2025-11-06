"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";
import "swiper/css";

import bgPattern from "../assets/yellow-star-bg.png";
import lifePathIcon from "../assets/services/crystered.png";
import coreNumbersIcon from "../assets/services/key-1023x1536.png";
import birthDayIcon from "../assets/services/moon-3-1536x1536.png";
import expressionIcon from "../assets/services/sun-dw-1536x1536.png";
import nameNumerologyIcon from "../assets/services/eye-23-1357x1536.png";
import forecastIcon from "../assets/services/cwed.png";

const services = [
  {
    icon: lifePathIcon,
    title: "Driver Number",
    desc: "Your Driver Number (also known as Physic Number or Mulank) is derived from your date of birth (DD) and represents your core personality, natural talents, and the way you approach life. It reveals which planets’ vibration is behind your driving force and the true essence of who you are.",
  },
  {
    icon: coreNumbersIcon,
    title: "Conductor Number",
    desc: "Your Conductor Number (also known as Life Path Number, Destiny Number or Bhagyank) is calculated from your full date of birth (DD MM YYYY). It reveals the guiding energy that directs your life, showing how your actions, decisions, and experiences are influenced by the patterns of your birth numbers.",
  },
  {
    icon: birthDayIcon,
    title: "Kua Number",
    desc: "Your Kua Number is calculated from your year of birth and reveals your personal energy in relation to directions, environment, and life forces. It is often used in Feng Shui and personal guidance to determine your most supportive directions, ideal spaces, and ways to harmonize with the energy around you for health, relationships, and success.",
  },
  {
    icon: expressionIcon,
    title: "Birth Chart / Numeroscope",
    desc: "Your Birth Chart in numerology is based on the Lo Shu Grid , A 3×3 chart mapping numbers 1–9 to different life areas. Each number reveals traits, strengths, and challenges, helping us understand your personality, emotions, and the energies shaping your journey.",
  },
  {
    icon: nameNumerologyIcon,
    title: "Your Name Numerology",
    desc: "Name Numerology uncovers the hidden vibrations of your name and how they influence your personality, relationships, and life opportunities. Aligning your name with your Driver and Conductor numbers can harmonise your energy and attract positive experiences.",
  },
  {
    icon: forecastIcon,
    title: "Personal Year/Month/Day Number",
    desc: "Your Personal Year Number reveals the themes and energies influencing you in a specific year, helping you anticipate opportunities, challenges, and growth periods. It serves as a guide to make informed decisions and align your actions with the flow of your future years.",
  },
];

const OurServices = () => {
  useEffect(() => {
    AOS.init({
      duration: 600, // ⏩ faster animation (from 1000 → 600ms)
      easing: "ease-out", // snappier easing
      once: true, // animate only once
      offset: 80, // trigger a bit earlier (default is 120)
    });
  }, []);

  return (
    <section className="relative bg-[var(--background-color)] text-white overflow-hidden py-6">
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

      {/* Content */}
      <div className="relative z-10 w-11/12 md:w-10/12 lg:w-4/5 mx-auto text-center">
        <h2
          className="text-3xl md:text-5xl leading-tight text-[var(--title)] mb-6 montserrat text-left"
          data-aos="fade-up"
        >
          We&apos;ll explain what each <br className="hidden sm:block" /> number
          means
        </h2>

        {/* Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((item, index) => (
            <div
              key={index}
              className="rounded-2xl bg-transparent border border-[var(--title)] hover:border-[#b19768]  transition-all duration-300 p-6 sm:p-8 flex flex-col items-center text-center shadow-md hover:shadow-lg"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="h-[90px] sm:h-[100px] flex items-center justify-center mb-4">
                <Image
                  src={item.icon}
                  alt={item.title}
                  width={60}
                  height={60}
                  className="object-contain"
                />
              </div>

              <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-3 text-[var(--primary-color)] playfair min-h-[50px] flex items-center justify-center">
                {item.title}
              </h3>

              <p className="text-[var(--text)] text-sm leading-relaxed text-justify montserrat">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurServices;
