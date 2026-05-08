"use client";

import React from "react";
import {
  Award,
  Users,
  GraduationCap,
  BookOpen,
} from "lucide-react";

export default function OurJourneySection() {
  const journeyData = [
    {
      number: "10+",
      title: "Years Of Excellence",
      icon: <Award size={22} />,
    },
    {
      number: "50+",
      title: "Dedicated Educators",
      icon: <Users size={22} />,
    },
    {
      number: "5K+",
      title: "Successful Students",
      icon: <GraduationCap size={22} />,
    },
    {
      number: "100%",
      title: "Modern Learning",
      icon: <BookOpen size={22} />,
    },
  ];

  return (
    <section className="relative w-full bg-white py-16 sm:py-20 overflow-hidden">

      {/* BACKGROUND */}
      <div className="absolute top-0 left-0 w-[320px] h-[320px] bg-orange-50 rounded-full blur-3xl opacity-70" />

      <div className="absolute bottom-0 right-0 w-[260px] h-[260px] bg-blue-50 rounded-full blur-3xl opacity-70" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">

        {/* TOP */}
        <div className="max-w-3xl mx-auto text-center mb-20">

          <p className="text-orange-500 uppercase tracking-[4px] text-[10px] sm:text-xs font-bold mb-4">
            OUR JOURNEY
          </p>

          <h2
            className="text-[#0f224a] text-3xl sm:text-4xl lg:text-[52px] leading-[1.08] tracking-[-0.02em] font-medium mb-5"
            style={{
              fontFamily: "'Barlow', sans-serif",
            }}
          >
            Building Futures
            <span className="text-orange-500">
              {" "}
              Through Education
            </span>
          </h2>

          <p className="text-gray-500 text-sm sm:text-base leading-8">
            Years of excellence, passionate educators,
            successful students, and innovative learning
            experiences continue to shape our journey.
          </p>
        </div>

        {/* UNIQUE SCHOOL STYLE */}
        <div className="relative">

          {/* CENTER LINE */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-[1px] bg-[#e8edf5]" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-16 gap-x-10 relative z-10">

            {journeyData.map((item, index) => (
              <div
                key={index}
                className={`relative flex flex-col items-center text-center ${
                  index % 2 === 0
                    ? "lg:-mt-10"
                    : "lg:mt-10"
                }`}
              >

                {/* ICON */}
                <div className="relative z-10 w-20 h-20 rounded-full bg-white border border-[#edf1f7] shadow-[0_10px_40px_rgba(15,34,74,0.06)] flex items-center justify-center text-orange-500 mb-6 hover:scale-110 transition-transform duration-300">

                  {/* INNER CIRCLE */}
                  <div className="absolute inset-2 rounded-full bg-orange-50" />

                  <div className="relative z-10">
                    {item.icon}
                  </div>
                </div>

                {/* DOT */}
                <div className="hidden lg:block absolute top-[38px] w-4 h-4 rounded-full bg-orange-500 border-[5px] border-white shadow-md" />

                {/* NUMBER */}
                <h3
                  className="text-[#0f224a] text-[58px] sm:text-[66px] leading-none tracking-[-0.04em] font-medium mb-3"
                  style={{
                    fontFamily: "'Barlow', sans-serif",
                  }}
                >
                  {item.number}
                </h3>

                {/* TITLE */}
                <h4
                  className="text-[#0f224a] text-[22px] sm:text-[24px] leading-[1.15] tracking-[-0.02em] font-medium mb-4"
                  style={{
                    fontFamily: "'Barlow', sans-serif",
                  }}
                >
                  {item.title}
                </h4>

                {/* SMALL LINE */}
                <div className="w-12 h-[2px] bg-orange-500 mb-5" />

                {/* TEXT */}
                <p className="text-gray-500 text-sm sm:text-base leading-7 max-w-[240px]">
                  Creating a learning environment focused
                  on growth, creativity, and success.
                </p>

              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}