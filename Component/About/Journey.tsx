"use client";

import React, { useEffect, useRef, useState } from "react";

/* COUNTER */
function useCounter(
  target: number,
  duration = 1600,
  start = false
) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!start) return;

    let raf: number;

    const startTime = performance.now();

    const update = (currentTime: number) => {
      const progress = Math.min(
        (currentTime - startTime) / duration,
        1
      );

      const eased =
        1 - Math.pow(1 - progress, 3);

      setValue(Math.round(eased * target));

      if (progress < 1) {
        raf = requestAnimationFrame(update);
      }
    };

    raf = requestAnimationFrame(update);

    return () => cancelAnimationFrame(raf);
  }, [target, duration, start]);

  return value;
}

/* WORD ANIMATION */
function AnimatedWords({
  text,
  baseDelay = 0,
}: {
  text: string;
  baseDelay?: number;
}) {
  return (
    <>
      {text.split(" ").map((word, i) => (
        <span
          key={i}
          className="mr-[0.25em] inline-block overflow-hidden"
        >
          <span
            className="inline-block animate-[wordRise_.65s_cubic-bezier(0.22,1,0.36,1)_both]"
            style={{
              animationDelay: `${baseDelay + i * 90}ms`,
            }}
          >
            {word}
          </span>
        </span>
      ))}
    </>
  );
}

