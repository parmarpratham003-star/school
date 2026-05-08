"use client";

import { useState } from "react";
import { ChevronRight } from "lucide-react";

const data = [
  {
    id: "01",
    label: "Creative Learning",
    title: "Learning Through Activities And Real Experiences.",
    desc: "Students learn better through hands-on activities, creative projects, and interactive classroom experiences that make every lesson engaging.",
    img: "https://i.pinimg.com/1200x/d9/cf/c7/d9cfc73c85e6358f6358fcb39301bd4a.jpg",
  },
  {
    id: "02",
    label: "Strong Academics",
    title: "Building Clear Concepts In Every Subject.",
    desc: "Our school focuses on strong academic foundations with practical understanding, helping students grow with confidence in every subject.",
    img: "https://i.pinimg.com/736x/6b/c8/65/6bc865058c29420ac0963fd34dafddd0.jpg",
  },
  {
    id: "03",
    label: "Future Skills",
    title: "Preparing Students For Future Opportunities.",
    desc: "We help students develop communication, teamwork, creativity, and leadership skills needed for future success.",
    img: "https://i.pinimg.com/736x/23/b2/3d/23b23df36f2fbc5b5b675642c88e5a22.jpg",
  },
  {
    id: "04",
    label: "Student Growth",
    title: "Helping Every Child Grow With Confidence.",
    desc: "Beyond academics, we focus on confidence building, personality development, and overall student growth in a positive environment.",
    img: "https://i.pinimg.com/736x/a9/fb/eb/a9fbebd7a011b5f3c916b6bbbae027d3.jpg",
  },
];

export default function WhyChooseUs() {
  const [active, setActive] = useState(0);

  return (
    <section className="relative w-full bg-[#0f224a] py-10 sm:py-12 lg:py-14 overflow-hidden">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">

        {/* MOBILE */}
        <div className="lg:hidden">

          {/* TAG */}
          <p className="text-orange-500 text-[10px] sm:text-sm font-bold tracking-[4px] uppercase mb-5">
            WHY CHOOSE US
          </p>

          {/* CHIPS */}
          <div className="flex gap-3 overflow-x-auto scrollbar-hide pb-3 mb-6">
            {data.map((item, idx) => (
              <div
                key={item.id}
                onClick={() => setActive(idx)}
                className={`min-w-[170px] sm:min-w-[210px] p-4 rounded-xl border cursor-pointer transition-all duration-300 ${
                  active === idx
                    ? "bg-orange-500 border-orange-500 text-white"
                    : "bg-white/10 border-white/10 text-white/70"
                }`}
              >
                <p className="text-xs font-bold mb-1">
                  {item.id}
                </p>

                <p
                  className="text-sm sm:text-base leading-snug font-medium"
                  style={{
                    fontFamily: "'Barlow', sans-serif",
                  }}
                >
                  {item.label}
                </p>
              </div>
            ))}
          </div>

          {/* IMAGE */}
          <div className="relative w-full h-[260px] rounded-2xl overflow-hidden shadow-2xl mb-6">
            <img
              key={active}
              src={data[active].img}
              alt={data[active].label}
              className="w-full h-full object-cover transition-all duration-700"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-[#0f224a]/80 via-transparent to-transparent" />
          </div>

          {/* CONTENT */}
          <div key={active}>
            <h2
              className="text-white text-3xl sm:text-4xl leading-[1.18] mb-5 font-medium tracking-[-0.02em]"
              style={{
                fontFamily: "'Barlow', sans-serif",
              }}
            >
              {data[active].title}
            </h2>

            <p className="text-slate-300 text-sm sm:text-base leading-8 mb-6">
              {data[active].desc}
            </p>

            <button className="group flex flex-col items-start gap-1">
              <span className="text-white text-xs sm:text-sm font-bold uppercase tracking-widest group-hover:text-orange-500 transition-colors">
                Learn More
              </span>

              <div className="h-[2px] w-12 bg-orange-500 group-hover:w-full transition-all duration-300" />
            </button>
          </div>
        </div>

        {/* DESKTOP */}
        <div className="hidden lg:grid lg:grid-cols-12 gap-10 items-center">

          {/* LEFT MENU */}
          <div className="lg:col-span-3 flex flex-col gap-5 border-l border-white/10 pl-6">

            <p className="text-orange-500 text-sm font-bold tracking-[4px] uppercase mb-5">
              WHY CHOOSE US
            </p>

            {data.map((item, idx) => (
              <div
                key={item.id}
                onMouseEnter={() => setActive(idx)}
                className={`cursor-pointer flex items-center gap-4 transition-all duration-300 ${
                  active === idx
                    ? "translate-x-3"
                    : "opacity-40 hover:opacity-100"
                }`}
              >
                <span
                  className={`text-lg font-bold ${
                    active === idx
                      ? "text-orange-500"
                      : "text-white"
                  }`}
                >
                  {item.id}
                </span>

                <span
                  className={`text-lg tracking-[-0.01em] ${
                    active === idx
                      ? "text-white"
                      : "text-slate-300"
                  }`}
                  style={{
                    fontFamily: "'Barlow', sans-serif",
                    fontWeight: 500,
                  }}
                >
                  {item.label}
                </span>

                {active === idx && (
                  <ChevronRight
                    size={18}
                    className="text-orange-500"
                  />
                )}
              </div>
            ))}
          </div>

          {/* CENTER CONTENT */}
          <div className="lg:col-span-5">

            <div key={active}>

              <h2
                className="text-white text-[40px] leading-[1.18] mb-5 font-medium tracking-[-0.02em]"
                style={{
                  fontFamily: "'Barlow', sans-serif",
                }}
              >
                {data[active].title}
              </h2>

              <p className="text-slate-300 text-[15px] leading-8 mb-6 max-w-xl">
                {data[active].desc}
              </p>

              <button className="group flex flex-col items-start gap-1">
                <span className="text-white text-sm font-bold uppercase tracking-widest group-hover:text-orange-500 transition-colors">
                  Learn More
                </span>

                <div className="h-[2px] w-12 bg-orange-500 group-hover:w-full transition-all duration-300" />
              </button>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="lg:col-span-4">
            <div className="relative w-full h-[430px] rounded-2xl overflow-hidden shadow-2xl">

              <img
                key={active}
                src={data[active].img}
                alt={data[active].label}
                className="w-full h-full object-cover transition-all duration-700"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#0f224a]/70 via-transparent to-transparent" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}