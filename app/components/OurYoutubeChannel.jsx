"use client";

import React from "react";
import { PlayCircle, Clock } from "lucide-react";
import { Outfit, Plus_Jakarta_Sans } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
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

const OurYoutubeChannel = () => {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-linear-to-br from-slate-50 via-white to-slate-50 relative overflow-hidden">
      {/* Subtle background gradients */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(0,179,255,0.03),transparent_50%),radial-gradient(circle_at_70%_80%,rgba(255,31,1,0.03),transparent_50%)]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-14 lg:mb-16">
          <Link
            href="https://www.youtube.com/@MagnetikTSP"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center hover:underline mb-4 sm:mb-6"
          >
            <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 rounded-full bg-slate-900/5 border border-slate-900/10 mb-4 sm:mb-6">
              <PlayCircle className="w-4 h-4 sm:w-5 sm:h-5 text-blue-500" />
              <span className="text-xs sm:text-sm font-semibold text-slate-700">
                YouTube Channel
              </span>
            </div>
          </Link>

          <h2
            className={`text-3xl sm:text-4xl lg:text-5xl 2xl:text-6xl font-black tracking-tight mb-3 sm:mb-4 ${outfit.className}`}
          >
            Watch Our{" "}
            <span className="bg-linear-to-r from-[#00b3ff] to-[#ff1f01] bg-clip-text text-transparent">
              Latest Videos
            </span>
          </h2>

          <p
            className={`text-sm sm:text-base lg:text-lg text-slate-600 max-w-xl sm:max-w-2xl mx-auto ${jakarta.className}`}
          >
            Stay updated with the latest tips, tutorials, and TikTok Shop
            strategies.
          </p>
        </div>

        {/* Videos Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
          {/* Video 1 */}
          <div className="relative p-[1.5px] rounded-2xl bg-linear-to-r from-[#ff1f01] to-[#00b3ff] shadow-sm hover:shadow-xl transition-shadow duration-300">
            <div className="relative rounded-2xl bg-white overflow-hidden">
              <div className="relative pb-[56.25%] h-0">
                <iframe
                  src="https://www.youtube.com/embed/J3PbRf_Y2yg"
                  title="YouTube video"
                  className="absolute inset-0 w-full h-full"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>
          </div>

          {/* Coming Soon */}
          <div className="relative p-[1.5px] rounded-2xl bg-linear-to-r from-[#ff1f01] to-[#00b3ff] shadow-sm hover:shadow-xl transition-shadow duration-300">
            <div
              className={`
    relative rounded-2xl h-full bg-white border border-dashed border-slate-300
    flex flex-col items-center justify-center text-center
    p-6 sm:p-8 md:p-10
    ${jakarta.className}
  `}
            >
              {/* Responsive Image Container */}
              <div className="relative w-12 sm:w-22 md:w-24 lg:w-28 h-16 sm:h-20 md:h-24 lg:h-28 mb-4">
                <Image
                  src="/gifs/clock.gif"
                  alt="Coming Soon"
                  fill
                  className="object-contain"
                />
              </div>

              {/* Heading */}
              <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-slate-800 mb-2">
                New Video Coming Soon
              </h3>

              {/* Description */}
              <p className="text-xs sm:text-sm md:text-base lg:text-base text-slate-500 max-w-50 sm:max-w-xs md:max-w-sm lg:max-w-md">
                We’re preparing exclusive TikTok Shop growth content. Stay
                tuned.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 flex justify-center">
        <a
          href="https://www.youtube.com/@MagnetikTSP"
          target="_blank"
          rel="noopener noreferrer"
          className="
      relative inline-flex items-center justify-center
      px-5 sm:px-6 md:px-6
      py-2.5 sm:py-3 md:py-3
      bg-white text-black/80 font-semibold text-sm sm:text-base md:text-lg
      rounded-xl border border-black/10
      transition-all duration-500 ease-in-out
      hover:text-white
      hover:scale-105
      before:absolute before:inset-0 before:rounded-xl before:bg-linear-to-r before:from-[#00b3ff] before:to-[#ff1f01] before:opacity-0 before:transition-opacity before:duration-500 hover:before:opacity-100
      overflow-hidden
    "
        >
          <PlayCircle className="w-5 h-5 sm:w-6 md:w-6 mr-2 relative z-10" />
          <span className="relative z-10">Watch on YouTube</span>
        </a>
      </div>
    </section>
  );
};

export default OurYoutubeChannel;
