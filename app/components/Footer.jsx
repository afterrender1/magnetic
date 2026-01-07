"use client";

import React from "react";
import { PhoneCall, Mail, Instagram, Youtube, Twitter } from "lucide-react";
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

export default function Footer() {
  return (
    <footer
      className={`relative overflow-hidden mx-3 sm:mx-6 2xl:mx-auto 
      max-w-7xl 2xl:max-w-360 mb-8 
      rounded-3xl shadow-2xl 
      ${jakarta.variable} ${outfit.variable} font-sans`}
    >
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-linear-to-br from-[#00b3ff] to-[#ff1f01]" />

      <div className="relative z-10 px-5 sm:px-8 lg:px-14 py-10 sm:py-14 lg:py-20">
        {/* Logo */}
        <div className="flex justify-start mb-8 sm:mb-12">
          <div className="relative w-32 sm:w-40 h-10 sm:h-12">
            <Image
              src="/logo/wbrandlogo.png"
              alt="Magnetik Logo"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 items-start">
          {/* About */}
          <div className="flex flex-col gap-4 text-left">
            <p className="text-sm sm:text-base text-white/90 leading-relaxed max-w-sm">
              Magnetik helps TikTok Shop sellers scale efficiently with proven
              strategies, creative content, and predictable growth.
            </p>
          </div>

          {/* Platform */}
          <div className="flex flex-col items-start">
            <h3
              className={`text-xs font-bold text-blue-100 mb-4 uppercase tracking-[0.25em] ${outfit.className}`}
            >
              Platform
            </h3>
            <ul className="flex flex-col gap-3">
              {["Home", "Win Shop", "Contact", "FAQ"].map((item) => (
                <li key={item}>
                  <a
                    href={`/${item.toLowerCase().replace(" ", "")}`}
                    className="text-white/80 hover:text-white 
                    transition-all duration-200 font-medium text-sm 
                    flex items-center justify-start group"
                  >
                    <span className="hidden sm:block w-0 group-hover:w-2 h-px bg-white mr-0 group-hover:mr-2 transition-all"></span>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="flex flex-col items-start">
            <h3
              className={`text-xs font-bold text-white mb-4 uppercase tracking-[0.25em] ${outfit.className}`}
            >
              Contact
            </h3>
            <div className="flex flex-col gap-4 w-full">
              <a
                href="tel:+923001234567"
                className="group flex items-center gap-3 justify-start"
              >
                <div className="bg-white/10 p-2.5 rounded-xl group-hover:bg-white/20 transition border border-white/10">
                  <PhoneCall className="w-4 h-4 text-white" />
                </div>
                <span className="text-white/90 group-hover:text-white text-sm font-medium">
                  +92 300 1234567
                </span>
              </a>

              <a
                href="mailto:hello@magnetik.com"
                className="group flex items-center gap-3 justify-start"
              >
                <div className="bg-white/10 p-2.5 rounded-xl group-hover:bg-white/20 transition border border-white/10">
                  <Mail className="w-4 h-4 text-white" />
                </div>
                <span className="text-white/90 group-hover:text-white text-sm font-medium">
                  hello@magnetik.com
                </span>
              </a>
            </div>
          </div>

          {/* Social */}
          <div className="flex flex-col items-start">
            <h3
              className={`text-xs font-bold text-white mb-4 uppercase tracking-[0.25em] ${outfit.className}`}
            >
              Follow Us
            </h3>
            <div className="flex gap-3">
              {[
                { Icon: Instagram, bg: "hover:bg-[#E1306C]" },
                { Icon: Youtube, bg: "hover:bg-[#FF0000]" },
                { Icon: Twitter, bg: "hover:bg-[#1DA1F2]" },
              ].map(({ Icon, bg }, i) => (
                <a
                  key={i}
                  href="#"
                  className={`p-3 bg-white/10 border border-white/10 
                  rounded-xl transition-all duration-300 
                  hover:-translate-y-1 hover:shadow-xl ${bg}`}
                >
                  <Icon className="w-5 h-5 text-white" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px w-full bg-linear-to-r from-transparent via-white/25 to-transparent mt-14 mb-8" />

        {/* Bottom */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs sm:text-sm text-white/70">
          <p className="text-left">
            © {new Date().getFullYear()} Afterrender. All rights reserved.
          </p>

          <div className="flex gap-6 uppercase tracking-tight">
            <a href="#" className="hover:text-white transition">
              Privacy
            </a>
            <a href="#" className="hover:text-white transition">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
