"use client";
import { useEffect, useState } from "react";
import AboutGiftCardSection from "../../components/AboutGiftCardSection";
import FAQSection from "../../components/Faq";
import WhatsAppButton from "../../components/FloatingBtn";
import Footer from "../../components/Footer";
import GetInTouch from "../../components/GetInTouch";
import Hero from "../../components/Hero";
import LeadPopup from "../../components/LeadPopup";
import OurServices from "../../components/Services";
import Testimonials from "../../components/Testimonial";
import WhatWeDo from "../../components/WhatWeDo";
import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa";
import ScrollToTopButton from "../../components/ScrollToTopButton";

export default function Home() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsPopupOpen(true);
    }, 15000); // 15000ms = 15 seconds

    return () => clearTimeout(timer); // cleanup
  }, []);

  const closePopup = () => setIsPopupOpen(false);
  return (
    <div>
      <Hero />
      <WhatWeDo />
      <OurServices />
      <FAQSection />
      <AboutGiftCardSection />
      <Testimonials />
      <GetInTouch />
      <Footer />
      <WhatsAppButton />
      <ScrollToTopButton />
      {/* <LeadPopup isOpen={isPopupOpen} onClose={closePopup} /> */}
      <div className="fixed bottom-0 left-0 w-full flex md:hidden z-[9999]">
        <div className="w-1/2 bg-[var(--primary-color)] text-white text-center py-3">
          <a
            href="tel:+61457733000"
            className="w-full flex items-center justify-center gap-2"
          >
            <FaPhoneAlt size={18} />
            Call Us
          </a>
        </div>
        <div className="w-1/2 bg-white text-green-500 text-center py-3 border-l border-white">
          <a
            href="https://wa.me/+61457733000"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center justify-center gap-2"
          >
            <FaWhatsapp size={18} />
            WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}
