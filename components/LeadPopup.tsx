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
  const [successPopup, setSuccessPopup] = useState(false);

  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handlePhoneChange = (value: string | undefined) => {
    setFormData({ ...formData, phone: value || "" });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.phone) {
      alert("Please fill all required fields.");
      return;
    }

    setLoading(true);

    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_BASE}/api/leads/add`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );

      const data = await res.json();

      if (data.success) {
        // SHOW SUCCESS POPUP
        setSuccessPopup(true);
        setFormData({ name: "", email: "", phone: "", message: "" });

        setTimeout(() => {
          setSuccessPopup(false);
          onClose();
        }, 8000);
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Lead submit error:", error);
      alert("Error sending request.");
    } finally {
      setLoading(false);
    }
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
          <p className="mb-6 text-base md:text-xl text-[#b19768] font-semibold">
            Fill in your details and we will reach out to you as soon as
            possible.
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name + Email */}
            {["name", "email"].map((field) => (
              <div key={field} className="relative group">
                <input
                  type={field === "email" ? "email" : "text"}
                  name={field}
                  value={formData[field as keyof FormData]}
                  onChange={handleChange}
                  placeholder=" "
                  required
                  className="w-full border-b-2 border-gray-300 bg-transparent text-sm px-2 pt-5 pb-2 outline-none focus:border-[#b19768] transition-all peer text-[var(--text)]"
                />
                <label
                  className="absolute left-2 text-gray-500 text-sm top-1/2 transform -translate-y-1/2 transition-all 
                    peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-gray-600 peer-placeholder-shown:text-sm
                    peer-focus:top-0 peer-focus:text-xs peer-focus:text-[#b19768] peer-focus:px-1"
                >
                  {field.charAt(0).toUpperCase() + field.slice(1)}
                </label>
              </div>
            ))}

            {/* Phone */}
            <div className="relative group">
              <PhoneInput
                international
                defaultCountry="AU"
                value={formData.phone}
                onChange={handlePhoneChange}
                className="text-sm w-full border-b-2 border-gray-300 focus:border-[#b19768] transition-all pb-1 text-[var(--text)]"
              />
            </div>

            {/* Message */}
            <div className="relative group">
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder=" "
                rows={4}
                className="w-full border-b-2 border-gray-300 bg-transparent text-sm px-2 pt-5 pb-2 outline-none focus:border-[#b19768] transition-all peer resize-none text-[var(--text)]"
              />
              <label
                className="absolute left-2 text-gray-600 text-sm top-1/2 transform -translate-y-1/2 transition-all 
                  peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-gray-600 peer-placeholder-shown:text-sm
                  peer-focus:top-0 peer-focus:text-xs peer-focus:text-[#b19768] peer-focus:px-1"
              >
                Message
              </label>
            </div>

            <ButtonFill
              type="submit"
              text={loading ? "Submitting..." : "Submit"}
              className="w-full"
            />
          </form>
          {/* SUCCESS POPUP */}
          {successPopup && (
            <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/60 backdrop-blur-sm">
              <div className="bg-white text-gray-800 p-8 rounded-2xl shadow-xl w-[90%] max-w-md text-center animate-fadeIn">
                <h2 className="text-2xl font-bold text-[#b19768] mb-3">
                  🎉 Submitted Successfully !
                </h2>
                <p className="text-gray-700">
                  Your query has been submitted. We will get in touch with you
                  soon.
                </p>

                <button
                  onClick={() => {
                    setSuccessPopup(false);
                    onClose();
                  }}
                  className="mt-6 px-6 py-2 bg-[#b19768] text-white rounded-xl hover:bg-[#a38755] transition-all"
                >
                  Close
                </button>
              </div>
            </div>
          )}

          {/* Close Button */}
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
