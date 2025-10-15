"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { HiMenu, HiX } from "react-icons/hi";
import logo from "../assets/logo-mysta.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname(); // ✅ get current route

  const toggleMenu = () => setIsOpen(!isOpen);

  // Check scroll position
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Menu items (you can add hrefs based on your routes)
  const menuItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Team", href: "/team" },
    { name: "Blogs", href: "/blogs" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-[#032236] shadow-md" : "bg-transparent"
      }`}
    >
      <div className="w-11/12 mx-auto px-6 sm:px-10 flex justify-between items-center h-20">
        {/* Logo */}
        <div className="flex items-center">
          <Link href="/">
            <Image src={logo} alt="Logo" width={80} height={60} />
          </Link>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-gray-300 font-medium">
          {menuItems.map((item) => (
            <li key={item.name}>
              <Link
                href={item.href}
                className={`transition-colors ${
                  pathname === item.href
                    ? "text-[#b19768] border-b-2 border-[#b19768]" // ✅ Active link highlight
                    : "hover:text-[#b19768]"
                }`}
              >
                {item.name}
              </Link>
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
          {menuItems.map((item) => (
            <li key={item.name} onClick={toggleMenu}>
              <Link
                href={item.href}
                className={`transition-colors ${
                  pathname === item.href
                    ? "text-[#b19768] border-b-2 border-[#b19768]"
                    : "hover:text-[#b19768]"
                }`}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
