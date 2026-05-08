"use client";

import React, { useEffect, useRef } from "react";

export default function AboutHeroSection() {
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
        @import url('https://fonts.googleapis.com/css2?family=Barlow:wght@400;500;600&display=swap');

        * {
          font-family: 'Lato', sans-serif;
        }
      `}</style>

      {/* BACKGROUND IMAGE */}
      <div className="absolute inset-0">

        <img
          src="/AH2.png"
          alt="About Hero"
          className="w-full h-full object-cover"
        />

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-black/30" />

        {/* GRADIENT */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-black/30" />
      </div>

      {/* CONTENT */}
      <div className="relative z-10 px-4 sm:px-6 lg:px-14">

        <div className="min-h-[720px] flex items-center -mt-24 sm:-mt-32">

          <div className="max-w-[720px] w-full">

            {/* HEADING */}
            <h1
              data-reveal
              data-delay="260"
              style={revealStyle()}
              className="text-white text-[28px] sm:text-[40px] lg:text-[46px] leading-[1.12] mb-4 sm:mb-5 tracking-[-0.02em] font-medium"
            >
              <span
                className="block"
                style={{
                  fontFamily: "'Barlow', sans-serif",
                  fontWeight: 500,
                }}
              >
                Inspiring Young Minds
              </span>

              <span
                className="block"
                style={{
                  fontFamily: "'Barlow', sans-serif",
                  fontWeight: 500,
                }}
              >
                with{" "}
                <span className="text-orange-500">
                  Learning, Creativity
                </span>
              </span>

              <span
                className="block"
                style={{
                  fontFamily: "'Barlow', sans-serif",
                  fontWeight: 500,
                }}
              >
                &amp; Confidence
              </span>
            </h1>

            {/* LINE */}
            <div
              data-reveal
              data-delay="380"
              style={revealStyle()}
              className="mb-4 sm:mb-5 w-8 h-[2px] bg-orange-500"
            />

           <p
  data-reveal
  data-delay="500"
  style={revealStyle()}
  className="text-gray-200 text-sm sm:text-base md:text-[17px] font-normal leading-7 sm:leading-8 max-w-[560px]"
>
  We create inspiring learning experiences that help
  students grow with confidence, creativity, and knowledge.

  <br className="hidden sm:block" />

</p>

          </div>
        </div>
      </div>
    </section>
  );
}