"use client";
import Link from "next/link";
import React from "react";

interface ButtonFillProps {
  text: React.ReactNode;
  href?: string; // if provided, renders as Link
  onClick?: () => void; // optional click handler
  className?: string; // extra Tailwind classes
  aos?: string; // optional AOS animation type
  aosDelay?: string; // optional AOS delay
  type?: "button" | "submit" | "reset";
}

const ButtonFill: React.FC<ButtonFillProps> = ({
  text,
  href,
  onClick,
  className = "",
  aos,
  aosDelay,
  type = "button",
}) => {
  const buttonContent = (
    <button
      type={type}
      onClick={onClick}
      data-aos={aos}
      data-aos-delay={aosDelay}
      className={`cursor-pointer relative overflow-hidden border-2 border-[var(--button-color)] px-6 py-3 
      transition-all duration-700 ease-out group font-semibold uppercase tracking-widest
      ${className}`}
    >
      {/* Skewed background animation */}
      <span
        className="absolute top-0 left-[-18px] h-full w-0 transform skew-x-[25deg] transition-all duration-700 ease-out group-hover:w-[130%] z-0"
        style={{ background: "var(--button-color)" }}
      ></span>

      {/* Text */}
      <span className="relative z-10 text-[var(--button-color)] group-hover:text-white transition-colors duration-700 text-sm">
        {text}
      </span>
    </button>
  );

  if (href) {
    return <Link href={href}>{buttonContent}</Link>;
  }

  return buttonContent;
};

export default ButtonFill;
