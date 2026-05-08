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

        * { font-family: "Lato", sans-serif; }

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

        .cta-input::placeholder { color: rgba(255,255,255,0.55); }
        .cta-input:focus { border-color: #f97316; }

        @media (min-width: 640px) {
          .cta-input { height: 54px; }
        }
      `}</style>

      <section className=" pb-8 bg-white overflow-hidden" ref={sectionRef}>
        <div className="px-4 sm:px-6 lg:px-10">
          <div className="relative rounded-md overflow-hidden min-h-[250px] sm:min-h-[280px] lg:min-h-[350px]">

            <img
              src="https://i.pinimg.com/1200x/de/5c/be/de5cbecb32cddb8b53c145b287b1648d.jpg"
              alt="School Students"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/65" />

            <div className="relative z-10 h-full px-6 sm:px-10 lg:px-14 py-7 sm:py-8 flex items-center">
              <div className="grid lg:grid-cols-[1.1fr_.9fr] gap-7 lg:gap-10 items-center w-full">

                {/* LEFT */}
    {/* LEFT */}
<div className="max-w-[580px] pt-4 sm:pt-6 lg:pt-15 text-center lg:text-left mx-auto lg:mx-0">
  <p
    className="cta-anim cta-from-top text-orange-500 uppercase tracking-[5px] font-extrabold text-[10px] sm:text-xs mb-3"
    data-delay="0"
  >
    ENROLL NOW
  </p>

  <h2
    className="cta-anim cta-from-top hero-title text-white text-[28px] sm:text-[38px] lg:text-[46px] leading-[1.08]"
    data-delay="100"
  >
    Start Your Child’s
    <br />
    Learning Journey Today
  </h2>

  <p
    className="cta-anim cta-from-top text-white/80 text-xs sm:text-sm mt-4 leading-6"
    data-delay="190"
  >
    Join a school where students learn with confidence,
    creativity, and real world experiences.
  </p>
</div>

                {/* RIGHT */}
                <div className="w-full pt-2 sm:pt-4 lg:pt-15">
                  <div className="cta-anim cta-from-right" data-delay="120">
                    <form
                      className="flex flex-col sm:flex-row gap-3"
                      onSubmit={(e) => e.preventDefault()}
                    >
                      <input
                        type="email"
                        placeholder="Your email address"
                        className="cta-input"
                      />

                      {/* Button — fully Tailwind */}
                      <button
                        type="submit"
                        className="group relative overflow-hidden h-[50px] sm:h-[54px] w-full sm:w-auto px-8 bg-orange-500 hover:bg-white text-white hover:text-orange-500 text-[13px] font-extrabold tracking-[1px] uppercase border-0 cursor-pointer whitespace-nowrap flex items-center justify-center transition-colors duration-300"
                      >
                        <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-500 bg-[linear-gradient(120deg,transparent_0%,rgba(255,255,255,0.25)_50%,transparent_100%)] skew-x-[-20deg]" />
                        <span className="relative z-10">Get Started</span>
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