"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { HiMenu, HiX } from "react-icons/hi";
import logo from "../assets/new DBN.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => setIsOpen(!isOpen);

  // Handle scroll background
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { name: "Home", href: "/" },
    { name: "Our Services", href: "/our-services" },
    { name: "Team", href: "/team" },
    // { name: "Blogs", href: "/blogs" },
    { name: "Contact", href: "/contact-us" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-[#c9cdcf] shadow-md" : "bg-transparent"
      }`}
    >
      <div className="w-11/12 mx-auto px-6 sm:px-10 flex justify-between items-center h-28 md:h-28">
        {/* Logo */}
        {/* Logo */}
        <div className="flex items-center py-2">
          <Link href="/">
            <Image
              src={logo}
              alt="Destiny By Nummbers Logo"
              width={110} // ⬅️ increased from 90
              height={110} // ⬅️ increased from 90
              className="object-contain"
              priority
            />
          </Link>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-[#1B2B49] font-medium">
          {menuItems.map((item) => (
            <li key={item.name}>
              <Link
                href={item.href}
                className={`transition-colors duration-200 ${
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

        {/* Hamburger Icon */}
        <div className="md:hidden">
          <button onClick={toggleMenu} aria-label="Toggle Menu">
            {isOpen ? <HiX size={30} /> : <HiMenu size={30} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-[#FFF6E0] shadow-lg transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out md:hidden`}
      >
        <ul className="flex flex-col mt-24 space-y-6 text-[#1B2B49] text-lg font-medium px-6">
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
