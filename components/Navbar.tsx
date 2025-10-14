"use client";

import React from "react";
import Image from "next/image";
import logo from "../assets/logo-mysta.png"; // replace with your logo path

const Navbar = () => {
  return (
    <nav className="absolute top-0 left-0 w-full z-20 flex justify-between items-center px-10 py-6">
      {/* Logo */}
      <div className="flex items-center space-x-2">
        <Image src={logo} alt="Logo" width={80} height={60} />
      </div>

      {/* Nav Links */}
      <ul className="flex space-x-8 text-[#1d1d1d] font-medium">
        <li className="hover:text-[#b19768] cursor-pointer transition-colors">
          Home
        </li>
        <li className="hover:text-[#b19768] cursor-pointer transition-colors">
          About
        </li>
        <li className="hover:text-[#b19768] cursor-pointer transition-colors">
          Team
        </li>
        <li className="hover:text-[#b19768] cursor-pointer transition-colors">
          Blogs
        </li>
        <li className="hover:text-[#b19768] cursor-pointer transition-colors">
          Contact
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