export default function Journey() {
  const ref = useRef<HTMLDivElement | null>(null);

  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
        }
      },
      { threshold: 0.12 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  const count1 = useCounter(10, 1600, visible);
  const count2 = useCounter(50, 1900, visible);

  return (
    <>
      <style jsx>{`
        @keyframes wordRise {
          from {
            transform: translateY(110%);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }

        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(24px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>

      <section
        ref={ref}
        className="relative overflow-hidden bg-white py-10 sm:py-12 lg:py-8"
        style={{
          fontFamily: "'Barlow', sans-serif",
        }}
      >
        {/* DOT BACKGROUND */}
        <div className="absolute inset-0 opacity-[0.04]">
          <div
            className="h-full w-full"
            style={{
              backgroundImage:
                "radial-gradient(circle, #0f224a 1px, transparent 1px)",
              backgroundSize: "22px 22px",
            }}
          />
        </div>

        {/* CONTAINER */}
        <div className="relative z-10 w-full px-4 sm:px-6 lg:px-10">

          <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-14">

            {/* LEFT */}
            <div className="flex flex-col gap-6">

              {/* IMAGE */}
              <div
                className={`group pl-4 pt-4 sm:pl-6 sm:pt-6 ${
                  visible
                    ? "animate-[fadeUp_.7s_cubic-bezier(0.22,1,0.36,1)_both]"
                    : "opacity-0"
                }`}
              >
                <div className="relative overflow-visible">

                  {/* FRAME */}
                  <div className="absolute -left-4 -top-4 h-full w-full rounded-[4px] border-2 border-[#d9dee8] sm:-left-6 sm:-top-6" />

                  {/* IMAGE */}
                  <div className="relative z-10 h-[220px] overflow-hidden rounded-[4px] bg-[#f6f6f6] sm:h-[320px] lg:h-[400px]">

                    <img
                      src="https://i.pinimg.com/736x/3f/21/bf/3f21bf730d7951ce24b9426df5324305.jpg"
                      alt="Students"
                      className="h-full w-full object-cover transition-all duration-700 ease-out group-hover:scale-[1.05] group-hover:brightness-[0.65]"
                    />

                    {/* OVERLAY */}
                    <div className="absolute inset-0 bg-black/30 opacity-0 transition-all duration-500 group-hover:opacity-100" />

                    {/* TEXT */}
                    <div className="absolute inset-0 z-20 flex items-center justify-center px-4">

                      <div className="text-center">

                        <div className="overflow-hidden">
                          <h3 className="translate-x-[-120%] text-2xl font-semibold tracking-[-0.03em] text-white opacity-0 transition-all duration-700 ease-out group-hover:translate-x-0 group-hover:opacity-100 sm:text-3xl">
                            Excellence
                          </h3>
                        </div>

                        <div className="overflow-hidden">
                          <p className="mt-3 translate-x-[-120%] text-xs leading-7 text-white/80 opacity-0 transition-all duration-700 delay-100 ease-out group-hover:translate-x-0 group-hover:opacity-100 sm:text-sm">
                            Inspiring students through creativity and learning.
                          </p>
                        </div>

                      </div>

                    </div>

                  </div>

                </div>

              </div>

              {/* STATS */}
              <div
                className={`grid grid-cols-2 border-t border-[#e5e7eb] ${
                  visible
                    ? "animate-[fadeUp_.7s_cubic-bezier(0.22,1,0.36,1)_both]"
                    : "opacity-0"
                }`}
              >

                <div className="border-r border-[#e5e7eb] py-5 pr-4 sm:pr-6">

                  <h3 className="text-[40px] font-medium leading-none tracking-[-0.04em] text-[#0f224a] sm:text-[64px]">
                    {count1}+
                  </h3>

                  <p className="mt-2 text-xs leading-6 text-[#667085] sm:text-sm sm:leading-7">
                    Years Of Excellence
                  </p>

                </div>

                <div className="py-5 pl-4 sm:pl-6">

                  <h3 className="text-[40px] font-medium leading-none tracking-[-0.04em] text-[#0f224a] sm:text-[64px]">
                    {count2}+
                  </h3>

                  <p className="mt-2 text-xs leading-6 text-[#667085] sm:text-sm sm:leading-7">
                    Dedicated Educators
                  </p>

                </div>

              </div>

            </div>

            {/* RIGHT */}
            <div className="flex flex-col gap-6">

              {/* CONTENT */}
              <div>

                <p
                  className={`mb-4 text-[10px] font-bold uppercase tracking-[6px] text-orange-500 sm:text-xs ${
                    visible
                      ? "animate-[fadeUp_.7s_cubic-bezier(0.22,1,0.36,1)_both]"
                      : "opacity-0"
                  }`}
                >
                  OUR JOURNEY
                </p>

                <h2 className="text-3xl font-medium leading-[1.05] tracking-[-0.03em] text-[#0f224a] sm:text-4xl lg:text-[44px]">

                  {visible && (
                    <>
                      <AnimatedWords
                        text="The Right Education"
                        baseDelay={120}
                      />

                      <span className="block text-orange-500">
                        <AnimatedWords
                          text="Creates Bright Futures."
                          baseDelay={380}
                        />
                      </span>
                    </>
                  )}

                </h2>

                <p
                  className={`mt-4 max-w-lg text-sm leading-8 text-[#667085] sm:text-[15px] ${
                    visible
                      ? "animate-[fadeUp_.7s_cubic-bezier(0.22,1,0.36,1)_both]"
                      : "opacity-0"
                  }`}
                >
                  Building confident learners through modern education,
                  creativity, discipline, and real classroom experiences.
                </p>

              </div>

              {/* IMAGE */}
              <div
                className={`group pb-4 pr-4 sm:pb-6 sm:pr-6 ${
                  visible
                    ? "animate-[fadeUp_.7s_cubic-bezier(0.22,1,0.36,1)_both]"
                    : "opacity-0"
                }`}
              >
                <div className="relative overflow-visible">

                  {/* FRAME */}
                  <div className="absolute -bottom-4 -right-4 h-full w-full rounded-[4px] border-2 border-[#d9dee8] sm:-bottom-6 sm:-right-6" />

                  {/* IMAGE */}
                  <div className="relative z-10 h-[220px] overflow-hidden rounded-[4px] bg-[#f6f6f6] sm:h-[320px] lg:h-[400px]">

                    <img
                      src="https://i.pinimg.com/736x/db/d6/71/dbd671872d58802732652ed49697c86b.jpg"
                      alt="School Students"
                      className="h-full w-full object-cover transition-all duration-700 ease-out group-hover:scale-[1.05] group-hover:brightness-[0.65]"
                    />

                    {/* OVERLAY */}
                    <div className="absolute inset-0 bg-black/30 opacity-0 transition-all duration-500 group-hover:opacity-100" />

                    {/* TEXT */}
                    <div className="absolute inset-0 z-20 flex items-center justify-center px-4">

                      <div className="text-center">

                        <div className="overflow-hidden">
                          <h3 className="translate-x-[120%] text-2xl font-semibold tracking-[-0.03em] text-white opacity-0 transition-all duration-700 ease-out group-hover:translate-x-0 group-hover:opacity-100 sm:text-3xl">
                            Innovation
                          </h3>
                        </div>

                        <div className="overflow-hidden">
                          <p className="mt-3 translate-x-[120%] text-xs leading-7 text-white/80 opacity-0 transition-all duration-700 delay-100 ease-out group-hover:translate-x-0 group-hover:opacity-100 sm:text-sm">
                            Empowering students with modern learning methods.
                          </p>
                        </div>

                      </div>

                    </div>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>
      </section>
    </>
  );
}