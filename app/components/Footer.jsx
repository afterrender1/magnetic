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
      className={`relative overflow-hidden mx-4 sm:mx-6 2xl:mx-auto max-w-7xl 2xl:max-w-360 mb-8 rounded-3xl shadow-2xl ${jakarta.variable} ${outfit.variable} font-sans`}
    >
      <div className="absolute inset-0 bg-linear-to-br from-[#00b3ff]  to-[#ff1f01] z-0" />

      <div className="relative z-10 px-6 sm:px-10 lg:px-16 py-12 lg:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 items-start">
          <div className="flex flex-col gap-6">
            <div className="relative w-40 h-12">
              <Image
                src="/logo/wbrandlogo.png"
                alt="Magnetik Logo"
                fill
                className="object-contain brightness-0 invert" // Ensures logo is white
                priority
              />
            </div>
            <p className="text-sm md:text-base text-white/90 leading-relaxed font-medium max-w-xs">
              Magnetik helps TikTok Shop sellers scale efficiently with proven
              strategies, creative content, and predictable growth.
            </p>
          </div>

          <div className="flex flex-col">
            <h3
              className={`text-sm font-bold text-white mb-6 uppercase tracking-[0.2em] ${outfit.className}`}
            >
              Platform
            </h3>
            <ul className="flex flex-col gap-4">
              {["Home", "Win Shop", "Contact", "FAQ"].map((item) => (
                <li key={item}>
                  <a
                    href={`/${item.toLowerCase().replace(" ", "")}`}
                    className="text-white/80 hover:text-white transition-all duration-200 font-medium text-sm flex items-center group"
                  >
                    <span className="w-0 group-hover:w-2 h-px bg-white mr-0 group-hover:mr-2 transition-all"></span>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col">
            <h3
              className={`text-sm font-bold text-white mb-6 uppercase tracking-[0.2em] ${outfit.className}`}
            >
              Contact
            </h3>
            <div className="flex flex-col gap-5">
              <a
                href="tel:+923001234567"
                className="group flex items-center gap-4"
              >
                <div className="bg-white/10 p-2.5 rounded-xl group-hover:bg-white/20 transition-colors border border-white/10">
                  <PhoneCall className="w-4 h-4 text-white" />
                </div>
                <span className="text-white/90 group-hover:text-white font-medium text-sm transition-colors">
                  +92 300 1234567
                </span>
              </a>
              <a
                href="mailto:hello@magnetik.com"
                className="group flex items-center gap-4"
              >
                <div className="bg-white/10 p-2.5 rounded-xl group-hover:bg-white/20 transition-colors border border-white/10">
                  <Mail className="w-4 h-4 text-white" />
                </div>
                <span className="text-white/90 group-hover:text-white font-medium text-sm transition-colors">
                  hello@magnetik.com
                </span>
              </a>
            </div>
          </div>

          <div className="flex flex-col">
            <h3
              className={`text-sm font-bold text-white mb-6 uppercase tracking-[0.2em] ${outfit.className}`}
            >
              Follow Us
            </h3>
            <div className="flex flex-wrap gap-3">
              {[
                { Icon: Instagram, href: "#", bg: "hover:bg-[#E1306C]" },
                { Icon: Youtube, href: "#", bg: "hover:bg-[#FF0000]" },
                { Icon: Twitter, href: "#", bg: "hover:bg-[#1DA1F2]" },
              ].map(({ Icon, href, bg }, i) => (
                <a
                  key={i}
                  href={href}
                  className={`p-3.5 bg-white/10 backdrop-blur-md border border-white/10 rounded-2xl transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl ${bg}`}
                >
                  <Icon className="w-5 h-5 text-white" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="h-px w-full bg-linear-to-r from-transparent via-white/20 to-transparent mt-16 mb-10" />

        <div className="flex flex-col md:grid md:grid-cols-3 items-center gap-8 text-sm text-white/70 font-medium">
          <div className="order-2 md:order-1 text-center md:text-left w-full">
            <p>
              © {new Date().getFullYear()} Afterrender. All rights reserved.
            </p>
          </div>

          <div className="order-3 md:order-3 text-center md:text-right w-full flex justify-center md:justify-end gap-6 text-xs uppercase tracking-tighter">
            <a href="#" className="hover:text-white transition-colors">
              Privacy
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
