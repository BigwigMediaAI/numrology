"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import bg from "../assets/yellow-star-bg.png";
import img3 from "../assets/planet2.png";
import AOS from "aos";
import "aos/dist/aos.css";

const faqs = [
  {
    question: "What is numerology and how can it help me?",
    answer:
      "Numerology is the study of numbers and their influence on our lives. By analysing your birth date and name, numerology provides insights into your personality, life path, strengths, and challenges. It helps you make informed decisions, align with your purpose, and attract positive energy.",
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
      "Consultation durations vary depending on the service. A Essential Consult typically lasts 15–30 minutes, while a Full Comprehensive Consultation may take 45–60 minutes, giving ample time for detailed readings and discussion.",
  },
  {
    question: "What happens when my numbers are not aligned?",
    answer:
      "When your core numbers such as your Driver & Conductor numbers are not in alignment, it can create inner conflict and life challenges. You may feel stuck, face repeated obstacles, or struggle to achieve balance in areas like career, relationships, or health. Through the science of numerology, we identify these misalignments and help restore harmony using name correction and simple, practical remedies. Once your numbers are aligned, you begin to attract clarity, confidence, and opportunities that naturally support your true path and purpose.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  return (
    <section className="relative w-full bg-[var(--background-color)] overflow-hidden font-['Poppins'] py-12">
      {/* Background */}
      <div className="absolute inset-0">
        <Image
          src={bg}
          alt="Background dots"
          fill
          style={{ objectFit: "cover" }}
          className="pointer-events-none select-none opacity-20"
        />
      </div>

      {/* Content Container */}
      <div className="relative z-10 w-11/12 md:w-10/12 lg:w-4/5 mx-auto flex flex-col lg:flex-row items-center justify-between gap-5">
        {/* Image Section — now visible on all devices */}
        <div
          className="flex justify-center items-center w-full lg:w-1/2"
          data-aos="zoom-in"
          data-aos-delay="200"
        >
          <div className="relative w-[280px] sm:w-[350px] md:w-[400px] lg:w-[480px] xl:w-[520px]">
            <Image
              src={img3}
              alt="FAQ Illustration"
              width={500}
              height={500}
              className="w-full h-auto animate-slow-bounce"
            />
          </div>
        </div>

        {/* FAQ Section */}
        <div className="w-full lg:w-1/2 text-left">
          <p
            className="text-[var(--primary-color)] text-lg font-bold mb-3 uppercase tracking-widest"
            data-aos="fade-right"
          >
            FAQ
          </p>

          <h2
            className="text-3xl md:text-5xl leading-tight text-[var(--title)] mb-6 montserrat tracking-widest"
            data-aos="fade-right"
            data-aos-delay="200"
          >
            Feel free to ask <br /> more questions
          </h2>

          {/* Accordion FAQ */}
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="border-b border-[#E4E0DB] pb-4 cursor-pointer"
                data-aos="fade-right"
                data-aos-delay={index * 150}
              >
                <div
                  className="flex justify-between items-center"
                  onClick={() =>
                    setOpenIndex(openIndex === index ? null : index)
                  }
                >
                  <h3 className="text-base md:text-lg font-semibold text-[var(--primary-color)] montserrat">
                    {faq.question}
                  </h3>
                  <span className="text-[var(--title)] text-xl sm:text-2xl">
                    {openIndex === index ? "▾" : "▸"}
                  </span>
                </div>

                {openIndex === index && (
                  <p className="text-[var(--text)] mt-3 text-sm sm:text-base text-justify montserrat">
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
