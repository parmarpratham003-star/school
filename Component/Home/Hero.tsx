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
      "We believe education should go beyond textbooks. Our learning approach helps students connect classroom knowledge with real life understanding in a simple and meaningful way. Our school provides a modern and balanced learning environment where students gain knowledge through understanding, practice, and real life examples.",
  },
  {
    img: "hero2.png",
    tag: "START LEARNING TODAY",
    title1: "Where Skills Turn Into",
    title2: "Successful Careers",
    desc:
      "We believe education should go beyond textbooks. Our learning approach helps students connect classroom knowledge with real life understanding in a simple and meaningful way. Our school provides a modern and balanced learning environment where students gain knowledge through understanding, practice, and real life examples.",
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
        <div className="relative h-[85vh] sm:h-[90vh] min-h-[520px] sm:min-h-[700px] max-h-[950px] overflow-hidden">
          
          {/* Background */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${active.img})` }}
          />

          {/* Slide Animation */}
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
          <div className="relative z-30 h-full flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-10">
            <div className="max-w-4xl">
              {showText && (
                <>
                  <p
                    className="text-orange-500 uppercase tracking-[3px] sm:tracking-[4px] font-extrabold text-[10px] sm:text-sm mb-3 sm:mb-4"
                    style={{ animation: "slideInLeft .5s ease forwards" }}
                  >
                    {active.tag}
                  </p>

                  <h1
                    className="hero-title text-white text-xl sm:text-3xl md:text-4xl lg:text-5xl font-black leading-[1.2] sm:leading-[1.1] mb-4 sm:mb-5"
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
                    className="text-gray-200 text-sm sm:text-base md:text-lg font-medium leading-6 sm:leading-8 max-w-xl sm:max-w-3xl mx-auto mb-6 sm:mb-8 px-2"
                    style={{ animation: "scaleReveal .7s ease .3s both" }}
                  >
                    {active.desc}
                  </p>

                  <div
                    className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 w-full sm:w-auto"
                    style={{ animation: "fadeRise .7s ease .5s both" }}
                  >
                    <button className="w-full sm:w-auto bg-orange-500 hover:bg-white hover:text-orange-500 text-white px-6 sm:px-10 py-3 font-extrabold uppercase text-xs sm:text-sm rounded-sm inline-flex items-center justify-center gap-2 transition-all duration-300">
                      Explore Programs
                      <ArrowUpRight size={18} />
                    </button>

                    <button className="w-full sm:w-auto border border-white text-white hover:bg-white hover:text-[#0f224a] px-6 sm:px-10 py-3 font-extrabold uppercase text-xs sm:text-sm rounded-sm transition-all duration-300">
                      Start Learning Today
                    </button>
                  </div>
                </>
              )}
            </div>
          </div>

          {/* Arrows (Hidden on Mobile) */}
          <button
            onClick={prevSlide}
            className="hidden sm:flex absolute left-7 top-1/2 -translate-y-1/2 z-40 w-12 h-12 rounded-full border border-white/10 bg-black/20 text-white items-center justify-center hover:bg-orange-500 transition-all"
          >
            <ChevronLeft size={20} />
          </button>

          <button
            onClick={nextSlide}
            className="hidden sm:flex absolute right-7 top-1/2 -translate-y-1/2 z-40 w-12 h-12 rounded-full border border-white/10 bg-black/20 text-white items-center justify-center hover:bg-orange-500 transition-all"
          >
            <ChevronRight size={20} />
          </button>
        </div>

        {/* Bottom Spacer */}
      
      </section>
    </>
  );
}