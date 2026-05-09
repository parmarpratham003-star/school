"use client";

import React, { useEffect, useRef } from "react";

const activities = [
  {
    title: "SPORT ACTIVITY",
    img: "https://i.pinimg.com/736x/ed/62/48/ed6248b53956f4553a0f9cedd1ddc0ac.jpg",
  },
  {
    title: "ART & CRAFT",
    img: "https://i.pinimg.com/736x/ec/06/c5/ec06c5139310705f3e3c59e207d3189a.jpg",
  },
  {
    title: "SCIENCE LAB",
    img: "Whychooseus/why2.png",
  },
  {
    title: "SMART LEARNING",
    img: "https://i.pinimg.com/736x/45/4c/89/454c8966ab66e1c3a82ae837f682a946.jpg",
  },
];

/* DOODLES */
function BeakerDoodle() {
  return (
    <svg
      className="absolute left-4 top-16 hidden h-24 w-20 select-none opacity-[0.07] sm:block"
      viewBox="0 0 80 100"
      fill="none"
      stroke="#0f224a"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M28 10 L28 45 L10 80 Q8 88 16 90 L64 90 Q72 88 70 80 L52 45 L52 10 Z" />
      <line x1="22" y1="10" x2="58" y2="10" />
      <circle cx="35" cy="68" r="5" />
      <circle cx="52" cy="78" r="3" />
      <circle cx="26" cy="75" r="3.5" />
    </svg>
  );
}

function AtomDoodle() {
  return (
    <svg
      className="absolute bottom-24 right-6 hidden h-24 w-24 select-none opacity-[0.07] sm:block"
      viewBox="0 0 100 100"
      fill="none"
      stroke="#0f224a"
      strokeWidth="2"
      strokeLinecap="round"
    >
      <ellipse cx="50" cy="50" rx="46" ry="18" />
      <ellipse cx="50" cy="50" rx="46" ry="18" transform="rotate(60 50 50)" />
      <ellipse cx="50" cy="50" rx="46" ry="18" transform="rotate(120 50 50)" />
      <circle cx="50" cy="50" r="5" fill="#0f224a" fillOpacity="0.25" />
    </svg>
  );
}

function PencilDoodle() {
  return (
    <svg
      className="absolute right-10 top-7 hidden h-14 w-14 select-none opacity-[0.06] sm:block"
      viewBox="0 0 60 70"
      fill="none"
      stroke="#0f224a"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="8" y="6" width="44" height="16" rx="3" />
      <line x1="30" y1="22" x2="30" y2="52" />
      <path d="M21 52 L30 62 L39 52 Z" />
    </svg>
  );
}

export default function WhyChooseUs() {
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const elements = section.querySelectorAll(".wcu-anim");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const delay = parseInt(
              (entry.target as HTMLElement).dataset.delay || "0"
            );

            setTimeout(() => {
              entry.target.classList.add(
                "!opacity-100",
                "!translate-x-0",
                "!translate-y-0"
              );
            }, delay);

            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08 }
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full overflow-hidden bg-white py-8 sm:py-10 lg:py-12"
    >
      {/* DOT BACKGROUND */}
      <div
        className="absolute right-0 top-0 h-full w-[55%] opacity-30"
        style={{
          backgroundImage:
            "radial-gradient(circle, #c8c2b8 1.2px, transparent 1.2px)",
          backgroundSize: "20px 20px",
        }}
      />

      {/* DOODLES */}
      <BeakerDoodle />
      <AtomDoodle />
      <PencilDoodle />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">

        {/* MAIN GRID */}
        <div className="grid items-end gap-8 lg:grid-cols-2 lg:gap-14">

          {/* LEFT SIDE */}
          <div
            className="wcu-anim flex translate-x-[-50px] flex-col opacity-0 transition-all duration-700 ease-out"
            data-delay="0"
          >

            {/* TAG */}
            <p className="mb-4 text-[10px] font-bold uppercase tracking-[6px] text-orange-500 sm:text-xs">
              STUDENT DEVELOPMENT
            </p>

            {/* HEADING */}
            <h2 className="font-[Barlow] text-3xl font-bold leading-[1.06] tracking-[-0.02em] text-[#0f224a] sm:text-4xl lg:text-[50px] xl:text-[56px]">
              We Help Every Child

              <span className="mt-1 block text-orange-500">
                Learn,
              </span>

              <span className="block text-orange-500">
                Grow &amp; Succeed!
              </span>
            </h2>

            {/* DESCRIPTION */}
            <p className="mt-5 max-w-xl text-sm leading-[1.9] text-gray-500 sm:text-[15px]">
              Our school provides a joyful learning environment where students
              build creativity, confidence, leadership skills, and academic
              excellence through practical learning and engaging classroom
              experiences.
            </p>

            {/* BUTTON */}
            <button className="group relative mt-6 w-fit overflow-hidden rounded-[3px] bg-[#f97316] px-8 sm:px-10 py-4 text-[11px] font-bold uppercase tracking-[0.08em] text-white transition-all duration-300 hover:bg-[#0f1e45] hover:-translate-y-[2px]">

              {/* SHINE EFFECT */}
              <span className="absolute inset-0 -translate-x-full skew-x-[-20deg] bg-[linear-gradient(120deg,transparent_0%,rgba(255,255,255,0.22)_50%,transparent_100%)] transition-transform duration-700 group-hover:translate-x-full" />

              <span className="relative z-10">
                More Info
              </span>

            </button>

            {/* ACTIVITY GRID */}
            <div className="mt-6 grid grid-cols-2 gap-2 sm:grid-cols-4 sm:gap-3">

              {activities.map((item, index) => (
                <div
                  key={index}
                  className="wcu-anim group relative h-[118px] translate-y-[30px] overflow-hidden rounded-[3px] opacity-0 transition-all duration-700 ease-out"
                  data-delay={350 + index * 70}
                >

                  {/* IMAGE */}
                  <img
                    src={item.img}
                    alt={item.title}
                    className="h-full w-full object-cover transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-y-[-6px] group-hover:translate-x-[4px] group-hover:brightness-105"
                  />

                  {/* OVERLAY */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/5 to-transparent transition-all duration-500 group-hover:from-black/45" />

                  {/* TEXT */}
                  <div className="absolute bottom-2.5 left-0 right-0 px-1 text-center">
                    <p className="text-[9px] font-bold uppercase tracking-[2px] text-white sm:text-[10px]">
                      {item.title}
                    </p>
                  </div>

                </div>
              ))}

            </div>

          </div>

          {/* RIGHT SIDE */}
          <div
            className="wcu-anim translate-x-[50px] opacity-0 transition-all duration-700 ease-out flex items-end"
            data-delay="100"
          >

            {/* FRAME */}
            <div className="relative flex justify-end w-full">

              {/* DASHED BORDER */}
              <div className="absolute -right-4 -top-4 h-[88%] w-[88%] rounded-[3px] border-2 border-dashed border-[#e0d8cc]" />

              {/* IMAGE */}
              <div className="relative z-10 h-[320px] w-full overflow-hidden rounded-[3px] sm:h-[450px] lg:h-[530px]">

                <img
                  src="https://i.pinimg.com/736x/82/ec/78/82ec78b87ad843730629fa41a9672083.jpg"
                  alt="Indian School Child"
                  className="h-full w-full object-cover object-top transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] hover:translate-y-[-10px] hover:translate-x-[6px] hover:brightness-105"
                />

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}