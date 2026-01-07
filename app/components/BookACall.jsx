"use client";

import React from "react";
import { motion } from "framer-motion";
import { Mail, Phone, PlayCircle, HandPlatter } from "lucide-react";
import { Outfit, Plus_Jakarta_Sans } from "next/font/google";
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

const BookACall = () => {
  const MotionLink = motion(Link);
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" },
  };

  const staggerContainer = {
    animate: { transition: { staggerChildren: 0.1 } },
  };

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-linear-to-br from-slate-50 via-white to-slate-50 relative overflow-hidden">
      <motion.div
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.3 }}
        className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
      >
        {/* Top Badge */}
        <motion.div variants={fadeInUp} className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 shadow-xs">
            <Phone className="w-4 h-4 text-blue-900" />
            <span className={  `text-xs sm:text-sm font-bold text-blue-900 uppercase tracking-wide ${jakarta.className}`}>
              Direct Support
            </span>
          </div>
        </motion.div>

        {/* Main Header */}
        <div className="text-center mb-10 sm:mb-14">
          <motion.h2
            variants={fadeInUp}
            className={`text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight mb-4 ${outfit.className}`}
          >
            Can’t Visit In Person?{" "}
            <span className="block bg-linear-to-r from-[#00b3ff] to-[#ff1f01] bg-clip-text text-transparent">
              Shop Remotely With Ease
            </span>
          </motion.h2>

          <motion.p
            variants={fadeInUp}
            className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed"
          >
            Experience our full inventory from anywhere. We provide **nationwide
            delivery** and immersive **video consultations** tailored to your
            schedule.
          </motion.p>
        </div>

        {/* Interactive Service Card */}
        <motion.div
          variants={fadeInUp}
          whileHover={{ y: -5 }}
          className={`relative group p-[1.5px] rounded-3xl bg-linear-to-r from-[#ff1f01] to-[#00b3ff] shadow-2xl ${jakarta.className}`}
        >
          <div className="relative bg-white rounded-[calc(1.5rem-1.5px)] p-8 sm:p-10 shadow-sm overflow-hidden">
            {/* Info Section */}
            <div className="text-center mb-10">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-50 border border-slate-100 mb-6">
                <HandPlatter className="w-5 h-5 text-[#00b3ff]" />
                <span className="text-sm font-bold text-slate-700">
                  Premium Remote Experience
                </span>
              </div>
              <p className="text-slate-600 text-base sm:text-lg max-w-xl mx-auto leading-relaxed">
                Our experts guide you through live product demonstrations via
                video call, ensuring you see every detail before your order is
                securely shipped.
              </p>
            </div>

            {/* CTA Button Group */}
            <div className="flex flex-col sm:flex-row items-stretch justify-center gap-4">
              {/* Primary: Book a Call */}
              <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ3ZLK4GY7Ro5CiWC15Eq3suxu2SgVs9KQTWdSnRR79YvFpLVxRlUY8ZgrVx-Fj5wlh8BsjuvHFH"
                target="_blank"
                rel="noopener noreferrer"
                className="relative flex-1 inline-flex items-center justify-center gap-3 px-8 py-4 bg-white text-slate-900 font-semibold text-base md:text-lg rounded-2xl border-2 border-slate-100 transition-all duration-300 hover:text-white hover:border-transparent group/btn overflow-hidden"
              >
                <div className="absolute inset-0 bg-linear-to-r from-[#00b3ff] to-[#ff1f01] opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300" />
                <PlayCircle className="w-6 h-6 relative z-10 transition-transform group-hover/btn:rotate-360 duration-500" />
                <span className="relative z-10">Book a Call</span>
              </motion.a>

              {/* Secondary: Message */}
              <MotionLink
                href="/contact"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex-1 inline-flex items-center justify-center gap-3 px-8 py-4 bg-slate-900 text-white font-semibold text-base md:text-lg rounded-2xl shadow-lg hover:bg-slate-800 transition-all border-2 border-slate-900"
              >
                <Mail className="w-6 h-6 text-slate-400" />
                Send Message
              </MotionLink>
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Background Decorative Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full z-0 pointer-events-none opacity-10 blur-[120px]">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-[#00b3ff] rounded-full animate-pulse" />
        <div
          className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-[#ff1f01] rounded-full animate-pulse"
          style={{ animationDelay: "1s" }}
        />
      </div>
    </section>
  );
};

export default BookACall;
