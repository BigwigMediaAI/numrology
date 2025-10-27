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
    desc: "Your Driver Number is derived from your date of birth (DD) and represents your core personality, natural talents, and the way you approach life. It reveals the driving force behind your actions and the true essence of who you are.",
  },
  {
    icon: coreNumbersIcon,
    title: "Conductor Number",
    desc: "Your Conductor Number is calculated from your full date of birth (DD MM YYY). It reveals the guiding energy that directs your life, showing how your actions, decisions, and experiences are influenced by the patterns of your birth numbers.",
  },
  {
    icon: birthDayIcon,
    title: "Kua Number",
    desc: "Your Kua Number is calculated from your year of birth and reveals your personal energy in relation to directions, environment, and life forces. It is often used in Feng Shui and personal guidance to determine your most supportive directions, ideal spaces, and ways to harmonize with the energy around you for health, relationships, and success.",
  },
  {
    icon: expressionIcon,
    title: "Birth Chart",
    desc: "Your Birth Chart in numerology is based on the Lo Shu Grid — a 3×3 chart mapping numbers 1–9 to different life areas. Each number reveals traits, strengths, and challenges, helping us understand your personality, emotions, and the energies shaping your journey.",
  },
  {
    icon: nameNumerologyIcon,
    title: "Your name numerology",
    desc: "Name Numerology uncovers the hidden vibrations of your name and how they influence your personality, relationships, and life opportunities. Aligning your name with your destiny numbers can harmonize your energy and attract positive experiences.",
  },
  {
    icon: forecastIcon,
    title: "Personal Year Number",
    desc: "Your Personal Year Number reveals the themes and energies influencing you in a specific year, helping you anticipate opportunities, challenges, and growth periods. It serves as a guide to make informed decisions and align your actions with the flow of your future years.",
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
    <section className="relative py-12 bg-[var(--background-color)] text-white overflow-hidden">
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
        {/* Heading */}
        <p className="text-[var(--primary-color)] text-lg font-bold mb-3 uppercase tracking-widest">
          Our Services
        </p>
        <h2 className="text-4xl md:text-6xl font-bold leading-tight  mb-6 playfair text-[var(--primary-color)]">
          We&apos;ll explain what each <br /> number means
        </h2>

        {/* Desktop Grid */}
        <div className="hidden md:grid grid-cols-3 gap-8 ">
          {services.map((item, index) => (
            <div
              key={index}
              className="rounded-xl bg-transparent border border-gray-700 hover:border-[#b19768] hover:bg-[#f5d595] hover: transition p-8 flex flex-col items-center text-center"
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
              <h3 className="text-xl font-semibold mb-2 text-[var(--primary-color)] playfair">
                {item.title}
              </h3>
              <p className="text-[var(--primary-color)] text-md leading-relaxed text-justify">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Mobile Swiper */}
        <div className="md:hidden">
          <Swiper spaceBetween={20} slidesPerView={1} loop>
            {services.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="bg-transparent border border-gray-700 hover:border-[#b19768] transition rounded-xl p-8 flex flex-col items-center text-center">
                  <Image
                    src={item.icon}
                    alt={item.title}
                    width={60}
                    height={60}
                    className="mb-4 object-contain"
                  />
                  <h3 className="text-lg font-semibold mb-2 text-[var(--primary-color)]">
                    {item.title}
                  </h3>
                  <p className="text-[var(--primary-color)] text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default OurServices;
