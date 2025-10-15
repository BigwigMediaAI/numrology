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
    name: "PULKIT",
    message:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ut odio nec ligula aliquam fringilla.",
  },
  {
    name: "KIRTI BEDI",
    message:
      "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
  },
  {
    name: "SAURAV SHARMA",
    message:
      "Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor.",
  },
  {
    name: "ANITA DESAI",
    message:
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    name: "RAHUL VERMA",
    message:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum.",
  },
  {
    name: "PRIYA KAPOOR",
    message:
      "Cras pulvinar mattis nunc sed blandit libero volutpat sed. Nunc non blandit massa enim nec.",
  },
  {
    name: "RAJ SINGH",
    message:
      "Faucibus in ornare quam viverra orci sagittis eu volutpat. Aliquam sem fringilla ut morbi tincidunt.",
  },
  {
    name: "NEHA GUPTA",
    message:
      "Egestas fringilla phasellus faucibus scelerisque eleifend donec pretium vulputate sapien nec.",
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
      {/* Overlay (optional, for subtle dim effect) */}
      {/* <div className="absolute inset-0 bg-white/80 z-0"></div> */}

      <div className="relative z-10 w-11/12 md:w-4/5 mx-auto">
        {/* Section Label */}
        <p
          className="text-[var(--primary-color)] text-lg font-bold mb-3 uppercase tracking-widest"
          data-aos="fade-right"
          data-aos-delay="200"
        >
          Testimonials
        </p>

        {/* Heading */}
        <h2
          className="text-4xl md:text-6xl font-bold leading-tight  mb-6 playfair text-gray-300"
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
              <div className="bg-[#0d2e4a] rounded-2xl border border-gray-200 p-6 shadow-md h-72 flex flex-col justify-between hover:shadow-lg transition duration-300 relative">
                {/* Quote Icon */}
                <FaQuoteLeft className="text-gray-300 text-3xl opacity-30 mb-3" />

                {/* Message */}
                <p className="text-gray-300 text-base leading-relaxed font-annie line-clamp-5">
                  {testimonial.message}
                </p>

                {/* Footer */}
                <div className="mt-6 flex items-center justify-between">
                  <h3 className="text-sm font-bold uppercase tracking-wide text-[#b19768]">
                    — {testimonial.name}
                  </h3>

                  {/* Initials Avatar */}
                  <div className="w-10 h-10 rounded-full bg-[#b19768] text-white flex items-center justify-center text-sm font-bold uppercase">
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
