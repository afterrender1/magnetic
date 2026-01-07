import React from "react";
import { Inter } from "next/font/google";
import Navbar from "./Navbar";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-inter",
});

const Hero = () => {
  return (
    <section
      className={`relative min-h-screen flex flex-col items-center justify-start ${inter.className} overflow-hidden`}
    >
      {/* Background */}
      <div className="absolute inset-0 bg-linear-to-r from-[#00b3ff] to-[#ff1f01]" />

      {/* Navbar Wrapper */}
      <div className="fixed top-0 left-0 w-full z-50 px-4 md:px-6">
        <div className="max-w-7xl mx-auto pt-4">
          <Navbar />
        </div>
      </div>

      {/* Push content below fixed navbar */}
      <div className="pt-24 md:pt-28 w-full flex justify-center">
        <div className="relative z-10 w-full max-w-5xl px-4 sm:px-6 flex flex-col items-center gap-6">
          {/* Text Content */}
          <div className="flex flex-col justify-center items-center text-center max-w-3xl">
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight text-white leading-[1.1]">
              TikTok Shop Marketing <br />
              <span className="text-white/80">That Actually Works!</span>
            </h1>

            <p className="mt-4 text-xs sm:text-sm md:text-2xl text-white/90 font-medium">
              Win Shop on TikTok in 2026 with Magnetik
            </p>
          </div>

          {/* Video */}
          <div className="w-full max-w-4xl">
            <div className="video-outer w-full">
              <div className="video-orbit"></div>

              <div className="video-inner-card p-2 md:p-4">
                <div className="relative pb-[56.25%] h-0 rounded-2xl overflow-hidden shadow-inner bg-black">
                  <iframe
                    src="https://www.youtube.com/embed/J3PbRf_Y2yg"
                    title="Magnetik TSP Video"
                    className="absolute inset-0 w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="flex flex-col items-center gap-3 pt-0">
            <div className="relative inline-flex items-center justify-center group w-full sm:w-auto">
              {/* 1. Optimized Glow - Hardware Accelerated */}
              <div
                className="
      absolute inset-0 
      bg-linear-to-r from-[#ff1f01] to-[#00b3ff] 
      rounded-xl blur-md opacity-60 
      transition-opacity duration-500 
      group-hover:opacity-100
      will-change-transform
    "
              ></div>

              {/* 2. The Button Body */}
              <a
                href="#"
                role="button"
                className="
      relative inline-flex items-center justify-center 
      w-full sm:w-auto
      px-8 py-3.5 
      text-base font-bold text-white 
      bg-transparent border border-white/30 rounded-xl 
      transition-all duration-200 
      hover:bg-white/10 
      active:scale-95
    "
              >
                Book a call
                {/* 3. Responsive Animated SVG */}
                <svg
                  viewBox="0 0 10 10"
                  className="ml-2 w-2.5 h-2.5 stroke-white stroke-[2px] fill-none overflow-visible"
                  aria-hidden="true"
                >
                  <path
                    d="M0 5h7"
                    className="transition-all duration-300 opacity-0 group-hover:opacity-100 group-hover:translate-x-1"
                  />
                  <path
                    d="M1 1l4 4-4 4"
                    className="transition-all duration-300 group-hover:translate-x-1.5"
                  />
                </svg>
              </a>
            </div>

            <p className="text-white/70 text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em]">
              Official TikTok Shop Partner
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
