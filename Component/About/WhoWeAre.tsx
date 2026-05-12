"use client";

import React from "react";

const keyframesStyle = `
  @import url('https://fonts.googleapis.com/css2?family=Lato:wght@300;400;500;600;700&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Barlow:wght@400;500;600&display=swap');

  * {
    font-family: 'Lato', sans-serif;
  }

  .hero-title {
    font-family: 'Barlow', sans-serif;
    font-weight: 500;
    letter-spacing: -0.02em;
  }

  @keyframes wordFromLeft {
    from {
      opacity: 0;
      transform: translateX(-70px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }

  @keyframes fromRight {
    from {
      opacity: 0;
      transform: translateX(70px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }

  .lbl-anim {
    opacity: 0;
    animation: wordFromLeft 0.5s ease 0s forwards;
  }

  .desc-anim {
    opacity: 0;
    animation: fromRight 0.65s ease 0.25s forwards;
  }

  .btn-anim {
    opacity: 0;
    animation: fromRight 0.65s ease 0.42s forwards;
  }

  .word {
    display: inline;
    opacity: 0;
    animation: wordFromLeft 0.6s cubic-bezier(.22,.68,0,1.15) forwards;
  }

  .w1 { animation-delay: 0.05s; }
  .w2 { animation-delay: 0.15s; }
  .w3 { animation-delay: 0.25s; }
  .w4 { animation-delay: 0.35s; }
  .w5 { animation-delay: 0.45s; }
  .w6 { animation-delay: 0.55s; }
`;

export default function WhoWeAre() {
  return (
    <section className="w-full bg-white pt-20 sm:pt-3 pb-16 overflow-hidden">

      <style>{keyframesStyle}</style>

      <div className="px-4 sm:px-6 lg:px-10">

        {/* TOP SECTION */}
        <div className="grid lg:grid-cols-2 gap-12 items-start mb-8">

          {/* LEFT */}
          <div>

            <p className="lbl-anim text-[#f97316] uppercase tracking-[4px] sm:tracking-[5px] font-bold text-[10px] sm:text-sm mb-3">
              WHO WE ARE
            </p>

            <h2 className="hero-title text-[#071c4d] text-3xl sm:text-[44px] lg:text-[44px] leading-[1.1] tracking-[-0.02em]">

              <span className="word w1">
                Building{" "}
              </span>

              <span className="word w2">
                Bright{" "}
              </span>

              <span className="word w3">
                Futures{" "}
              </span>

              <span className="word w4">
                Through{" "}
              </span>

              <span className="word w5 text-[#f97316]">
                Quality{" "}
              </span>

              <br />

              <span className="word w6 text-[#f97316]">
                Education
              </span>

            </h2>
          </div>

          {/* RIGHT */}
          <div className="flex flex-col justify-start">

            <p className="desc-anim text-gray-500 text-sm pt-12 sm:text-base pb-5 lg:text-[15px] leading-8 max-w-xl">
              We are a learning community committed to
              excellence in education and overall student
              development. Our goal is to help every child
              discover their potential and grow into a
              responsible, confident individual.
            </p>

            {/* BUTTON */}
            <button className="btn-anim group relative overflow-hidden bg-[#f97316] text-white px-8 py-4 rounded-[3px] text-xs sm:text-sm font-bold uppercase inline-flex items-center gap-2 w-fit hover:bg-[#071c4d] transition-colors duration-300">

              <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-500 bg-[linear-gradient(120deg,transparent_0%,rgba(255,255,255,0.15)_50%,transparent_100%)] -skew-x-[20deg]" />

              <span className="relative z-10 flex items-center gap-2">
                Learn More
              </span>

            </button>
          </div>
        </div>

        {/* IMAGE CARDS */}
        <div className="grid lg:grid-cols-2 gap-8">

          {/* MISSION */}
          <div className="relative overflow-hidden rounded-[3px] cursor-pointer h-[400px] group">

            <img
              src="https://i.pinimg.com/736x/8f/8f/ee/8f8feeae6917c2c2e8a8cad6a68c1593.jpg"
              alt="Mission"
              className="w-full h-full object-cover block transition-transform duration-700 group-hover:scale-105"
            />

            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/75 transition-all duration-400 group-hover:from-black/15 group-hover:to-black/85" />

            <div className="absolute left-7 right-7 bottom-7 text-white hero-title text-[34px] sm:text-[38px] tracking-tight [text-shadow:0_2px_12px_rgba(0,0,0,0.4)] transition-all duration-[450ms] group-hover:bottom-[90px]">
              Our Mission
            </div>

            <div className="absolute left-7 right-7 bottom-7 text-white/90 text-[15px] leading-[1.7] opacity-0 translate-y-4 transition-all duration-400 delay-100 group-hover:opacity-100 group-hover:translate-y-0">
              To provide quality education that builds
              strong academic foundations, essential life
              skills, and positive values in every student.
            </div>
          </div>

          {/* VISION */}
          <div className="relative overflow-hidden rounded-[3px] cursor-pointer h-[400px] group">

            <img
              src="https://i.pinimg.com/1200x/38/2d/75/382d759685d258aa0f2c14e758f24e57.jpg"
              alt="Vision"
              className="w-full h-full object-cover block transition-transform duration-700 group-hover:scale-105"
            />

            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/75 transition-all duration-400 group-hover:from-black/15 group-hover:to-black/85" />

            <div className="absolute left-7 right-7 bottom-7 text-white hero-title text-[34px] sm:text-[38px] tracking-tight [text-shadow:0_2px_12px_rgba(0,0,0,0.4)] transition-all duration-[450ms] group-hover:bottom-[90px]">
              Our Vision
            </div>

            <div className="absolute left-7 right-7 bottom-7 text-white/90 text-[15px] leading-[1.7] opacity-0 translate-y-4 transition-all duration-400 delay-100 group-hover:opacity-100 group-hover:translate-y-0">
              To create a supportive and dynamic learning
              environment where students are encouraged to
              think, learn, and grow into future ready
              individuals.
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}