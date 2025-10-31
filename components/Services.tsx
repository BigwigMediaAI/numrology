"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

// background pattern
import bgPattern from "../assets/yellow-star-bg.png";

// icons
import lifePathIcon from "../assets/services/crystered.png";
import coreNumbersIcon from "../assets/services/key-1023x1536.png";
import birthDayIcon from "../assets/services/moon-3-1536x1536.png";
import expressionIcon from "../assets/services/sun-dw-1536x1536.png";
import nameNumerologyIcon from "../assets/services/eye-23-1357x1536.png";
import forecastIcon from "../assets/services/cwed.png";
import AOS from "aos";
import "aos/dist/aos.css";

const services = [
  {
    icon: lifePathIcon,
    title: "Driver Number",
    desc: "Your Driver Number (also known as Physic Number or Mulank) is derived from your date of birth (DD) and represents your core personality, natural talents, and the way you approach life. It reveals which planets’ vibration is behind your driving force and the true essence of who you are.",
  },
  {
    icon: coreNumbersIcon,
    title: "Conductor Number",
    desc: "Your Conductor Number (also known as Life Path Number, Destiny Number or Bhagyank) is calculated from your full date of birth (DD MM YYYY). It reveals the guiding energy that directs your life, showing how your actions, decisions, and experiences are influenced by the patterns of your birth numbers.",
  },
  {
    icon: birthDayIcon,
    title: "Kua Number",
    desc: "Your Kua Number is calculated from your year of birth and reveals your personal energy in relation to directions, environment, and life forces. It is often used in Feng Shui and personal guidance to determine your most supportive directions, ideal spaces, and ways to harmonize with the energy around you for health, relationships, and success.",
  },
  {
    icon: expressionIcon,
    title: "Birth Chart / Numeroscope",
    desc: "Your Birth Chart in numerology is based on the Lo Shu Grid , A 3×3 chart mapping numbers 1–9 to different life areas. Each number reveals traits, strengths, and challenges, helping us understand your personality, emotions, and the energies shaping your journey.",
  },
  {
    icon: nameNumerologyIcon,
    title: "Your name numerology",
    desc: "Name Numerology uncovers the hidden vibrations of your name and how they influence your personality, relationships, and life opportunities. Aligning your name with your Driver and Conductor numbers can harmonise your energy and attract positive experiences.",
  },
  {
    icon: forecastIcon,
    title: "Personal Year/Month/Day Number",
    desc: "Your Personal Year Number reveals the themes and energies influencing you in a specific year, helping you anticipate opportunities, challenges, and growth periods. It serves as a guide to make informed decisions and align your actions with the flow of your future years.",
  },
];

const OurServices = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });
  }, []);
  return (
    <section className="relative  bg-[var(--background-color)] text-white overflow-hidden">
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
      <div className="relative z-10 w-11/12 md:w-4/5 mx-auto text-center">
        <h2 className="text-3xl md:text-6xl font-bold leading-tight  mb-6 playfair text-[var(--primary-color)]">
          We&apos;ll explain what each <br /> number means
        </h2>

        {/* Desktop Grid */}
        <div className="hidden md:grid grid-cols-3 gap-8 ">
          {services.map((item, index) => (
            <div
              key={index}
              className="rounded-xl bg-transparent border border-gray-700 hover:border-[#b19768] hover:bg-[#f6f5f3] hover: transition p-8 flex flex-col items-center text-center"
              data-aos="fade-up"
              data-aos-delay={index * 200}
            >
              <div className="h-[100px] flex items-center justify-center mb-4">
                <Image
                  src={item.icon}
                  alt={item.title}
                  width={60}
                  height={60}
                  className="object-contain"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-[var(--primary-color)] playfair min-h-[56px] flex items-center justify-center">
                {item.title}
              </h3>

              <p className="text-[var(--primary-color)] text-md leading-relaxed text-justify">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Mobile Swiper */}
        {/* Mobile View (Stacked Cards) */}
        <div className="md:hidden flex flex-col gap-6 mt-6">
          {services.map((item, index) => (
            <div
              key={index}
              className="bg-transparent border border-gray-700 hover:border-[#b19768] transition rounded-xl p-8 flex flex-col items-center text-center"
              data-aos="fade-up"
              data-aos-delay={index * 200}
            >
              <Image
                src={item.icon}
                alt={item.title}
                width={60}
                height={60}
                className="mb-4 object-contain"
              />
              {/* Fixed height heading */}
              <h3 className="text-lg font-semibold mb-2 text-[var(--primary-color)] playfair min-h-[56px] flex items-center justify-center">
                {item.title}
              </h3>
              <p className="text-[var(--primary-color)] text-sm leading-relaxed text-justify">
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
