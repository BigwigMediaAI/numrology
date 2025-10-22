// import PhoneInput, { Value } from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { Mail, Phone } from "lucide-react";
import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import banner from "../../../assets/astrology-bg.png";
import Image from "next/image";
import Link from "next/link";

export default function ContactPage() {
  return (
    <div className="  min-h-screen  bg-[var(--background-color)]">
      <Navbar />

      {/* Hero Section */}
      <div className="relative h-[70vh] flex flex-col justify-center items-center text-center px-6 tracking-widest">
        {/* Background Image */}
        <Image
          src={banner}
          alt="Contact Banner"
          className="absolute inset-0 w-full h-full object-cover z-0"
        />

        {/* Overlay */}

        {/* Content */}
        <div className="relative text-[var(--primary-color)] z-20 mt-16">
          <h1 className="text-4xl md:text-5xl font-bold tracking-widest">
            About Us
          </h1>
          <p className="mt-4 text-lg md:text-xl max-w-2xl mx-auto">
            Unlock the power of numbers to understand yourself and shape your
            destiny.
          </p>
        </div>
      </div>

      <section className="w-11/12 md:w-5/6 mx-auto py-12 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Left: Image Grid */}
        <div className="grid grid-cols-2 grid-rows-2 gap-4">
          <div className="col-span-2">
            <img
              src="https://mysta.peerduck.com/wp-content/uploads/2022/02/adult-man-woman-sit-together-after-practicing-asana-yoga-concept-energy-practices-mixed-media.png"
              alt="Team main"
              className="w-full  md:h-80 object-cover rounded-xl shadow-md"
            />
          </div>
          <img
            src="https://mysta.peerduck.com/wp-content/uploads/2022/02/w-about.png"
            alt="Numerologist"
            className="w-full h-40 md:h-48 object-cover rounded-xl shadow-md"
          />
          <img
            src="https://mysta.peerduck.com/wp-content/uploads/2022/02/Group-1035.png"
            alt="Cards"
            className="w-full h-40 md:h-48 object-cover rounded-xl shadow-md"
          />
        </div>

        {/* Right: Text Section */}
        <div className="mb-12">
          <p className="text-gray-400 uppercase font-semibold tracking-wide ">
            What We Do
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[var(--primary-color)] leading-tight">
            We know everything about numerology
          </h2>
          <p className="text-gray-500 mb-6 leading-relaxed">
            Discover the fascinating world of numerology and how numbers subtly
            influence every aspect of your life. Our team of expert
            numerologists combines ancient wisdom with modern techniques to
            provide you with profound insights that illuminate your path. From
            understanding your personality and strengths to uncovering hidden
            challenges and opportunities, we guide you toward achieving balance,
            clarity, and a deeper sense of purpose. Whether you seek guidance in
            career, relationships, or personal growth, our personalized
            numerology readings empower you to make informed decisions and
            embrace the journey of self-discovery with confidence and clarity.
          </p>

          {/* Stats */}
          <div className="mt-10 grid grid-cols-3 text-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-[var(--primary-color)]">
                546K
              </h3>
              <p className="text-sm text-gray-500">Happy Clients</p>
            </div>
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-[var(--primary-color)]">
                83
              </h3>
              <p className="text-sm text-gray-500">Numerologists</p>
            </div>
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-[var(--primary-color)]">
                10
              </h3>
              <p className="text-sm text-gray-500">Years of Experience</p>
            </div>
          </div>
        </div>
      </section>

      <div className="fixed bottom-0 left-0 w-full flex md:hidden z-[9999]">
        <div className="w-1/2 bg-[var(--primary-color)] text-white text-center py-3">
          <a
            href="tel:+919999000183"
            className="w-full flex items-center justify-center gap-2"
          >
            <FaPhoneAlt size={18} />
            Call Us
          </a>
        </div>
        <div className="w-1/2 bg-white text-green-500 text-center py-3 border-l border-white">
          <a
            href="https://wa.me/+919999000172"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center justify-center gap-2"
          >
            <FaWhatsapp size={18} />
            WhatsApp
          </a>
        </div>
      </div>

      <div className="hidden md:block"></div>
      <Footer />
    </div>
  );
}
