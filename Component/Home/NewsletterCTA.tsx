"use client";

import { useEffect, useRef } from "react";

export default function NewsletterCTA() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const els = section.querySelectorAll(".cta-anim");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement;
            const delay = el.dataset.delay || "0";

            setTimeout(() => {
              el.classList.add("cta-visible");
            }, parseInt(delay));

            observer.unobserve(el);
          }
        });
      },
      { threshold: 0.15 }
    );

    els.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <style jsx>{`
        @import url("https://fonts.googleapis.com/css2?family=Barlow:wght@400;500;600&family=Lato:wght@300;400;500;600;700;800;900&display=swap");

        * {
          font-family: "Lato", sans-serif;
        }

        /* HERO FONT STYLE */
        .hero-title {
          font-family: "Barlow", sans-serif;
          font-weight: 500;
          letter-spacing: -0.03em;
        }

        .cta-from-top {
          opacity: 0;
          transform: translateY(-38px);
          transition:
            opacity 0.65s cubic-bezier(.22,1,.36,1),
            transform 0.65s cubic-bezier(.22,1,.36,1);
        }

        .cta-from-right {
          opacity: 0;
          transform: translateX(48px);
          transition:
            opacity 0.7s cubic-bezier(.22,1,.36,1),
            transform 0.7s cubic-bezier(.22,1,.36,1);
        }

        .cta-visible {
          opacity: 1 !important;
          transform: translate(0, 0) !important;
        }

        .cta-input {
          height: 50px;
          width: 100%;
          background: rgba(255,255,255,0.08);
          border: 1px solid rgba(255,255,255,0.25);
          color: #fff;
          padding: 0 18px;
          outline: none;
          font-size: 14px;
          transition: border-color 0.25s;
        }

        .cta-input::placeholder {
          color: rgba(255,255,255,0.55);
        }

        .cta-input:focus {
          border-color: #f97316;
        }

        .cta-btn {
          height: 50px;
          background: #f97316;
          color: #fff;
          font-weight: 800;
          font-size: 13px;
          letter-spacing: 1px;
          border: none;
          padding: 0 32px;
          cursor: pointer;
          white-space: nowrap;
          transition: background 0.25s, color 0.25s;
          width: 100%;
        }

        .cta-btn:hover {
          background: #fff;
          color: #f97316;
        }

        @media (min-width: 640px) {
          .cta-input {
            height: 54px;
          }

          .cta-btn {
            height: 54px;
            width: auto;
          }
        }
      `}</style>

      <section
        className="pt-10 pb-8 bg-white overflow-hidden"
        ref={sectionRef}
      >
        {/* SAME HEADER PADDING */}
        <div className="px-4 sm:px-6 lg:px-10">

          {/* REDUCED HEIGHT */}
          <div className="relative rounded-md overflow-hidden min-h-[250px] sm:min-h-[280px] lg:min-h-[260px]">

            {/* Background Image */}
            <img
              src="https://images.unsplash.com/photo-1509062522246-3755977927d7?w=1800&q=80"
              alt="School Students"
              className="absolute inset-0 w-full h-full object-cover"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/65" />

            {/* CONTENT */}
           {/* REPLACE THIS CONTENT SECTION ONLY */}

<div className="relative z-10 h-full px-6 sm:px-10 lg:px-14 py-7 sm:py-8 flex items-center">

  <div className="grid lg:grid-cols-[1.1fr_.9fr] gap-7 lg:gap-10 items-center w-full">

    {/* LEFT CONTENT */}
    <div className="max-w-[580px] pt-4 sm:pt-6 lg:pt-8 text-center lg:text-left mx-auto lg:mx-0">

      <p
        className="cta-anim cta-from-top text-orange-500 uppercase tracking-[5px] font-extrabold text-[10px] sm:text-xs mb-3"
        data-delay="0"
      >
        CALL TO ACTION
      </p>

      <h2
        className="cta-anim cta-from-top hero-title text-white text-[28px] sm:text-[38px] lg:text-[46px] leading-[1.08]"
        data-delay="100"
      >
        Stop waiting for the right time
        <br />
        Start building your skills today
      </h2>

      <p
        className="cta-anim cta-from-top text-white/80 text-xs sm:text-sm mt-4 leading-6"
        data-delay="190"
      >
        Your future career begins with one decision.
      </p>

    </div>

    {/* RIGHT FORM */}
    <div className="w-full pt-2 sm:pt-4 lg:pt-6">

      <div
        className="cta-anim cta-from-right"
        data-delay="120"
      >
        <form
          className="flex flex-col sm:flex-row gap-3"
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            type="email"
            placeholder="Your email address"
            className="cta-input"
          />

          <button
            type="submit"
            className="cta-btn"
          >
            Get Started
          </button>
        </form>
      </div>

      <p
        className="cta-anim cta-from-right text-white/60 text-[11px] sm:text-xs mt-3 text-center sm:text-left"
        data-delay="240"
      >
        We respect your privacy. No spam ever.
      </p>

    </div>

  </div>
</div>
          </div>
        </div>
      </section>
    </>
  );
}