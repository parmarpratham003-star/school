"use client";

import React, { useEffect, useRef } from "react";

export default function CoursesHero() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const els =
      heroRef.current?.querySelectorAll<HTMLElement>("[data-reveal]");

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
    <section
      ref={heroRef}
      className="relative w-full overflow-hidden"
    >

      {/* GOOGLE FONTS */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Lato:wght@300;400;500;600;700&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Barlow:wght@400;500;600;700&display=swap');

        * {
          font-family: 'Lato', sans-serif;
        }
      `}</style>

      {/* BACKGROUND IMAGE */}
      <div className="absolute inset-0">

        <img
          src="AC.png"
          alt="Courses Hero"
          className="w-full h-full object-cover object-center"
        />

      

      </div>

      {/* CONTENT */}
      <div className="relative z-10 px-4 sm:px-6 lg:px-14">

        <div className="min-h-[720px] flex items-center justify-center pt-24 sm:pt-0 sm:-mt-20 lg:-mt-30">

          <div className="max-w-[760px] w-full text-center">

            {/* HEADING */}
            <h1
              data-reveal
              data-delay="260"
              style={{
                ...revealStyle(),
                fontFamily: "'Barlow', sans-serif",
                fontWeight: 500,
              }}
              className="text-[#14285f] lg:-mt-34 text-[32px] leading-[1.08] sm:text-[46px] lg:text-[58px] mb-5 tracking-[-0.02em] font-medium"
            >

              Explore Our{" "}

              <span className="text-[#ff6b00]">
                Courses
              </span>

            </h1>

            {/* DESCRIPTION */}
            <p
              data-reveal
              data-delay="500"
              style={revealStyle()}
              className="text-[#4b5563] text-sm sm:text-base md:text-[17px] font-normal leading-7 sm:leading-8 max-w-[580px] mx-auto"
            >
              Discover engaging academic programs and skill-based
              learning designed to help students grow with confidence,
              creativity, and excellence.
            </p>

          </div>
        </div>
      </div>
    </section>
  );
}