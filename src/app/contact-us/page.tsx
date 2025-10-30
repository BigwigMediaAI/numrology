"use client";

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
    <div className="min-h-screen bg-[var(--background-color)] py-20 md:py-0">
      <Navbar />

      {/* Hero Section */}
      <div className="relative h-[40vh] lg:h-[35vh] 2xl:h-[45vh]  flex flex-col justify-center items-center text-center px-6 tracking-widest">
        {/* Background Image */}
        <Image
          src={banner}
          alt="Contact Banner"
          className="absolute inset-0 w-full h-full object-cover z-0 opacity-35"
        />

        {/* Content */}
        <div className="relative text-[var(--primary-color)] z-20 mt-16">
          <h1 className="text-4xl md:text-5xl font-bold tracking-widest">
            Get in Touch With Us
          </h1>
          <p className="mt-4 text-base md:text-xl max-w-2xl mx-auto">
            Have questions or need assistance? Our team is here to help you with
            all your numerology needs. Let’s connect and guide you on your
            destiny journey.
          </p>
        </div>
      </div>

      {/* Contact Info Section */}
      <section className="w-11/12 md:w-5/6 mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 py-8 text-[var(--primary-color)]">
        <div className="pt-4">
          <h2 className="text-xl md:text-2xl mb-2 font-bold text-[var(--primary-color)] font-amatic border-l-4 border-[var(--primary-color)] pl-3">
            Head Office
          </h2>
          <hr />
          <p className="mb-1 text-lg font-semibold">Melbourne, Australia</p>
          <p className="mb-4">
            21 Cuttlefish Circuit, Tarneit, VIC, 3029, Australia
          </p>
          <h2 className="text-xl md:text-2xl mb-2 font-bold text-[var(--primary-color)] font-amatic border-l-4 border-[var(--primary-color)] pl-3 mt-6">
            Branch Office
          </h2>
          <hr />
          <p className="mb-1 text-lg font-semibold">Delhi, India</p>
          <p className="mb-4">A1/97, Sector 8, Rohini, Delhi 110085</p>
          {/* <p className="text-gray-400 mt-8">
            Our business operating hours are as follows:
          </p>
          We’re here for you from 10 AM to 7 PM daily */}
        </div>

        <div className="pt-4">
          <h2 className="text-xl md:text-2xl mb-2 font-bold text-[var(--primary-color)] font-amatic border-l-4 border-[var(--primary-color)] pl-3">
            Get in Touch
          </h2>
          <hr />
          <p className="mb-4 text-gray-800 font-sans">
            Please contact us via phone or email below, or visit us at our Head
            or Branch Office during operating hours.
          </p>

          <div className="flex flex-col gap-4">
            {/* Phone Button */}
            <Link
              href="tel:+61457733000"
              className="bg-[var(--featured)] text-[var(--text)] rounded-md p-4 flex items-center gap-4 shadow-sm transition font-sans"
            >
              <Phone className="w-6 h-6" />
              <span className="text-sm">+61 457 733 000</span>
            </Link>
            <Link
              href="tel:+919871229094"
              className="bg-[var(--featured)] text-[var(--text)] rounded-md p-4 flex items-center gap-4 shadow-sm transition font-sans"
            >
              <Phone className="w-6 h-6" />
              <span className="text-sm">+91 9871229094</span>
            </Link>

            {/* WhatsApp Button */}
            <Link
              href="https://wa.me/61457733000"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[var(--featured)] text-[var(--text)] rounded-md p-4 flex items-center gap-4 shadow-sm transition font-sans"
            >
              <FaWhatsapp className="w-6 h-6 text-green-600" />
              <span className="text-sm">+61 457 733 000</span>
            </Link>

            {/* Email Button */}
            <Link
              href="mailto:destinybynummbers@gmail.com"
              className="bg-[var(--featured)] text-[var(--text)] rounded-md p-4 flex items-center gap-4 shadow-sm hover:bg-gray-200 transition font-sans"
            >
              <Mail className="w-6 h-6" />
              <span className="text-sm">destinybynummbers@gmail.com</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <div className="w-11/12 md:w-5/6 mx-auto">
        <div className="flex flex-col md:flex-row justify-center items-start py-8 gap-10 mb-7">
          <div className="w-full h-[450px] rounded-lg overflow-hidden shadow-lg border border-[var(--primary-color)]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3148.6493501821093!2d144.6719204!3d-37.8392873!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad66a2f8c7fd3b3%3A0x43f41c0cf99f1e55!2s21%20Cuttlefish%20Circuit%2C%20Tarneit%20VIC%203029%2C%20Australia!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full"
            ></iframe>
          </div>
        </div>
      </div>

      {/* Mobile Quick Buttons */}
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
            href="https://wa.me/61457733000"
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
