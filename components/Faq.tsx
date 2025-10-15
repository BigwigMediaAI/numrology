"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import bg from "../assets/yellow-star-bg.png";
import img1 from "../assets/bg-numerology.png";
import img2 from "../assets/destiny-num.png";
import img3 from "../assets/dwednum.png";
import AOS from "aos";
import "aos/dist/aos.css";

const faqs = [
  {
    question: "What is core numbers?",
    answer:
      "Core numbers in numerology represent key aspects of your personality and destiny. They are calculated based on your name and birth date.",
  },
  {
    question: "How can numerology help me?",
    answer:
      "Numerology helps you understand yourself better, guiding you in relationships, career decisions, and personal growth by revealing your natural strengths and life path.",
  },
  {
    question: "How to start using numerology?",
    answer:
      "Begin by discovering your life path number using your birth date, then explore what it says about your personality and purpose.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  return (
    <section className="relative w-full bg-[var(--background-color)] py-12 overflow-hidden font-['Poppins']">
      {/* Spotted Background */}
      <div className="absolute inset-0">
        <Image
          src={bg} // 🔁 replace with your path
          alt="Background dots"
          fill
          style={{ objectFit: "cover" }}
          className="pointer-events-none select-none opacity-20"
        />
      </div>

      <div className="relative z-10 w-11/12 md:w-4/5 mx-auto flex flex-col md:flex-row items-center justify-between ">
        {/* Left Section: Numbers & Arched BG */}
        <div className="relative w-full md:w-1/2 flex justify-center mb-10 md:mb-0">
          {/* Arched Shape */}
          <div className="relative w-[320px] md:w-[380px]">
            {/* <Image
              src={img1} // 🔁 replace with your path
              alt="Numerology background"
              width={400}
              height={600}
              className="w-full h-auto"
            /> */}

            {/* Numbers Overlay */}
            <div
              className="absolute inset-0 flex flex-col items-center justify-center"
              data-aos="zoom-in"
              data-aos-delay="200"
            >
              <Image
                src={img3}
                alt="Number 2"
                width={130}
                height={130}
                className="w-full h-auto animate-slow-bounce invert"
              />
            </div>
          </div>
        </div>

        {/* Right Section: FAQ */}
        <div className="w-full md:w-1/2 text-left">
          <p
            className="text-[var(--primary-color)] text-lg font-bold mb-3 uppercase tracking-widest"
            data-aos="fade-right"
            data-aos-delay="200"
          >
            FAQ
          </p>
          <h2
            className="text-4xl md:text-6xl font-bold leading-tight  mb-6 playfair text-gray-300"
            data-aos="fade-right"
            data-aos-delay="400"
          >
            Fell free to ask <br /> more questions
          </h2>

          {/* Accordion FAQ */}
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="border-b border-[#E4E0DB] pb-4 cursor-pointer"
                data-aos="fade-right"
                data-aos-delay={index * 200}
              >
                <div
                  className="flex justify-between items-center"
                  onClick={() =>
                    setOpenIndex(openIndex === index ? null : index)
                  }
                >
                  <h3 className="text-xl font-semibold text-gray-300 playfair">
                    {faq.question}
                  </h3>
                  <span className="text-[#F95B2D] text-2xl">
                    {openIndex === index ? "▾" : "▸"}
                  </span>
                </div>
                {openIndex === index && (
                  <p className="text-gray-200 mt-3 text-lg leading-relaxed">
                    {faq.answer}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
