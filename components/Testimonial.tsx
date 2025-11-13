"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { FaQuoteLeft } from "react-icons/fa";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

// Background image
import bgPattern from "../assets/yellow-star-bg.png";

const testimonials = [
  {
    name: "Pulkit",
    message:
      "Destiny by Numberrs helped me look at my life direction from a completely new angle. The session highlighted patterns I never noticed before and gave me clarity on what I should focus on next.",
  },
  {
    name: "Kirti Bedi",
    message:
      "The reading felt so personal and meaningful. I loved how clearly everything was explained, and it honestly gave me the confidence to move forward with decisions I had been delaying.",
  },
  {
    name: "Saurav Sharma",
    message:
      "I went in unsure, but came out impressed. Their insights about my work cycles and upcoming opportunities matched my real experiences so closely that it genuinely surprised me.",
  },
  {
    name: "Anita Desai",
    message:
      "My session with Destiny by Numberrs came at the perfect time. The guidance I received helped me understand the emotional phase I was going through and how to handle it better.",
  },
  {
    name: "Rahul Verma",
    message:
      "Every session feels like I'm uncovering a new layer of myself. Their reports are deep, practical, and always give me something valuable to think about.",
  },
  {
    name: "Michael Fraser",
    message:
      "Their numerology insights helped me make decisions I had been stuck on for months. The way they broke down the meaning behind my name and birth numbers was incredibly eye-opening.",
  },
  {
    name: "Noah Edwards",
    message:
      "The guidance I received genuinely shifted how I approach my goals. After applying their suggestions for a while, I noticed real improvements in both my mindset and my career.",
  },
  {
    name: "Sophie Wilson",
    message:
      "Such a warm and insightful experience. They explained my numerology chart in a way that made everything feel connected, and I left feeling more aware of my strengths and direction.",
  },
];

export default function Testimonials() {
  useEffect(() => {
    AOS.init({
      duration: 600, // ⏩ faster animation (from 1000 → 600ms)
      easing: "ease-out", // snappier easing
      once: true, // animate only once
      offset: 80, // trigger a bit earlier (default is 120)
    });
  }, []);

  return (
    <section className="relative  bg-[var(--background-color)] overflow- py-12">
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

      <div className="relative z-10 w-11/12 md:w-4/5 mx-auto">
        {/* Section Label */}
        <p
          className="text-[var(--primary-color)] text-lg  mb-3 uppercase tracking-widest"
          data-aos="fade-right"
          data-aos-delay="100"
        >
          Testimonials
        </p>

        {/* Heading */}
        <h2
          className="text-4xl md:text-5xl leading-tight  mb-6 montserrat text-[var(--title)] "
          data-aos="fade-right"
          data-aos-delay="200"
        >
          What People Say
        </h2>

        {/* Swiper Slider */}
        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={30}
          slidesPerView={3}
          loop
          centeredSlides
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          pagination={{ clickable: true }}
          breakpoints={{
            320: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="pb-12"
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <div className=" rounded-2xl border border-[var(--title)] p-6 shadow-md h-72 flex flex-col justify-between hover:shadow-lg transition duration-300 relative">
                {/* Quote Icon */}
                <FaQuoteLeft className="text-[var(--text)] text-3xl opacity-30 mb-3" />

                {/* Message */}
                <p className="text-[var(--text)] text-base leading-relaxed font-annie line-clamp-5">
                  {testimonial.message}
                </p>

                {/* Footer */}
                <div className="mt-6 flex items-center justify-between">
                  <h3 className="text-sm font-bold uppercase tracking-wide text-[#b19768]">
                    — {testimonial.name}
                  </h3>

                  {/* Initials Avatar */}
                  <div className="w-10 h-10 rounded-full bg-[var(--title)] text-white flex items-center justify-center text-sm font-bold uppercase">
                    {testimonial.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
