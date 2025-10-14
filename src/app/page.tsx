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
      <LeadPopup isOpen={isPopupOpen} onClose={closePopup} />
    </div>
  );
}
