"use client";

import { useEffect, useRef } from "react";

export default function CTASection() {
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
            setTimeout(() => el.classList.add("cta-visible"), parseInt(delay));
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
        @import url("https://fonts.googleapis.com/css2?family=Italiana&family=Lato:wght@300;400;500;600;700;800;900&display=swap");
        * { font-family: "Lato", sans-serif; }
        .hero-title { font-family: "Italiana", serif; letter-spacing: 0.05em; }

        /* FROM TOP */
        .cta-from-top {
          opacity: 0;
          transform: translateY(-38px);
          transition: opacity 0.65s cubic-bezier(.22,1,.36,1),
                      transform 0.65s cubic-bezier(.22,1,.36,1);
        }

        /* FROM RIGHT */
        .cta-from-right {
          opacity: 0;
          transform: translateX(48px);
          transition: opacity 0.7s cubic-bezier(.22,1,.36,1),
                      transform 0.7s cubic-bezier(.22,1,.36,1);
        }

        /* visible state */
        .cta-visible {
          opacity: 1 !important;
          transform: translate(0, 0) !important;
        }

        .cta-input {
          height: 52px;
          width: 100%;
          background: rgba(255,255,255,0.1);
          border: 1px solid rgba(255,255,255,0.3);
          color: #fff;
          padding: 0 20px;
          border-radius: 2px;
          outline: none;
          font-size: 14px;
          transition: border-color 0.25s;
        }
        .cta-input::placeholder { color: rgba(255,255,255,0.55); }
        .cta-input:focus { border-color: #f97316; }

        .cta-btn {
          height: 52px;
          background: #f97316;
          color: #fff;
          font-weight: 800;
          font-size: 13px;
          letter-spacing: 1px;
          border: none;
          border-radius: 2px;
          padding: 0 36px;
          cursor: pointer;
          white-space: nowrap;
          transition: background 0.25s, color 0.25s;
          width: 100%;
        }
        .cta-btn:hover { background: #fff; color: #f97316; }

        @media (min-width: 640px) {
          .cta-input { height: 56px; }
          .cta-btn   { height: 56px; width: auto; }
        }
      `}</style>

      <section className="pt-2 pb-8 bg-white overflow-hidden" ref={sectionRef}>
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-md overflow-hidden min-h-[340px] sm:min-h-[380px] lg:min-h-[340px]">

            {/* Background Image */}
            <img
              src="https://images.unsplash.com/photo-1509062522246-3755977927d7?w=1800&q=80"
              alt="School Students"
              className="absolute inset-0 w-full h-full object-cover"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/65" />

            {/* Content */}
            <div className="relative z-10 grid lg:grid-cols-2 gap-8 lg:gap-12 items-center h-full px-6 sm:px-10 lg:px-14 py-10 sm:py-12">

              {/* Left — all text from TOP */}
              <div className="text-center lg:text-left">

                <p
                  className="cta-anim cta-from-top text-orange-500 uppercase tracking-[4px] font-extrabold text-xs sm:text-sm mb-3"
                  data-delay="0"
                >
                  CALL TO ACTION
                </p>

                <h2
                  className="cta-anim cta-from-top hero-title text-white text-2xl sm:text-3xl lg:text-[2.6rem] font-black leading-tight"
                  data-delay="100"
                >
                  Stop waiting for the right time
                  <br className="hidden sm:block" />
                  Start building your skills today
                </h2>

                <p
                  className="cta-anim cta-from-top text-white/80 text-sm sm:text-base mt-4 leading-7 max-w-xl mx-auto lg:mx-0"
                  data-delay="190"
                >
                  Your future career begins with one decision.
                </p>

              </div>

              {/* Right — form elements from RIGHT */}
              <div className="w-full">

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
                    <button type="submit" className="cta-btn">
                      Get Started
                    </button>
                  </form>
                </div>

                <p
                  className="cta-anim cta-from-right text-white/60 text-xs sm:text-sm mt-3 text-center sm:text-left"
                  data-delay="240"
                >
                  We respect your privacy. No spam ever.
                </p>

              </div>

            </div>
          </div>
        </div>
      </section>
    </>
  );
}