"use client";

import React, { useEffect, useRef } from "react";
import { MoveRight, Briefcase, GraduationCap, Rocket, CheckCircle2 } from "lucide-react";

export default function CareerFocused() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    const els = section.querySelectorAll<HTMLElement>("[data-anim]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement;
            const delay = parseInt(el.dataset.delay || "0");
            setTimeout(() => {
              el.style.opacity = "1";
              el.style.transform = "translateX(0)";
            }, delay);
            observer.unobserve(el);
          }
        });
      },
      { threshold: 0.08 }
    );
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const animStyle = (fromRight = false): React.CSSProperties => ({
    opacity: 0,
    transform: `translateX(${fromRight ? "40px" : "-40px"})`,
    transition:
      "opacity 0.7s cubic-bezier(0.22,1,0.36,1), transform 0.7s cubic-bezier(0.22,1,0.36,1)",
  });

  return (
    <section className="w-full bg-white py-12 sm:py-16 lg:py-20 overflow-hidden">
      <div ref={sectionRef} className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-10">

        {/* Split grid — CSS grid makes both columns equal height automatically */}
        <div className="grid grid-cols-1 md:grid-cols-2 rounded-sm overflow-hidden">

          {/* LEFT — Image panel (stretches to full grid row height via CSS grid) */}
          <div
            className="relative overflow-hidden order-2 md:order-1 min-h-[260px] md:min-h-0"
            data-anim
            data-delay="0"
            style={animStyle(true)}
          >
            <img
              src="Career1.png"
              alt="Students collaborating"
              className="absolute inset-0 w-full h-full object-cover block hover:scale-[1.04] transition-transform duration-[8000ms] ease-linear"
            />
           
          </div>

          {/* RIGHT — Content panel */}
          <div
            className="order-1 md:order-2 bg-white flex flex-col justify-center
              px-5 py-8
              sm:px-7 sm:py-9
              lg:px-[52px] lg:py-[52px]"
            style={{ fontFamily: "'Lato', sans-serif" }}
          >
            {/* Eyebrow */}
            <p
              className="text-orange-500 uppercase tracking-[4px] text-[10px] sm:text-xs font-extrabold mb-3"
              data-anim
              data-delay="100"
              style={animStyle()}
            >
              CAREER FOCUSED LEARNING
            </p>

            {/* Main heading */}
            <h2
              className="text-[#0f224a] text-2xl sm:text-3xl lg:text-4xl leading-tight mb-4"
              data-anim
              data-delay="200"
              style={{
                ...animStyle(),
                fontFamily: "'Barlow', sans-serif",
                fontWeight: 700,
                letterSpacing: "-0.01em",
              }}
            >
              We don't just help you learn, we help you{" "}
              <span className="text-orange-500">grow your career.</span>
            </h2>

            {/* Subtitle */}
            <p
              className="text-gray-500 text-sm sm:text-base leading-7 mb-6"
              data-anim
              data-delay="280"
              style={animStyle()}
            >
              Whether your goal is getting a job, starting to learn, or building your own business —
              we guide you with the right skills and direction.
            </p>

            {/* Goal label */}
            <p
              className="text-[10px] font-bold tracking-[0.18em] uppercase text-gray-300 mb-3"
              data-anim
              data-delay="340"
              style={animStyle()}
            >
              Whether your goal is:
            </p>

            {/* Cards */}
            <div className="flex flex-col gap-3 mb-6">

              {/* Card 1 — Getting a Job */}
              <div
                className="group flex items-start gap-4 p-4 rounded-sm border border-gray-100 bg-white hover:bg-orange-50 hover:border-orange-100 transition-all duration-300 cursor-default"
                data-anim
                data-delay="400"
                style={animStyle()}
              >
                <div className="w-11 h-11 rounded-sm flex items-center justify-center flex-shrink-0 bg-orange-100 text-orange-500 group-hover:bg-orange-500 group-hover:text-white transition-all duration-300">
                  <Briefcase size={22} />
                </div>
                <div className="flex-1 min-w-0">
                  <div
                    className="font-extrabold text-[15px] text-[#0f224a] leading-tight mb-1"
                    style={{ fontFamily: "'Barlow', sans-serif" }}
                  >
                    Getting a Job
                  </div>
                  <div className="text-[13px] text-gray-400 leading-relaxed">
                    Master the interview techniques and technical skills required to land your dream role in top-tier companies.
                  </div>
                  <div className="flex items-center gap-1 mt-2 text-[10px] font-bold tracking-[0.14em] uppercase text-orange-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Employability <MoveRight size={12} />
                  </div>
                </div>
              </div>

              {/* Card 2 — Starting Learning */}
              <div
                className="group flex items-start gap-4 p-4 rounded-sm border border-gray-100 bg-white hover:bg-blue-50 hover:border-blue-100 transition-all duration-300 cursor-default"
                data-anim
                data-delay="460"
                style={animStyle()}
              >
                <div className="w-11 h-11 rounded-sm flex items-center justify-center flex-shrink-0 bg-blue-100 text-blue-500 group-hover:bg-blue-500 group-hover:text-white transition-all duration-300">
                  <GraduationCap size={22} />
                </div>
                <div className="flex-1 min-w-0">
                  <div
                    className="font-extrabold text-[15px] text-[#0f224a] leading-tight mb-1"
                    style={{ fontFamily: "'Barlow', sans-serif" }}
                  >
                    Starting Learning
                  </div>
                  <div className="text-[13px] text-gray-400 leading-relaxed">
                    Build a world-class foundation with structured paths designed for deep mastery and academic excellence.
                  </div>
                  <div className="flex items-center gap-1 mt-2 text-[10px] font-bold tracking-[0.14em] uppercase text-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Education <MoveRight size={12} />
                  </div>
                </div>
              </div>

              {/* Card 3 — Building Business */}
              <div
                className="group flex items-start gap-4 p-4 rounded-sm border border-gray-100 bg-white hover:bg-emerald-50 hover:border-emerald-100 transition-all duration-300 cursor-default"
                data-anim
                data-delay="520"
                style={animStyle()}
              >
                <div className="w-11 h-11 rounded-sm flex items-center justify-center flex-shrink-0 bg-emerald-100 text-emerald-500 group-hover:bg-emerald-500 group-hover:text-white transition-all duration-300">
                  <Rocket size={22} />
                </div>
                <div className="flex-1 min-w-0">
                  <div
                    className="font-extrabold text-[15px] text-[#0f224a] leading-tight mb-1"
                    style={{ fontFamily: "'Barlow', sans-serif" }}
                  >
                    Building Business
                  </div>
                  <div className="text-[13px] text-gray-400 leading-relaxed">
                    Turning ideas into reality. Learn leadership, strategy, and operations to scale your own venture.
                  </div>
                  <div className="flex items-center gap-1 mt-2 text-[10px] font-bold tracking-[0.14em] uppercase text-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Entrepreneurship <MoveRight size={12} />
                  </div>
                </div>
              </div>

            </div>

            {/* CTA row */}
            <div
              className="flex items-center justify-between gap-3 pt-5 border-t border-[#f0eef8] flex-wrap"
              data-anim
              data-delay="580"
              style={animStyle()}
            >
              <div className="flex flex-wrap gap-2">
                {["Skill Assessment", "Strategic Coaching", "Industry Mentors"].map((label) => (
                  <div key={label} className="flex items-center gap-1 text-[11px] text-[#9a9aaa] font-semibold">
                    <CheckCircle2 size={13} className="text-orange-500 flex-shrink-0" />
                    {label}
                  </div>
                ))}
              </div>
              <button className="bg-orange-500 hover:bg-[#0b162d] text-white px-[22px] py-3 rounded-sm text-[11px] font-bold tracking-[0.1em] uppercase cursor-pointer whitespace-nowrap inline-flex items-center gap-1.5 transition-colors duration-300 flex-shrink-0 border-0">
                Start Journey <MoveRight size={14} />
              </button>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}