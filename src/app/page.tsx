import FAQSection from "../../components/Faq";
import WhatsAppButton from "../../components/FloatingBtn";
import Footer from "../../components/Footer";
import GetInTouch from "../../components/GetInTouch";
import Hero from "../../components/Hero";
import OurServices from "../../components/Services";
import Testimonials from "../../components/Testimonial";
import WhatWeDo from "../../components/WhatWeDo";

export default function Home() {
  return (
    <div>
      <Hero />
      <WhatWeDo />
      <OurServices />
      <FAQSection />
      <Testimonials />
      <GetInTouch />
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
