"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { PhoneCall } from "lucide-react";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="relative w-full rounded-full h-16 flex items-center justify-between px-6 md:px-12 overflow-hidden py-3 bg-black/5 backdrop-blur-2xl border-b border-white/5">
      {/* Background Gradient (Red ➜ Blue) */}

      {/* Blur Overlay */}
      <div className="absolute inset-0 bg-black/10 backdrop-blur-md" />

      {/* Logo */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="relative z-10 text-white font-bold text-xl"
      >
        <Image src="/logo/brandlogo.png" alt="Logo" width={100} height={40} />
      </motion.div>

      {/* Nav Links */}
      <motion.ul
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="relative z-10 hidden md:flex items-center gap-8 text-white font-medium"
      >
        {["Home", "Win", "Shop", "Contact"].map((item) => (
          <li key={item}>
            <Link
              href={`/${item.toLowerCase()}`}
              className="relative after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full"
            >
              {item}
            </Link>
          </li>
        ))}
      </motion.ul>

      {/* Call Button */}
      <motion.a
        href="tel:+923001234567"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="relative z-10 flex items-center gap-2 rounded-full bg-white text-black px-4 py-2 font-semibold shadow-lg hover:scale-105 transition"
      >
        <PhoneCall size={18} />
        Call Now
      </motion.a>
    </nav>
  );
}
