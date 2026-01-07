"use client";

import React, { useState } from "react";
import { Mail, PhoneCall, Send } from "lucide-react";
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

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    shopName: "",
    isOnTikTokShop: "no",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", form);
  };

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-linear-to-br from-slate-50 via-white to-slate-50 relative overflow-hidden">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12 sm:mb-16">
          <h2
            className={`text-3xl sm:text-4xl lg:text-5xl 2xl:text-6xl font-black tracking-tight mb-3 sm:mb-4 ${outfit.className}`}
          >
            <span className="block">A Team Member Will</span>
            <span className=" bg-linear-to-r from-[#00b3ff] to-[#ff1f01] bg-clip-text text-transparent">
              Reach Out!
            </span>
          </h2>

          <p
            className={`text-sm sm:text-base lg:text-lg text-slate-600 max-w-2xl mx-auto ${jakarta.className}`}
          >
            Fill out the details below and we’ll get in touch to help grow your
            business.
          </p>
        </div>

        <div
          className={`relative group p-[1.5px] rounded-2xl bg-linear-to-r from-[#ff1f01] to-[#00b3ff] shadow-lg`}
        >
          <div className="relative bg-white rounded-2xl p-6 sm:p-8 shadow-sm hover:shadow-xl transition-all duration-300">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="relative">
                <label className="block text-xs sm:text-sm font-semibold text-slate-600 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  className={`w-full rounded-xl border border-slate-200 p-4 text-sm sm:text-base text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-400 ${jakarta.className}`}
                  required
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="relative">
                  <label className="block text-xs sm:text-sm font-semibold text-slate-600 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="+92 300 1234567"
                    className={`w-full rounded-xl border border-slate-200 p-4 text-sm sm:text-base text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-400 ${jakarta.className}`}
                    required
                  />
                </div>

                <div className="relative">
                  <label className="block text-xs sm:text-sm font-semibold text-slate-600 mb-2">
                    Shop Name
                  </label>
                  <input
                    type="text"
                    name="shopName"
                    value={form.shopName}
                    onChange={handleChange}
                    placeholder="Your Shop Name"
                    className={`w-full rounded-xl border border-slate-200 p-4 text-sm sm:text-base text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-400 ${jakarta.className}`}
                    required
                  />
                </div>
              </div>

              <div className="relative bg-slate-50 p-4 rounded-xl border border-dashed border-slate-300">
                <label
                  className={`block text-sm sm:text-base font-semibold text-slate-800 mb-3 ${jakarta.className}`}
                >
                  Are You On TikTok Shop?
                </label>
                <div className="flex gap-6">
                  <label className="flex items-center cursor-pointer group">
                    <input
                      type="radio"
                      name="isOnTikTokShop"
                      value="yes"
                      checked={form.isOnTikTokShop === "yes"}
                      onChange={handleChange}
                      className="w-4 h-4 text-blue-600 focus:ring-blue-500"
                    />
                    <span className="ml-2 text-sm sm:text-base text-slate-600 group-hover:text-slate-900 transition-colors">
                      Yes, I am
                    </span>
                  </label>
                  <label className="flex items-center cursor-pointer group">
                    <input
                      type="radio"
                      name="isOnTikTokShop"
                      value="no"
                      checked={form.isOnTikTokShop === "no"}
                      onChange={handleChange}
                      className="w-4 h-4 text-blue-600 focus:ring-blue-500"
                    />
                    <span className="ml-2 text-sm sm:text-base text-slate-600 group-hover:text-slate-900 transition-colors">
                      Not yet
                    </span>
                  </label>
                </div>
              </div>

              <div className="mt-2 flex justify-center">
                <button
                  type="submit"
                  className="
      relative inline-flex items-center justify-center
      px-6 py-3 sm:px-10 sm:py-4
      text-sm sm:text-base font-semibold text-black/80
      rounded-xl border border-black/10
      overflow-hidden cursor-pointer
      transition-all duration-500 ease-in-out
      hover:text-white
      hover:scale-105
      before:absolute before:inset-0 before:rounded-xl before:bg-linear-to-r before:from-[#00b3ff] before:to-[#ff1f01] before:opacity-0 before:transition-opacity before:duration-500 hover:before:opacity-100
    "
                >
                  <Send className="w-5 h-5 mr-2 relative z-10" />
                  <span className="relative z-10">Submit Request</span>
                </button>
              </div>
            </form>

            <div
              className={`mt-8 pt-8 border-t border-slate-100 text-center text-sm sm:text-base text-slate-500 font-medium flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-8 ${jakarta.className}`}
            >
              <div className="flex items-center gap-2">
                <PhoneCall className="w-4 h-4 text-blue-500" />
                +1 (234) 567-8901
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-blue-500" />
                contact@magnetik.com
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
