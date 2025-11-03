"use client";

import React, { useState, ChangeEvent, FormEvent } from "react";
import Image from "next/image";
import popupImage from "../assets/numerology-2024.png";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import ButtonFill from "./Button";

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

  const handlePhoneChange = (value: string | undefined) => {
    setFormData({ ...formData, phone: value || "" });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert("Thank you! We'll contact you soon.");
    setFormData({ name: "", email: "", phone: "", message: "" });
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
      <div className="bg-[var(--background-color)] rounded-2xl shadow-xl max-w-4xl w-11/12 md:flex overflow-hidden relative">
        {/* Left Image */}
        <div className="hidden md:block md:w-1/2 relative">
          <Image
            src={popupImage}
            alt="Numerology"
            fill
            className="object-cover"
          />
        </div>

        {/* Form Section */}
        <div className="w-full md:w-1/2 p-8 sm:p-10 flex flex-col justify-center relative bg-[var(--background-color)]">
          <p className=" mb-6 text-base md:text-xl text-[#b19768] font-semibold">
            Fill in your details and we will reach out to you as soon as
            possible.
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Floating Inputs */}
            {["name", "email"].map((field) => (
              <div key={field} className="relative group">
                <input
                  type={field === "email" ? "email" : "text"}
                  name={field}
                  value={formData[field as keyof FormData]}
                  onChange={handleChange}
                  placeholder=" "
                  required
                  className="w-full border-b-2 border-gray-300 bg-transparent text-sm px-2 pt-5 pb-2 outline-none focus:border-[#b19768] transition-all peer "
                />
                <label
                  className="absolute left-2 text-gray-500 text-sm top-1/2 transform -translate-y-1/2 transition-all 
                  peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-gray-600 peer-placeholder-shown:text-sm
                  peer-focus:top-0 peer-focus:text-xs peer-focus:text-[#b19768]  peer-focus:px-1"
                >
                  {field.charAt(0).toUpperCase() + field.slice(1)}
                </label>
              </div>
            ))}

            {/* Phone Number Input */}
            <div className="relative group">
              <PhoneInput
                international
                defaultCountry="AU"
                value={formData.phone}
                onChange={handlePhoneChange}
                className="text-sm w-full border-b-2 text-gray-600 border-gray-300 focus:border-[#b19768] transition-all pb-1"
              />
            </div>

            {/* Textarea */}
            <div className="relative group">
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder=" "
                rows={4}
                className="w-full border-b-2 border-gray-300 bg-transparent text-sm px-2 pt-5 pb-2 outline-none focus:border-[#b19768] transition-all peer resize-none"
              />
              <label
                className="absolute left-2 text-gray-600 text-sm top-1/2 transform -translate-y-1/2 transition-all 
                peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-gray-600 peer-placeholder-shown:text-sm
                peer-focus:top-0 peer-focus:text-xs peer-focus:text-[#b19768]  peer-focus:px-1"
              >
                Message
              </label>
            </div>

            <ButtonFill type="submit" text="Submit" className="w-full" />
          </form>

          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 text-2xl"
          >
            ✕
          </button>
        </div>
      </div>
    </div>
  );
};

export default LeadPopup;
