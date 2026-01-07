"use client";

import React from "react";
import { Star, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Alex Rivera",
    role: "E-com Founder",
    text: "Magnetik scaled our TikTok shop from $0 to $50k in 30 days. Their 2026 strategies are unmatched.",
    rating: 5,
  },
  {
    name: "Sarah Chen",
    role: "Brand Manager",
    text: "The only official partner that actually understands the TikTok algorithm. Pure magic for our ROI!",
    rating: 5,
  },
  {
    name: "James Wilson",
    role: "Marketing Head",
    text: "Finally, an agency that delivers. They turned our TikTok presence into a high-conversion machine.",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section className="py-24 px-6 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header: Centered & Bold */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl font-[1000] text-slate-950 tracking-tight leading-[0.95] mb-6"
          >
            TikTok Shop Marketing <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff1f01] to-[#00b3ff]">
              That Actually Works!
            </span>
          </motion.h2>
          <p className="text-slate-500 text-lg md:text-xl font-medium tracking-tight">
            Win Shop on TikTok in 2026 with Magnetik.
          </p>
        </div>

        {/* Layout: Sharp Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-8 rounded-[2.5rem] bg-slate-50 border border-slate-100 flex flex-col justify-between hover:border-[#ff1f01]/20 transition-colors"
            >
              <div>
                <div className="flex gap-1 mb-6">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star
                      key={i}
                      size={18}
                      className="fill-[#ff1f01] text-[#ff1f01]"
                    />
                  ))}
                </div>
                <p className="text-slate-800 text-xl font-semibold leading-snug mb-8">
                  "{t.text}"
                </p>
              </div>

              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-full bg-slate-200 flex items-center justify-center font-bold text-slate-500">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <div className="flex items-center gap-1">
                    <h4 className="font-bold text-slate-950 uppercase text-sm tracking-tighter">
                      {t.name}
                    </h4>
                    <CheckCircle2
                      size={14}
                      className="text-blue-500 fill-blue-50"
                    />
                  </div>
                  <p className="text-slate-500 text-xs font-bold uppercase tracking-widest">
                    {t.role}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Final CTA Area */}
        <div className="mt-20 flex flex-col items-center">
          <div className="mb-8 flex items-center gap-2 px-4 py-2 bg-slate-100 rounded-full border border-slate-200">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-xs font-bold text-slate-600 uppercase tracking-widest">
              Partnered with 500+ Brands
            </span>
          </div>

          <button className="group relative bg-slate-950 text-white px-12 py-5 rounded-2xl font-black text-xl hover:bg-black transition-all active:scale-95 shadow-xl shadow-slate-200">
            Book a call
            <div className="absolute inset-0 bg-gradient-to-r from-[#ff1f01] to-[#00b3ff] opacity-0 group-hover:opacity-10 transition-opacity" />
          </button>

          <span className="mt-6 text-slate-400 font-bold text-xs uppercase tracking-[0.3em]">
            Official TikTok Shop Partner
          </span>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
