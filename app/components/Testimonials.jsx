import React from "react";
import { Star, Quote } from "lucide-react";
import Image from "next/image";

const TESTIMONIALS = [
  {
    id: 1,
    name: "Ahmed Khan",
    role: "TikTok Shop Seller",
    avatar: "/images/avatars/michel.png",
    rating: 5,
    text: "Magnetik scaled our TikTok Shop from zero to consistent daily sales in under 30 days. The strategy actually works.",
  },
  {
    id: 2,
    name: "Sarah Ali",
    role: "E-commerce Brand Owner",
       avatar: "/images/avatars/sarah.png",

    rating: 5,
    text: "Their content hooks and scaling system helped us break through the algorithm without risking our account.",
  },
  {
    id: 3,
    name: "Usman Raza",
    role: "Dropshipping Entrepreneur",
     avatar: "/images/avatars/robert.png",

    rating: 5,
    text: "Finally a TikTok Shop partner that understands performance, not just views. ROI stayed strong as spend increased.",
  },
];

export default function Testimonials() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-linear-to-br from-slate-50 via-white to-slate-50 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,31,1,0.03),transparent_50%),radial-gradient(circle_at_70%_80%,rgba(0,179,255,0.03),transparent_50%)]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-14 lg:mb-16">
          <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-slate-900/5 border border-slate-900/10 mb-4 sm:mb-6">
            <Star className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-yellow-500 fill-yellow-500" />
            <span className="text-xs sm:text-sm font-semibold text-slate-700">
              Testimonials
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl 2xl:text-6xl font-black tracking-tight text-slate-950 mb-3 sm:mb-4">
            Trusted by Real Sellers
          </h2>

          <p className="text-sm sm:text-base lg:text-lg text-slate-600 max-w-xl sm:max-w-2xl mx-auto">
            Join hundreds of successful sellers who've transformed their TikTok
            Shop business
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-8">
          {TESTIMONIALS.map((item) => (
            <div key={item.id} className="group relative">
              {/* Glow */}
              <div className="absolute inset-0 bg-linear-to-br from-[#ff1f01]/20 via-purple-500/20 to-[#00b3ff]/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative h-full p-5 sm:p-6 lg:p-8 rounded-3xl bg-white border border-slate-200/60 shadow-sm hover:shadow-xl transition-all duration-500">
                {/* Quote */}
                <div className="absolute top-4 sm:top-6 right-4 sm:right-6 w-9 h-9 sm:w-12 sm:h-12 rounded-full bg-linear-to-br from-slate-100 to-slate-50 flex items-center justify-center">
                  <Quote className="text-slate-400 w-4 h-4 sm:w-5 sm:h-5" />
                </div>

                {/* Rating */}
                <div className="flex gap-0.5 mb-4 sm:mb-6">
                  {Array.from({ length: item.rating }).map((_, i) => (
                    <Star
                      key={i}
                      className="text-yellow-400 fill-yellow-400 w-4 h-4 sm:w-4.5 sm:h-4.5"
                    />
                  ))}
                </div>

                {/* Text */}
                <p className="text-slate-700 text-sm sm:text-base leading-relaxed mb-6 sm:mb-8">
                  "{item.text}"
                </p>

                {/* User */}
                <div className="flex items-center gap-3 sm:gap-4 pt-4 sm:pt-6 border-t border-slate-100">
                  <div className="relative w-11 h-11 sm:w-14 sm:h-14 rounded-full overflow-hidden bg-linear-to-br from-slate-200 to-slate-300 ring-2 ring-white shadow-md">
                    <Image
                      src={item.avatar}
                      alt={item.name}
                      fill
                      className="object-cover"
                    />
                  </div>

                  <div>
                    <p className="font-bold text-slate-900 text-sm sm:text-base leading-none mb-1">
                      {item.name}
                    </p>
                    <span className="text-xs sm:text-sm text-slate-500 font-medium">
                      {item.role}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Badge */}
        <div className="mt-12 sm:mt-14 lg:mt-16 text-center">
          <p className="text-xs sm:text-sm text-slate-500 font-medium">
            Rated 4.9/5 from over 200+ verified reviews
          </p>
        </div>
      </div>
    </section>
  );
}
