"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { PhoneCall, Menu, X } from "lucide-react";
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // FIX: Prevent background scrolling (the "glitchy" feel)
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Winshop", href: "/win-shop" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <>
      <nav className="relative w-full rounded-full h-16 flex items-center justify-between px-6 md:px-12 py-3 bg-black/10 backdrop-blur-2xl border-b border-white/30 z-40">
        {/* Logo */}
        <Link href="/" className="relative z-10">
          <Image
            src="/logo/wbrandlogo.png"
            alt="Logo"
            width={100}
            height={40}
            priority
            className="opacity-85"
          />
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center gap-8 text-white font-medium">
          {navLinks.map((item) => (
            <li key={item.name}>
              <Link
                href={`${item.href}`}
                className="hover:opacity-70 transition-opacity"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop & Mobile Actions */}
        <div className="flex items-center gap-4">
          <div className="relative hidden md:flex items-center justify-center group w-full sm:w-auto">
            {/* 1. Glow */}
            <div
              className="
      absolute inset-0
      bg-linear-to-r from-[#ff1f01] to-[#00b3ff]
      rounded-full
      blur-md opacity-60
      transition-opacity duration-500
      group-hover:opacity-100
      will-change-transform
    "
            ></div>

            {/* 2. Button */}
            <a
              href="#"
              role="button"
              className="
      relative inline-flex items-center justify-center gap-2

      /* Height like navbar */
      h-10 sm:h-11 md:h-12

      /* Padding scales */
      px-5 sm:px-6 md:px-8

      /* Text scales */
      text-sm sm:text-base md:text-lg
      font-bold text-white

      bg-transparent
      border border-white/30
      rounded-full

      transition-all duration-200
      hover:bg-white/10
      active:scale-95
    "
            >
              Book a call
              {/* Icon scales with text */}
              <PhoneCall className="w-4 h-4 sm:w-5 sm:h-5 md:w-5 md:h-5" />
            </a>
          </div>

          <button
            className="text-white md:hidden p-2 active:scale-90 transition-transform"
            onClick={() => setIsOpen(true)}
          >
            <Menu size={28} />
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black z-999 md:hidden flex flex-col p-4 sm:p-6"
          >
            {/* Header */}
            <div className="flex items-center justify-between mb-8 sm:mb-12">
              <Link href="/" className="relative z-10">
                <Image
                  src="/logo/wbrandlogo.png"
                  alt="Logo"
                  width={120}
                  height={48}
                  className="opacity-90"
                />
              </Link>
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 sm:p-3 text-white bg-white/10 rounded-full"
              >
                <X size={22} className="sm:hidden" />
                <X size={28} className="hidden sm:block" />
              </button>
            </div>

            {/* Links */}
            <nav className="flex flex-col">
              {navLinks.map((item) => (
                <Link
                  key={item.name}
                  href={`${item.href}`}
                  onClick={() => setIsOpen(false)}
                  className="
              text-2xl
              xs:text-3xl
              sm:text-4xl
              font-bold
              text-white
              border-b border-white/10
              py-4 sm:py-6
              active:bg-white/5
            "
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            {/* CTA */}
            <div className="mt-auto pt-6 w-full">
              <a
                href="tel:+923001234567"
                className="
      group relative flex items-center justify-center gap-3
      rounded-2xl bg-white text-black
      py-4 px-6
      text-lg sm:text-xl font-extrabold
      shadow-[0_0_20px_rgba(255,255,255,0.1)]
      hover:bg-gray-100
      active:scale-[0.97]
      transition-all duration-200
      w-full
    "
              >
                {/* Optimized Icon handling: Using a single component with responsive size props */}
                <PhoneCall
                  className="shrink-0 transition-transform group-hover:rotate-12"
                  size={24}
                />

                <span className="tracking-tight">Call Now</span>

                {/* Subtle Shine Effect for high-end feel without lag */}
                <div className="absolute inset-0 rounded-2xl border border-white/20 pointer-events-none" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
