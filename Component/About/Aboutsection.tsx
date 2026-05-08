"use client";

import React, { useEffect, useRef } from "react";
import {
  GraduationCap,
  BookOpen,
  Laptop,
  Users,
  ArrowUpRight,
} from "lucide-react";

export default function AboutSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const leftEls = section.querySelectorAll(".slide-left");
    const fadeEls = section.querySelectorAll(".fade-up");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting)
            entry.target.classList.add("show");
        });
      },
      { threshold: 0.15 }
    );

    leftEls.forEach((el) => observer.observe(el));
    fadeEls.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const items = [
    {
      icon: <GraduationCap size={20} />,
      title: "Interactive Learning",
    },
    {
      icon: <BookOpen size={20} />,
      title: "Creative Education",
    },
    {
      icon: <Laptop size={20} />,
      title: "Modern Classrooms",
    },
    {
      icon: <Users size={20} />,
      title: "Student Growth",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="w-full bg-white py-14 sm:py-20 overflow-hidden flex items-center"
    >
      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=Lato:wght@300;400;500;600;700&display=swap");
        @import url("https://fonts.googleapis.com/css2?family=Barlow:wght@400;500;600&display=swap");

        * {
          font-family: "Lato", sans-serif;
        }

        .hero-title {
          font-family: "Barlow", sans-serif;
          font-weight: 500;
          letter-spacing: -0.02em;
        }

        .slide-left {
          opacity: 0;
          transform: translateX(-60px);
          transition:
            opacity 0.85s cubic-bezier(0.22, 1, 0.36, 1),
            transform 0.85s cubic-bezier(0.22, 1, 0.36, 1);
        }

        .slide-left.show {
          opacity: 1;
          transform: translateX(0);
        }

        .fade-up {
          opacity: 0;
          transform: translateY(40px);
          transition:
            opacity 0.85s cubic-bezier(0.22, 1, 0.36, 1) 0.15s,
            transform 0.85s cubic-bezier(0.22, 1, 0.36, 1) 0.15s;
        }

        .fade-up.show {
          opacity: 1;
          transform: translateY(0);
        }

        .zoom-img {
          transition: transform 0.6s ease;
        }

        .zoom-img:hover {
          transform: scale(1.04);
        }
      `}</style>

      <div className="w-full px-4 sm:px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-14 items-center">

          {/* LEFT */}
          <div className="slide-left flex justify-center order-2 lg:order-1">
            <div className="relative w-full max-w-[460px] mx-auto">

              {/* IMAGE 1 */}
              <div className="overflow-hidden rounded-sm w-[72%]">
                <img
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200&auto=format&fit=crop"
                  alt="Students"
                  className="zoom-img w-full h-[220px] sm:h-[280px] lg:h-[320px] object-cover rounded-sm"
                />
              </div>

              {/* IMAGE 2 */}
              <div className="overflow-hidden rounded-sm w-[72%] ml-auto -mt-8 sm:-mt-10">
                <img
                  src="https://images.unsplash.com/photo-1529390079861-591de354faf5?q=80&w=1200&auto=format&fit=crop"
                  alt="Students Learning"
                  className="zoom-img w-full h-[220px] sm:h-[280px] lg:h-[320px] object-cover rounded-sm"
                />
              </div>

              {/* BADGE */}
              <div className="absolute top-4 right-0 sm:top-6 bg-gray-500 text-white rounded-sm px-4 py-4 sm:px-5 sm:py-5 shadow-lg">
                <h3 className="hero-title text-2xl sm:text-3xl">
                  10K+
                </h3>

                <p className="text-xs sm:text-sm mt-1 leading-5 text-white/90 max-w-[100px]">
                  Students Learning
                </p>
              </div>

            </div>
          </div>

          {/* RIGHT */}
          <div className="fade-up order-1 lg:order-2">
            <div className="w-full">

              {/* TAG */}
              <p className="text-orange-500 uppercase tracking-[4px] font-bold text-[10px] sm:text-xs mb-3">
                ABOUT US
              </p>

              {/* HEADING */}
              <h2 className="hero-title text-[#0f1e45] text-[28px] sm:text-[36px] lg:text-[44px] leading-[1.18] mb-4 sm:mb-5 tracking-[-0.02em]">
                Shaping Young Minds
                <br />
                with{" "}
                <span className="text-orange-500">
                  Knowledge &amp; Values
                </span>
              </h2>

              {/* DESCRIPTION */}
              <p className="text-gray-500 text-sm sm:text-base font-normal leading-7 sm:leading-8 max-w-xl">
                Education is not just about textbooks.
                We help students grow with confidence,
                creativity, and practical learning that
                prepares them for a meaningful and
                successful future.
              </p>

              {/* FEATURES */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mt-6 sm:mt-8">

                {items.map((item, index) => (
                  <div
                    key={index}
                    className="bg-white border border-slate-100 rounded-sm p-4 sm:p-5 flex items-start gap-3 sm:gap-4 hover:border-orange-500 transition-all duration-300 hover:-translate-y-1"
                  >

                    <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-orange-100 flex items-center justify-center text-orange-500 shrink-0">
                      {item.icon}
                    </div>

                    <div>
                      <h3 className="hero-title text-[#0f1e45] text-base sm:text-lg">
                        {item.title}
                      </h3>

                      <p className="text-gray-500 text-xs sm:text-sm mt-1 leading-5 sm:leading-6">
                        Smart and modern education.
                      </p>
                    </div>
                  </div>
                ))}

              </div>

              {/* BUTTON */}
              <button className="mt-6 sm:mt-8 group relative overflow-hidden bg-orange-500 text-white px-7 sm:px-8 py-3 sm:py-3.5 rounded-sm text-xs sm:text-sm font-bold uppercase inline-flex items-center gap-2 hover:bg-[#0f1e45] transition-colors duration-300">

                <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-500 bg-[linear-gradient(120deg,transparent_0%,rgba(255,255,255,0.15)_50%,transparent_100%)] skew-x-[-20deg]" />

                <span className="relative z-10 flex items-center gap-2">
                  Read More
                  <ArrowUpRight size={15} />
                </span>
              </button>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}