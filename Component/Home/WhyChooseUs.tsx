"use client";

import { useState } from "react";
import { ChevronRight } from "lucide-react";

const data = [
  {
    id: "01",
    label: "Concept Clarity",
    title: "Focus on understanding instead of memorization.",
    desc: "We ensure your child doesn't just memorize facts but understands the 'why' behind every concept, building a foundation that lasts a lifetime.",
    img: "https://i.pinimg.com/1200x/d9/cf/c7/d9cfc73c85e6358f6358fcb39301bd4a.jpg",
  },
  {
    id: "02",
    label: "Strong Foundation",
    title: "Build clear concepts in every single subject.",
    desc: "A well-structured curriculum designed to build clear concepts and strong fundamentals, ensuring academic excellence across the board.",
    img: "https://i.pinimg.com/736x/6b/c8/65/6bc865058c29420ac0963fd34dafddd0.jpg",
  },
  {
    id: "03",
    label: "Practical Learning",
    title: "Learn through real understanding and application.",
    desc: "Education isn't just about books. We integrate practical applications to make learning engaging, relevant, and fun for students.",
    img: "https://i.pinimg.com/736x/23/b2/3d/23b23df36f2fbc5b5b675642c88e5a22.jpg",
  },
  {
    id: "04",
    label: "Overall Growth",
    title: "Focus on values, confidence and development.",
    desc: "Beyond academics, we focus on character building, public speaking, and emotional intelligence to prepare children for the real world.",
    img: "https://i.pinimg.com/736x/a9/fb/eb/a9fbebd7a011b5f3c916b6bbbae027d3.jpg",
  },
];

export default function WhyChooseUs() {
  const [active, setActive] = useState(0);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Lato:wght@300;400;500;600;700&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Barlow:wght@400;500&display=swap');

        * {
          font-family: 'Lato', sans-serif;
        }

        .hero-font {
          font-family: 'Barlow', sans-serif;
          font-weight: 600 !important;
          letter-spacing: -0.01em;
        }

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(30px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        .fade-anim {
          animation: fadeUp .5s ease forwards;
        }

        .scrollbar-hide::-webkit-scrollbar { display: none; }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>

      <section className="relative w-full bg-[#0f224a] py-14 sm:py-20 overflow-hidden">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">

          {/* ── MOBILE: tag + scrollable chips ── */}
          <div className="lg:hidden mb-6">
            <p className="text-orange-500 text-[10px] sm:text-sm font-black tracking-[4px] uppercase mb-4">
              Why Choose Us
            </p>

            <div className="flex gap-3 overflow-x-auto scrollbar-hide pb-2">
              {data.map((item, idx) => (
                <div
                  key={item.id}
                  onClick={() => setActive(idx)}
                  className={`min-w-[160px] sm:min-w-[200px] p-3 sm:p-4 rounded-lg border cursor-pointer transition-all duration-300 ${
                    active === idx
                      ? "bg-orange-500 border-orange-500 text-white"
                      : "bg-white/10 border-white/10 text-white/70"
                  }`}
                >
                  <p className="text-xs font-bold mb-1">{item.id}</p>
                  <p className="hero-font text-sm sm:text-base leading-snug" style={{fontWeight:600}}>{item.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* ── MOBILE: image + content stacked ── */}
          <div className="lg:hidden">
            {/* Image */}
            <div className="relative w-full aspect-[16/10] sm:aspect-[16/9] rounded-xl overflow-hidden shadow-2xl mb-6">
              <img
                key={active}
                src={data[active].img}
                alt={data[active].label}
                className="w-full h-full object-cover transition-all duration-700 scale-105 hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0f224a]/80 via-transparent to-transparent" />
            </div>

            {/* Content */}
            <div key={active} className="fade-anim relative z-10">
              <h2 className="hero-font font-normal text-white text-2xl sm:text-3xl leading-[1.2] mb-4">
                {data[active].title}
              </h2>
              <p className="text-slate-300 text-sm sm:text-base leading-7 mb-5">
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

          {/* ── DESKTOP: 3-col layout ── */}
          <div className="hidden lg:grid lg:grid-cols-12 gap-10 lg:gap-8 items-center">

            {/* Left Menu */}
            <div className="lg:col-span-3 flex flex-col gap-6 border-l border-white/10 pl-6">
              <p className="text-orange-500 text-sm font-black tracking-[4px] uppercase mb-6">
                Why Choose Us
              </p>

              {data.map((item, idx) => (
                <div
                  key={item.id}
                  onMouseEnter={() => setActive(idx)}
                  className={`cursor-pointer flex items-center gap-4 transition-all duration-300 ${
                    active === idx ? "translate-x-3" : "opacity-40 hover:opacity-100"
                  }`}
                >
                  <span className={`text-lg font-bold ${active === idx ? "text-orange-500" : "text-white"}`}>
                    {item.id}
                  </span>
                  <span className={`hero-font text-xl font-normal ${active === idx ? "text-white" : "text-slate-300"}`}>
                    {item.label}
                  </span>
                  {active === idx && <ChevronRight size={18} className="text-orange-500" />}
                </div>
              ))}
            </div>

            {/* Center Content */}
            <div className="lg:col-span-5 relative">
              <span className="absolute -top-24 -left-6 text-[200px] font-black text-white/5 select-none leading-none">
                {data[active].id}
              </span>

              <div key={active} className="fade-anim relative z-10">
                <h2 className="hero-font font-normal text-white text-4xl md:text-5xl leading-[1.15] mb-5">
                  {data[active].title}
                </h2>
                <p className="text-slate-300 text-base leading-7 sm:leading-8 mb-6 max-w-xl">
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

            {/* Image */}
            <div className="lg:col-span-4">
              <div className="relative w-full aspect-[4/5] sm:aspect-[4/4.8] rounded-2xl overflow-hidden shadow-2xl">
                <img
                  key={active}
                  src={data[active].img}
                  alt={data[active].label}
                  className="w-full h-full object-cover transition-all duration-700 scale-105 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f224a]/80 via-transparent to-transparent" />
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}