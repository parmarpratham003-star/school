"use client";

import React, {
  useState,
  useEffect,
  useRef,
} from "react";

export default function MapSection() {
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

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Lato:wght@300;400;500;600;700&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Barlow:wght@400;500;600;700&display=swap');

        * {
          font-family: 'Lato', sans-serif;
        }

        .map-barlow {
          font-family: 'Barlow', sans-serif;
          letter-spacing: -0.02em;
        }

        /* ── Mobile ── */
        @media (max-width: 639px) {

          .map-card {
            position: relative !important;
            top: auto !important;
            right: auto !important;
            width: 100% !important;
            max-width: 100% !important;
            height: auto !important;
            border-left: none !important;
            border-top: 1px solid #e5e7eb !important;
            box-shadow: none !important;
            padding: 24px 20px !important;
          }

          .map-wrapper {
            flex-direction: column !important;
            height: auto !important;
          }

          .map-iframe {
            height: 240px !important;
            width: 100% !important;
          }
        }
      `}</style>

      <section
        ref={sectionRef}
        className="w-full bg-white pb-16 sm:pb-20 overflow-hidden"
      >
        <div className="px-5 sm:px-10 lg:px-20 xl:px-30">

          {/* OUTER BORDER WRAPPER */}
          <div
            data-reveal
            data-delay="200"
            style={revealStyle}
            className="border border-[#d7dfcf] overflow-hidden"
          >

            {/* MAP + CARD */}
            <div className="map-wrapper flex sm:flex-row relative h-auto sm:h-[360px] lg:h-[430px]">

              {/* GOOGLE MAP */}
              <iframe
                title="School Location"
                src="https://maps.google.com/maps?q=Ahmedabad%20Gujarat&t=&z=13&ie=UTF8&iwloc=&output=embed"
                className="map-iframe w-full sm:flex-1 h-[240px] sm:h-full border-0"
                loading="lazy"
                allowFullScreen
              />

              {/* INFO CARD */}
              <div
                className="
                  map-card
                  sm:absolute sm:top-0 sm:right-0 sm:h-full
                  bg-white
                  border-l border-[#e5e7eb]
                  shadow-[0_10px_40px_rgba(0,0,0,0.07)]
                  p-6 sm:p-8
                  w-full sm:w-[300px] lg:w-[320px]
                  flex flex-col justify-center
                  gap-6
                "
              >

                {/* SCHOOL ADDRESS */}
                <div
                  data-reveal
                  data-delay="350"
                  style={revealStyle}
                >

                  <p className="text-[#ff6b00] text-[11px] font-semibold tracking-[0.18em] uppercase mb-2">
                    Our Location
                  </p>

                  <h3 className="map-barlow text-[#14285f] text-[22px] lg:text-[26px] font-medium mb-3">
                    School Address
                  </h3>

                  <p className="text-[#4b5563] text-[14px] leading-[2]">
                    Bright Future Academy <br />
                    21 Knowledge Park Road <br />
                    Ahmedabad, Gujarat 380001
                  </p>

                </div>

                {/* DIVIDER */}
                <div
                  data-reveal
                  data-delay="450"
                  style={revealStyle}
                  className="w-full h-px bg-[#e5e7eb]"
                />

                {/* CONTACT DETAILS */}
                <div
                  data-reveal
                  data-delay="550"
                  style={revealStyle}
                >

                  <h4 className="map-barlow text-[#14285f] text-[17px] font-medium mb-3">
                    Contact Details
                  </h4>

                  <p className="text-[#4b5563] text-[14px] leading-[2]">
                    +91 98765 43210 <br />
                    info@brightfutureacademy.com
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