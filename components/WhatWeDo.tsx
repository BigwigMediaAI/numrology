"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import bgPattern from "../assets/yellow-star-bg.png";
import numbers from "../assets/bumbers-2-768x1399.png";
import numbersBg from "../assets/bgnbr-2.png";
import ButtonFill from "./Button";
import LeadPopup from "./LeadPopup";
import AOS from "aos";
import "aos/dist/aos.css";

const WhatWeDo = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  return (
    <>
      {/* WHAT WE DO SECTION */}
      <section className="relative bg-[var(--background-color)] overflow-hidden">
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
        {/* <div className="absolute inset-0 bg-[#f9f7f3]/70 z-0"></div> */}

        {/* Content Container */}
        <div className="relative z-10 w-11/12 md:w-4/5 mx-auto flex flex-col md:flex-row items-center justify-between mt-10 ">
          {/* Left Side Artwork */}
          <div className="relative flex justify-center md:justify-start w-full md:w-1/2">
            <div className="relative w-[280px] md:w-[400px]">
              {/* Background circle */}
              {/* <Image
                src={numbersBg}
                alt="Numbers Background Shape"
                width={400}
                height={400}
                className="absolute top-1/2 left-1/2 w-[140%] h-[130%] -translate-x-1/2 -translate-y-1/2 object-contain"
              /> */}
              {/* Foreground numbers */}
              <Image
                src={numbers}
                alt="Numerology Illustration"
                width={360}
                height={400}
                className="relative z-10 object-contain animate-slow-bounce "
              />
            </div>
          </div>

          {/* Right Side Text */}
          <div className="max-w-xl text-center md:text-left w-full md:w-1/2">
            <p
              className="text-[var(--primary-color)] text-lg font-bold mb-3 uppercase tracking-widest"
              data-aos="fade-right"
              data-aos-delay="200"
            >
              What we do
            </p>
            <h2
              className="text-3xl md:text-6xl font-bold leading-tight text-[var(--primary-color)] mb-6 playfair"
              data-aos="fade-right"
              data-aos-delay="400"
            >
              Numerology helps to transform you
            </h2>
            <p
              className="text-[var(--primary-color)] mb-8 text-base md:text-lg leading-relaxed text-justify"
              data-aos="fade-right"
              data-aos-delay="600"
            >
              At Destiny By Nummbers, we begin by decoding your core numbers
              derived from your full name and date of birth revealing your
              unique personality, life path, and purpose. Each session uncovers
              how these energies shape your relationships, career, and personal
              growth, offering practical insights for real-world transformation.
              When your name’s vibration conflicts with your birth numbers, we
              identify and correct these imbalances through precise name tuning.
              This sacred process realigns your frequency with your destiny,
              helping life flow more smoothly and attract harmony, success, and
              fulfillment.
            </p>
            <ButtonFill
              onClick={() => setIsPopupOpen(true)}
              text="Get started"
              aos="fade-right"
              aosDelay="800"
            />
          </div>
        </div>
        <LeadPopup isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)} />
      </section>

      {/* STATS SECTION */}
      <StatsSection />
    </>
  );
};

/* ---------------------- STATS SECTION COMPONENT ---------------------- */
const StatsSection = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.3 });

  const [counts, setCounts] = useState({
    numerologists: 0,
    experience: 0,
    projects: 0,
    team: 0,
  });

  useEffect(() => {
    if (inView) {
      const duration = 2000; // ms
      const fps = 60;
      const totalFrames = Math.round((duration / 1000) * fps);

      const target = {
        numerologists: 546,
        team: 83,
        projects: 10,
        experience: 10,
      };

      let frame = 0;
      const counter = setInterval(() => {
        frame++;
        const progress = frame / totalFrames;
        setCounts({
          numerologists: Math.floor(target.numerologists * progress),
          team: Math.floor(target.team * progress),
          projects: Math.floor(target.projects * progress),
          experience: Math.floor(target.experience * progress),
        });

        if (frame === totalFrames) clearInterval(counter);
      }, 1000 / fps);
    }
  }, [inView]);

  return (
    <section
      ref={ref}
      className="relative py-12 bg-[var(--background-color)] overflow-hidden flex justify-center playfair"
    >
      {/* Pattern + Overlay again */}
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
      {/* <div className="absolute inset-0 bg-[#f9f7f3]/70 z-0"></div> */}

      {/* Stats Content */}
      <div className="relative z-10 w-11/12 md:max-w-4xl mx-auto flex flex-wrap  justify-center md:justify-between gap-10 text-center">
        {/* Stat 1 */}
        {/* <motion.div
          animate={controls}
          className="flex flex-col items-center justify-center"
        >
          <h3 className="text-4xl mb:text-5xl font-bold text-[var(--primary-color)]">
            {counts.numerologists}K
          </h3>
          <p className="text-[var(--primary-color)] mt-2 text-lg">
            Happy clients
          </p>
        </motion.div> */}

        {/* Stat 2 */}
        {/* <motion.div
          animate={controls}
          className="flex flex-col items-center justify-center"
        >
          <h3 className="text-4xl mb:text-5xl font-bold text-[var(--primary-color)]">
            {counts.team}
          </h3>
          <p className="text-[var(--primary-color)] mt-2 text-lg">
            Numerologists in our team
          </p>
        </motion.div> */}

        {/* Stat 3 */}
        {/* <motion.div
          animate={controls}
          className="flex flex-col items-center justify-center"
        >
          <h3 className="text-4xl mb:text-5xl font-bold text-[var(--primary-color)]">
            {counts.projects}
          </h3>
          <p className="text-[var(--primary-color)] mt-2 text-lg">
            Global Branches
          </p>
        </motion.div> */}

        {/* Stat 4 */}
        {/* <motion.div
          animate={controls}
          className="flex flex-col items-center justify-center"
        >
          <h3 className="text-4xl mb:text-5xl font-bold text-[var(--primary-color)]">
            {counts.experience}
          </h3>
          <p className="text-[var(--primary-color)] mt-2 text-lg">
            Years of experience
          </p>
        </motion.div> */}
      </div>
    </section>
  );
};

export default WhatWeDo;
