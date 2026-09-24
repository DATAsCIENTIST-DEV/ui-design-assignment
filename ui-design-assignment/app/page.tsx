
"use client";

import { motion, type Variants } from "framer-motion";
import Link from "next/link";
import {
  MapPin,
  Palette,
  Plane,
  LayoutDashboard,
  Building2,
  CreditCard,
  Code2,
  ArrowRight,
  Sparkles,
  ChevronRight,
} from "lucide-react";

const screens = [
  {
    id: 1,
    title: "Ride Trip Details",
    description:
      "Mobile ride-sharing trip details with driver info & timeline",
    href: "/ride-trip-details",
    icon: MapPin,
    accent: "#6366F1",
  },
  {
    id: 2,
    title: "Art Showcase",
    description: "Creative landing with floating artwork cards",
    href: "/art-showcase",
    icon: Palette,
    accent: "#A78BFA",
  },
  {
    id: 3,
    title: "Travel Landing",
    description: "Sky-themed travel app with ticket cards",
    href: "/travel-landing",
    icon: Plane,
    accent: "#38BDF8",
  },
  {
    id: 4,
    title: "Finance Dashboard",
    description: "Modern finance dashboard landing page",
    href: "/finance-landing",
    icon: LayoutDashboard,
    accent: "#6366F1",
  },
  {
    id: 5,
    title: "Real Estate",
    description: "Investment focused real estate landing",
    href: "/real-estate-landing",
    icon: Building2,
    accent: "#F59E0B",
  },
  {
    id: 6,
    title: "Pricing Plans",
    description: "Clean pricing plans comparison screen",
    href: "/pricing-plans",
    icon: CreditCard,
    accent: "#A78BFA",
  },
  {
    id: 7,
    title: "Developer Portfolio",
    description: "Personal developer portfolio landing page",
    href: "/developer-portfolio",
    icon: Code2,
    accent: "#38BDF8",
  },
];

const fadeUp: Variants = {
  hidden: {
    opacity: 0,
    y: 28,
  },

  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.1 + i * 0.08,
      duration: 0.65,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

const cardVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 32,
  },

  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.07,
      duration: 0.55,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

