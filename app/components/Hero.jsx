import React from 'react';
import { Inter } from 'next/font/google';
import Navbar from './Navbar';

const inter = Inter({ subsets: ['latin'], weight: ['400', '700',], variable: '--font-inter' });

const Hero = () => {
    return (
        <section className={`relative min-h-screen flex flex-col items-center justify-center py-20 ${inter.className} overflow-hidden`}>

            {/* Background */}
            <div className="absolute inset-0 bg-linear-to-r from-[#00b3ff] to-[#ff1f01]"></div>

            <div className="relative z-10 w-full max-w-5xl px-6 flex flex-col items-center gap-2">

                {/* Text Content */}
                <div className="flex flex-col justify-center items-center text-center max-w-3xl">
                    <h1 className="text-3xl md:text-6xl font-black tracking-tight text-white mb-6 leading-[1.1]">
                        TikTok Shop Marketing <br />
                        <span className="text-white/80">That Actually Works!</span>
                    </h1>
                    <p className="text-sm md:text-2xl text-white/90 font-medium mb-1">
                        Win Shop on TikTok in 2026 with Magnetik
                    </p>
                </div>

                {/* Video Container */}
                <div className="video-outer w-full">
                    {/* FIXED: This must match the CSS class for the animation */}
                    <div className="video-orbit"></div>

                    <div className="video-inner-card p-2 md:p-4">
                        <div className="relative pb-[56.25%] h-0 rounded-2xl overflow-hidden shadow-inner bg-black">
                            <iframe
                                src="https://www.youtube.com/embed/J3PbRf_Y2yg?si=YkXSKyFvjCYGQjMR"
                                title="Magnetik TSP Video"
                                className="absolute top-0 left-0 w-full h-full"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowFullScreen
                            ></iframe>
                        </div>
                    </div>
                </div>

                {/* CTA */}
                <div className="flex flex-col items-center gap-4 pt-4">
                    <button className="group relative rounded-full bg-white px-12 py-4 text-[#F93E25] font-bold text-xl shadow-2xl hover:scale-105 transition-all duration-300 active:scale-95">
                        Book a Call
                    </button>
                    <p className="text-white/70 text-xs font-bold uppercase tracking-[0.2em]">
                        Official TikTok Shop Partner
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Hero;