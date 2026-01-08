import Navbar from "@/app/components/Navbar";
import Image from "next/image";
import React from "react";
import { Outfit, Plus_Jakarta_Sans } from "next/font/google";
import { Book, Send } from "lucide-react";
import Footer from "@/app/components/Footer";
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
export const metadata = {
  title: "Magnetik TSP - Win Shop on TikTok in 2026",
  description: "Win Shop on Tiktok in 2026 with Magnetik",
};

const Page = () => {
  return (
    <>
      {/* Navbar */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-4">
        <Navbar />
      </div>

      <main className="flex flex-col items-center w-full min-h-screen pb-24">
        {/* Banner */}
        <section className="w-full max-w-350 overflow-hidden">
          <Image
            src="/images/win/how-to-win.png"
            alt="Win Shop Banner"
            width={1440}
            height={600}
            priority
            className="w-full h-auto object-cover"
          />
        </section>

        {/* Video Section */}
        <div className="w-full max-w-4xl px-4 sm:px-6 mt-8 sm:mt-14">
          <div className="relative group">
            {/* Gradient Orbit Glow */}
            <div className="absolute -inset-1 sm:-inset-1.5 bg-linear-to-r from-[#00b3ff] to-[#ff1f01] rounded-2xl blur opacity-25 group-hover:opacity-45 transition duration-700" />

            <div className="relative p-1.5 sm:p-3 rounded-2xl shadow-xl border border-gray-200">
              <div className="relative w-full pb-[56.25%] overflow-hidden rounded-xl bg-black">
                <iframe
                  src="https://www.youtube.com/embed/J3PbRf_Y2yg"
                  title="Magnetik TSP Video"
                  className="absolute inset-0 w-full h-full border-0"
                  loading="lazy"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        </div>

        {/* Booking Calendar Section */}
        {/* Booking Intro */}
        <div className="w-full max-w-4xl px-4 sm:px-6 mt-20 text-left">
          <button
            className={`inline-flex items-center justify-center  mb-4 sm:mb-6 ${outfit.className}`}
          >
            <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 rounded-full bg-slate-900/5 border border-slate-900/10 mb-4 sm:mb-6">
              <Book className="w-4 h-4 sm:w-5 sm:h-5 text-blue-500" />
              <span className="text-xs sm:text-sm  text-slate-700">
                Book a Strategy Call Instant
              </span>
            </div>
          </button>

          <h2
            className={`text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight ${outfit.className}`}
          >
            <span className="text-slate-900">Win on </span>
            <span className="bg-linear-to-r from-[#00b3ff] to-[#ff1f01] bg-clip-text text-transparent">
              TikTok Shop
            </span>
          </h2>

          <p
            className={`mt-4 text-sm sm:text-base text-slate-600 max-w-2xl ${jakarta.className}`}
          >
            Book a 1-on-1 strategy call with our team. We’ll break down what’s
            holding your shop back and show you exactly how to scale safely in
            2026.
          </p>
        </div>

        {/* Booking Calendar Section */}
        <div
          id="booking"
          className="w-full max-w-4xl px-4 sm:px-6 mt-10 sm:mt-14"
        >
          <div className="relative group">
            <div className="absolute -inset-[1.5px] bg-linear-to-r from-[#00b3ff] to-[#ff1f01] rounded-2xl opacity-80 group-hover:opacity-100 transition duration-500" />

            <div className="relative bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="absolute inset-0 rounded-2xl ring-1 ring-black/5 pointer-events-none" />

              <div className="relative w-full pb-[120%] sm:pb-[75%]">
                <iframe
                  src="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ3ZLK4GY7Ro5CiWC15Eq3suxu2SgVs9KQTWdSnRR79YvFpLVxRlUY8ZgrVx-Fj5wlh8BsjuvHFH"
                  title="Book a Call"
                  className="absolute inset-0 w-full h-full border-0"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Page;
