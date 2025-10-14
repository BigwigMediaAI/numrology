import FAQSection from "../../components/Faq";
import Footer from "../../components/Footer";
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
      <Footer />
    </div>
  );
}
