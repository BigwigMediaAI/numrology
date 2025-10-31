"use client";
import "react-phone-number-input/style.css";
import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import banner from "../../../assets/astrology-bg.png";
import Image from "next/image";
import bgPattern from "../../../assets/bg.png";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[var(--background-color)] py-20 md:py-0">
      <Navbar />

      {/* Hero Section */}
      <div className="relative h-[40vh] lg:h-[35vh] 2xl:h-[45vh]  flex flex-col justify-center items-center text-center px-6 tracking-widest">
        <Image
          src={banner}
          alt="Contact Banner"
          className="absolute inset-0 w-full h-full object-cover z-0 opacity-35"
        />
        <div className="relative text-[var(--primary-color)] z-20 mt-16">
          <h1 className="text-4xl md:text-5xl font-bold tracking-widest">
            Our Services
          </h1>
          <p className="mt-4 text-base md:text-xl max-w-2xl mx-auto">
            Let us help you decode your numbers through the science of
            numerology shaping your destiny for greater health, wealth and
            harmonious relationships.
          </p>
        </div>
      </div>

      {/* Services Section */}
      <section className="bg-[var(--bg-color2)] py-10">
        <div className="w-11/12 md:w-5/6 mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Full Consultation */}
            <div
              className="bg-[#f6f5f3] p-6 rounded-2xl shadow hover:shadow-lg transition duration-300 relative overflow-hidden"
              style={{
                backgroundImage: `url(${bgPattern.src})`,
                backgroundRepeat: "repeat",
                backgroundSize: "cover",
                backgroundPosition: "center",
                opacity: 0.95,
              }}
            >
              <h3 className="text-lg font-semibold mb-3 text-[var(--primary-color)]">
                Comprehensive Consultation
              </h3>
              <ul className="text-gray-600 leading-relaxed list-disc pl-5 space-y-1">
                <li>In-depth numerology reading</li>
                <li>Name correction & personalized remedies</li>
                <li>5-year life reflection & ideal profession</li>
                <li>Vastu recommendations aligned with numerology</li>
              </ul>
            </div>

            {/* Basic Consultation */}
            <div
              className="bg-[#f6f5f3] p-6 rounded-2xl shadow hover:shadow-lg transition duration-300 relative overflow-hidden"
              style={{
                backgroundImage: `url(${bgPattern.src})`,
                backgroundRepeat: "repeat",
                backgroundSize: "cover",
                backgroundPosition: "center",
                opacity: 0.95,
              }}
            >
              <h3 className="text-lg font-semibold mb-3 text-[var(--primary-color)]">
                Essential Consultation
              </h3>
              <p className="text-gray-600 leading-relaxed text-justify">
                A personalized session reviewing your key numbers and offering
                practical guidance for career, relationships, and growth.
                Includes a 1-year life reflection to help you stay aligned.
              </p>
            </div>
            {/* Digital Report */}
            <div
              className="bg-[#f6f5f3] p-6 rounded-2xl shadow hover:shadow-lg transition duration-300 relative overflow-hidden"
              style={{
                backgroundImage: `url(${bgPattern.src})`,
                backgroundRepeat: "repeat",
                backgroundSize: "cover",
                backgroundPosition: "center",
                opacity: 0.95,
              }}
            >
              <h3 className="text-lg font-semibold mb-3 text-[var(--primary-color)]">
                Digital Report (7–8 pages)
              </h3>
              <p className="text-gray-600 leading-relaxed text-justify">
                Get a detailed digital report analyzing your core numbers,
                personality traits, and life patterns perfect for self-guided
                insight into your numerology chart.
              </p>
            </div>

            {/* Relationship Report */}
            <div
              className="bg-[#f6f5f3] p-6 rounded-2xl shadow hover:shadow-lg transition duration-300 relative overflow-hidden"
              style={{
                backgroundImage: `url(${bgPattern.src})`,
                backgroundRepeat: "repeat",
                backgroundSize: "cover",
                backgroundPosition: "center",
                opacity: 0.95,
              }}
            >
              <h3 className="text-lg font-semibold mb-3 text-[var(--primary-color)]">
                Relationship Compatibility
              </h3>
              <p className="text-gray-600 leading-relaxed text-justify">
                Understand relationship dynamics with your partner, family, or
                friends. Learn about compatibility, challenges, and how to build
                deeper harmony through numerology.
              </p>
            </div>

            {/* Name Correction */}
            <div
              className="bg-[#f6f5f3] p-6 rounded-2xl shadow hover:shadow-lg transition duration-300 relative overflow-hidden"
              style={{
                backgroundImage: `url(${bgPattern.src})`,
                backgroundRepeat: "repeat",
                backgroundSize: "cover",
                backgroundPosition: "center",
                opacity: 0.95,
              }}
            >
              <h3 className="text-lg font-semibold mb-3 text-[var(--primary-color)]">
                Name Correction – Personal & Business
              </h3>
              <p className="text-gray-600 leading-relaxed text-justify">
                Optimize your personal or business name vibrations to attract
                success, harmony, and prosperity through numerology-based name
                correction.
              </p>
            </div>

            {/* New Born Baby Dates */}
            <div
              className="bg-[#f6f5f3] p-6 rounded-2xl shadow hover:shadow-lg transition duration-300 relative overflow-hidden"
              style={{
                backgroundImage: `url(${bgPattern.src})`,
                backgroundRepeat: "repeat",
                backgroundSize: "cover",
                backgroundPosition: "center",
                opacity: 0.95,
              }}
            >
              <h3 className="text-lg font-semibold mb-3 text-[var(--primary-color)]">
                New Born Baby Dates
              </h3>
              <p className="text-gray-600 leading-relaxed text-justify">
                Choose the most auspicious date for your baby’s arrival.
                Numerology ensures the chosen date aligns with a happy,
                successful life path.
              </p>
            </div>

            {/* Foreign Settlement */}
            <div
              className="bg-[#f6f5f3] p-6 rounded-2xl shadow hover:shadow-lg transition duration-300 relative overflow-hidden"
              style={{
                backgroundImage: `url(${bgPattern.src})`,
                backgroundRepeat: "repeat",
                backgroundSize: "cover",
                backgroundPosition: "center",
                opacity: 0.95,
              }}
            >
              <h3 className="text-lg font-semibold mb-3 text-[var(--primary-color)]">
                Foreign Settlement Advice
              </h3>
              <p className="text-gray-600 leading-relaxed  text-justify">
                Considering a move to another country? Discover if foreign
                settlement aligns with your numerological chart and which
                country is most suitable for you.
              </p>
            </div>
            <div
              className="bg-[#f6f5f3] p-6 rounded-2xl shadow hover:shadow-lg transition duration-300 relative overflow-hidden"
              style={{
                backgroundImage: `url(${bgPattern.src})`,
                backgroundRepeat: "repeat",
                backgroundSize: "cover",
                backgroundPosition: "center",
                opacity: 0.95,
              }}
            >
              <h3 className="text-lg font-semibold mb-3 text-[var(--primary-color)]">
                Vehicle, House & Mobile Number Compatibility
              </h3>
              <p className="text-gray-600 leading-relaxed text-justify">
                Your surroundings carry powerful vibrations. We help you assess
                whether your vehicle or house number harmonizes with your
                personal numerology ensuring your space and possessions support
                luck, peace, and prosperity.
              </p>
            </div>
            <div
              className="bg-[#f6f5f3] p-6 rounded-2xl shadow hover:shadow-lg transition duration-300 relative overflow-hidden"
              style={{
                backgroundImage: `url(${bgPattern.src})`,
                backgroundRepeat: "repeat",
                backgroundSize: "cover",
                backgroundPosition: "center",
                opacity: 0.95,
              }}
            >
              <h3 className="text-lg font-semibold mb-3 text-[var(--primary-color)]">
                Colours Compatibility
              </h3>
              <p className="text-gray-600 leading-relaxed  text-justify">
                Every colour carries its own frequency and energy. Discover
                which colours resonate best with your personal numbers to
                enhance confidence, positivity, and success in
                all areas of life.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mobile Floating Buttons */}
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
        <div className="w-1/2 bg-[#f6f5f3] text-green-500 text-center py-3 border-l border-white">
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

      <Footer />
    </div>
  );
}
