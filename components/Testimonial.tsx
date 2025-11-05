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
      "Destiny by Nummber gave me incredible insights into my life path and career choices. The numerology session helped me understand my strengths and the timing for major decisions. Highly recommend their guidance!",
  },
  {
    name: "Kirti Bedi",
    message:
      "I was amazed by how accurate the reading was! The team at Destiny by Nummber explained everything in such a simple yet powerful way. It truly helped me align my goals with my personal numbers.",
  },
  {
    name: "Saurav Sharma",
    message:
      "I never believed in numerology before, but after my consultation with Destiny by Nummber, I was blown away. The predictions about my business growth and personal energy cycles were spot on!",
  },
  {
    name: "Anita Desai",
    message:
      "Destiny by Nummber helped me discover clarity during a confusing phase in my life. Their numerology insights about relationships and self-growth were incredibly helpful and eye-opening.",
  },
  {
    name: "Rahul Verma",
    message:
      "I’ve had multiple sessions with Destiny by Nummber, and every time I leave with a new sense of direction and motivation. Their numerology reports are deeply detailed and very accurate.",
  },
  {
    name: "Priya Kapoor",
    message:
      "Thanks to Destiny by Nummber, I made some major life decisions with confidence. Their expert advice based on my birth date and name vibration really made a difference in my personal growth.",
  },
  {
    name: "Raj Singh",
    message:
      "Destiny by Nummber’s guidance completely changed my perspective. I followed their advice for a few months, and I could genuinely see positive changes in my career and relationships.",
  },
  {
    name: "Neha Gupta",
    message:
      "The consultation was so insightful! Destiny by Nummber explained how my numerology chart connects to my daily life, and it felt like they truly understood my challenges and potential.",
  },
];

export default function Testimonials() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
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
          opacity: 0.5,
        }}
      ></div>

      <div className="relative z-10 w-11/12 md:w-4/5 mx-auto">
        {/* Section Label */}
        <p
          className="text-[var(--primary-color)] text-lg  mb-3 uppercase tracking-widest"
          data-aos="fade-right"
          data-aos-delay="200"
        >
          Testimonials
        </p>

        {/* Heading */}
        <h2
          className="text-4xl md:text-5xl leading-tight  mb-6 montserrat text-[var(--title)] tracking-widest"
          data-aos="fade-right"
          data-aos-delay="400"
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
