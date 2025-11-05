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

  const toggleMenu = () => setIsOpen((v) => !v);

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

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full transition-all duration-300 z-50 ${
          scrolled
            ? "bg-[#0F1C28]/80 backdrop-blur shadow-lg"
            : "bg-transparent"
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
          <div className="md:hidden text-[var(--primary-color)]">
            <button onClick={toggleMenu} aria-label="Toggle Menu">
              {isOpen ? <HiX size={30} /> : <HiMenu size={30} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Overlay - sits above page and below the sidebar */}
      {isOpen && (
        <div
          className="fixed inset-0 md:hidden"
          style={{
            background: "rgba(0,0,0,0.45)",
            zIndex: 9999, // higher than nav (nav z-50) but lower than sidebar
          }}
          onClick={toggleMenu}
          aria-hidden="true"
        />
      )}

      {/* Mobile Sidebar - always solid background and on top */}
      <aside
        className={`fixed top-0 right-0 h-full w-72 transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out md:hidden`}
        style={{
          zIndex: 10000, // ensure it is above nav and overlay
          backgroundColor: "#0F1C28", // solid opaque color
        }}
        aria-hidden={!isOpen}
        aria-label="Mobile menu"
      >
        {/* Close Button */}
        <div className="flex justify-end p-4">
          <button
            onClick={toggleMenu}
            aria-label="Close Menu"
            className="text-white hover:text-[#b19768] transition-colors"
          >
            <HiX size={28} />
          </button>
        </div>

        {/* Menu Items */}
        <ul className="flex flex-col mt-8 space-y-6 text-[var(--text)] text-lg font-medium px-6">
          {menuItems.map((item) => (
            <li key={item.name} onClick={toggleMenu}>
              <Link
                href={item.href}
                className={`block transition-colors ${
                  pathname === item.href
                    ? "text-[#b19768] border-b-2 w-fit border-[#b19768] pb-1"
                    : "hover:text-[#b19768]"
                }`}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </aside>
    </>
  );
};

export default Navbar;
