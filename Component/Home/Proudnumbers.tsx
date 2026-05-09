"use client";

import { useState } from "react";

export default function Proudnumbers() {
  const stats = [
    {
      title: "Learn",
      label: "Gain practical skills with industry focused training.",
      img: "W1.png",
    },
    {
      title: "Practice",
      label: "Work on real projects and improve confidence.",
      img: "W3.png",
    },
    {
      title: "Build",
      label: "Create your portfolio and showcase experience.",
      img: "W2.png",
    },
    {
      title: "Succeed",
      label: "Become career ready and achieve your goals.",
      img: "W4.png",
    },
  ];

  const [activeBg, setActiveBg] = useState(stats[0].img);
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section className="w-full bg-white py-8 sm:py-16 overflow-hidden">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Lato:wght@300;400;500;600;700;800&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Barlow:wght@400;500;600&display=swap');

        * {
          font-family: 'Lato', sans-serif;
        }

        .hero-title {
          font-family: 'Barlow', sans-serif;
          font-weight: 600;
          font-style: normal;
          letter-spacing: -0.01em;
        }

        @keyframes smoothFade {
          0% {
            opacity: 0;
            transform: translateY(25px) scale(1.03);
          }

          100% {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
      `}</style>

      {/* Heading */}
      <div className="px-4 sm:px-6 lg:px-10 text-center mb-8 sm:mb-10">
        <p className="text-[#f97316] uppercase tracking-[3px] sm:tracking-[5px] font-bold text-[10px] sm:text-sm mb-5">
          Transformation Section
        </p>

       <h2 className="hero-title text-[#0f1e45] text-2xl sm:text-4xl lg:text-[48px] leading-[1.35] tracking-[-0.02em] mb-5">
         Transforming Learning Into Real World Success
       </h2>

        <p className="text-gray-500 text-sm sm:text-base lg:text-lg leading-8 sm:leading-9 tracking-[0.2px] max-w-3xl mx-auto px-2">
          In today's competitive world certificates are not enough. What matters
          is what you can actually do.{" "}
          <span className="font-bold text-[#0f1e45]">
            Learn. Practice. Build. Succeed.
          </span>
        </p>
      </div>

      {/* ================= MOBILE VIEW ================= */}
      <div className="lg:hidden px-4 sm:px-6 space-y-4 sm:space-y-5">
        {stats.map((item, i) => (
          <div
            key={i}
            className="relative rounded-xl overflow-hidden shadow-md"
          >
            <div
              className="h-[200px] sm:h-[240px] bg-cover bg-center"
              style={{ backgroundImage: `url(${item.img})` }}
            />

            <div className="absolute inset-0 bg-black/40" />

            <div className="absolute inset-0 flex flex-col justify-end p-4 sm:p-5">
              <h3 className="hero-title text-white text-2xl sm:text-2xl mb-1">
                {item.title}
              </h3>

              <p className="text-gray-200 text-sm sm:text-base leading-5 sm:leading-6 mb-3">
                {item.label}
              </p>

              <button className="bg-white text-[#0f1e45] px-4 py-2 text-xs sm:text-sm font-bold rounded w-fit hover:bg-[#0f224a] hover:text-white transition">
                Learn More
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* ================= DESKTOP VIEW ================= */}
      {/* SAME LEFT RIGHT PADDING AS HEADER */}
      <div className="hidden lg:block px-10">
        <div className="relative w-full h-[600px] overflow-hidden rounded-[3px]">

          {/* Background */}
          <div
            key={activeBg}
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url(${activeBg})`,
              animation: "smoothFade .7s ease forwards",
            }}
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/45" />

          {/* Grid lines */}
          <div className="absolute inset-0 grid grid-cols-4 z-10">
            <div className="border-r border-white/20" />
            <div className="border-r border-white/20" />
            <div className="border-r border-white/20" />
            <div />
          </div>

          {/* Hover Columns */}
          {stats.map((item, i) => (
            <div
              key={i}
              className="group absolute top-0 h-full w-1/4 z-20"
              style={{ left: `${i * 25}%` }}
              onMouseEnter={() => {
                setActiveBg(item.img);
                setHovered(i);
              }}
              onMouseLeave={() => setHovered(null)}
            >
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/35 transition-all duration-500" />

              {/* Hover Content */}
              <div className="absolute inset-0 flex flex-col justify-end px-8 pb-8 opacity-0 translate-y-6 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                <h3 className="hero-title text-white text-4xl mb-3">
                  {item.title}
                </h3>

                <p className="text-gray-300 text-1xl leading-7 max-w-[260px] mb-5">
                  {item.label}
                </p>

                <button className="border border-white text-white px-7 py-3 rounded-[3px] font-bold text-sm w-fit hover:bg-white hover:text-[#0f1e45] transition-all duration-300">
                  Learn More
                </button>
              </div>

              {/* Default Text */}
              <div
                className={`absolute left-8 bottom-8 z-30 transition-all duration-500 ${
                  hovered === i
                    ? "opacity-0 translate-y-8"
                    : "opacity-100 translate-y-0"
                }`}
              >
                <h3 className="hero-title text-white text-4xl">
                  {item.title}
                </h3>

                <p className="text-white text-1xl mt-2">
                  {item.label}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}