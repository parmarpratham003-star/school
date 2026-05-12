"use client";

import React, { useEffect, useRef } from "react";

export default function ContactHero() {
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
          src="Contact.png"
          alt="Contact Hero"
          className="w-full h-full object-cover object-center"
        />
      </div>

      {/* CONTENT */}
      <div className="relative z-10 px-4 sm:px-6 lg:px-14">

        <div className="min-h-[420px] sm:min-h-[620px] lg:min-h-[720px] flex items-start sm:items-center justify-center pt-10 sm:pt-0 sm:-mt-20 lg:-mt-30">

          <div className="max-w-[720px] w-full text-center">

           {/* HEADING */}
<h1
  data-reveal
  data-delay="260"
  style={{
    ...revealStyle(),
    fontFamily: "'Barlow', sans-serif",
    fontWeight: 500,
  }}
  className="
    text-[#14285f]
    mt-4
    sm:-mt-10
    lg:-mt-40
    text-[28px]
    leading-[1.15]
    sm:text-[46px]
    lg:text-[58px]
    mb-4
    sm:mb-5
    tracking-[-0.02em]
    font-medium
    px-2
  "
>
  Connect{" "}

  <span className="text-[#ff6b00]">
    With Us
  </span>
</h1>

{/* DESCRIPTION */}
<p
  data-reveal
  data-delay="500"
  style={revealStyle()}
  className="
    text-[#4b5563]
    text-[14px]
    sm:text-base
    md:text-[17px]
    font-normal
    leading-6
    sm:leading-8
    max-w-[650px]
    mx-auto
    px-3
  "
>
  Reach out to our school for admissions,
  academic guidance, campus information,
  and student support. We are always happy
  to connect with parents and students.
</p>

          </div>
        </div>
      </div>
    </section>
  );
}