"use client";

import React, { useState } from "react";
import { Plus, Minus, ShieldCheck } from "lucide-react";
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

const FAQS = [
  {
    question: "What is TikTok Shop Marketing That Actually Works?",
    answer:
      "TikTok Shop Marketing That Actually Works is Magnetik's proven strategy to scale your TikTok Shop efficiently, increase sales, and maximize ROI.",
  },
  {
    question: "How can I Win Shop on TikTok in 2026 with Magnetik?",
    answer:
      "Our system guides you through algorithm-optimized content creation, audience targeting, and scaling strategies to help you win your TikTok Shop in 2026.",
  },
  {
    question: "Testimonials – Trusted by Real Sellers",
    answer: `"Magnetik scaled our TikTok Shop from zero to consistent daily sales in under 30 days. The strategy actually works." - Ahmed Khan (TikTok Shop Seller)\n\n"Their content hooks and scaling system helped us break through the algorithm without risking our account." - Sarah Ali (E-commerce Brand Owner)\n\n"Finally a TikTok Shop partner that understands performance, not just views. ROI stayed strong as spend increased." - Usman Raza (Dropshipping Entrepreneur)`,
  },
  {
    question: "Why TikTok Shop in 2026 will never be the same?",
    answer:
      "With Magnetik, TikTok Shop sellers have access to cutting-edge strategies that guarantee growth, higher visibility, and predictable revenue streams, changing the way e-commerce operates on TikTok.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null > null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-linear-to-br from-slate-50 via-white to-slate-50 relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 rounded-full bg-slate-100/50 border border-slate-200/30 mb-4 sm:mb-6">
            <ShieldCheck className="w-4 h-4 sm:w-5 sm:h-5 text-blue-500" />
            <span className="text-xs sm:text-sm font-semibold text-slate-700">
              FAQ
            </span>
          </div>

          <h2
            className={`text-3xl sm:text-4xl lg:text-5xl 2xl:text-6xl font-black tracking-tight mb-3 sm:mb-4 ${outfit.className}`}
          >
            Your Questions,{" "}
            <span className="bg-linear-to-r from-[#00b3ff] to-[#ff1f01] bg-clip-text text-transparent">
              Answered
            </span>
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-slate-600 max-w-2xl mx-auto">
            Answers to common questions about TikTok Shop Marketing and
            Magnetik's proven strategies.
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-6">
          {FAQS.map((item, index) => (
            <div
              key={index}
              className={`relative group rounded-xl p-[1.5px] bg-linear-to-r from-[#ff1f01] to-[#00b3ff] shadow-lg`}
            >
              <div className="relative bg-white rounded-xl p-5 sm:p-6 lg:p-8 shadow-sm hover:shadow-xl transition-all duration-300">
                <button
                  onClick={() => toggle(index)}
                  className="w-full flex justify-between items-center text-left"
                >
                  <span
                    className={`text-sm cursor-pointer sm:text-base md:text-lg font-semibold text-slate-900 ${jakarta.className}`}
                  >
                    {item.question}
                  </span>
                  {openIndex === index ? (
                    <Minus className="w-5 h-5 cursor-pointer text-slate-500" />
                  ) : (
                    <Plus className="w-5 h-5 cursor-pointer text-slate-500" />
                  )}
                </button>

                <div
                  className={`mt-3 text-xs sm:text-sm text-slate-600 transition-all duration-300 overflow-hidden ${
                    openIndex === index
                      ? "max-h-96 opacity-100"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  {item.answer.split("\n").map((line, i) => (
                    <p
                      key={i}
                      className={`mb-2 last:mb-0 ${jakarta.className}`}
                    >
                      {line}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
