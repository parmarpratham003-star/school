"use client";

import { useEffect, useRef, useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  ArrowUpRight,
  BookOpen,
  Settings,
  Clock3,
} from "lucide-react";

const slides = [
  {
    img: "hero1.png",
    tag: "START LEARNING TODAY",
    title1: "Explore Interests and",
    title2: "Career With Courses",
  },
  {
    img: "hero2.png",
    tag: "WORLD CLASS EDUCATION",
    title1: "Online Courses From",
    title2: "Leading Experts",
  },
];

const cards = [
  { icon: BookOpen, title: "5,320 online courses",  sub: "Enjoy a variety of fresh topics" },
  { icon: Settings, title: "Expert instruction",     sub: "Find the right instructor"       },
  { icon: Clock3,   title: "Lifetime access",        sub: "Learn on your schedule"          },
];

export default function Hero() {
  const [current,  setCurrent]  = useState(0);
  const [next,     setNext]     = useState<number | null>(null);
  const [animate,  setAnimate]  = useState(false);
  const [showText, setShowText] = useState(true);

  const timer = useRef<any>(null);
  const lock  = useRef(false);

  const goTo = (index: number) => {
    if (lock.current || index === current) return;
    lock.current = true;
    setShowText(false);

    setTimeout(() => {
      setNext(index);
      setAnimate(true);

      setTimeout(() => {
        setCurrent(index);
        setNext(null);
        setAnimate(false);
        setShowText(true);
        lock.current = false;
      }, 1100);
    }, 120);
  };

  const nextSlide = () => goTo((current + 1) % slides.length);
  const prevSlide = () => goTo((current - 1 + slides.length) % slides.length);

  useEffect(() => {
    clearInterval(timer.current);
    timer.current = setInterval(() => { nextSlide(); }, 5000);
    return () => clearInterval(timer.current);
  }, [current]);

  const active   = slides[current];
  const incoming = next !== null ? slides[next] : null;

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@400;600;700;800;900&display=swap');

        * { font-family: 'Outfit', sans-serif; }

        @keyframes slideUp {
          0%   { transform: translateY(100%); }
          100% { transform: translateY(0);    }
        }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0);    }
        }
        @keyframes textRight {
          from { opacity: 0; transform: translateX(60px); }
          to   { opacity: 1; transform: translateX(0);    }
        }
        @keyframes btnUp {
          from { opacity: 0; transform: translateY(35px); }
          to   { opacity: 1; transform: translateY(0);    }
        }

        /* ── arrow animation on button hover ── */
        .cta-btn {
          overflow: hidden;
          position: relative;
        }

        /* the visible arrow — slides out to top-right on hover */
        .cta-btn .arrow-icon {
          transition: transform 0.3s ease, opacity 0.3s ease;
        }
        .cta-btn:hover .arrow-icon {
          transform: translate(5px, -5px);
          opacity: 0;
        }

        /* ghost arrow — comes in from bottom-left on hover */
        .cta-btn .arrow-ghost {
          position: absolute;
          right: 28px;
          opacity: 0;
          transform: translate(-5px, 5px);
          transition: transform 0.3s ease, opacity 0.3s ease;
        }
        .cta-btn:hover .arrow-ghost {
          opacity: 1;
          transform: translate(0, 0);
        }
      `}</style>

      <section className="relative w-full overflow-hidden">

        {/* HERO */}
        <div className="relative h-[86vh] min-h-[650px] max-h-[900px] overflow-hidden">

          {/* current image */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${active.img})` }}
          />

          {/* next image */}
          {incoming && animate && (
            <div
              className="absolute inset-0 bg-cover bg-center z-10"
              style={{
                backgroundImage: `url(${incoming.img})`,
                animation: "slideUp 1.1s ease forwards",
              }}
            />
          )}

          {/* overlay */}
          <div className="absolute inset-0 bg-black/55 z-20" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/15 to-black/50 z-20" />

          {/* content */}
          <div className="relative z-30 h-full flex items-center justify-center text-center px-4 pb-24 sm:pb-28">
            <div className="max-w-5xl">
              {showText && (
                <>
                  <p
                    className="text-orange-500 uppercase tracking-[4px] font-bold text-xs sm:text-sm mb-3"
                    style={{ animation: "fadeUp .5s ease forwards" }}
                  >
                    {active.tag}
                  </p>

                  <h1
                    className="text-white text-4xl sm:text-5xl md:text-6xl font-black leading-[1.02] mb-5"
                    style={{ animation: "textRight .8s ease forwards" }}
                  >
                    {active.title1}
                    <br />
                    {active.title2}
                  </h1>

                  <div style={{ animation: "btnUp .9s ease forwards" }}>
                    <button className="cta-btn bg-orange-500 hover:bg-white hover:text-orange-500 text-white px-7 sm:px-10 py-3 font-bold uppercase text-sm rounded-sm inline-flex items-center gap-2 transition-all duration-300">
                      Find Courses
                      {/* visible arrow — exits top-right */}
                      <ArrowUpRight size={18} className="arrow-icon" />
                      {/* ghost arrow — enters from bottom-left */}
                      <ArrowUpRight size={18} className="arrow-ghost" />
                    </button>
                  </div>
                </>
              )}
            </div>
          </div>

          {/* arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-4 sm:left-7 top-1/2 -translate-y-1/2 z-40 w-12 h-12 rounded-full border border-white/10 bg-black/20 text-white flex items-center justify-center hover:bg-orange-500 transition-all"
          >
            <ChevronLeft size={20} />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-4 sm:right-7 top-1/2 -translate-y-1/2 z-40 w-12 h-12 rounded-full border border-white/10 bg-black/20 text-white flex items-center justify-center hover:bg-orange-500 transition-all"
          >
            <ChevronRight size={20} />
          </button>

          {/* bottom small boxes */}
          <div className="absolute left-0 bottom-0 w-full translate-y-[-30%] sm:translate-y-[-36%] lg:translate-y-[-60%] px-4 sm:px-6 lg:px-10 z-50">
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4">
              {cards.map(({ icon: Icon, title, sub }, i) => (
                <div
                  key={i}
                  className="bg-[#0f224a] rounded-[4px] px-6 sm:px-8 py-5 flex items-center gap-5 min-h-[98px] shadow-xl"
                >
                  <div className="w-12 h-12 sm:w-14 sm:h-14 border border-orange-500/40 rounded-[3px] flex items-center justify-center shrink-0">
                    <Icon size={26} className="text-orange-500" />
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-lg sm:text-[20px] leading-none mb-2">
                      {title}
                    </h3>
                    <p className="text-gray-300 text-sm sm:text-base leading-tight">
                      {sub}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* bottom white spacing */}
        <div className="h-[70px] sm:h-[60px] bg-white" />
      </section>
    </>
  );
}