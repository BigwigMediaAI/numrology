import FAQSection from "../../components/Faq";
import WhatsAppButton from "../../components/FloatingBtn";
import Footer from "../../components/Footer";
import GetInTouch from "../../components/GetInTouch";
import Hero from "../../components/Hero";
import OurServices from "../../components/Services";
import WhatWeDo from "../../components/WhatWeDo";

export default function Home() {
  return (
    <div>
      <Hero />
      <WhatWeDo />
      <OurServices />
      <FAQSection />
      <GetInTouch />
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
