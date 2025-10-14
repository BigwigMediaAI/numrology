"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { HiMenu, HiX } from "react-icons/hi";
import logo from "../assets/logo-mysta.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  // Check scroll position
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-[#eeeeee] shadow-md" : "bg-transparent"
      }`}
    >
      <div className="w-11/12 mx-auto px-6 sm:px-10 flex justify-between items-center h-20">
        {/* Logo */}
        <div className="flex items-center">
          <Image src={logo} alt="Logo" width={80} height={60} />
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-[#1d1d1d] font-medium">
          {["Home", "About", "Team", "Blogs", "Contact"].map((item) => (
            <li
              key={item}
              className="hover:text-[#b19768] cursor-pointer transition-colors"
            >
              {item}
            </li>
          ))}
        </ul>

        {/* Hamburger Icon */}
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {isOpen ? <HiX size={30} /> : <HiMenu size={30} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-[#eeeeee] shadow-lg transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out md:hidden`}
      >
        <ul className="flex flex-col mt-20 space-y-6 text-[#1d1d1d] text-lg font-medium px-6">
          {["Home", "About", "Team", "Blogs", "Contact"].map((item) => (
            <li
              key={item}
              className="hover:text-[#b19768] cursor-pointer transition-colors"
              onClick={toggleMenu} // close menu on click
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
