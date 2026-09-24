"use client";

import { motion } from "framer-motion";
import {
  ArrowUpRight,
  ArrowDownLeft,
  RefreshCw,
  Check,
  ChevronDown,
} from "lucide-react";

export default function FinanceLanding() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      {/* ========== NAVBAR ========== */}
      <header className="mx-auto flex max-w-6xl items-center justify-between px-5 py-5 sm:px-8 sm:py-6">
        <div className="flex items-center gap-2.5">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-blue-500 to-indigo-600">
            <div className="h-3.5 w-3.5 rounded-sm bg-white" />
          </div>
          <span className="text-[17px] font-semibold tracking-tight">
            FinSuite
          </span>
        </div>

        <nav className="hidden items-center gap-7 md:flex">
          <a href="#" className="text-[14px] font-medium text-gray-600 hover:text-gray-900">
            Home
          </a>
          <a href="#" className="text-[14px] font-medium text-gray-600 hover:text-gray-900">
            About Us
          </a>
          <a href="#" className="text-[14px] font-medium text-gray-600 hover:text-gray-900">
            Blog
          </a>
          <a href="#" className="flex items-center gap-1 text-[14px] font-medium text-gray-600 hover:text-gray-900">
            Pages
            <ChevronDown size={14} />
          </a>
          <a href="#" className="text-[14px] font-medium text-gray-600 hover:text-gray-900">
            Pricing
          </a>
        </nav>

        <div className="flex items-center gap-3">
          <button className="hidden rounded-full px-4 py-2 text-[14px] font-medium text-gray-700 hover:bg-gray-50 sm:block">
            Log in
          </button>
          <button className="rounded-full bg-gray-900 px-5 py-2.5 text-[14px] font-medium text-white transition hover:bg-black">
            Get Started
          </button>
        </div>
      </header>

      {/* ========== HERO SECTION ========== */}
      <section className="mx-auto max-w-6xl px-5 pb-16 pt-8 sm:px-8 sm:pt-12 lg:pb-24">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-violet-50 px-3.5 py-1.5 text-[13px] font-medium text-violet-600">
              Finance Solutions for You
            </div>

            <h1 className="mb-5 text-[36px] font-bold leading-[1.15] tracking-tight sm:text-[44px] lg:text-[52px]">
              Maximize
              <br />
              Your{" "}
              <span className="relative inline-block text-blue-600">
                Financial
                <svg
                  className="absolute -bottom-1 left-0 w-full"
                  height="8"
                  viewBox="0 0 200 8"
                  fill="none"
                >
                  <path
                    d="M1 5.5C40 2.5 80 1 120 2.5C160 4 180 6 199 4"
                    stroke="#3b82f6"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
              <br />
              Potential
              <span className="ml-2 inline-flex h-8 w-8 items-center justify-center rounded-full bg-emerald-400 text-white sm:h-9 sm:w-9">
                <ArrowUpRight size={18} strokeWidth={2.5} />
              </span>
            </h1>

            <p className="mb-8 max-w-md text-[15px] leading-relaxed text-gray-500 sm:text-[16px]">
              Welcome to FinSuite, where financial management meets simplicity
              and efficiency.
            </p>

            <button className="rounded-full bg-gray-900 px-7 py-3.5 text-[15px] font-semibold text-white transition hover:bg-black">
              Get Started
            </button>
          </motion.div>

          {/* Right - Dashboard Preview */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="relative"
          >
            <div className="rounded-2xl border border-gray-100 bg-white p-5 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] sm:p-6">
              {/* Window dots */}
              <div className="mb-5 flex gap-1.5">
                <div className="h-2.5 w-2.5 rounded-full bg-red-400" />
                <div className="h-2.5 w-2.5 rounded-full bg-amber-400" />
                <div className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
              </div>

              {/* Subscription cards */}
              <div className="mb-5 flex gap-3">
                <div className="flex-1 rounded-xl border border-gray-100 bg-gray-50 p-3.5">
                  <div className="mb-2 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="flex h-6 w-6 items-center justify-center rounded bg-red-500 text-[10px] font-bold text-white">
                        N
                      </div>
                      <span className="text-[13px] font-medium">Netflix</span>
                    </div>
                    <button className="text-gray-400 hover:text-gray-600">×</button>
                  </div>
                  <p className="text-[18px] font-bold">
                    $24<span className="text-[12px] font-normal text-gray-400">/month</span>
                  </p>
                </div>

                <div className="flex-1 rounded-xl bg-blue-500 p-3.5 text-white">
                  <div className="mb-2 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="flex h-6 w-6 items-center justify-center rounded-full bg-white/20 text-[11px] font-bold">
                        ♫
                      </div>
                      <span className="text-[13px] font-medium">Spotify</span>
                    </div>
                    <button className="text-white/70 hover:text-white">×</button>
                  </div>
                  <p className="text-[18px] font-bold">
                    $13<span className="text-[12px] font-normal text-white/70">/month</span>
                  </p>
                </div>
              </div>

              {/* Balance */}
              <div className="mb-4">
                <p className="text-[13px] text-gray-400">My Balance</p>
                <p className="text-[28px] font-bold tracking-tight">$9,823,28</p>
                <p className="text-[12px] text-gray-400">
                  You made an extra $2,832.19 in this month.
                </p>
              </div>

              {/* Actions */}
              <div className="mb-5 flex gap-4">
                <button className="flex flex-col items-center gap-1 text-[11px] text-gray-500">
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-100">
                    <ArrowUpRight size={16} />
                  </div>
                  Send
                </button>
                <button className="flex flex-col items-center gap-1 text-[11px] text-gray-500">
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-100">
                    <ArrowDownLeft size={16} />
                  </div>
                  Receive
                </button>
                <button className="flex flex-col items-center gap-1 text-[11px] text-gray-500">
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-100">
                    <RefreshCw size={15} />
                  </div>
                  Convert
                </button>
              </div>

              {/* Mini chart */}
              <div className="relative h-24 rounded-xl bg-gray-50 p-3">
                <div className="absolute bottom-3 left-1/2 -translate-x-1/2 rounded bg-gray-800 px-2 py-0.5 text-[10px] text-white">
                  $4,239.12
                </div>
                <div className="flex h-full items-end justify-around gap-1.5 pt-4">
                  {[40, 55, 35, 70, 90, 60, 45].map((h, i) => (
                    <div
                      key={i}
                      className={`w-5 rounded-t ${
                        i === 4
                          ? "bg-gradient-to-t from-violet-500 to-blue-400"
                          : "bg-gray-200"
                      }`}
                      style={{ height: `${h}%` }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ========== TRUSTED BY ========== */}
      <section className="border-y border-gray-100 bg-gray-50/50 py-8">
        <div className="mx-auto max-w-4xl px-5 text-center">
          <p className="mb-5 text-[13px] font-medium text-gray-400">
            Trusted by users across the platform
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12">
            <div className="flex items-center gap-2">
              <span className="text-xl font-bold">4.8</span>
              <div className="flex text-amber-400">★★★★★</div>
              <span className="text-[13px] text-gray-500">Chrome store</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xl font-bold">4.9</span>
              <div className="flex text-amber-400">★★★★★</div>
              <span className="text-[13px] text-gray-500">Producthunt</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xl font-bold">4.8</span>
              <div className="flex text-emerald-500">★★★★★</div>
              <span className="text-[13px] text-gray-500">Trustpilot</span>
            </div>
          </div>
        </div>
      </section>

      {/* ========== BOTTOM SECTION ========== */}
      <section className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center text-[28px] font-bold tracking-tight sm:text-[36px]"
        >
          Empower Your Financial
          <br />
          <span className="text-blue-600">Future with us</span>
        </motion.h2>

        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Left - Balance Card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-2xl bg-gradient-to-br from-lime-300 to-lime-400 p-6 shadow-lg sm:p-7"
          >
            <div className="mb-1 flex items-center justify-between">
              <p className="text-[14px] font-medium text-lime-900/70">My Balance</p>
              <div className="flex gap-2">
                <button className="flex h-8 w-8 items-center justify-center rounded-full bg-white/40">
                  <ArrowUpRight size={15} />
                </button>
                <button className="flex h-8 w-8 items-center justify-center rounded-full bg-white/40">
                  <ArrowDownLeft size={15} />
                </button>
                <button className="flex h-8 w-8 items-center justify-center rounded-full bg-white/40">
                  <RefreshCw size={14} />
                </button>
              </div>
            </div>
            <p className="mb-1 text-[32px] font-bold tracking-tight text-gray-900">
              $9,823,28
            </p>
            <p className="mb-6 text-[13px] text-lime-900/60">
              You made an extra $2,832.19 in this month.
            </p>

            {/* Chart bars */}
            <div className="flex h-32 items-end justify-around gap-2">
              {[30, 45, 25, 60, 95, 50, 40, 55].map((h, i) => (
                <div
                  key={i}
                  className={`w-7 rounded-t-md ${
                    i === 4
                      ? "bg-gradient-to-t from-violet-600 to-blue-400"
                      : "bg-white/50"
                  }`}
                  style={{ height: `${h}%` }}
                />
              ))}
            </div>
          </motion.div>

          {/* Right - Features */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="mb-3 text-[24px] font-bold tracking-tight sm:text-[28px]">
              Comprehensive
              <br />
              <span className="text-blue-600">Financial Analytics</span>
              <br />
              Dashboard
            </h3>
            <p className="mb-6 text-[15px] leading-relaxed text-gray-500">
              Gain real-time visibility into your financial performance with
              intuitive dashboards.
            </p>

            <div className="grid gap-3 sm:grid-cols-2">
              {[
                "Keep tracking balance",
                "Send money easily",
                "Receive money easily",
                "Convert currency",
              ].map((item) => (
                <div key={item} className="flex items-center gap-2.5">
                  <div className="flex h-5 w-5 items-center justify-center rounded-full bg-blue-100">
                    <Check size={12} className="text-blue-600" strokeWidth={3} />
                  </div>
                  <span className="text-[14px] text-gray-700">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}