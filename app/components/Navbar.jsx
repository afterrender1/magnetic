"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { PhoneCall, Menu, X, ChevronRight, Zap } from "lucide-react";
import Image from "next/image";
import { Outfit, Plus_Jakarta_Sans } from "next/font/google";
const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  variable: "--font-jakarta",
});

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["600"],
  variable: "--font-outfit",
});

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
              href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ3ZLK4GY7Ro5CiWC15Eq3suxu2SgVs9KQTWdSnRR79YvFpLVxRlUY8ZgrVx-Fj5wlh8BsjuvHFH"
              role="button"
              target="_blank"
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
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="fixed inset-0 z-999 bg-black md:hidden flex flex-col p-4 sm:p-6"
          >
            {/* Header */}
            <div className="flex items-center justify-between mb-10 sm:mb-14">
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
                className="
            p-2.5 sm:p-3
            rounded-full
            bg-white/10
            border border-white/10
            text-white
            hover:bg-white/20
            transition
          "
              >
                <X size={26} />
              </button>
            </div>

            {/* Navigation */}
            <nav className={`flex flex-col ${outfit.className}`}>
              {navLinks.map((item, i) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="
              group flex items-center justify-between
              text-2xl xs:text-3xl sm:text-4xl
              font-extrabold
              text-white
              py-4 sm:py-6
              border-b border-white/10
              transition-all
              active:bg-white/5
            "
                >
                  <span className="tracking-tight">{item.name}</span>

                  {/* Lucide Arrow */}
                  <ChevronRight
                    size={26}
                    className="
                opacity-0 translate-x-2
                group-hover:opacity-100 group-hover:translate-x-0
                transition-all
              "
                  />
                </Link>
              ))}
            </nav>
            {/* Booking Preview */}
            <div className="mt-10 sm:mt-14">
              <div className="relative group">
                {/* Gradient Border */}
                <div
                  className="
        absolute -inset-px
        bg-linear-to-r from-[#00b3ff] to-[#ff1f01]
        rounded-2xl
        opacity-70
        group-hover:opacity-100
        transition
      "
                />

                {/* Inner Card */}
                <div
                  className="
        relative rounded-2xl
        bg-white
        border border-slate-200
        overflow-hidden
        shadow-xl
      "
                >
                  {/* Title */}
                  <div
                    className={`px-4 pt-4 pb-3 border-b border-slate-200 ${outfit.className}`}
                  >
                    <p className="text-xs uppercase tracking-widest text-slate-500 font-bold">
                      Book Instantly{" "}
                      <span>
                        <Zap className="inline-block w-3 h-3 ml-1 text-amber-300" />
                      </span>
                    </p>
                    <h4 className="text-lg font-bold text-slate-900 mt-1">
                      Schedule a Call
                    </h4>
                  </div>

                  {/* Responsive Calendar */}
                  <div className="relative w-full pb-[85%] bg-white">
                    <iframe
                      src="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ3ZLK4GY7Ro5CiWC15Eq3suxu2SgVs9KQTWdSnRR79YvFpLVxRlUY8ZgrVx-Fj5wlh8BsjuvHFH"
                      title="Book a Call"
                      className="absolute inset-0 w-full h-full border-0"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="mt-auto pt-8">
              <a
                target="_blank"
                href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ3ZLK4GY7Ro5CiWC15Eq3suxu2SgVs9KQTWdSnRR79YvFpLVxRlUY8ZgrVx-Fj5wlh8BsjuvHFH"
                className="
            relative group w-full
            flex items-center justify-center gap-3
            rounded-2xl
            bg-linear-to-r from-[#00b3ff] to-[#ff1f01]
            p-0.5
            transition
            active:scale-[0.97]
          "
              >
                <div
                  className="
              flex items-center justify-center gap-3
              w-full rounded-2xl
              bg-black
              py-4 px-6
              text-lg sm:text-xl
              font-extrabold text-white
              group-hover:bg-black/90
              transition
            "
                >
                  <PhoneCall
                    size={22}
                    className="transition-transform group-hover:rotate-12"
                  />
                  <span>Book a Call</span>
                </div>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
