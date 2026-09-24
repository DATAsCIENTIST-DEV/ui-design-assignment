"use client";

import { motion } from "framer-motion";
import { Play } from "lucide-react";
import Image from "next/image";

export default function DeveloperPortfolio() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      {/* ========== NAVBAR ========== */}
      <header className="mx-auto flex max-w-6xl items-center justify-between px-5 py-5 sm:px-8 sm:py-6">
        <div className="flex items-center gap-10">
          <span className="text-[18px] font-semibold tracking-tight">Stage</span>
          <nav className="hidden items-center gap-7 md:flex">
            <a href="#" className="text-[14px] font-medium text-gray-500 hover:text-gray-900">
              Features
            </a>
            <a href="#" className="text-[14px] font-medium text-gray-500 hover:text-gray-900">
              Design System
            </a>
            <a href="#" className="text-[14px] font-medium text-gray-500 hover:text-gray-900">
              Documentation
            </a>
          </nav>
        </div>

        <div className="flex items-center gap-3">
          <button className="rounded-full border border-gray-200 px-5 py-2 text-[14px] font-medium text-gray-700 transition hover:bg-gray-50">
            Contact
          </button>
          <button className="rounded-full bg-gray-900 px-5 py-2 text-[14px] font-medium text-white transition hover:bg-black">
            Sign up
          </button>
        </div>
      </header>

      {/* ========== HERO ========== */}
      <section className="mx-auto max-w-6xl px-5 pb-16 pt-10 sm:px-8 sm:pt-14 lg:pb-24">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-8">
          
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="mb-5 text-[36px] font-bold leading-[1.15] tracking-tight sm:text-[44px] lg:text-[52px]">
              API-based developer portfolio,
              <br />
              that converts.
            </h1>

            <p className="mb-8 max-w-md text-[15px] leading-relaxed text-gray-500 sm:text-[16px]">
              Next-gen developer portfolio that helps you showcase your projects,
              skills, and experience. Personalize it by an evergrowing collection of
              building blocks and analyse your growth.
            </p>

            <div className="mb-12 flex flex-wrap items-center gap-3">
              <button className="rounded-full bg-gray-900 px-6 py-3 text-[14px] font-semibold text-white transition hover:bg-black">
                Get started
              </button>
              <button className="flex items-center gap-2 rounded-full border border-gray-200 bg-white px-5 py-3 text-[14px] font-medium text-gray-700 transition hover:bg-gray-50">
                <Play size={14} fill="currentColor" />
                Experience the future
              </button>
            </div>

            {/* Logos */}
            <div>
              <p className="mb-4 text-[13px] text-gray-400">
                Built with feedback from amazing engineers at
              </p>
              <div className="flex flex-wrap items-center gap-x-6 gap-y-3 opacity-50 grayscale">
                <span className="text-[18px] font-bold tracking-tight">Uber</span>
                <span className="text-[16px] font-semibold">Zillow</span>
                <span className="text-[18px] font-bold">M</span>
                <span className="text-[16px] font-medium">Google</span>
                <span className="text-[15px] font-semibold">Drupal</span>
                <span className="text-[16px] font-bold">GO</span>
                <span className="text-[18px]">↻</span>
              </div>
            </div>
          </motion.div>

          {/* Right - Phone Mockup */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="relative flex justify-center lg:justify-end"
          >
            {/* Soft circles background */}
            <div className="absolute -right-10 top-10 h-[420px] w-[420px] rounded-full border border-gray-100 opacity-60" />
            <div className="absolute -right-4 top-20 h-[340px] w-[340px] rounded-full border border-gray-100 opacity-40" />

            {/* Phone */}
            <div className="relative z-10 w-[280px] overflow-hidden rounded-[40px] border-[8px] border-gray-900 bg-white shadow-2xl sm:w-[300px]">
              {/* Notch */}
              <div className="absolute left-1/2 top-0 z-20 h-6 w-32 -translate-x-1/2 rounded-b-2xl bg-gray-900" />

              {/* Phone content */}
              <div className="px-6 pb-10 pt-12">
                {/* Theme toggle */}
                <div className="mb-8 flex justify-end">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-100">
                    <span className="text-sm">☀</span>
                  </div>
                </div>

                {/* Profile - FIXED (no fallback covering image) */}
                <div className="mb-5 flex justify-center">
                  <div className="relative h-16 w-16 overflow-hidden rounded-full bg-gray-200">
                    <Image
                      src="/profile.jpg"
                      alt="Felix"
                      fill
                      className="object-cover"
                      sizes="64px"
                      priority
                    />
                  </div>
                </div>

                <h2 className="mb-3 text-center text-[20px] font-bold leading-snug tracking-tight">
                  Software designer,
                  <br />
                  founder, and amateur
                  <br />
                  astronaut.
                </h2>

                <p className="mb-6 text-center text-[13px] leading-relaxed text-gray-500">
                  I&apos;m Felix, a software designer and entrepreneur based in New York
                  City. I&apos;m currently working on a new project called Stage.
                </p>

                {/* Social icons */}
                <div className="flex items-center justify-center gap-4 text-gray-400">
                  <span className="text-sm">𝕏</span>
                  <span className="text-sm">◎</span>
                  <span className="text-sm">◉</span>
                  <span className="text-sm">in</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}