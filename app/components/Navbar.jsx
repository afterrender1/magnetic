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

  const navLinks = ["Home", "Win", "Shop", "Contact"];

  return (
    <>
      <nav className="relative w-full rounded-full h-16 flex items-center justify-between px-6 md:px-12 py-3 bg-black/10 backdrop-blur-2xl border-b border-white/5 z-40">
        {/* Logo */}
        <div className="relative z-10">
          <Image
            src="/logo/brandlogo.png"
            alt="Logo"
            width={100}
            height={40}
            priority
          />
        </div>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center gap-8 text-white font-medium">
          {navLinks.map((item) => (
            <li key={item}>
              <Link
                href={`/${item.toLowerCase()}`}
                className="hover:opacity-70 transition-opacity"
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop & Mobile Actions */}
        <div className="flex items-center gap-4">
          <a
            href="tel:+923001234567"
            className="hidden sm:flex items-center gap-2 rounded-full bg-white text-black px-4 py-2 font-semibold text-sm"
          >
            <PhoneCall size={16} />
            Call Now
          </a>

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
              <span className="text-white/50 font-bold uppercase tracking-widest text-xs sm:text-sm">
                Menu
              </span>
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
                  key={item}
                  href={`/${item.toLowerCase()}`}
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
                  {item}
                </Link>
              ))}
            </nav>

            {/* CTA */}
            <div className="mt-auto pt-6">
              <a
                href="tel:+923001234567"
                className="
            flex items-center justify-center gap-3
            rounded-2xl
            bg-white text-black
            py-4 sm:py-5
            text-base sm:text-xl
            font-bold
            active:scale-95
            transition-transform
          "
              >
                <PhoneCall size={20} className="sm:hidden" />
                <PhoneCall size={24} className="hidden sm:block" />
                Call Now
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
