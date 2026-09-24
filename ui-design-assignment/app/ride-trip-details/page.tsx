"use client";

import { motion } from "framer-motion";
import {
  X,
  Star,
  ShieldCheck,
  Phone,
  UserRound,
} from "lucide-react";

const stops = [
  {
    type: "Pickup",
    location: "Main Street Bus Stop",
    time: "08:15 AM",
    note: "(in 5 mins)",
  },
  {
    type: "Passenger 2",
    location: "Oakwood Apartments",
    time: "08:20 AM",
    note: "",
  },
  {
    type: "Passenger 3",
    location: "Central Mall Entrance B",
    time: "08:25 AM",
    note: "",
  },
  {
    type: "Dropoff",
    location: "Tech Park, Building A",
    time: "08:40 AM",
    note: "(Estimated arrival)",
  },
];

export default function RideTripDetails() {
  return (
    <main className="min-h-screen bg-[#dedede] px-3 py-6 sm:px-6 sm:py-10">
      <div className="flex min-h-screen items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-[430px] overflow-hidden rounded-[52px] bg-white shadow-2xl"
        >
          {/* HEADER */}
          <header className="px-6 pt-7 sm:px-7">
            <div className="flex items-center justify-between">
              
              {/* Placeholder Bunny Logo */}
              <div className="flex items-center gap-2">
                <div className="relative h-10 w-10">
                  <div className="absolute bottom-1 left-1 h-7 w-7 rounded-full border-[3px] border-black" />

                  <div className="absolute left-[7px] top-0 h-5 w-2.5 rotate-[-15deg] rounded-full border-[3px] border-black" />

                  <div className="absolute left-[22px] top-0 h-5 w-2.5 rotate-[15deg] rounded-full border-[3px] border-black" />

                  <div className="absolute bottom-[9px] left-[12px] h-[3px] w-[3px] rounded-full bg-black" />

                  <div className="absolute bottom-[9px] right-[9px] h-[3px] w-[3px] rounded-full bg-black" />
                </div>

                <span className="text-[29px] font-extrabold tracking-[-1.5px]">
                  HoPon
                </span>
              </div>

              <button
                aria-label="Close"
                className="flex h-10 w-10 items-center justify-center rounded-full hover:bg-gray-100"
              >
                <X size={29} strokeWidth={2.5} />
              </button>
            </div>

            {/* Progress */}
            <div className="mt-7 flex gap-3 px-2">
              <div className="h-[4px] flex-1 rounded-full bg-[#f1f1f1]" />
              <div className="h-[4px] flex-1 rounded-full bg-[#f1f1f1]" />
              <div className="h-[5px] flex-1 rounded-full bg-black" />
              <div className="h-[4px] flex-1 rounded-full bg-[#f1f1f1]" />
            </div>
          </header>

          {/* DRIVER CARD */}
          <section className="px-6 pt-6 sm:px-7">
            <div className="rounded-[25px] bg-[#f6f6f6] px-5 py-4">
              <div className="flex justify-between gap-3">
                
                <div>
                  <div className="flex items-center gap-2">
                    <div className="flex h-7 w-7 items-center justify-center rounded-full bg-[#ed79b9]">
                      <UserRound
                        size={17}
                        color="white"
                        fill="white"
                      />
                    </div>

                    <span className="font-semibold">
                      Lara Larsson
                    </span>
                  </div>

                  <div className="mt-2 flex items-center gap-1">
                    <Star
                      size={17}
                      color="#398bdc"
                      fill="#398bdc"
                    />

                    <span className="font-semibold text-[#398bdc]">
                      4.9
                    </span>

                    <span className="text-[14px] text-gray-500">
                      (120 rides)
                    </span>
                  </div>
                </div>

                <div className="text-right text-[14px] leading-6">
                  <p className="text-gray-500">
                    Tesla Model X • Gray
                  </p>

                  <p>
                    <span className="text-gray-500">
                      Plate:
                    </span>{" "}
                    <span className="font-semibold">
                      ABC 432 KJ
                    </span>
                  </p>
                </div>

              </div>
            </div>
          </section>

          {/* BADGES */}
          <section className="flex gap-3 px-6 pt-4 sm:px-7">
            <div className="flex items-center gap-2 rounded-full bg-[#eaf4ff] px-3 py-2">
              <ShieldCheck
                size={19}
                color="#398bdc"
                fill="#398bdc"
              />

              <span className="text-sm font-semibold text-[#398bdc]">
                Verified ID
              </span>
            </div>

            <div className="flex items-center gap-2 rounded-full bg-[#e9fff2] px-3 py-2">
              <span className="h-3.5 w-3.5 rounded-full bg-[#39bd76]" />

              <span className="text-sm font-semibold text-[#39bd76]">
                Safe Driver
              </span>
            </div>
          </section>

          {/* TRIP INFO */}
          <section className="px-6 pt-6 sm:px-7">
            <h2 className="mb-5 text-[18px] font-bold">
              Trip Info
            </h2>

            <div className="relative">
              
              {/* Timeline Line */}
              <div className="absolute bottom-5 left-[13px] top-3 w-[2px] bg-[#dddddd]" />

              {stops.map((stop, index) => (
                <motion.div
                  key={stop.type}
                  initial={{ opacity: 0, x: -15 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    delay: index * 0.1,
                    duration: 0.35,
                  }}
                  className="relative mb-7 flex gap-4 last:mb-0"
                >
                  {/* Circle */}
                  <div
                    className={`relative z-10 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border-[3px] bg-white ${
                      index === 0
                        ? "border-[#5da5e9]"
                        : "border-[#d9dfe3]"
                    }`}
                  >
                    {index === 0 && (
                      <span className="h-3 w-3 rounded-full bg-[#5da5e9]" />
                    )}

                    {index === 3 && (
                      <span className="h-2.5 w-2.5 rounded-full border-2 border-[#d9dfe3]" />
                    )}
                  </div>

                  {/* Content */}
                  <div className="min-w-0 flex-1">
                    <div className="flex justify-between gap-3">
                      
                      <div>
                        <p className="text-[16px] text-gray-400">
                          {stop.type}
                        </p>

                        <p className="mt-1 text-[16px] font-medium leading-5">
                          {stop.location}
                        </p>
                      </div>

                      <div className="shrink-0 text-right">
                        <p className="text-[17px] font-semibold">
                          {stop.time}
                        </p>

                        {stop.note && (
                          <p className="text-[14px] text-gray-500">
                            {stop.note}
                          </p>
                        )}
                      </div>

                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>

          {/* FARE */}
          <section className="px-6 pt-7 sm:px-7">
            <div className="rounded-[25px] bg-gradient-to-br from-[#e5fff0] via-[#f1fff7] to-[#f7f7f7] px-5 py-5 text-center">
              <p className="text-[16px] text-gray-500">
                Fare Split
              </p>

              <div className="mt-0.5">
                <span className="text-[39px] font-bold tracking-[-1.5px]">
                  $4.20
                </span>

                <span className="ml-1 text-[18px] text-gray-600">
                  /seat
                </span>
              </div>

              <span className="mt-1 inline-block rounded-full bg-[#e1e8e4] px-3 py-1 text-[13px] text-gray-500">
                × 3 riders
              </span>
            </div>
          </section>

          {/* REMINDER */}
          <section className="px-6 pt-6 sm:px-7">
            <div className="flex items-center justify-between gap-4">
              
              <div>
                <h3 className="text-[17px] font-bold">
                  Set Reminder
                </h3>

                <p className="mt-1 max-w-[245px] text-[14px] leading-5 text-gray-500">
                  Get notified 10 minutes before pickup
                  so you&apos;re ready on time.
                </p>
              </div>

              <button className="rounded-full bg-[#f1f1f1] px-7 py-3 text-[16px] font-semibold hover:bg-gray-200">
                Set
              </button>

            </div>
          </section>

          {/* BOTTOM BUTTONS */}
          <section className="flex gap-3 px-6 pb-7 pt-6 sm:px-7">
            
            <button
              aria-label="Call driver"
              className="flex h-[62px] w-[84px] items-center justify-center rounded-full bg-[#f1f1f1] hover:bg-gray-200"
            >
              <Phone
                size={26}
                fill="black"
                strokeWidth={1.8}
              />
            </button>

            <button className="flex h-[62px] flex-1 items-center justify-center rounded-full bg-[#393939] text-[17px] font-semibold text-white hover:bg-black">
              Join Ride
            </button>

          </section>
        </motion.div>
      </div>
    </main>
  );
}