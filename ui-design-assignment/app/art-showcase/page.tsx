"use client";

import { motion } from "framer-motion";
import { User, Settings } from "lucide-react";
import Image from "next/image";

const artworks = [
  {
    id: 1,
    rotate: -22,
    x: -280,
    y: 30,
    z: 10,
    src: "/art-1.jpg",
  },
  {
    id: 2,
    rotate: -14,
    x: -170,
    y: 10,
    z: 20,
    src: "/art-2.jpg",
  },
  {
    id: 3,
    rotate: -6,
    x: -60,
    y: -5,
    z: 30,
    src: "/art-3.jpg",
  },
  {
    id: 4,
    rotate: 3,
    x: 50,
    y: -10,
    z: 40,
    src: "/art-4.jpg",
  },
  {
    id: 5,
    rotate: 11,
    x: 160,
    y: 5,
    z: 30,
    src: "/art-5.jpg",
  },
  {
    id: 6,
    rotate: 19,
    x: 270,
    y: 25,
    z: 20,
    src: "/art-6.jpg",
  },
];

export default function ArtShowcase() {
  return (
    <main className="min-h-screen bg-[#f0f0f2] flex items-center justify-center p-3 sm:p-5 md:p-8">
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55 }}
        className="relative w-full max-w-[1180px] overflow-hidden rounded-[28px] bg-white shadow-[0_30px_90px_-20px_rgba(0,0,0,0.15)]"
      >
        {/* Soft background blobs */}
        <div className="pointer-events-none absolute -left-40 -top-40 h-[420px] w-[420px] rounded-full bg-gray-100/70 blur-3xl" />
        <div className="pointer-events-none absolute -right-40 top-10 h-[380px] w-[380px] rounded-full bg-gray-100/60 blur-3xl" />

        {/* ========== HEADER ========== */}
        <header className="relative z-30 flex items-center justify-between px-5 py-5 sm:px-8 sm:py-6 md:px-10 lg:px-12">
          <div className="flex items-center gap-2.5">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-teal-500">
              <svg viewBox="0 0 24 24" className="h-4 w-4 text-white" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9V8h2v8zm4 0h-2V8h2v8z" />
              </svg>
            </div>
            <span className="text-[16px] font-semibold tracking-tight text-gray-900 sm:text-[17px]">
              Pallet Ross
            </span>
          </div>

          <nav className="hidden items-center gap-5 lg:flex xl:gap-7">
            <a href="#" className="text-[13.5px] font-medium text-gray-600 hover:text-gray-900 transition">
              Get Started
            </a>
            <a href="#" className="flex items-center gap-1.5 text-[13.5px] font-medium text-gray-600 hover:text-gray-900 transition">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
              Create strategy
            </a>
            <a href="#" className="text-[13.5px] font-medium text-gray-600 hover:text-gray-900 transition">
              Pricing
            </a>
            <a href="#" className="text-[13.5px] font-medium text-gray-600 hover:text-gray-900 transition">
              Contact
            </a>
            <a href="#" className="text-[13.5px] font-medium text-gray-600 hover:text-gray-900 transition">
              Solution
            </a>
            <a href="#" className="text-[13.5px] font-medium text-gray-600 hover:text-gray-900 transition">
              E-Commerce
            </a>
          </nav>

          <div className="flex items-center gap-2.5">
            <button
              aria-label="Profile"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-200 text-gray-600 hover:bg-gray-50 transition"
            >
              <User size={17} strokeWidth={1.8} />
            </button>
            <button
              aria-label="Settings"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-200 text-gray-600 hover:bg-gray-50 transition"
            >
              <Settings size={17} strokeWidth={1.8} />
            </button>
          </div>
        </header>

        {/* ========== HERO ========== */}
        <section className="relative z-10 px-5 pb-10 pt-4 text-center sm:px-8 sm:pb-14 sm:pt-6 md:px-10 md:pb-16 lg:px-12">
          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.12, duration: 0.5 }}
            className="mx-auto max-w-[820px] text-[30px] font-bold leading-[1.18] tracking-tight text-gray-900 sm:text-[40px] md:text-[48px] lg:text-[54px]"
          >
            A place to display your
            <br className="hidden sm:block" />
            masterpiece.
          </motion.h1>

          {/* Floating art cards - FAN LAYOUT */}
          <div className="relative mx-auto mt-10 h-[240px] w-full max-w-[980px] sm:mt-14 sm:h-[300px] md:h-[340px] lg:h-[370px]">
            {/* Speech bubbles */}
            <motion.div
              initial={{ opacity: 0, scale: 0.75 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, duration: 0.35 }}
              className="absolute left-[2%] top-[8%] z-50 rounded-full bg-[#60a5fa] px-3.5 py-1.5 text-[11px] font-medium text-white shadow-md sm:left-[6%] sm:top-[4%] sm:px-4 sm:text-[12.5px] md:left-[8%]"
            >
              @coplin
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.75 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.65, duration: 0.35 }}
              className="absolute right-[2%] top-[12%] z-50 rounded-full bg-[#86efac] px-3.5 py-1.5 text-[11px] font-medium text-gray-800 shadow-md sm:right-[5%] sm:top-[6%] sm:px-4 sm:text-[12.5px] md:right-[7%]"
            >
              @andrea
            </motion.div>

            {/* Cards container - centered */}
            <div className="absolute inset-0 flex items-center justify-center">
              {artworks.map((art, i) => (
                <motion.div
                  key={art.id}
                  initial={{ opacity: 0, y: 50, rotate: 0, x: 0 }}
                  animate={{
                    opacity: 1,
                    y: art.y,
                    x: art.x,
                    rotate: art.rotate,
                  }}
                  transition={{
                    delay: 0.2 + i * 0.07,
                    duration: 0.65,
                    type: "spring",
                    stiffness: 65,
                  }}
                  style={{ zIndex: art.z }}
                  className="absolute h-[155px] w-[110px] overflow-hidden rounded-2xl shadow-[0_18px_45px_-10px_rgba(0,0,0,0.28)] sm:h-[210px] sm:w-[145px] md:h-[250px] md:w-[170px] lg:h-[275px] lg:w-[185px]"
                >
                  <Image
                    src={art.src}
                    alt={`Artwork ${art.id}`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 110px, (max-width: 768px) 145px, 185px"
                    priority={i < 4}
                  />
                </motion.div>
              ))}
            </div>
          </div>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.45 }}
            className="mx-auto mt-6 max-w-[500px] text-[13.5px] leading-relaxed text-gray-500 sm:mt-8 sm:text-[14.5px] md:text-[15px]"
          >
            Artists can display their masterpieces, and buyers can discover and
            purchase works that resonate with them.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.95, duration: 0.4 }}
            className="mt-7 flex flex-col items-center justify-center gap-3 sm:mt-9 sm:flex-row sm:gap-3.5"
          >
            <button className="flex h-11 w-full max-w-[210px] items-center justify-center rounded-full bg-gray-900 px-6 text-[14.5px] font-semibold text-white transition hover:bg-black sm:h-12 sm:w-auto">
              Join for $9.99/m
            </button>
            <button className="flex h-11 w-full max-w-[150px] items-center justify-center rounded-full border border-gray-300 bg-white px-5 text-[14.5px] font-medium text-gray-700 transition hover:bg-gray-50 sm:h-12 sm:w-auto">
              Read more
            </button>
          </motion.div>
        </section>
      </motion.div>
    </main>
  );
}