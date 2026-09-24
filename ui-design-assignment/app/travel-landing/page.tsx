"use client";

import { motion } from "framer-motion";
import { Plane, FileText, Plus, Apple } from "lucide-react";
import Image from "next/image";

export default function TravelLanding() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/sky-bg.jpg"
          alt="Sky background"
          fill
          className="object-cover"
          priority
        />
        {/* Soft blue overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-sky-400/30 via-sky-500/20 to-sky-600/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex min-h-screen flex-col">
        {/* ========== NAVBAR ========== */}
        <header className="flex items-center justify-center px-4 pt-6 sm:pt-8">
          <motion.nav
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-1 rounded-full bg-white/90 px-2 py-1.5 shadow-lg backdrop-blur-md sm:gap-2 sm:px-3 sm:py-2"
          >
            {/* Logo */}
            <div className="flex items-center gap-2 rounded-full bg-white px-3 py-1.5">
              <div className="flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-br from-sky-400 to-blue-500">
                <div className="h-3 w-3 rounded-full bg-white/90" />
              </div>
              <span className="text-[15px] font-semibold text-gray-800">
                Capsule
              </span>
            </div>

            {/* Links - Desktop */}
            <div className="hidden items-center gap-1 sm:flex">
              <a
                href="#"
                className="rounded-full px-4 py-2 text-[14px] font-medium text-gray-600 transition hover:bg-gray-100 hover:text-gray-900"
              >
                Pricing
              </a>
              <a
                href="#"
                className="flex items-center gap-1 rounded-full px-4 py-2 text-[14px] font-medium text-gray-600 transition hover:bg-gray-100 hover:text-gray-900"
              >
                Company
                <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </a>
              <a
                href="#"
                className="flex items-center gap-1 rounded-full px-4 py-2 text-[14px] font-medium text-gray-600 transition hover:bg-gray-100 hover:text-gray-900"
              >
                Help
                <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </a>
            </div>

            {/* Login */}
            <button className="rounded-full bg-gray-900 px-5 py-2 text-[14px] font-medium text-white transition hover:bg-black">
              Log in
            </button>
          </motion.nav>
        </header>

        {/* ========== HERO ========== */}
        <section className="flex flex-1 flex-col items-center justify-center px-4 pb-12 pt-10 sm:pt-14">
          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.6 }}
            className="max-w-[900px] text-center text-[36px] font-bold leading-[1.15] tracking-tight text-white sm:text-[52px] md:text-[64px] lg:text-[72px]"
          >
            Place for your
            <br />
            tickets, booking
            <br />
            and documents
          </motion.h1>

          {/* Floating Cards */}
          <div className="relative mt-12 w-full max-w-[900px] sm:mt-16">
            <div className="flex flex-col items-center justify-center gap-5 sm:flex-row sm:items-end sm:gap-4 md:gap-6">
              
              {/* LEFT CARD - Manage */}
              <motion.div
                initial={{ opacity: 0, y: 40, rotate: -6 }}
                animate={{ opacity: 1, y: 0, rotate: -6 }}
                transition={{ delay: 0.35, duration: 0.6, type: "spring" }}
                className="w-full max-w-[260px] rounded-2xl bg-white p-5 shadow-2xl sm:max-w-[240px]"
              >
                <div className="mb-3 flex items-start gap-2">
                  <div className="mt-0.5 flex h-8 w-8 items-center justify-center rounded-lg bg-sky-100">
                    <Plane size={16} className="text-sky-600" />
                  </div>
                  <p className="text-[14px] leading-snug text-gray-700">
                    Manage your flights, bookings and documents directly in one app
                  </p>
                </div>
                <button className="mt-3 flex w-full items-center justify-center gap-2 rounded-xl bg-gray-900 py-2.5 text-[13.5px] font-semibold text-white transition hover:bg-black">
                  <Plus size={15} strokeWidth={2.5} />
                  Add your stuff
                </button>
              </motion.div>

              {/* MIDDLE CARD - Flight Ticket (Black) */}
              <motion.div
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ delay: 0.45, duration: 0.6, type: "spring" }}
                className="relative z-10 w-full max-w-[220px] rounded-2xl bg-gray-900 p-5 text-white shadow-2xl sm:max-w-[210px]"
              >
                <div className="flex items-start justify-between">
                  <div>
                    <div className="flex items-center gap-1.5">
                      <span className="text-lg">🇳🇴</span>
                      <span className="text-lg">🇺🇸</span>
                    </div>
                    <p className="mt-1 text-[11px] text-gray-400">Norway → USA</p>
                  </div>
                  <div className="text-right">
                    <p className="text-[15px] font-bold tracking-wide">WE1786</p>
                    <p className="text-[10px] text-gray-400">#WE975333</p>
                  </div>
                </div>

                <div className="my-5 flex items-center justify-center gap-3">
                  <div className="text-center">
                    <p className="text-[28px] font-bold leading-none">12</p>
                    <p className="text-[11px] text-gray-400">Days</p>
                  </div>
                  <div className="flex flex-col items-center gap-1">
                    <Plane size={16} className="text-sky-400" />
                    <div className="h-px w-8 bg-gray-600" />
                  </div>
                  <div className="text-center">
                    <p className="text-[28px] font-bold leading-none">25</p>
                    <p className="text-[11px] text-gray-400">Days</p>
                  </div>
                </div>

                <div className="flex items-center justify-between text-[11px] text-gray-400">
                  <span>Thu, 5 Dec</span>
                  <span>Fri, 18 Dec</span>
                </div>
              </motion.div>

              {/* RIGHT CARD - Route */}
              <motion.div
                initial={{ opacity: 0, y: 40, rotate: 6 }}
                animate={{ opacity: 1, y: 0, rotate: 6 }}
                transition={{ delay: 0.55, duration: 0.6, type: "spring" }}
                className="w-full max-w-[240px] rounded-2xl bg-white p-5 shadow-2xl sm:max-w-[230px]"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Plane size={14} className="text-sky-500" />
                      <span className="text-[14px] font-semibold text-gray-800">
                        New Jersey
                      </span>
                    </div>
                    <span className="text-[12px] text-gray-500">5:25pm</span>
                  </div>

                  <div className="flex items-center gap-2 pl-1">
                    <div className="flex h-6 flex-col items-center">
                      <div className="h-1.5 w-1.5 rounded-full bg-sky-500" />
                      <div className="w-px flex-1 bg-gray-200" />
                      <div className="h-1.5 w-1.5 rounded-full border border-sky-500" />
                    </div>
                    <div className="flex-1 space-y-3">
                      <p className="text-[12px] text-gray-400">8:45am</p>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Plane size={14} className="rotate-90 text-sky-500" />
                      <span className="text-[14px] font-semibold text-gray-800">
                        California
                      </span>
                    </div>
                    <span className="text-[12px] text-gray-500">↓</span>
                  </div>
                </div>

                <button className="mt-4 w-full rounded-xl bg-sky-50 py-2.5 text-[13px] font-semibold text-sky-700 transition hover:bg-sky-100">
                  Check it live
                </button>
              </motion.div>
            </div>
          </div>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.75, duration: 0.5 }}
            className="mt-10 max-w-[420px] text-center text-[15px] leading-relaxed text-white/90 sm:mt-12 sm:text-[16px]"
          >
            Everything related to travelling stored in one place. Never forget
            anything important.
          </motion.p>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.45 }}
            className="mt-8"
          >
            <button className="flex items-center gap-2.5 rounded-full bg-white px-7 py-3.5 text-[15px] font-semibold text-gray-900 shadow-lg transition hover:bg-gray-50">
              <Apple size={18} fill="currentColor" />
              Download for IOS
            </button>
          </motion.div>
        </section>
      </div>
    </main>
  );
}