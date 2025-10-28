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
    question: "What is numerology and how can it help me?",
    answer:
      "Numerology is the study of numbers and their influence on our lives. By analysing your birth date and name, numerology provides insights into your personality, life path, strengths, and challenges. It helps you make informed decisions, align with your purpose, and attract positive energy",
  },
  {
    question: "How do consultations work?",
    answer:
      "We offer flexible consultations to suit your needs. Sessions can be conducted face-to-face in Melbourne, Australia or via Google Meet for clients anywhere. Each session is personalised, focusing on your numbers, life patterns, and guidance tailored to you.",
  },
  {
    question: "Are my details kept confidential?",
    answer:
      "Absolutely. At Destiny By Nummbers, confidentiality is our top priority. Your personal information, birth details, and readings are never shared with anyone.",
  },
  {
    question: "What is included in a full consultation?",
    answer:
      "Our Full Consultation includes an in-depth numerology reading, name correction, personalized remedies, and a 5-year life reflection. This session provides actionable insights to help you align fully with your life’s purpose.",
  },
  {
    question: "Are remedies difficult or expensive?",
    answer:
      "Not at all. The remedies we recommend are simple, easy to follow, and very affordable, making it easy to bring balance and positive change into your life.",
  },
  {
    question: "Can you help with name correction?",
    answer:
      "Yes! We specialize in name correction for both personal and business names. Adjusting the spelling of your name can harmonize its vibration with your life path, attracting success, harmony, and opportunities.",
  },
  {
    question: "Do you provide guidance for babies or family members?",
    answer:
      "Yes. We can help select auspicious dates for newborns, analyse your children’s numbers, and provide guidance for family harmony.",
  },
  {
    question: "Can numerology guide decisions about moving abroad?",
    answer:
      "Absolutely. We offer foreign settlement guidance, helping you understand if relocating aligns with your life path and what opportunities or challenges it may bring.",
  },
  {
    question: "How long are consultations?",
    answer:
      "Consultation durations vary depending on the service. A Basic Consult typically lasts 15–30 minutes, while a Full Consultation may take 45–60 minutes, giving ample time for detailed readings and discussion.",
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
    <section className="relative w-full bg-[var(--background-color)]  overflow-hidden font-['Poppins']">
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

      <div className="relative z-10 w-11/12 md:w-4/5 mx-auto flex flex-col md:flex-row items-center justify-between mt-10">
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
              className="hidden md:flex absolute inset-0 flex-col items-center justify-center"
              data-aos="zoom-in"
              data-aos-delay="200"
            >
              <Image
                src={img3}
                alt="Number 2"
                width={130}
                height={130}
                className="w-full h-auto animate-slow-bounce "
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
            className="text-4xl md:text-6xl font-bold leading-tight  mb-6 playfair text-[var(--primary-color)]"
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
                  <h3 className="text-lg md:text-xl font-semibold text-[var(--primary-color)] playfair">
                    {faq.question}
                  </h3>
                  <span className="text-[#F95B2D] text-2xl">
                    {openIndex === index ? "▾" : "▸"}
                  </span>
                </div>
                {openIndex === index && (
                  <p className="text-[var(--primary-color)] mt-3 text-base md:text-lg leading-relaxed text-justify">
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
