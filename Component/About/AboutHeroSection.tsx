"use client";

import React, { useEffect, useRef } from "react";

export default function AboutHeroSection() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const els = heroRef.current?.querySelectorAll<HTMLElement>("[data-reveal]");
    if (!els) return;
    els.forEach((el) => {
      const delay = parseInt(el.dataset.delay || "0");
      setTimeout(() => {
        el.style.opacity = "1";
        el.style.transform = "translateX(0)";
      }, delay);
    });
  }, []);

  const revealStyle = (): React.CSSProperties => ({
    opacity: 0,
    transform: "translateX(-50px)",
    transition:
      "opacity 0.85s cubic-bezier(0.22,1,0.36,1), transform 0.85s cubic-bezier(0.22,1,0.36,1)",
  });

  return (
    <section className="relative w-full overflow-hidden" ref={heroRef}>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Lato:wght@300;400;500;600;700&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Barlow:wght@700;800;900&display=swap');

        * {
          font-family: 'Lato', sans-serif;
        }

        .hero-title {
          font-family: 'Barlow', sans-serif;
          font-weight: 800;
          font-style: normal;
          letter-spacing: -0.01em;
        }
      `}</style>

      {/* BACKGROUND IMAGE */}
      <div className="absolute inset-0">
        <img
          src="/AH2.png"
          alt="About Hero"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-black/30" />
      </div>

      {/* CONTENT */}
      <div className="relative z-10 px-4 sm:px-6 lg:px-12">
        <div className="min-h-[720px] flex items-center -mt-24 sm:-mt-32">
          <div className="max-w-[720px] w-full">

            {/* EYEBROW — same style as hero tag */}
            <p
              data-reveal
              data-delay="100"
              style={revealStyle()}
              className="text-orange-500 uppercase tracking-[3px] sm:tracking-[4px] font-extrabold text-[10px] sm:text-sm mb-3 sm:mb-4"
            >
              ABOUT US
            </p>

            {/* HEADING — exact .hero-title class */}
            <h1
              data-reveal
              data-delay="260"
              style={revealStyle()}
              className="hero-title text-white text-[30px] sm:text-[42px] lg:text-[50px] leading-[1.2] sm:leading-[1.1] mb-4 sm:mb-5"
            >
              Inspiring Young Minds
              <br />
              with{" "}
              <span className="text-orange-500">Learning, Creativity</span>
              <br />
              &amp; Confidence
            </h1>

            {/* DIVIDER */}
            <div
              data-reveal
              data-delay="380"
              style={revealStyle()}
              className="mb-4 sm:mb-5 w-8 h-[2px] bg-orange-500"
            />

            {/* DESCRIPTION — same gray-200 + sizing as hero desc */}
            <p
              data-reveal
              data-delay="500"
              style={revealStyle()}
              className="text-gray-200 text-sm sm:text-base md:text-lg font-medium leading-6 sm:leading-8 max-w-xl"
            >
              We create an inspiring environment where children
              build knowledge, confidence, and creativity through
              modern learning experiences that prepare them for
              a bright and successful future.
            </p>

          </div>
        </div>
      </div>
    </section>
  );
}