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
    tag: "CAREER READY LEARNING",
    title1: "Where Skills Turn Into",
    title2: "Successful Careers",
    desc:
      "A generation learning platform designed to bridge the gap between education and industry. Learn in-demand skills, work on real projects, and build a future powered by experience.",
  },
  {
    img: "hero2.png",
    tag: "START LEARNING TODAY",
    title1: "Education Meets",
    title2: "Real Industry Skills",
    desc:
      "Gain in-demand skills through practical training, expert mentorship, and real projects designed to make you future ready.",
  },
];

const cards = [
  {
    icon: BookOpen,
    title: "5,320 online courses",
    sub: "Enjoy a variety of fresh topics",
  },
  {
    icon: Settings,
    title: "Expert instruction",
    sub: "Find the right instructor",
  },
  {
    icon: Clock3,
    title: "Lifetime access",
    sub: "Learn on your schedule",
  },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const [next, setNext] = useState<number | null>(null);
  const [animate, setAnimate] = useState(false);
  const [showText, setShowText] = useState(true);

  const timer = useRef<any>(null);
  const lock = useRef(false);

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
      }, 900);
    }, 100);
  };

  const nextSlide = () => goTo((current + 1) % slides.length);
  const prevSlide = () => goTo((current - 1 + slides.length) % slides.length);

  useEffect(() => {
    clearInterval(timer.current);
    timer.current = setInterval(() => nextSlide(), 5000);
    return () => clearInterval(timer.current);
  }, [current]);

  const active = slides[current];
  const incoming = next !== null ? slides[next] : null;

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Italiana&family=Lato:wght@300;400;500;600;700&display=swap');

        @font-face{
          font-family:'Salina';
          src:local('Salina');
        }

        *{
          font-family:'Lato',sans-serif;
        }

        .hero-title{
          font-family:'Salina','Italiana',serif;
          letter-spacing:0.06em;
        }

        @keyframes slideUp{
          from{transform:translateY(100%)}
          to{transform:translateY(0)}
        }

        @keyframes letterDrop{
          0%{opacity:0;transform:translateY(-40px) rotateX(90deg)}
          60%{transform:translateY(4px) rotateX(-10deg)}
          100%{opacity:1;transform:translateY(0) rotateX(0)}
        }

        @keyframes scaleReveal{
          from{opacity:0;transform:scale(1.08);filter:blur(4px)}
          to{opacity:1;transform:scale(1);filter:blur(0)}
        }

        @keyframes slideInLeft{
          from{opacity:0;transform:translateX(-30px)}
          to{opacity:1;transform:translateX(0)}
        }

        @keyframes fadeRise{
          from{opacity:0;transform:translateY(22px)}
          to{opacity:1;transform:translateY(0)}
        }
      `}</style>

      <section className="relative w-full overflow-hidden">
        <div className="relative h-[90vh] min-h-[700px] max-h-[950px] overflow-hidden">
          {/* Background */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${active.img})` }}
          />

          {/* Slide */}
          {incoming && animate && (
            <div
              className="absolute inset-0 bg-cover bg-center z-10"
              style={{
                backgroundImage: `url(${incoming.img})`,
                animation: "slideUp .9s ease forwards",
              }}
            />
          )}

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/55 z-20" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-black/50 z-20" />

          {/* Content */}
          <div className="relative z-30 h-full flex items-center justify-center text-center px-4 sm:px-6 lg:px-10 pb-40">
            <div className="max-w-4xl">
              {showText && (
                <>
                  <p
                    className="text-orange-500 uppercase tracking-[4px] font-extrabold text-xs sm:text-sm mb-4"
                    style={{ animation: "slideInLeft .5s ease forwards" }}
                  >
                    {active.tag}
                  </p>

                  <h1
                    className="hero-title text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black leading-[1.1] mb-5"
                    style={{
                      animation:
                        "letterDrop .75s cubic-bezier(0.34,1.56,0.64,1) forwards",
                    }}
                  >
                    {active.title1}
                    <br />
                    {active.title2}
                  </h1>

                  <p
                    className="text-gray-200 text-sm sm:text-base md:text-lg font-medium leading-7 sm:leading-8 max-w-3xl mx-auto mb-8"
                    style={{ animation: "scaleReveal .7s ease .3s both" }}
                  >
                    {active.desc}
                  </p>

                  <div
                    className="flex flex-col sm:flex-row items-center justify-center gap-4"
                    style={{ animation: "fadeRise .7s ease .5s both" }}
                  >
                    <button className="group bg-orange-500 hover:bg-white hover:text-orange-500 text-white px-8 sm:px-10 py-3 font-extrabold uppercase text-sm rounded-sm inline-flex items-center gap-2 transition-all duration-300">
                      Explore Programs
                      <ArrowUpRight
                        size={18}
                        className="transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                      />
                    </button>

                    <button className="border border-white text-white hover:bg-white hover:text-[#0f224a] px-8 sm:px-10 py-3 font-extrabold uppercase text-sm rounded-sm transition-all duration-300">
                      Start Learning Today
                    </button>
                  </div>
                </>
              )}
            </div>
          </div>

          {/* Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-4 sm:left-7 top-1/2 -translate-y-1/2 z-40 w-11 h-11 sm:w-12 sm:h-12 rounded-full border border-white/10 bg-black/20 text-white flex items-center justify-center hover:bg-orange-500 transition-all"
          >
            <ChevronLeft size={20} />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-4 sm:right-7 top-1/2 -translate-y-1/2 z-40 w-11 h-11 sm:w-12 sm:h-12 rounded-full border border-white/10 bg-black/20 text-white flex items-center justify-center hover:bg-orange-500 transition-all"
          >
            <ChevronRight size={20} />
          </button>

          {/* Small Cards UP */}
          <div className="absolute left-0 bottom-0 w-full px-4 sm:px-6 lg:px-10 z-50 translate-y-[-25%] sm:translate-y-[-40%]">
            <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-4">
              {cards.map(({ icon: Icon, title, sub }, i) => (
                <div
                  key={i}
                  className="bg-[#0f224a] hover:bg-[#132d60] rounded-md px-6 py-6 flex items-center gap-5 min-h-[98px] shadow-2xl border border-white/5 hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="w-[52px] h-[52px] rounded-md border border-orange-500/50 bg-orange-500/10 flex items-center justify-center shrink-0">
                    <Icon size={22} className="text-orange-500" />
                  </div>

                  <div>
                    <h3 className="text-white font-bold text-[16px] mb-1">
                      {title}
                    </h3>
                    <p className="text-white/55 text-[13px] leading-5">
                      {sub}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Spacer */}
        <div className="h-[320px] sm:h-[100px] bg-white" />
      </section>
    </>
  );
}