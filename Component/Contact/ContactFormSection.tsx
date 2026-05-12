"use client";

import React, {
  useState,
  useEffect,
  useRef,
} from "react";

export default function ContactFormSection() {
  const [mounted, setMounted] =
    useState(false);

  // FIXED RED LINE
  const sectionRef =
    useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    const observer =
      new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting)
              return;

            // FIXED RED LINE
            const els =
              sectionRef.current?.querySelectorAll<HTMLElement>(
                "[data-reveal]"
              );

            if (!els) return;

            els.forEach((el) => {
              const delay = parseInt(
                el.dataset.delay || "0"
              );

              setTimeout(() => {
                el.style.opacity = "1";
                el.style.transform =
                  "translateY(0)";
              }, delay);
            });

            observer.disconnect();
          });
        },
        { threshold: 0.12 }
      );

    if (sectionRef.current)
      observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, [mounted]);

  const revealStyle: React.CSSProperties =
    {
      opacity: 0,
      transform: "translateY(40px)",
      transition:
        "opacity 0.85s cubic-bezier(0.22,1,0.36,1), transform 0.85s cubic-bezier(0.22,1,0.36,1)",
    };

  const inputClass = `
    w-full bg-transparent border-0 border-b border-[#8da27b]
    pb-4 text-[#14285f] text-[15px] outline-none
    focus:border-[#6b7280] transition-all
    placeholder:text-[#14285f]/60
  `;

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Lato:wght@300;400;500;600;700&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Barlow:wght@400;500;600;700&display=swap');

        * { font-family: 'Lato', sans-serif; }

        .cf-barlow {
          font-family: 'Barlow', sans-serif;
          letter-spacing: -0.02em;
        }

        .cf-label {
          font-family: 'Lato', sans-serif;
          font-size: 13px;
          font-weight: 600;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: #ff6b00;
        }

        /* AboutSection-style: gray border, hover → orange bg + shine sweep */
        .cf-btn {
          position: relative;
          overflow: hidden;
          background: transparent;
          color: #6b7280;
          border: 1.5px solid #6b7280;
          transition: background-color 0.3s ease, color 0.3s ease;
        }

        .cf-btn:hover {
          background: #ff6b00;
          color: #fff;
        }

        .cf-btn .cf-shine {
          position: absolute;
          inset: 0;
          transform: translateX(-100%) skewX(-20deg);
          background: linear-gradient(
            120deg,
            transparent 0%,
            rgba(255,255,255,0.15) 50%,
            transparent 100%
          );
          transition: transform 0.5s ease;
        }

        .cf-btn:hover .cf-shine {
          transform: translateX(100%) skewX(-20deg);
        }

        @media (max-width: 1023px) {
          .cf-grid {
            display: flex !important;
            flex-direction: column !important;
            gap: 40px !important;
          }

          .cf-image img {
            max-width: 280px !important;
          }
        }
      `}</style>

      <section
        ref={sectionRef}
        className="w-full bg-white pt-16 sm:pt-20 pb-16 sm:pb-20 overflow-hidden"
      >
        <div className="px-5 sm:px-10 lg:px-20 xl:px-30">

          <div className="cf-grid grid grid-cols-1 lg:grid-cols-[0.92fr_1fr] gap-6 lg:gap-8 items-start">

            {/* ── LEFT ── */}
            <div>

              <p
                data-reveal
                data-delay="0"
                style={revealStyle}
                className="cf-label mb-3"
              >
                Contact Us
              </p>

              <h2
                data-reveal
                data-delay="140"
                style={revealStyle}
                className="cf-barlow font-medium text-[#14285f] text-[32px] sm:text-[42px] lg:text-[44px] leading-[1.1] mb-3 max-w-[560px]"
              >
                Let's Build a Bright <br />

                <span className="text-[#ff6b00]">
                  Future Together
                </span>
              </h2>

              <p
                data-reveal
                data-delay="280"
                style={revealStyle}
                className="text-[#4b5563] text-[15px] leading-[1.8] max-w-[480px]"
              >
                Whether you have questions
                about admissions, academics,
                or student activities, our
                team is here to guide and
                support you throughout your
                child's learning journey.
              </p>

              <div
                data-reveal
                data-delay="400"
                style={revealStyle}
                className="cf-image mt-6"
              >

                <img
                  src="/form1.png"
                  alt="Children Sketch"
                  className="w-full max-w-[420px] object-contain"
                />

              </div>

            </div>

            {/* ── RIGHT FORM ── */}
            <div
              data-reveal
              data-delay="300"
              style={revealStyle}
              className="border border-[#c9d1be] p-6 sm:p-8 lg:p-10"
            >

              <form className="space-y-8 sm:space-y-10">

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-10">

                  <input
                    type="text"
                    placeholder="Student / Parent Name"
                    className={inputClass}
                  />

                  <input
                    type="email"
                    placeholder="Email Address"
                    className={inputClass}
                  />

                </div>

                <input
                  type="text"
                  placeholder="Phone Number"
                  className={inputClass}
                />

                <input
                  type="text"
                  placeholder="Subject"
                  className={inputClass}
                />

                <textarea
                  rows={4}
                  placeholder="Your Message"
                  className={`${inputClass} resize-none`}
                />

                {/* BUTTON */}
                <button
                  type="button"
                  className="cf-btn px-8 sm:px-10 py-3.5 text-[13px] font-bold tracking-[0.12em] uppercase inline-flex items-center justify-center gap-2"
                >

                  <span className="cf-shine" />

                  <span className="relative z-10">
                    Send Message
                  </span>

                </button>

              </form>

            </div>

          </div>

        </div>
      </section>
    </>
  );
}