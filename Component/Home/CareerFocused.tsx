"use client";

import React, { useEffect, useRef } from "react";
import { MoveRight, GraduationCap, Target, Lightbulb } from "lucide-react";

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

            setTimeout(() => {
              el.classList.add("cf-visible");
            }, parseInt(delay));

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
    <section
      className="w-full bg-[#0f224a] py-16 sm:py-24 overflow-hidden"
      ref={sectionRef}
    >
      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=Lato:wght@300;400;500;600;700&display=swap");
        @import url("https://fonts.googleapis.com/css2?family=Barlow:wght@500;600;700&display=swap");

        .hero-font {
          font-family: "Barlow", sans-serif;
          font-weight: 600;
          letter-spacing: -0.02em;
        }

        .eyebrow-font {
          font-family: "Barlow", sans-serif;
          font-weight: 600;
          letter-spacing: 0.18em;
          text-transform: uppercase;
        }

        .cf-anim {
          opacity: 0;
          transform: translateY(40px);
          transition:
            opacity 0.8s cubic-bezier(0.22, 1, 0.36, 1),
            transform 0.8s cubic-bezier(0.22, 1, 0.36, 1);
        }

        .cf-visible {
          opacity: 1 !important;
          transform: translateY(0) !important;
        }
      `}</style>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* LEFT COLUMN: THE VISUAL ANCHOR */}
          <div className="lg:col-span-5 flex flex-col gap-8">
            <div 
              className="cf-anim relative h-[400px] lg:h-[600px] rounded-[40px] overflow-hidden group shadow-2xl"
              data-delay="0"
            >
              <img
                src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=1200&q=80"
                alt="Student Success"
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0f224a]/80 via-transparent to-transparent" />
              <div className="absolute bottom-8 left-8 right-8">
                <p className="hero-font text-white text-2xl leading-tight">
                  Empowering the next generation of leaders.
                </p>
              </div>
            </div>
            
            {/* STAT/SUB-CARD */}
            <div 
              className="cf-anim hidden lg:flex bg-orange-500 rounded-[30px] p-8 items-center justify-between"
              data-delay="400"
            >
              <div>
                <h4 className="hero-font text-white text-4xl">100%</h4>
                <p className="text-orange-100 text-sm font-medium">Student Commitment</p>
              </div>
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                <Target className="text-white" size={24} />
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: CONTENT & GRID */}
          <div className="lg:col-span-7">
            {/* HEADER */}
            <div className="mb-12">
              <p className="cf-anim eyebrow-font text-orange-500 text-sm mb-4" data-delay="100">
                Mission & Value
              </p>
              <h2 className="cf-anim hero-font text-white text-4xl md:text-6xl leading-[1.1] mb-8" data-delay="200">
                Preparing Students <br />
                For Life Beyond <br />
                The Classroom.
              </h2>
              <p className="cf-anim text-slate-400 text-lg md:text-xl leading-relaxed max-w-xl" data-delay="300">
                We don't just focus on classroom teaching; we focus on growth, 
                confidence, and a positive attitude toward lifelong learning.
              </p>
            </div>

            {/* FEATURE GRID */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              {/* CARD 1 */}
              <div 
                className="cf-anim bg-white/5 border border-white/10 p-8 rounded-[32px] hover:bg-white/10 transition-colors group"
                data-delay="400"
              >
                <div className="w-12 h-12 bg-orange-500 rounded-2xl flex items-center justify-center mb-6 text-white">
                  <GraduationCap size={24} />
                </div>
                <h3 className="hero-font text-white text-2xl mb-3">Higher Education</h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  A solid foundation designed for university transition and professional excellence.
                </p>
              </div>

              {/* CARD 2 */}
              <div 
                className="cf-anim bg-white/5 border border-white/10 p-8 rounded-[32px] hover:bg-white/10 transition-colors"
                data-delay="500"
              >
                <div className="w-12 h-12 bg-blue-500 rounded-2xl flex items-center justify-center mb-6 text-white">
                  <Lightbulb size={24} />
                </div>
                <h3 className="hero-font text-white text-2xl mb-3">Career Paths</h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Strategic guidance to help students navigate and explore diverse professional avenues.
                </p>
              </div>

              {/* CARD 3 - WIDE */}
              <div 
                className="cf-anim md:col-span-2 bg-white rounded-[32px] p-8 md:p-10 flex flex-col md:flex-row md:items-center justify-between gap-6 group cursor-pointer hover:shadow-2xl hover:shadow-orange-500/10 transition-all"
                data-delay="600"
              >
                <div className="max-w-md">
                  <h3 className="hero-font text-[#0f224a] text-2xl md:text-3xl mb-2">Personal Skills & Interests</h3>
                  <p className="text-slate-500">Cultivating confidence and emotional intelligence in every student.</p>
                </div>
                <div className="w-14 h-14 rounded-full bg-[#0f224a] flex items-center justify-center text-white group-hover:bg-orange-500 transition-colors duration-500">
                  <MoveRight size={24} />
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}