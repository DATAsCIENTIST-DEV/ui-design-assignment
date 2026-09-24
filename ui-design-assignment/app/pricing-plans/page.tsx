"use client";

import { motion } from "framer-motion";
import { Check, ArrowRight, Zap, Heart } from "lucide-react";

export default function PricingPlans() {
  return (
    <main className="min-h-screen bg-[#f4f4f5] text-gray-900">
      <div className="mx-auto max-w-5xl px-5 py-12 sm:px-8 sm:py-16 md:py-20">
        
        {/* Top right link */}
        <div className="mb-10 flex justify-end">
          <a
            href="#"
            className="flex items-center gap-1.5 text-[14px] font-medium text-gray-500 transition hover:text-gray-800"
          >
            Schedule a Call
            <ArrowRight size={15} />
          </a>
        </div>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          {/* Badge */}
          <div className="mb-6 inline-flex rounded-md border border-gray-200 bg-white px-2.5 py-1 text-[11px] font-semibold tracking-wide text-gray-500">
            PRICING
          </div>

          {/* Headline */}
          <h1 className="max-w-2xl text-[36px] font-medium leading-[1.25] tracking-tight text-gray-400 sm:text-[44px] md:text-[52px]">
            Better tools
            <br />
            <span className="text-gray-400">smooth</span>{" "}
            {/* Logos */}
            <span className="mx-1 inline-flex items-center gap-1.5 align-middle">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-pink-500 text-white shadow-md sm:h-10 sm:w-10">
                <span className="text-[14px] font-bold">🏀</span>
              </span>
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-500 text-white shadow-md sm:h-10 sm:w-10">
                <span className="text-[13px] font-bold">Be</span>
              </span>
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-800 text-white shadow-md sm:h-10 sm:w-10">
                <span className="text-[16px] font-bold">≈</span>
              </span>
            </span>{" "}
            <span className="text-gray-900">workflow</span>
            <br />
            <span className="text-gray-400">including same great deal,</span>
            <br />
            {/* Toggle */}
            <span className="mt-2 inline-flex items-center gap-3">
              <span className="relative inline-flex h-7 w-12 items-center rounded-full bg-gradient-to-r from-violet-500 to-pink-500 p-0.5 shadow-inner">
                <span className="h-6 w-6 translate-x-5 rounded-full bg-white shadow-md transition" />
              </span>
              <span className="text-gray-900">annually.</span>
            </span>
          </h1>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid gap-5 md:grid-cols-2">
          
          {/* Free Plan */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.5 }}
            className="rounded-3xl bg-white p-6 shadow-[0_4px_30px_-8px_rgba(0,0,0,0.06)] sm:p-8"
          >
            <div className="mb-6 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gray-900 text-white">
                  <Heart size={18} fill="currentColor" />
                </div>
                <span className="text-[20px] font-semibold">Free</span>
              </div>
              <span className="text-[20px] font-semibold text-gray-400">
                $0<span className="text-[14px] font-normal">/month</span>
              </span>
            </div>

            <button className="mb-8 w-full rounded-2xl border border-gray-200 bg-gray-50 py-3.5 text-[15px] font-medium text-gray-600 transition hover:bg-gray-100">
              Get Started
            </button>

            <ul className="space-y-3">
              <li className="flex items-center gap-2.5 text-[14px] text-gray-500">
                <Check size={16} className="text-gray-400" strokeWidth={2.5} />
                Nothing but a Hug
              </li>
            </ul>
          </motion.div>

          {/* Personal Plan */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.5 }}
            className="rounded-3xl bg-white p-6 shadow-[0_4px_30px_-8px_rgba(0,0,0,0.06)] sm:p-8"
          >
            <div className="mb-6 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gray-900 text-white">
                  <Zap size={18} fill="currentColor" />
                </div>
                <span className="text-[20px] font-semibold">Personal</span>
              </div>
              <span className="text-[20px] font-semibold text-gray-900">
                $69<span className="text-[14px] font-normal text-gray-400">/month</span>
              </span>
            </div>

            <button className="mb-8 w-full rounded-2xl border border-gray-200 bg-gray-50 py-3.5 text-[15px] font-medium text-gray-600 transition hover:bg-gray-100">
              View Pricing
            </button>

            <ul className="space-y-3">
              {[
                "Full access to tools, 24/7 support",
                "Monthly updates",
                "Customization options",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-2.5 text-[14px] text-gray-500"
                >
                  <Check size={16} className="text-gray-400" strokeWidth={2.5} />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </main>
  );
}