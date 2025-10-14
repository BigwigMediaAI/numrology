"use client";

import React from "react";
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

const services = [
  {
    icon: lifePathIcon,
    title: "Life path number",
    desc: "You have three numbers that are derived from your birth date. We’ll explain what each number means, and how it can assist you with your career.",
  },
  {
    icon: coreNumbersIcon,
    title: "Your core numbers",
    desc: "You have three numbers that are derived from your birth date. We’ll explain what each number means, and how it can assist you with your career.",
  },
  {
    icon: birthDayIcon,
    title: "Your birth day number",
    desc: "You have three numbers that are derived from your birth date. We’ll explain what each number means, and how it can assist you with your career.",
  },
  {
    icon: expressionIcon,
    title: "Your expression number",
    desc: "You have three numbers that are derived from your birth date. We’ll explain what each number means, and how it can assist you with your career.",
  },
  {
    icon: nameNumerologyIcon,
    title: "Your name numerology",
    desc: "You have three numbers that are derived from your birth date. We’ll explain what each number means, and how it can assist you with your career.",
  },
  {
    icon: forecastIcon,
    title: "Annual Forecast",
    desc: "You have three numbers that are derived from your birth date. We’ll explain what each number means, and how it can assist you with your career.",
  },
];

const OurServices = () => {
  return (
    <section className="relative py-12 bg-[#0d0d0d] text-white overflow-hidden">
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
        <h2 className="text-4xl md:text-6xl font-bold leading-tight  mb-6 playfair">
          We&apos;ll explain what each <br /> number means
        </h2>

        {/* Desktop Grid */}
        <div className="hidden md:grid grid-cols-3 gap-8 ">
          {services.map((item, index) => (
            <div
              key={index}
              className="rounded-xl bg-transparent border border-gray-700 hover:border-[#b19768] hover:bg-[#2D2D3C] transition p-8 flex flex-col items-center text-center"
            >
              <Image
                src={item.icon}
                alt={item.title}
                width={60}
                height={60}
                className="mb-4 object-contain"
              />
              <h3 className="text-xl font-semibold mb-2 text-[#fff] playfair">
                {item.title}
              </h3>
              <p className="text-gray-400 text-md leading-relaxed">
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
                  <h3 className="text-lg font-semibold mb-2 text-[#fff]">
                    {item.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
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
