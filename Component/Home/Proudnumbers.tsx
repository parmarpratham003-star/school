"use client";

import { useState } from "react";

export default function Proudnumbers() {
  const stats = [
    {
      number: "2000+",
      label: "Students",
      img: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=1800&q=80",
    },
    {
      number: "1000+",
      label: "Courses",
      img: "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=1800&q=80",
    },
    {
      number: "2400+",
      label: "Videos",
      img: "https://images.unsplash.com/photo-1513258496099-48168024aec0?w=1800&q=80",
    },
    {
      number: "75+",
      label: "Countries",
      img: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=1800&q=80",
    },
  ];

  const [activeBg, setActiveBg] = useState(stats[0].img);
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section className="w-full bg-white py-8 sm:py-5 font-[Outfit] overflow-hidden">
      {/* Heading */}
      <div className="px-4 sm:px-6 lg:px-10 text-center mb-10 sm:mb-14">
        <p className="text-[#f97316] uppercase tracking-[4px] font-bold text-xs sm:text-sm mb-3">
          Our Achievements
        </p>

        <h2 className="text-[#0f1e45] text-4xl sm:text-4xl lg:text-[50px] font-black leading-[1.08] mb-4">
          We Proud Of This Numbers
        </h2>

        <p className="text-gray-500 text-sm sm:text-base lg:text-lg leading-5 sm:leading-5 max-w-4xl mx-auto">
          Online learning offers a new way to explore subjects you're passionate
          about. Find your interests by browsing our online course categories.
        </p>
      </div>

      {/* Desktop */}
      <div className="hidden lg:block relative w-full h-[650px] overflow-hidden">
        {/* Background */}
        <div
          className="absolute inset-0 bg-cover bg-center transition-all duration-500"
          style={{ backgroundImage: `url(${activeBg})` }}
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40" />

        {/* Lines */}
        <div className="absolute inset-0 grid grid-cols-4 z-10">
          <div className="border-r border-white/20" />
          <div className="border-r border-white/20" />
          <div className="border-r border-white/20" />
          <div />
        </div>

        {/* Hover Areas */}
        {stats.map((item, i) => (
          <div
            key={i}
            onMouseEnter={() => {
              setActiveBg(item.img);
              setHovered(i);
            }}
            onMouseLeave={() => setHovered(null)}
            className="group absolute top-0 h-full w-1/4 z-20"
            style={{ left: `${i * 25}%` }}
          >
            {/* Hover Content */}
            <div className="absolute inset-0 flex flex-col justify-end px-8 pb-8 opacity-0 translate-y-6 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
              <h3 className="text-white text-4xl font-black leading-none mb-2">
                {item.number}
              </h3>

              <h4 className="text-white text-3xl font-bold mb-4">
                {item.label}
              </h4>

              <p className="text-gray-300 text-lg leading-7 max-w-[260px] mb-4">
                Seitan High Life reprehenderit consectetur cupidatat kogi.
                Et leggings fanny pack.
              </p>

              <button className="border border-white text-white px-7 py-3 rounded-[4px] font-bold text-sm w-fit hover:bg-white hover:text-[#0f1e45] transition-all duration-300">
                Learn More
              </button>
            </div>

            {/* Bottom Number */}
            <div
              className={`absolute left-8 bottom-8 z-30 transition-all duration-300 ${
                hovered === i ? "opacity-0 translate-y-8" : "opacity-100"
              }`}
            >
              <h3 className="text-white text-4xl font-black leading-none">
                {item.number}
              </h3>

              <p className="text-white text-2xl font-bold mt-2">
                {item.label}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Tablet */}
      <div className="hidden sm:grid lg:hidden grid-cols-2 gap-5 px-4 sm:px-6">
        {stats.map((item, i) => (
          <div
            key={i}
            className="relative h-[280px] rounded-sm overflow-hidden"
          >
            <div
              className="absolute inset-0 bg-cover bg-center transition-all duration-300 hover:scale-105"
              style={{ backgroundImage: `url(${item.img})` }}
            />
            <div className="absolute inset-0 bg-black/45" />

            <div className="absolute left-5 bottom-5 z-10">
              <h3 className="text-white text-4xl font-black leading-none">
                {item.number}
              </h3>
              <p className="text-white text-xl font-bold mt-2">
                {item.label}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Mobile */}
      <div className="grid sm:hidden grid-cols-1 gap-4 px-4">
        {stats.map((item, i) => (
          <div
            key={i}
            className="relative h-[220px] rounded-sm overflow-hidden"
          >
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${item.img})` }}
            />
            <div className="absolute inset-0 bg-black/45" />

            <div className="absolute left-5 bottom-5 z-10">
              <h3 className="text-white text-3xl font-black leading-none">
                {item.number}
              </h3>
              <p className="text-white text-lg font-bold mt-2">
                {item.label}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}