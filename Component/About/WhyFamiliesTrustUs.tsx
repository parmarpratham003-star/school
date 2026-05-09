"use client";

import React from "react";
import { ArrowRight } from "lucide-react";

export default function WhyFamiliesTrustUs() {
  return (
    <section
      className="relative overflow-hidden bg-white py-10 sm:py-12 lg:py-14"
      style={{
        fontFamily: "'Barlow', sans-serif",
      }}
    >
      {/* DOT BACKGROUND */}
      <div className="absolute inset-0 opacity-[0.04]">
        <div
          className="h-full w-full"
          style={{
            backgroundImage:
              "radial-gradient(circle, #0f224a 1px, transparent 1px)",
            backgroundSize: "22px 22px",
          }}
        />
      </div>

      {/* CONTAINER */}
      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-10">

        {/* GRID */}
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">

          {/* LEFT CONTENT */}
          <div>

            {/* LABEL */}
            <p className="mb-4 text-[10px] font-bold uppercase tracking-[6px] text-orange-500 sm:text-xs">
              WHY FAMILIES TRUST US
            </p>

            {/* TITLE */}
            <h2 className="text-3xl font-medium leading-[1.05] tracking-[-0.03em] text-[#0f224a] sm:text-4xl lg:text-[52px]">

              Supporting Every Child
              <span className="block text-orange-500">
                With Care And Excellence.
              </span>

            </h2>

            {/* DESCRIPTION */}
            <p className="mt-5 max-w-lg text-sm leading-8 text-[#667085] sm:text-[15px]">
              We are committed to guiding every student with care,
              attention, and encouragement so they can achieve
              their best in academics and life.
            </p>

            {/* SECOND DESCRIPTION */}
            <p className="mt-5 max-w-lg text-sm leading-8 text-[#667085] sm:text-[15px]">
              Be a part of a school that focuses on growth,
              values, and a brighter future for every child.
            </p>

            {/* BUTTON */}
            <button className="group mt-8 inline-flex items-center gap-3 rounded-[3px] border border-[#0f224a]/10 bg-[#0f224a] px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-orange-500">

              Join Our Learning Community

              <ArrowRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />

            </button>

          </div>

          {/* RIGHT IMAGE */}
          <div className="group">

            {/* IMAGE */}
            <div className="relative h-[240px] overflow-hidden rounded-[4px] bg-[#f6f6f6] sm:h-[340px] lg:h-[420px]">

              <img
                src="https://images.unsplash.com/photo-1513258496099-48168024aec0?q=80&w=1400&auto=format&fit=crop"
                alt="Students"
                className="h-full w-full object-cover transition-all duration-700 ease-out group-hover:scale-[1.05] group-hover:brightness-[0.72]"
              />

              {/* OVERLAY */}
              <div className="absolute inset-0 bg-[#0f224a]/35 opacity-0 transition-all duration-500 group-hover:opacity-100" />

              {/* TEXT */}
              <div className="absolute inset-0 z-20 flex items-center justify-center px-6">

                <div className="text-center">

                  {/* TITLE */}
                  <div className="overflow-hidden">
                    <h3 className="translate-x-full text-2xl font-semibold tracking-[-0.03em] text-white opacity-0 transition-all duration-700 ease-out group-hover:translate-x-0 group-hover:opacity-100 sm:text-3xl">
                      Trusted Learning
                    </h3>
                  </div>

                  {/* DESCRIPTION */}
                  <div className="overflow-hidden">
                    <p className="mt-3 translate-x-full text-xs leading-7 text-white/80 opacity-0 transition-all duration-700 delay-100 ease-out group-hover:translate-x-0 group-hover:opacity-100 sm:text-sm">
                      Building confidence, values, and brighter futures.
                    </p>
                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}