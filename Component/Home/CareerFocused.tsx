"use client";

import React, { useEffect, useRef } from "react";
import { Play, MoveRight } from "lucide-react";

export default function CareerFocused() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const els = section.querySelectorAll(".cf-anim");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement;
            const delay = el.dataset.delay || "0";
            setTimeout(() => el.classList.add("cf-visible"), parseInt(delay));
            observer.unobserve(el);
          }
        });
      },
      { threshold: 0.1 }
    );

    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="w-full bg-[#0f224a] py-20 px-6 overflow-hidden" ref={sectionRef}>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600&family=Lato:wght@300;400;600;700&display=swap');

        .hero-font {
          font-family: 'Cormorant Garamond', serif;
          letter-spacing: 0.02em;
        }

        .cf-anim {
          opacity: 0;
          transform: translateY(32px);
          transition: opacity 0.7s cubic-bezier(.22,1,.36,1), transform 0.7s cubic-bezier(.22,1,.36,1);
        }
        .cf-visible {
          opacity: 1 !important;
          transform: translateY(0) !important;
        }
      `}</style>

      <div className="max-w-7xl mx-auto">

        {/* TOP HEADER */}
        <div className="mb-12">
          <p
            className="cf-anim hero-font text-orange-500 text-sm font-[500] tracking-[4px] uppercase mb-4"
            data-delay="0"
          >
            Mission & Value
          </p>
          <h2
            className="cf-anim hero-font text-white text-4xl md:text-5xl font-[500] leading-tight"
            data-delay="100"
          >
            We Prepare Students For <br /> Life Beyond Classroom.
          </h2>
        </div>

        {/* BENTO GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-6">

          {/* LARGE LEFT CARD */}
          <div
            className="cf-anim lg:col-span-7 bg-white/5 border border-white/10 rounded-3xl p-8 md:p-12 flex flex-col justify-center"
            data-delay="180"
          >
            <div className="w-16 h-[2px] bg-orange-500 mb-8" />
            <p className="text-slate-300 text-lg md:text-xl leading-relaxed" style={{ fontFamily: "'Lato', sans-serif" }}>
              We don't just focus on classroom teaching, we focus on preparing students for life ahead.
              Our goal is to help every student grow with strong knowledge, confidence, and a positive
              attitude toward learning.
            </p>
          </div>

          {/* RIGHT SIDE NESTED GRID */}
          <div className="lg:col-span-5 grid grid-cols-1 md:grid-cols-2 gap-6">

            {/* Small Card 1 - Higher Ed */}
            <div
              className="cf-anim bg-white rounded-3xl p-6 flex flex-col justify-between hover:scale-[1.02] transition-transform duration-300 cursor-default"
              data-delay="260"
            >
              <h3 className="hero-font text-[#0f224a] text-2xl font-[500]">Higher <br /> Education</h3>
              <p className="text-slate-500 text-sm mt-4 leading-relaxed" style={{ fontFamily: "'Lato', sans-serif" }}>
                Solid foundation for university and professional success.
              </p>
            </div>

            {/* Small Card 2 - Career Paths */}
            <div
              className="cf-anim bg-orange-500 rounded-3xl p-6 flex flex-col justify-between hover:scale-[1.02] transition-transform duration-300 cursor-default"
              data-delay="320"
            >
              <h3 className="hero-font text-white text-2xl font-[500]">Career <br /> Paths</h3>
              <p className="text-orange-100 text-sm mt-4 leading-relaxed" style={{ fontFamily: "'Lato', sans-serif" }}>
                Explore different professional avenues for the future.
              </p>
            </div>

            {/* Wide Bottom Card - Personal Skills */}
            <div
              className="cf-anim md:col-span-2 bg-slate-800 border border-white/10 rounded-3xl p-6 flex items-center justify-between group hover:bg-slate-700 transition-colors duration-300 cursor-pointer"
              data-delay="380"
            >
              <div>
                <h3 className="hero-font text-white text-2xl font-[500]">Personal Skills & Interests</h3>
                <p className="text-slate-400 text-sm mt-1" style={{ fontFamily: "'Lato', sans-serif" }}>
                  Develop confidence and a positive attitude.
                </p>
              </div>
              <div className="w-12 h-12 flex-shrink-0 rounded-full border border-white/20 flex items-center justify-center text-white group-hover:bg-orange-500 group-hover:border-orange-500 transition-all duration-300">
                <MoveRight size={20} />
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM FULL WIDTH IMAGE/VIDEO AREA */}
        <div
          className="cf-anim relative w-full h-[300px] md:h-[500px] rounded-[40px] overflow-hidden group"
          data-delay="460"
        >
          <img
            src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=1200&q=80"
            alt="Student Success"
            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
            <button className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform duration-300 group/btn">
              <Play fill="#0f224a" className="text-[#0f224a] ml-1" size={28} />
            </button>
          </div>

          {/* Floating Caption */}
          <div className="absolute bottom-8 left-8 md:bottom-12 md:left-12">
            <p className="hero-font text-white text-xl md:text-2xl font-[500] drop-shadow-lg">
              Empowering the next generation.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}