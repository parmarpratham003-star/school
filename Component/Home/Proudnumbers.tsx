"use client";

import { useState } from "react";

export default function TransformationSection() {
  const stats = [
    {
      title: "Learn",
      label: "Gain practical skills with industry focused training.",
      img: "https://plus.unsplash.com/premium_photo-1661661139398-9f360bea5b48?q=80&w=871&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Practice",
      label: "Work on real projects and improve confidence.",
      img: "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=1800&q=80",
    },
    {
      title: "Build",
      label: "Create your portfolio and showcase experience.",
      img: "https://images.unsplash.com/photo-1513258496099-48168024aec0?w=1800&q=80",
    },
    {
      title: "Succeed",
      label: "Become career ready and achieve your goals.",
      img: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=1800&q=80",
    },
  ];

  const [activeBg, setActiveBg] = useState(stats[0].img);
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section className="w-full bg-white py-2 sm:py-4 overflow-hidden">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Italiana&family=Lato:wght@300;400;500;600;700;800&display=swap');

        @font-face{
          font-family:'Salina';
          src:local('Salina');
        }

        .hero-font{
          font-family:'Salina','Italiana',serif;
          letter-spacing:.04em;
        }

        /* NEW PROFESSIONAL ANIMATION */
        @keyframes smoothFade {
          0%{
            opacity:0;
            transform:translateY(25px) scale(1.03);
          }
          100%{
            opacity:1;
            transform:translateY(0) scale(1);
          }
        }
      `}</style>

      {/* Heading */}
      <div className="px-4 sm:px-6 lg:px-10 text-center mb-6 sm:mb-8">
        <p className="text-[#f97316] uppercase tracking-[5px] font-bold text-[11px] sm:text-sm mb-2">
          Transformation Section
        </p>

        <h2 className="hero-font text-[#0f1e45] text-3xl sm:text-4xl lg:text-[48px] font-bold leading-[1.02] mb-3">
          We Don’t Believe In Just Teaching
          <br />
          We Believe In Transforming
        </h2>

        <p className="text-gray-500 text-sm sm:text-base lg:text-lg leading-6 sm:leading-7 max-w-4xl mx-auto">
          In today’s competitive world certificates are not enough. What matters
          is what you can actually do.
          <span className="font-bold text-[#0f1e45]">
            {" "}
            Learn. Practice. Build. Succeed.
          </span>
        </p>
      </div>

      {/* Desktop Section */}
      <div className="hidden lg:block relative w-full h-[650px] overflow-hidden">
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

        {/* Grid */}
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
              <h3 className="hero-font text-white text-5xl font-bold mb-3">
                {item.title}
              </h3>

              <p className="text-gray-300 text-lg leading-7 max-w-[260px] mb-5">
                {item.label}
              </p>

              <button className="border border-white text-white px-7 py-3 rounded-[4px] font-bold text-sm w-fit hover:bg-white hover:text-[#0f1e45] transition-all duration-300">
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
              <h3 className="hero-font text-white text-4xl font-bold">
                {item.title}
              </h3>

              <p className="text-white text-lg mt-2">{item.label}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}