"use client";

import { useEffect, useRef } from "react";

export default function LearningExperience() {
  const sectionRef = useRef<HTMLDivElement>(null);

  const items = [
  { type: "image", img: "L1.png" },
  {
    type: "content",
    tag: "LEARNING EXPERIENCE",
    title: "Learn Through Activities & Examples",
    desc: "Concepts come alive through hands-on activities and real-world examples.",
    color: "bg-orange-500",
  },
  { type: "image", img: "L2.png" },
  {
    type: "content",
    tag: "LEARNING EXPERIENCE",
    title: "Creative & Interactive Learning",
    desc: "Every lesson is engaging, interactive, and designed to make learning memorable.",
    color: "bg-[#0f224a]",
  },
  {
    type: "content",
    tag: "LEARNING EXPERIENCE",
    title: "Work on Projects & Assignments",
    desc: "Students apply knowledge through guided projects that build real skills.",
    color: "bg-gray-500",
  },
  { type: "image", img: "L3.png" },
  {
    type: "content",
    tag: "LEARNING EXPERIENCE",
    title: "Build Confidence in Expressing Ideas",
    desc: "We help every student think clearly and speak their ideas with confidence.",
    color: "bg-[#1e3a8a]",
  },
  { type: "image", img: "L4.png" },
];

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const allEls = section.querySelectorAll(".le-heading-anim, .le-grid-item");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement;
            const delay = el.dataset.delay || "0";
            setTimeout(() => el.classList.add("le-visible"), parseInt(delay));
            observer.unobserve(el);
          }
        });
      },
      { threshold: 0.1 }
    );

    allEls.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <style jsx>{`
        @import url("https://fonts.googleapis.com/css2?family=Italiana&family=Lato:wght@300;400;500;600;700;800;900&display=swap");

        * { font-family: "Lato", sans-serif; }
        .hero-title { font-family: "Italiana", serif; letter-spacing: 0.05em; }

        .le-from-top {
          opacity: 0;
          transform: translateY(-36px);
          transition: opacity 0.7s cubic-bezier(.22,1,.36,1), transform 0.7s cubic-bezier(.22,1,.36,1);
        }
        .le-from-bottom {
          opacity: 0;
          transform: translateY(36px);
          transition: opacity 0.7s cubic-bezier(.22,1,.36,1), transform 0.7s cubic-bezier(.22,1,.36,1);
        }
        .le-card-top {
          opacity: 0;
          transform: translateY(-48px);
          transition: opacity 0.75s cubic-bezier(.22,1,.36,1), transform 0.75s cubic-bezier(.22,1,.36,1);
        }
        .le-card-bottom {
          opacity: 0;
          transform: translateY(48px);
          transition: opacity 0.75s cubic-bezier(.22,1,.36,1), transform 0.75s cubic-bezier(.22,1,.36,1);
        }
        .le-img-fade {
          opacity: 0;
          transition: opacity 0.9s cubic-bezier(.22,1,.36,1);
        }
        .le-visible {
          opacity: 1 !important;
          transform: translateY(0) !important;
        }

        /* Inner stagger */
        .le-card-inner .le-tag {
          opacity: 0;
          transform: translateY(-18px);
          transition: opacity 0.5s ease, transform 0.5s ease;
          transition-delay: 0.05s;
        }
        .le-card-inner .le-title {
          opacity: 0;
          transform: translateY(-22px);
          transition: opacity 0.55s ease, transform 0.55s ease;
          transition-delay: 0.14s;
        }
        .le-card-inner .le-desc {
          opacity: 0;
          transform: translateY(18px);
          transition: opacity 0.55s ease, transform 0.55s ease;
          transition-delay: 0.24s;
        }
        .le-visible .le-card-inner .le-tag,
        .le-visible .le-card-inner .le-title,
        .le-visible .le-card-inner .le-desc {
          opacity: 1;
          transform: translateY(0);
        }

        /* Mobile: single column, fixed heights */
        .le-grid { display: grid; }

        /* Mobile: 1 col, shorter rows */
        @media (max-width: 639px) {
          .le-grid {
            grid-template-columns: 1fr;
          }
          .le-grid-item {
            min-height: 240px;
          }
          .le-grid-item.content-card {
            min-height: 200px;
          }
        }

        /* Tablet: 2 col */
        @media (min-width: 640px) and (max-width: 1023px) {
          .le-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .le-grid-item {
            min-height: 280px;
          }
        }

        /* Desktop: 4 col fixed row height */
        @media (min-width: 1024px) {
          .le-grid {
            grid-template-columns: repeat(4, 1fr);
            grid-auto-rows: 320px;
          }
          .le-grid-item {
            min-height: unset;
            height: 100%;
          }
        }
      `}</style>

      <section className="py-12 sm:py-16 lg:py-20 bg-white overflow-hidden" ref={sectionRef}>
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">

          {/* Heading */}
          <div className="text-center mb-10 sm:mb-12 lg:mb-14">
            <p
              className="le-heading-anim le-from-top text-orange-500 uppercase tracking-[4px] font-extrabold text-xs sm:text-sm"
              data-delay="0"
            >
              LEARNING EXPERIENCE
            </p>

            <h2
              className="le-heading-anim le-from-top hero-title text-[#0f224a] text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black mt-3 leading-tight"
              data-delay="100"
            >
              Every course is designed to feel like
              <br className="hidden sm:block" />
              real work not classroom theory
            </h2>

            <p
              className="le-heading-anim le-from-bottom text-gray-500 text-base sm:text-lg mt-4 sm:mt-6 max-w-3xl mx-auto leading-7 sm:leading-8"
              data-delay="200"
            >
              You won't just learn concepts, you will:
              Build real projects, solve industry level problems,
              gain portfolio ready experience and develop job ready confidence.
            </p>
          </div>

          {/* Mosaic Grid */}
          <div className="le-grid overflow-hidden rounded-[3px]">
            {items.map((item, i) => {
              const contentIndex = items
                .filter((x) => x.type === "content")
                .indexOf(item);
              const cardDir =
                item.type === "content"
                  ? contentIndex % 2 === 0
                    ? "le-card-top"
                    : "le-card-bottom"
                  : "le-img-fade";

              const delay = i * 80;

              return item.type === "image" ? (
                <div
                  key={i}
                  className={`le-grid-item ${cardDir} relative overflow-hidden`}
                  data-delay={delay}
                >
                  <img
                    src={item.img}
                    alt=""
                    className="w-full h-full object-cover absolute inset-0"
                  />
                </div>
              ) : (
                <div
                  key={i}
                  className={`le-grid-item content-card ${cardDir} ${item.color} text-white flex flex-col justify-center`}
                  style={{ padding: "clamp(24px, 4vw, 40px)" }}
                  data-delay={delay}
                >
                  <div className="le-card-inner">
                    <span className="le-tag block text-xs sm:text-sm tracking-[3px] uppercase text-white/70 mb-3">
                      {item.tag}
                    </span>
                    <h3 className="le-title hero-title text-2xl sm:text-3xl font-black leading-tight mb-3 sm:mb-5">
                      {item.title}
                    </h3>
                    <p className="le-desc text-white/75 text-sm sm:text-base leading-6 sm:leading-7">
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>
    </>
  );
}