const floatVariants = (delay: number): Variants => ({
  animate: {
    y: [0, -10, 0],
    transition: {
      duration: 4 + delay,
      repeat: Infinity,
      ease: "easeInOut",
      delay,
    },
  },
});

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-[#e8ebff] via-[#eef4ff] to-[#e6faff] text-slate-900">
      {/* ================= FONT SETUP ================= */}
      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Manrope:wght@500;600;700;800&display=swap");

        .font-display {
          font-family: "Manrope", sans-serif;
        }

        .font-body {
          font-family: "Inter", system-ui, sans-serif;
        }

        html {
          scroll-behavior: smooth;
        }
      `}</style>

      {/* ================= NAVBAR ================= */}
      <header className="relative z-30 border-b border-white/60 bg-white/50 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-8">
          {/* Logo */}
          <div className="flex items-center gap-2.5">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-indigo-500 to-sky-400 text-white shadow-md shadow-indigo-300/50">
              <Sparkles size={15} />
            </div>

            <span className="font-display text-[15px] font-bold tracking-[-0.02em]">
              DesignLab
            </span>
          </div>

          {/* Navigation */}
          <nav className="hidden items-center gap-8 md:flex">
            <a
              href="#screens"
              className="font-body text-[13.5px] font-medium text-slate-500 transition hover:text-slate-900"
            >
              Screens
            </a>

            <a
              href="#about"
              className="font-body text-[13.5px] font-medium text-slate-500 transition hover:text-slate-900"
            >
              About
            </a>
          </nav>

          {/* Buttons */}
          <div className="flex items-center gap-3">
            <button className="hidden rounded-full border border-slate-200 bg-white/70 px-4 py-1.5 font-body text-[13px] font-medium text-slate-600 transition hover:border-slate-300 hover:text-slate-900 sm:block">
              Login
            </button>

            <button className="rounded-full bg-gradient-to-r from-indigo-500 to-sky-400 px-4 py-1.5 font-body text-[13px] font-semibold text-white shadow-md shadow-indigo-300/50 transition hover:opacity-90">
              Get Started
            </button>
          </div>
        </div>
      </header>

      {/* ================= HERO ================= */}
      <section className="relative overflow-hidden">
        {/* Background Glow */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-indigo-200/50 via-transparent to-transparent" />

        {/* Grid */}
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#6366f108_1px,transparent_1px),linear-gradient(to_bottom,#6366f108_1px,transparent_1px)] bg-[size:48px_48px] [mask-image:radial-gradient(ellipse_at_center,black_25%,transparent_75%)]" />

        <div className="relative mx-auto max-w-6xl px-5 pb-20 pt-16 sm:px-8 sm:pt-24 lg:pb-28 lg:pt-28">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            {/* ================= HERO LEFT ================= */}
            <div>
              {/* Badge */}
              <motion.div
                custom={0}
                initial="hidden"
                animate="show"
                variants={fadeUp}
                className="mb-6 inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-white/70 px-3.5 py-1.5 font-body text-[12.5px] font-medium text-indigo-500 shadow-sm backdrop-blur"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-indigo-500" />

                UI / UX Assignment · 7 Screens
              </motion.div>

              {/* Main Heading */}
              <motion.h1
                custom={1}
                initial="hidden"
                animate="show"
                variants={fadeUp}
                className="font-display mb-5 text-[42px] font-extrabold leading-[1.05] tracking-[-0.04em] text-slate-900 sm:text-[52px] lg:text-[60px]"
              >
                7 Screens
                <br />

                <span className="bg-gradient-to-r from-indigo-500 via-sky-500 to-violet-500 bg-clip-text font-extrabold tracking-[-0.04em] text-transparent">
                  UI / UX Assignment
                </span>
              </motion.h1>

              {/* Description */}
              <motion.p
                custom={2}
                initial="hidden"
                animate="show"
                variants={fadeUp}
                className="font-body mb-8 max-w-md text-[15.5px] leading-[1.75] text-slate-500"
              >
                A collection of carefully crafted interface screens. Each one
                designed with attention to detail, hierarchy, and interaction —
                ready to explore or adapt.
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                custom={3}
                initial="hidden"
                animate="show"
                variants={fadeUp}
                className="flex flex-wrap items-center gap-3"
              >
                <a
                  href="#screens"
                  className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-indigo-500 to-sky-400 px-6 py-3 font-body text-[14px] font-semibold text-white shadow-lg shadow-indigo-300/50 transition hover:opacity-90"
                >
                  Explore Screens

                  <ArrowRight
                    size={16}
                    className="transition-transform group-hover:translate-x-0.5"
                  />
                </a>

                <a
                  href="#about"
                  className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-white/70 px-5 py-3 font-body text-[14px] font-medium text-slate-600 backdrop-blur transition hover:border-slate-300 hover:text-slate-900"
                >
                  About the work

                  <ChevronRight size={15} />
                </a>
              </motion.div>

              {/* Stats */}
              <motion.div
                custom={4}
                initial="hidden"
                animate="show"
                variants={fadeUp}
                className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4"
              >
                {[
                  {
                    label: "Screens",
                    value: "07",
                  },
                  {
                    label: "Design System",
                    value: "1",
                  },
                  {
                    label: "Components",
                    value: "40+",
                  },
                ].map((s) => (
                  <div key={s.label}>
                    <p className="font-display text-[26px] font-bold leading-none tracking-[-0.03em] text-slate-900">
                      {s.value}
                    </p>

                    <p className="font-body mt-1 text-[12.5px] font-medium text-slate-400">
                      {s.label}
                    </p>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* ================= HERO RIGHT ================= */}
            <motion.div
              initial={{
                opacity: 0,
                scale: 0.96,
                y: 20,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                y: 0,
              }}
              transition={{
                duration: 0.8,
                delay: 0.25,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="relative mx-auto w-full max-w-md lg:max-w-none"
            >
              <div className="relative aspect-[4/3]">
                {/* Back Card */}
                <div className="absolute left-4 top-6 h-[78%] w-[78%] rounded-2xl border border-white/70 bg-white/40 shadow-xl shadow-indigo-200/40 backdrop-blur" />

                {/* Middle Card */}
                <div className="absolute left-10 top-12 h-[78%] w-[78%] rounded-2xl border border-white/70 bg-white/60 shadow-xl shadow-indigo-200/40 backdrop-blur" />

                {/* Front Card */}
                <div className="absolute inset-x-0 bottom-0 top-0 rounded-2xl border border-white/80 bg-white/80 p-5 shadow-2xl shadow-indigo-200/60 backdrop-blur-xl">
                  {/* Browser Header */}
                  <div className="mb-4 flex items-center justify-between">
                    <div className="flex gap-1.5">
                      <div className="h-2.5 w-2.5 rounded-full bg-rose-400" />
                      <div className="h-2.5 w-2.5 rounded-full bg-amber-400" />
                      <div className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
                    </div>

                    <div className="h-2 w-16 rounded-full bg-slate-200" />
                  </div>

                  {/* Mini Screens */}
                  <div className="grid grid-cols-2 gap-3">
                    {screens.slice(0, 4).map((s, i) => {
                      const Icon = s.icon;

                      return (
                        <motion.div
                          key={s.id}
                          initial={{
                            opacity: 0,
                            y: 10,
                          }}
                          animate={{
                            opacity: 1,
                            y: 0,
                          }}
                          transition={{
                            delay: 0.5 + i * 0.1,
                            duration: 0.5,
                          }}
                          className="flex flex-col items-start gap-2 rounded-xl border p-3"
                          style={{
                            backgroundColor: `${s.accent}12`,
                            borderColor: `${s.accent}30`,
                          }}
                        >
                          <div
                            className="flex h-8 w-8 items-center justify-center rounded-lg"
                            style={{
                              backgroundColor: `${s.accent}22`,
                              color: s.accent,
                            }}
                          >
                            <Icon size={16} />
                          </div>

                          <div className="h-1.5 w-full rounded-full bg-slate-200/70" />

                          <div className="h-1.5 w-2/3 rounded-full bg-slate-200/50" />
                        </motion.div>
                      );
                    })}
                  </div>
                </div>

                {/* ================= FLOATING CHIPS ================= */}

                {/* Finance */}
                <motion.div
                  variants={floatVariants(0)}
                  animate="animate"
                  className="absolute -right-3 top-6 flex items-center gap-1.5 rounded-full border border-white/80 bg-white/90 px-3 py-1.5 shadow-lg shadow-indigo-200/50 backdrop-blur"
                >
                  <span
                    className="flex h-5 w-5 items-center justify-center rounded-full"
                    style={{
                      backgroundColor: "#6366F122",
                      color: "#6366F1",
                    }}
                  >
                    <CreditCard size={11} />
                  </span>

                  <span className="font-body text-[11px] font-medium text-slate-600">
                    Finance
                  </span>
                </motion.div>

                {/* Travel */}
                <motion.div
                  variants={floatVariants(0.6)}
                  animate="animate"
                  className="absolute -left-4 top-1/2 flex items-center gap-1.5 rounded-full border border-white/80 bg-white/90 px-3 py-1.5 shadow-lg shadow-indigo-200/50 backdrop-blur"
                >
                  <span
                    className="flex h-5 w-5 items-center justify-center rounded-full"
                    style={{
                      backgroundColor: "#38BDF822",
                      color: "#38BDF8",
                    }}
                  >
                    <Plane size={11} />
                  </span>

                  <span className="font-body text-[11px] font-medium text-slate-600">
                    Travel
                  </span>
                </motion.div>

                {/* Real Estate */}
                <motion.div
                  variants={floatVariants(1.1)}
                  animate="animate"
                  className="absolute -bottom-4 left-8 flex items-center gap-1.5 rounded-full border border-white/80 bg-white/90 px-3 py-1.5 shadow-lg shadow-indigo-200/50 backdrop-blur"
                >
                  <span
                    className="flex h-5 w-5 items-center justify-center rounded-full"
                    style={{
                      backgroundColor: "#F59E0B22",
                      color: "#F59E0B",
                    }}
                  >
                    <Building2 size={11} />
                  </span>

                  <span className="font-body text-[11px] font-medium text-slate-600">
                    Real Estate
                  </span>
                </motion.div>

                {/* Art */}
                <motion.div
                  variants={floatVariants(1.6)}
                  animate="animate"
                  className="absolute -bottom-6 right-6 flex items-center gap-1.5 rounded-full border border-white/80 bg-white/90 px-3 py-1.5 shadow-lg shadow-indigo-200/50 backdrop-blur"
                >
                  <span
                    className="flex h-5 w-5 items-center justify-center rounded-full"
                    style={{
                      backgroundColor: "#A78BFA22",
                      color: "#A78BFA",
                    }}
                  >
                    <Palette size={11} />
                  </span>

                  <span className="font-body text-[11px] font-medium text-slate-600">
                    Art
                  </span>
                </motion.div>

                {/* Developer */}
                <motion.div
                  variants={floatVariants(0.3)}
                  animate="animate"
                  className="absolute -right-8 bottom-1/3 flex h-9 w-9 items-center justify-center rounded-full border border-white/80 bg-white/90 shadow-lg shadow-indigo-200/50 backdrop-blur"
                >
                  <Code2 size={15} className="text-slate-500" />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ================= SCREENS ================= */}
      <section
        id="screens"
        className="relative border-t border-white/60 bg-white/40 py-20 backdrop-blur-sm sm:py-24"
      >
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          {/* Section Header */}
          <div className="mb-12 max-w-xl">
            <motion.p
              initial={{
                opacity: 0,
                y: 12,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              className="font-body mb-2 text-[13px] font-semibold uppercase tracking-[0.12em] text-indigo-500"
            >
              The Collection
            </motion.p>

            <motion.h2
              initial={{
                opacity: 0,
                y: 16,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                delay: 0.05,
              }}
              className="font-display text-[32px] font-bold tracking-[-0.035em] text-slate-900 sm:text-[38px]"
            >
              Explore every screen
            </motion.h2>

            <motion.p
              initial={{
                opacity: 0,
                y: 12,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                delay: 0.1,
              }}
              className="mt-3 font-body text-[15px] leading-7 text-slate-500"
            >
              Each card opens a complete interface. Click any one to
              experience the full design.
            </motion.p>
          </div>

          {/* Cards */}
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {screens.map((screen, index) => {
              const Icon = screen.icon;

              return (
                <motion.div
                  key={screen.id}
                  custom={index}
                  initial="hidden"
                  whileInView="show"
                  viewport={{
                    once: true,
                    margin: "-30px",
                  }}
                  variants={cardVariants}
                >
                  <Link
                    href={screen.href}
                    className="group block h-full"
                  >
                    <motion.div
                      whileHover={{
                        y: -5,
                      }}
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 25,
                      }}
                      className="relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/80 bg-white/80 p-5 shadow-sm shadow-indigo-100 backdrop-blur transition-all duration-300 group-hover:border-indigo-200 group-hover:bg-white group-hover:shadow-lg group-hover:shadow-indigo-200/50"
                    >
                      {/* Card Top */}
                      <div className="mb-5 flex items-start justify-between">
                        <div
                          className="flex h-11 w-11 items-center justify-center rounded-xl"
                          style={{
                            backgroundColor: `${screen.accent}15`,
                            color: screen.accent,
                          }}
                        >
                          <Icon size={20} />
                        </div>

                        <span className="font-body text-[12px] font-semibold tabular-nums text-slate-400">
                          {String(screen.id).padStart(2, "0")}
                        </span>
                      </div>

                      {/* Title */}
                      <h3 className="font-body mb-1.5 text-[15.5px] font-semibold tracking-[-0.01em] text-slate-900">
                        {screen.title}
                      </h3>

                      {/* Description */}
                      <p className="mb-6 flex-1 font-body text-[13.5px] leading-[1.7] text-slate-500">
                        {screen.description}
                      </p>

                      {/* Bottom */}
                      <div className="flex items-center justify-between border-t border-slate-100 pt-4">
                        <code className="font-body text-[11.5px] text-slate-400">
                          {screen.href}
                        </code>

                        <div className="flex items-center gap-1 font-body text-[13px] font-medium text-slate-500 transition-colors group-hover:text-indigo-500">
                          Open

                          <ArrowRight
                            size={14}
                            className="transition-transform group-hover:translate-x-0.5"
                          />
                        </div>
                      </div>
                    </motion.div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ================= ABOUT ================= */}
      <section
        id="about"
        className="border-t border-white/60 bg-gradient-to-b from-transparent to-indigo-50/60 py-20"
      >
        <div className="mx-auto max-w-2xl px-5 text-center sm:px-8">
          <motion.h2
            initial={{
              opacity: 0,
              y: 14,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            className="font-display mb-4 text-[30px] font-bold tracking-[-0.035em] text-slate-900 sm:text-[34px]"
          >
            Designed with intention
          </motion.h2>

          <motion.p
            initial={{
              opacity: 0,
              y: 12,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              delay: 0.08,
            }}
            className="font-body text-[15px] leading-7 text-slate-500"
          >
            Every screen in this collection was built from the ground up —
            focusing on hierarchy, spacing, color systems, and
            micro-interactions. A practical study in modern product design.
          </motion.p>
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="border-t border-white/60 bg-white/40 py-8 backdrop-blur-sm">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-5 sm:flex-row sm:px-8">
          <p className="font-body text-[13px] font-medium text-slate-500">
            DesignLab · UI / UX Assignment
          </p>

          <p className="font-body text-[13px] text-slate-400">
            Crafted with care
          </p>
        </div>
      </footer>
    </main>
  );
}



