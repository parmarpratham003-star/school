"use client";

import React, { useEffect, useRef, useState } from "react";
import { MoveRight, Palette, BookOpen, Users, CheckCircle2, Play, X } from "lucide-react";

export default function CareerFocused() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [videoOpen, setVideoOpen] = useState(false);

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
              el.style.transform = "translateY(0) translateX(0)";
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

  const fadeLeft = (delay = 0): React.CSSProperties => ({
    opacity: 0,
    transform: "translateX(-60px)",
    transition: `opacity 0.7s cubic-bezier(0.22,1,0.36,1) ${delay}ms, transform 0.7s cubic-bezier(0.22,1,0.36,1) ${delay}ms`,
  });

  const fadeRight = (delay = 0): React.CSSProperties => ({
    opacity: 0,
    transform: "translateX(60px)",
    transition: `opacity 0.7s cubic-bezier(0.22,1,0.36,1) ${delay}ms, transform 0.7s cubic-bezier(0.22,1,0.36,1) ${delay}ms`,
  });

  const fadeUp = (delay = 0): React.CSSProperties => ({
    opacity: 0,
    transform: "translateY(30px)",
    transition: `opacity 0.7s cubic-bezier(0.22,1,0.36,1) ${delay}ms, transform 0.7s cubic-bezier(0.22,1,0.36,1) ${delay}ms`,
  });

  const features = [
    {
      icon: <Palette size={22} />,
      iconBg: "bg-orange-100",
      iconColor: "text-orange-500",
      title: "Creative Learning",
      desc: "Students explore activities, projects, and interactive lessons that make learning enjoyable and meaningful.",
      delay: 0,
      border: "sm:border-r border-[#ede8e2]",
      anim: fadeLeft,
    },
    {
      icon: <BookOpen size={22} />,
      iconBg: "bg-blue-100",
      iconColor: "text-blue-500",
      title: "Strong Academics",
      desc: "We build strong foundations in every subject with practical understanding and guided learning.",
      delay: 100,
      border: "sm:border-r border-[#ede8e2] border-t sm:border-t-0 border-[#ede8e2]",
      anim: fadeUp,
    },
    {
      icon: <Users size={22} />,
      iconBg: "bg-emerald-100",
      iconColor: "text-emerald-500",
      title: "Student Confidence",
      desc: "Students develop communication, leadership, teamwork, and confidence for future success.",
      delay: 200,
      border: "border-t sm:border-t-0 border-[#ede8e2]",
      anim: fadeRight,
    },
  ];

  const VIDEO_ID = "vEso0_xaUMc";

  return (
    <section
      className="w-full bg-white py-16 sm:py-20 lg:py-24 overflow-hidden"
      style={{ fontFamily: "'Lato', sans-serif" }}
    >
      {/* ── matches header padding exactly ── */}
      <div ref={sectionRef} className="px-4 sm:px-6 lg:px-10">

        {/* ── ROW 1: Heading LEFT | Desc + CTA RIGHT ── */}
        <div className="grid lg:grid-cols-2 gap-10 items-center mb-12">

          {/* LEFT — from left */}
          <div data-anim data-delay="0" style={fadeLeft(0)}>
            <p className="text-[#f97316] uppercase tracking-[4px] font-bold text-[10px] sm:text-xs mb-4">
              Student Development
            </p>
            <h2
              className="text-[#0f224a] text-4xl sm:text-5xl lg:text-[56px] leading-[1.05]"
              style={{ fontFamily: "'Barlow', sans-serif", fontWeight: 700, letterSpacing: "-0.02em" }}
            >
              We Help Every Child
              <span className="text-[#f97316]"> Learn,
                <br />Grow & Succeed!
              </span>
            </h2>
          </div>

          {/* RIGHT — from right */}
          <div
            data-anim data-delay="150"
            style={fadeRight(150)}
            className="flex flex-col gap-6"
          >
            <p className="text-gray-500 text-[15px] sm:text-[17px] leading-[1.85]">
              Our school focuses on academic excellence, creativity,
              confidence building, and overall student development —
              preparing every child for a bright and successful future.
            </p>
            <div className="flex items-center gap-4 flex-wrap">
              <button className="group relative overflow-hidden bg-[#f97316] hover:bg-[#0f1e45] text-white px-7 py-3.5 rounded-[3px] text-[12px] font-bold uppercase tracking-[0.08em] inline-flex items-center gap-2 transition-colors duration-300 border-0 cursor-pointer">
                <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-500 bg-[linear-gradient(120deg,transparent_0%,rgba(255,255,255,0.2)_50%,transparent_100%)] skew-x-[-20deg]" />
                <span className="relative z-10 flex items-center gap-2">
                  Learn More <MoveRight size={14} />
                </span>
              </button>
              <div className="flex flex-wrap gap-3">
                {["Creative", "Academic", "Confident"].map((tag) => (
                  <span key={tag} className="flex items-center gap-1.5 text-[11px] text-gray-400 font-semibold">
                    <CheckCircle2 size={13} className="text-orange-400" />{tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ── ROW 2: 3 Feature Columns ── */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-0 mb-14 border border-[#ede8e2] rounded-[3px] overflow-hidden">
          {features.map((feat) => (
            <div
              key={feat.title}
              className={`group flex flex-col gap-4 p-7 sm:p-8 bg-white hover:bg-[#fdf9f6] transition-colors duration-300 cursor-default ${feat.border}`}
              data-anim
              data-delay={feat.delay}
              style={feat.anim(feat.delay)}
            >
              <div className={`w-12 h-12 rounded-[3px] flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:bg-[#f97316] group-hover:text-white ${feat.iconBg} ${feat.iconColor}`}>
                {feat.icon}
              </div>
              <div>
                <div
                  className="text-[#0f224a] text-[17px] mb-2"
                  style={{ fontFamily: "'Barlow', sans-serif", fontWeight: 700 }}
                >
                  {feat.title}
                </div>
                <p className="text-gray-400 text-[13px] leading-relaxed">{feat.desc}</p>
              </div>
              <div className="flex items-center gap-1 text-[11px] font-bold uppercase tracking-widest text-[#f97316] mt-auto">
                Explore <MoveRight size={12} />
              </div>
            </div>
          ))}
        </div>

        {/* ── ROW 3: Overlapping Image + Video ── */}
        <div className="relative w-full h-[280px] sm:h-[380px] lg:h-[460px]">

          {/* Image 1 — left, from left */}
          <div
            className="absolute left-0 top-0 w-[68%] h-full rounded-[3px] overflow-hidden shadow-xl"
            data-anim data-delay="0"
            style={fadeLeft(0)}
          >
            <img
              src="Career1.png"
              alt="Students Learning"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Video card — right, from right */}
          <div
            className="absolute right-0 top-[8%] w-[46%] h-[84%] rounded-[3px] overflow-hidden shadow-2xl cursor-pointer group"
            data-anim data-delay="150"
            style={fadeRight(150)}
            onClick={() => setVideoOpen(true)}
          >
            <img
              src={`https://img.youtube.com/vi/${VIDEO_ID}/maxresdefault.jpg`}
              alt="Indian children playing in school"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors duration-300" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-[#f97316] flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
              <Play size={20} className="text-white ml-1" fill="white" />
            </div>
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent px-5 py-4">
              <p className="text-[10px] uppercase tracking-widest text-orange-400 font-bold mb-0.5">School Life</p>
              <p
                className="text-white text-[13px] font-bold"
                style={{ fontFamily: "'Barlow', sans-serif" }}
              >
                Children Playing & Learning
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ── LIGHTBOX MODAL ── */}
      {videoOpen && (
        <div
          className="fixed inset-0 z-[9999] bg-black/85 flex items-center justify-center p-4"
          onClick={() => setVideoOpen(false)}
        >
          <div
            className="relative w-full max-w-4xl aspect-video rounded-[3px] overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <iframe
              className="w-full h-full"
              src={`https://www.youtube.com/embed/${VIDEO_ID}?autoplay=1&controls=1&modestbranding=1&rel=0`}
              title="Indian Children Playing in School Playground"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
            <button
              onClick={() => setVideoOpen(false)}
              className="absolute top-3 right-3 w-9 h-9 rounded-full bg-black/70 hover:bg-black flex items-center justify-center transition-colors duration-200 border-0 cursor-pointer"
            >
              <X size={18} className="text-white" />
            </button>
          </div>
        </div>
      )}
    </section>
  );
}