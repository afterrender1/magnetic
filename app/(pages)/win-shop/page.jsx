"use client";

import React from "react";
import { Hammer, ArrowRight, ChevronLeft } from "lucide-react";
import { Plus_Jakarta_Sans, Outfit } from "next/font/google";
import Link from "next/link";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

export default function MaintenancePage() {
  return (
    <div
      className={`${jakarta.variable} ${outfit.variable} font-sans min-h-screen bg-white text-slate-900 flex flex-col items-center justify-center px-6`}
    >
      {/* Back to Home Link */}
      <Link
        href="/"
        className="absolute top-8 left-6 sm:left-12 flex items-center gap-2 text-sm font-semibold text-slate-500 hover:text-slate-900 transition-colors group"
      >
        <ChevronLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
        Back to Home
      </Link>

      <main className="max-w-xl w-full text-center">
        {/* Minimal Icon */}
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-slate-50 border border-slate-100 mb-8">
          <Hammer className="w-8 h-8 text-[#00b3ff]" />
        </div>

        <div className="space-y-2 mb-6">
          <h2
            className={`text-[#ff1f01] text-sm font-bold uppercase tracking-[0.3em] ${outfit.className}`}
          >
            Win Shop
          </h2>
          <h1
            className={`text-4xl md:text-5xl font-bold tracking-tight ${outfit.className}`}
          >
            Under Maintenance
          </h1>
        </div>

        <p className="text-slate-500 text-lg mb-10 leading-relaxed">
          Magnetik is currently updating. We’re making some improvements to our
          platform and will be back shortly.
        </p>

        {/* Minimalist Notify Form */}
        <form
          className="flex flex-col sm:flex-row gap-3 w-full"
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 bg-slate-50 border border-slate-200 rounded-xl py-4 px-4 outline-none focus:border-[#00b3ff] focus:ring-1 focus:ring-[#00b3ff] transition-all"
          />
          <button className="bg-slate-900 text-white px-8 py-4 rounded-xl font-semibold hover:bg-slate-800 transition-all flex items-center justify-center gap-2 shadow-lg shadow-slate-200">
            Notify Me
            <ArrowRight className="w-4 h-4" />
          </button>
        </form>

        {/* Status Indicators */}
        <div className="mt-16 flex items-center justify-center gap-4">
          <div className="h-1.5 w-1.5 rounded-full bg-[#00b3ff] animate-pulse" />
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400">
            Scaling TikTok Shops
          </p>
          <div className="h-1.5 w-1.5 rounded-full bg-[#ff1f01] animate-pulse" />
        </div>
      </main>

      {/* Simplified Footer */}
      <footer className="absolute bottom-8 text-slate-400 text-xs font-medium">
        © {new Date().getFullYear()} Magnetik Agency
      </footer>
    </div>
  );
}
