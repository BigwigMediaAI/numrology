"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import bgPattern from "../assets/yellow-star-bg.png";
import numbers from "../assets/bumbers-2-768x1399.png";
import ButtonFill from "./Button";
import LeadPopup from "./LeadPopup";
import AOS from "aos";
import "aos/dist/aos.css";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

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

        {/* Main Content */}
        <div className="relative z-10 w-11/12 md:w-4/5 mx-auto flex flex-col lg:flex-row justify-between gap-10 mt-10 lg:mt-20">
          {/* Right Side Image */}
          <div
            className="relative flex justify-center lg:justify-start items-center w-full lg:w-1/2 order-2 lg:order-1"
            data-aos="zoom-in"
            data-aos-delay="500"
          >
            <div className="relative w-[280px] md:w-[400px]">
              <Image
                src={numbers}
                alt="Numerology Illustration"
                width={360}
                height={400}
                className="relative z-10 animate-slow-bounce"
              />
            </div>
          </div>
          {/* Left Side Text */}
          <div className="max-w-xl text-start lg:text-left w-full lg:w-1/2 order-1 lg:order-1">
            {/* <p
              className="text-[var(--title)] text-lg font-bold mb-3 uppercase tracking-widest"
              data-aos="fade-right"
              data-aos-delay="200"
            >
              What we do
            </p> */}
            <h2
              className="text-3xl md:text-5xl leading-tight text-[var(--title)] mb-6 montserrat"
              data-aos="fade-right"
              data-aos-delay="400"
            >
              Numerology helps to transform you
            </h2>
            <p
              className="text-[var(--text)] mb-8 montserrat text-justify"
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

      {/* Stats Section */}
      {/* <StatsSection /> */}
    </>
  );
};

/* ---------------------- STATS SECTION COMPONENT ---------------------- */
// const StatsSection = () => {
//   const controls = useAnimation();
//   const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.3 });

//   const [counts, setCounts] = useState({
//     numerologists: 0,
//     experience: 0,
//     projects: 0,
//     team: 0,
//   });

//   useEffect(() => {
//     if (inView) {
//       const duration = 2000; // ms
//       const fps = 60;
//       const totalFrames = Math.round((duration / 1000) * fps);

//       const target = {
//         numerologists: 546,
//         team: 83,
//         projects: 10,
//         experience: 10,
//       };

//       let frame = 0;
//       const counter = setInterval(() => {
//         frame++;
//         const progress = frame / totalFrames;
//         setCounts({
//           numerologists: Math.floor(target.numerologists * progress),
//           team: Math.floor(target.team * progress),
//           projects: Math.floor(target.projects * progress),
//           experience: Math.floor(target.experience * progress),
//         });

//         if (frame === totalFrames) clearInterval(counter);
//       }, 1000 / fps);
//     }
//   }, [inView]);

//   return (
//     <section
//       ref={ref}
//       className="relative py-12 bg-[var(--background-color)] overflow-hidden flex justify-center montserrat"
//     >
//       {/* Pattern background */}
//       <div
//         className="absolute inset-0 z-0"
//         style={{
//           backgroundImage: `url(${bgPattern.src})`,
//           backgroundRepeat: "repeat",
//           backgroundSize: "contain",
//           backgroundPosition: "center",
//           opacity: 0.5,
//         }}
//       ></div>
//     </section>
//   );
// };

export default WhatWeDo;
