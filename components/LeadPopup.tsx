"use client";

import React, { useState, ChangeEvent, FormEvent } from "react";
import Image from "next/image";
import popupImage from "../assets/numerology-2024.png";

interface LeadPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

const LeadPopup: React.FC<LeadPopupProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData); // Replace with API call
    alert("Thank you! We'll contact you soon.");
    setFormData({ name: "", email: "", phone: "", message: "" });
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
      <div className="bg-white rounded-2xl shadow-xl max-w-4xl w-11/12 md:flex overflow-hidden relative">
        {/* Left Image */}
        <div className="hidden md:block md:w-1/2 relative">
          <Image
            src={popupImage}
            alt="Numerology"
            fill
            className="object-fill"
          />
        </div>

        {/* Form */}
        <div className="w-full md:w-1/2 p-8 sm:p-10 flex flex-col justify-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#b19768] mb-4">
            Get Your Free Numerology Guide
          </h2>
          <p className="text-gray-700 mb-6">
            Sign up to get your daily number and personalized guidance.
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Name"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#b19768]"
              required
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#b19768]"
              required
            />
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Phone"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#b19768]"
              required
            />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Message"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#b19768] resize-none"
              rows={4}
            />

            <button
              type="submit"
              className="w-full bg-[#b19768] text-white font-semibold py-3 rounded-lg hover:bg-[#a5834f] transition-colors"
            >
              Get Started
            </button>
          </form>

          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 transition text-2xl font-bold"
          >
            ✕
          </button>
        </div>
      </div>
    </div>
  );
};

export default LeadPopup;
