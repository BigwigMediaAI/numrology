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
    { name: "Contact", href: "/contact-us" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-[#0F1C28] shadow-md" : "bg-transparent"
      }`}
    >
      <div className="w-11/12 mx-auto px-6 sm:px-10 flex justify-between items-center h-28 md:h-28">
        {/* Logo */}
        <div className="flex items-center py-2">
          <Link href="/">
            <Image
              src={logo}
              alt="Destiny By Nummbers Logo"
              width={110}
              height={110}
              className="object-contain"
              priority
            />
          </Link>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-[var(--primary-color)] font-medium">
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

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-[#c9cdcf] shadow-lg transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out md:hidden`}
      >
        {/* Close Button */}
        <div className="flex justify-end p-4">
          <button
            onClick={toggleMenu}
            aria-label="Close Menu"
            className="text-[#1B2B49] hover:text-[#b19768] transition-colors"
          >
            <HiX size={28} />
          </button>
        </div>

        {/* Menu Items */}
        <ul className="flex flex-col mt-8 space-y-6 text-[#1B2B49] text-lg font-medium px-6">
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
