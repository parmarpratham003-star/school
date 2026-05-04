"use client";

import { useState } from "react";
import { ChevronRight } from "lucide-react";

const data = [
  {
    id: "01",
    label: "Concept Clarity",
    title: "Focus on understanding instead of memorization.",
    desc: "We ensure your child doesn't just memorize facts but understands the 'why' behind every concept, building a foundation that lasts a lifetime.",
    img: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&q=80",
  },
  {
    id: "02",
    label: "Strong Foundation",
    title: "Build clear concepts in every single subject.",
    desc: "A well-structured curriculum designed to build clear concepts and strong fundamentals, ensuring academic excellence across the board.",
    img: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=800&q=80",
  },
  {
    id: "03",
    label: "Practical Learning",
    title: "Learn through real understanding and application.",
    desc: "Education isn't just about books. We integrate practical applications to make learning engaging, relevant, and fun for students.",
    img: "https://images.unsplash.com/photo-1543269865-cbf427effbad?w=800&q=80",
  },
  {
    id: "04",
    label: "Overall Growth",
    title: "Focus on values, confidence and development.",
    desc: "Beyond academics, we focus on character building, public speaking, and emotional intelligence to prepare children for the real world.",
    img: "https://images.unsplash.com/photo-1524178232363-1fb28f74b573?w=800&q=80",
  },
];

export default function WhyChooseUs() {
  const [active, setActive] = useState(0);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Italiana&family=Lato:wght@300;400;500;600;700&display=swap');

        .hero-font {
          font-family: 'Italiana', serif;
        }

        @keyframes fadeUp {
          from { opacity:0; transform:translateY(30px); }
          to { opacity:1; transform:translateY(0); }
        }

        .fade-anim {
          animation: fadeUp .5s ease forwards;
        }
      `}</style>

      <section className="relative w-full bg-[#0f224a] py-14 sm:py-20 overflow-hidden">

        <div className="max-w-7xl mx-auto px-4 sm:px-6">

          {/* MOBILE MENU (scrollable) */}
          <div className="lg:hidden flex gap-4 overflow-x-auto pb-6">
            {data.map((item, idx) => (
              <div
                key={item.id}
                onClick={() => setActive(idx)}
                className={`min-w-[200px] p-3 rounded-md border transition ${
                  active === idx
                    ? "bg-orange-500 text-white"
                    : "bg-white/10 text-white/70"
                }`}
              >
                <p className="text-xs">{item.id}</p>
                <p className="font-semibold">{item.label}</p>
              </div>
            ))}
          </div>

          <div className="grid lg:grid-cols-12 gap-8 items-center">

            {/* LEFT MENU */}
            <div className="hidden lg:flex lg:col-span-3 flex-col gap-6 border-l border-white/10 pl-6">
              <p className="text-orange-500 text-sm font-black tracking-[4px] uppercase mb-6">
                Why Choose Us
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
                  <span className={`text-lg font-bold ${
                    active === idx ? "text-orange-500" : "text-white"
                  }`}>
                    {item.id}
                  </span>

                  <span className={`hero-font text-lg ${
                    active === idx ? "text-white" : "text-slate-300"
                  }`}>
                    {item.label}
                  </span>

                  {active === idx && (
                    <ChevronRight size={18} className="text-orange-500" />
                  )}
                </div>
              ))}
            </div>

            {/* CENTER */}
            <div className="lg:col-span-5 relative">
              <span className="absolute -top-24 -left-6 text-[140px] sm:text-[200px] font-black text-white/5 select-none">
                {data[active].id}
              </span>

              <div key={active} className="fade-anim">
                <h2 className="hero-font text-white text-2xl sm:text-4xl md:text-5xl font-bold leading-tight mb-5">
                  {data[active].title}
                </h2>

                <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
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

            {/* IMAGE */}
            <div className="lg:col-span-4">
              <div className="relative w-full aspect-[3/4] sm:aspect-[4/5] rounded-xl overflow-hidden shadow-xl">
                <img
                  key={active}
                  src={data[active].img}
                  className="w-full h-full object-cover transition-all duration-700 scale-105 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f224a]/80 to-transparent" />
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}