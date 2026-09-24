"use client";

import { motion } from "framer-motion";
import {
  MapPin,
  Home,
  DollarSign,
  Search,
  ArrowRight,
  ShieldCheck,
  Lightbulb,
  TrendingUp,
} from "lucide-react";
import Image from "next/image";

export default function RealEstateLanding() {
  return (
    <main className="min-h-screen bg-[#f7f7f5] text-gray-900">
      {/* Outer white card container */}
      <div className="mx-auto max-w-6xl overflow-hidden rounded-b-[32px] bg-white shadow-sm">
        
        {/* ========== NAVBAR ========== */}
        <header className="flex items-center justify-between px-5 py-5 sm:px-8 sm:py-6">
          <div className="flex items-center gap-2.5">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gray-900">
              <div className="h-3.5 w-3.5 rotate-45 border-2 border-white" />
            </div>
            <span className="text-[17px] font-semibold tracking-tight">
              Brickwise
            </span>
          </div>

          <nav className="hidden items-center gap-7 md:flex">
            <a href="#" className="text-[14px] font-medium text-gray-600 hover:text-gray-900">
              Home
            </a>
            <a href="#" className="text-[14px] font-medium text-gray-600 hover:text-gray-900">
              Properties
            </a>
            <a href="#" className="text-[14px] font-medium text-gray-600 hover:text-gray-900">
              About
            </a>
            <a href="#" className="text-[14px] font-medium text-gray-600 hover:text-gray-900">
              Contact
            </a>
          </nav>

          <div className="flex items-center gap-3">
            <button className="hidden rounded-full px-4 py-2 text-[14px] font-medium text-gray-700 hover:bg-gray-50 sm:block">
              Login
            </button>
            <button className="flex items-center gap-1.5 rounded-full bg-gray-900 px-5 py-2.5 text-[14px] font-medium text-white transition hover:bg-black">
              Join Now
              <ArrowRight size={15} />
            </button>
          </div>
        </header>

        {/* ========== HERO ========== */}
        <section className="relative px-5 pb-8 pt-6 text-center sm:px-8 sm:pt-10">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-5 inline-flex items-center gap-1.5 rounded-full border border-gray-200 bg-white px-3.5 py-1.5 text-[13px] font-medium text-gray-600"
          >
            <span className="flex h-4 w-4 items-center justify-center rounded-full bg-rose-100 text-[10px] text-rose-500">
              ?
            </span>
            What is Airdrop?
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mx-auto mb-4 max-w-3xl text-[32px] font-bold leading-[1.2] tracking-tight sm:text-[42px] md:text-[48px]"
          >
            Easily Invest in Real Estate
            <br />
            to Grow{" "}
            <span className="relative inline-flex items-center">
              <span className="mx-1 inline-flex h-8 w-8 items-center justify-center rounded-full bg-emerald-400 text-white sm:h-9 sm:w-9">
                <TrendingUp size={16} strokeWidth={2.5} />
              </span>
              Your Future
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="mx-auto mb-8 max-w-lg text-[15px] leading-relaxed text-gray-500"
          >
            Take control of your financial future by diversifying your portfolio with
            secure and high-yield real estates properties.
          </motion.p>

          {/* Search Filters */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mx-auto mb-10 flex max-w-2xl flex-col gap-3 rounded-2xl border border-gray-100 bg-white p-3 shadow-sm sm:flex-row sm:items-center"
          >
            <div className="flex flex-1 items-center gap-2 rounded-xl bg-gray-50 px-3 py-2.5">
              <MapPin size={16} className="text-gray-400" />
              <div className="text-left">
                <p className="text-[11px] text-gray-400">Location</p>
                <p className="text-[13px] font-medium">All Locations</p>
              </div>
            </div>
            <div className="flex flex-1 items-center gap-2 rounded-xl bg-gray-50 px-3 py-2.5">
              <Home size={16} className="text-gray-400" />
              <div className="text-left">
                <p className="text-[11px] text-gray-400">Property Type</p>
                <p className="text-[13px] font-medium">All</p>
              </div>
            </div>
            <div className="flex flex-1 items-center gap-2 rounded-xl bg-gray-50 px-3 py-2.5">
              <DollarSign size={16} className="text-gray-400" />
              <div className="text-left">
                <p className="text-[11px] text-gray-400">Budget</p>
                <p className="text-[13px] font-medium">$500 - $2500</p>
              </div>
            </div>
            <button className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gray-900 text-white transition hover:bg-black">
              <Search size={18} />
            </button>
          </motion.div>

          {/* Map Area with Property Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 }}
            className="relative mx-auto h-[320px] max-w-4xl overflow-hidden rounded-2xl sm:h-[380px]"
          >
            {/* Real Map Background */}
            <Image
              src="/map-bg.jpg"
              alt="Map of Coronado"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 900px"
              priority
            />

            {/* Soft overlay so pins & card stand out */}
            <div className="absolute inset-0 bg-white/20" />

            {/* Map pins */}
            {[
              { top: "22%", left: "18%" },
              { top: "38%", left: "32%" },
              { top: "28%", left: "52%" },
              { top: "55%", left: "22%" },
              { top: "42%", left: "68%" },
              { top: "62%", left: "48%" },
              { top: "18%", left: "72%" },
            ].map((pin, i) => (
              <div
                key={i}
                className="absolute flex h-8 w-8 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-md"
                style={{ top: pin.top, left: pin.left }}
              >
                <div className="h-3 w-3 rounded-full bg-gray-800" />
              </div>
            ))}

            {/* Property Card */}
            <div className="absolute left-1/2 top-1/2 w-[260px] -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-xl bg-white shadow-xl sm:w-[280px]">
              <div className="relative h-32 overflow-hidden sm:h-36">
                <Image
                  src="/property-1.jpg"
                  alt="Luxury Oceanfront Bungalow"
                  fill
                  sizes="(max-width: 640px) 260px, 280px"
                  className="object-cover"
                  priority
                />
              </div>
              <div className="p-3.5 text-left">
                <h3 className="text-[14px] font-semibold">Luxury Oceanfront Bungalow</h3>
                <p className="mt-0.5 text-[12px] text-gray-500">Coronado, CA</p>
                <div className="mt-2 flex items-center gap-3 text-[11px] text-gray-400">
                  <span>4 Beds</span>
                  <span>3 Baths</span>
                  <span>2,100 sqft</span>
                </div>
                <div className="mt-3 flex items-center justify-between">
                  <p className="text-[15px] font-bold">
                    $20,500{" "}
                    <span className="text-[11px] font-normal text-gray-400">/night</span>
                  </p>
                  <button className="rounded-full bg-gray-900 px-3 py-1.5 text-[11px] font-medium text-white">
                    Booked Now
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* ========== STATS ========== */}
        <section className="border-t border-gray-100 px-5 py-8 sm:px-8">
          <div className="mx-auto grid max-w-4xl grid-cols-2 gap-6 sm:grid-cols-4 sm:gap-4">
            {[
              { value: "$1B+", label: "Total Invested" },
              { value: "20K+", label: "Active Investors" },
              { value: "150K+", label: "Property Listings" },
              { value: "8-12%", label: "Average Return Value" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-[24px] font-bold tracking-tight sm:text-[28px]">
                  {stat.value}
                </p>
                <p className="mt-1 text-[12px] text-gray-500 sm:text-[13px]">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* ========== BOTTOM SECTION ========== */}
      <section className="mx-auto max-w-6xl px-5 py-14 sm:px-8 sm:py-16">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <p className="mb-3 text-[13px] font-medium text-gray-400">
              Reason to choose us
            </p>
            <h2 className="mb-4 text-[28px] font-bold leading-tight tracking-tight sm:text-[32px]">
              Discover the value behind smart property investments
            </h2>
            <p className="mb-6 text-[15px] leading-relaxed text-gray-500">
              We handle the heavy lifting by conducting in-depth research,
              analyzing the numbers, and finding high-performing properties for you.
            </p>
            <button className="rounded-full bg-gray-900 px-6 py-3 text-[14px] font-semibold text-white transition hover:bg-black">
              Find the best for you →
            </button>
          </motion.div>

          {/* Right - Feature cards */}
          <div className="grid gap-4 sm:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm"
            >
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-violet-50">
                <Lightbulb size={20} className="text-violet-600" />
              </div>
              <h3 className="mb-1.5 text-[15px] font-semibold">Smart Suggestions</h3>
              <p className="text-[13px] leading-relaxed text-gray-500">
                AI-driven listings to find your best-fit property.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm"
            >
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-50">
                <ShieldCheck size={20} className="text-emerald-600" />
              </div>
              <h3 className="mb-1.5 text-[15px] font-semibold">99% Trusted Investor</h3>
              <p className="text-[13px] leading-relaxed text-gray-500">
                Clear, real-time data and returns for more steps.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
              className="col-span-full rounded-2xl border border-gray-100 bg-white p-5 shadow-sm sm:col-span-2"
            >
              <div className="flex gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-50">
                  <TrendingUp size={20} className="text-blue-600" />
                </div>
                <div>
                  <h3 className="mb-1.5 text-[15px] font-semibold">Invest Where It Matters</h3>
                  <p className="text-[13px] leading-relaxed text-gray-500">
                    We pinpoint high-demand, high-growth areas backed by market data.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}