"use client";

import { useEffect, useRef, useState } from "react";

const slides = [
  {
    no: "01",
    title: "Because your learning deserves more than theory",
    img: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=1200&q=80",
  },
  {
    no: "02",
    title: "Industry relevant, constantly updated curriculum",
    img: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=1200&q=80",
  },
  {
    no: "03",
    title: "Hands on training with real projects",
    img: "https://images.unsplash.com/photo-1544717305-2782549b5136?w=1200&q=80",
  },
  {
    no: "04",
    title: "Mentorship from working professionals",
    img: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1200&q=80",
  },
  {
    no: "05",
    title: "Skill-based learning not rote memorization",
    img: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=1200&q=80",
  },
  {
    no: "06",
    title: "Career focused guidance at every step",
    img: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=1200&q=80",
  },
];

type Direction = "left" | "right";

export default function WhyChooseUs() {
  const [active, setActive] = useState(0);
  const [animKey, setAnimKey] = useState(0);
  const [slideDir, setSlideDir] = useState<Direction>("left");
  const startX = useRef<number | null>(null);
  const isDragging = useRef(false);

  const goTo = (idx: number, dir: Direction) => {
    setSlideDir(dir);
    setAnimKey((k) => k + 1);
    setActive((idx + slides.length) % slides.length);
  };

  const goPrev = () => goTo(active - 1, "right");
  const goNext = () => goTo(active + 1, "left");

  const handleMouseDown = (e: React.MouseEvent) => {
    startX.current = e.clientX;
    isDragging.current = false;
  };
  const handleMouseMove = (e: React.MouseEvent) => {
    if (startX.current !== null && Math.abs(e.clientX - startX.current) > 8)
      isDragging.current = true;
  };
  const handleMouseUp = (e: React.MouseEvent) => {
    if (startX.current === null) return;
    const diff = e.clientX - startX.current;
    if (isDragging.current) {
      if (diff > 60) goPrev();
      else if (diff < -60) goNext();
    }
    startX.current = null;
    isDragging.current = false;
  };

  useEffect(() => {
    const onStart = (e: TouchEvent) => {
      startX.current = e.touches[0].clientX;
    };
    const onEnd = (e: TouchEvent) => {
      if (!startX.current) return;
      const d = e.changedTouches[0].clientX - startX.current;
      if (d > 50) goPrev();
      else if (d < -50) goNext();
      startX.current = null;
    };
    window.addEventListener("touchstart", onStart, { passive: true });
    window.addEventListener("touchend", onEnd, { passive: true });
    return () => {
      window.removeEventListener("touchstart", onStart);
      window.removeEventListener("touchend", onEnd);
    };
  }, [active]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") goPrev();
      if (e.key === "ArrowRight") goNext();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [active]);

  const item = slides[active];
  const fromRight = slideDir === "left";

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Italiana&family=Lato:wght@300;400;500;600;700;800;900&display=swap');

        .wcu-wrap * { font-family: 'Lato', sans-serif; }
        .wcu-serif  { font-family: 'Italiana', serif; letter-spacing: 0.04em; }

        .wcu-bg {
          background-image: url('why1.png');
          background-size: cover;
          background-position: center top;
          background-repeat: no-repeat;
          position: relative;
        }

        /* Image slide animations (direction-aware) */
        @keyframes wcuSR {
          from { opacity:0; transform:translateX(64px) scale(.97); }
          to   { opacity:1; transform:translateX(0) scale(1); }
        }
        @keyframes wcuSL {
          from { opacity:0; transform:translateX(-64px) scale(.97); }
          to   { opacity:1; transform:translateX(0) scale(1); }
        }

        /* Text animations — always from right */
        @keyframes wcuTextR1 {
          from { opacity:0; transform:translateX(55px); }
          to   { opacity:1; transform:translateX(0); }
        }
        @keyframes wcuTextR2 {
          from { opacity:0; transform:translateX(75px); }
          to   { opacity:1; transform:translateX(0); }
        }
        @keyframes wcuTextR3 {
          from { opacity:0; transform:translateX(95px); }
          to   { opacity:1; transform:translateX(0); }
        }
        @keyframes wcuTextR4 {
          from { opacity:0; transform:translateX(60px); }
          to   { opacity:1; transform:translateX(0); }
        }

        /* Heading animations */
        @keyframes wcuDrop {
          0%   { opacity:0; transform:translateY(-28px) rotateX(90deg); }
          60%  { transform:translateY(4px) rotateX(-8deg); }
          100% { opacity:1; transform:translateY(0) rotateX(0); }
        }
        @keyframes wcuLeft {
          from { opacity:0; transform:translateX(-22px); }
          to   { opacity:1; transform:translateX(0); }
        }
        @keyframes wcuRise {
          from { opacity:0; transform:translateY(18px); }
          to   { opacity:1; transform:translateY(0); }
        }

        /* Image */
        .wcu-main { animation:${fromRight ? "wcuSR" : "wcuSL"} .65s cubic-bezier(.22,1,.36,1) both; }

        /* Text — all slide in from right, staggered */
        .wcu-ano  { animation: wcuTextR1 .5s cubic-bezier(.22,1,.36,1) both; }
        .wcu-atit { animation: wcuTextR2 .6s cubic-bezier(.22,1,.36,1) .08s both; }
        .wcu-adsc { animation: wcuTextR3 .6s cubic-bezier(.22,1,.36,1) .16s both; }
        .wcu-abtn { animation: wcuTextR4 .65s cubic-bezier(.22,1,.36,1) .26s both; }
        .wcu-adot { animation: wcuTextR1 .6s cubic-bezier(.22,1,.36,1) .36s both; }

        /* Heading (static, only on mount) */
        .wcu-atag  { animation: wcuLeft .5s ease both; }
        .wcu-ahtit { animation: wcuDrop .75s cubic-bezier(.34,1.56,.64,1) .05s both; }

        .wcu-dot {
          height: 4px;
          border-radius: 9999px;
          cursor: pointer;
          border: none;
          padding: 0;
          transition: width .45s cubic-bezier(.22,1,.36,1), background .35s;
        }
        .wcu-dot-on  { width: 44px; background: #f97316; }
        .wcu-dot-off { width: 18px; background: rgba(255,255,255,.35); }

        .wcu-learn-btn {
          background: #f97316;
          color: #fff;
          font-weight: 800;
          font-size: 12px;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          padding: 10px 26px;
          border-radius: 2px;
          border: none;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          cursor: pointer;
          transition: background .25s, color .25s;
        }
        .wcu-learn-btn:hover {
          background: #fff;
          color: #f97316;
        }
      `}</style>

      <section
        className="wcu-wrap wcu-bg relative overflow-hidden select-none cursor-grab active:cursor-grabbing"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
      >
        <div
          className="relative z-10"
          style={{
            paddingTop: "clamp(52px,6vw,84px)",
            paddingBottom: "clamp(60px,8vw,100px)",
          }}
        >

          {/* ── Heading ── */}
          <div className="relative text-center px-4 mb-10 sm:mb-14">
            <p className="wcu-atag text-orange-400 uppercase tracking-[4px] font-extrabold text-xs sm:text-sm mb-3">
              WHY CHOOSE US
            </p>
            <h2
              className="wcu-ahtit wcu-serif text-white font-black leading-[1.12]"
              style={{ fontSize: "clamp(26px,4vw,52px)" }}
            >
              Because Your Learning Deserves
              <br />
              More Than Theory
            </h2>
          </div>

          {/* ══════════════════════════════
              DESKTOP  (lg +)
          ══════════════════════════════ */}
          <div
            className="hidden lg:block relative max-w-7xl mx-auto px-6 lg:px-10"
            style={{ minHeight: "310px" }}
          >
            {/* Ghost number */}
            <div
              key={`no-${animKey}`}
              className="wcu-ano absolute font-black leading-none pointer-events-none select-none"
              style={{
                fontSize: "clamp(100px,12vw,160px)",
                color: "rgba(255,255,255,0.08)",
                left: "4%",
                top: "-50px",
              }}
            >
              {item.no}
            </div>

            {/* Text block — LEFT */}
            <div
              className="absolute left-0 z-20"
              style={{ top: "52px", maxWidth: "285px" }}
            >
              {/* Slide title */}
              <h3
                key={`t-${animKey}`}
                className="wcu-atit wcu-serif text-white font-black leading-tight"
                style={{ fontSize: "clamp(20px,2.1vw,32px)" }}
              >
                {item.title}
              </h3>

              {/* Learn More button */}
              <button
                key={`b-${animKey}`}
                className="wcu-learn-btn wcu-abtn mt-6"
                onClick={(e) => e.stopPropagation()}
              >
                Learn More
                <svg
                  width="13" height="13" viewBox="0 0 24 24"
                  fill="none" stroke="currentColor"
                  strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
                >
                  <path d="M7 17L17 7M17 7H7M17 7v10" />
                </svg>
              </button>

              {/* Dot nav */}
              <div key={`d-${animKey}`} className="wcu-adot flex gap-3 mt-8">
                {slides.map((_, i) => (
                  <button
                    key={i}
                    onClick={(e) => {
                      e.stopPropagation();
                      goTo(i, i > active ? "left" : "right");
                    }}
                    className={`wcu-dot ${active === i ? "wcu-dot-on" : "wcu-dot-off"}`}
                  />
                ))}
              </div>
            </div>

            {/* Main image — fills right side now (no side image) */}
            <div
              key={`img-${animKey}`}
              className="wcu-main absolute rounded-xl overflow-hidden shadow-2xl"
              style={{
                left: "30%",
                top: "0",
                width: "40%",
                height: "350px",
                border: "1px solid rgba(255,255,255,0.12)",
              }}
            >
              <img
                src={item.img}
                alt={item.title}
                draggable="false"
                className="w-full h-full object-cover select-none"
              />
            </div>
          </div>

          {/* ══════════════════════════════
              MOBILE  (< lg)
          ══════════════════════════════ */}
          <div className="lg:hidden relative px-4 sm:px-6 flex flex-col gap-5">
            <div className="relative">
              <div
                key={`no-m-${animKey}`}
                className="wcu-ano absolute -top-2 left-0 font-black leading-none pointer-events-none"
                style={{
                  fontSize: "clamp(64px,18vw,100px)",
                  color: "rgba(255,255,255,0.08)",
                }}
              >
                {item.no}
              </div>

              <div className="relative pt-10 z-10">
                <h3
                  key={`t-m-${animKey}`}
                  className="wcu-atit wcu-serif text-white font-black leading-tight"
                  style={{ fontSize: "clamp(22px,6vw,34px)" }}
                >
                  {item.title}
                </h3>

                <button
                  key={`b-m-${animKey}`}
                  className="wcu-learn-btn wcu-abtn mt-5"
                  onClick={(e) => e.stopPropagation()}
                >
                  Learn More
                  <svg
                    width="13" height="13" viewBox="0 0 24 24"
                    fill="none" stroke="currentColor"
                    strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
                  >
                    <path d="M7 17L17 7M17 7H7M17 7v10" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Main image */}
            <div
              key={`img-m-${animKey}`}
              className="wcu-main w-full rounded-xl overflow-hidden shadow-2xl"
              style={{
                height: "clamp(200px,50vw,300px)",
                border: "1px solid rgba(255,255,255,0.12)",
              }}
            >
              <img
                src={item.img}
                alt={item.title}
                draggable="false"
                className="w-full h-full object-cover select-none"
              />
            </div>

            {/* Dots */}
            <div key={`d-m-${animKey}`} className="wcu-adot flex gap-3">
              {slides.map((_, i) => (
                <button
                  key={i}
                  onClick={(e) => {
                    e.stopPropagation();
                    goTo(i, i > active ? "left" : "right");
                  }}
                  className={`wcu-dot ${active === i ? "wcu-dot-on" : "wcu-dot-off"}`}
                />
              ))}
            </div>
          </div>

        </div>
      </section>
    </>
  );
}