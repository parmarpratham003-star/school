"use client";

import { GraduationCap, ArrowUpRight, Menu, X } from "lucide-react";
import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);

  const navItems = ["Home", "About", "Courses", "Contact"];

  return (
    <>
      <header className="sticky top-0 z-[999] w-full bg-white/95 backdrop-blur-md border-b border-slate-200">
        <style>{`
          @import url('https://fonts.googleapis.com/css2?family=Italiana&family=Lato:wght@300;400;500;600;700;800;900&display=swap');

          @font-face{
            font-family:'Salina';
            src:local('Salina');
          }

          .hero-font{
            font-family:'Salina','Italiana',serif;
            letter-spacing:.05em;
          }

          .body-font{
            font-family:'Lato',sans-serif;
          }

          /* SHINY ORANGE NAV EFFECT */
          .nav-shine{
            background-size:250% 100%;
            transition:all .3s ease;
          }

          .nav-shine:hover{
            color:transparent;
            background-clip:text;
            -webkit-background-clip:text;
            background-image:linear-gradient(
              110deg,
              #f97316 0%,
              #f97316 30%,
              #ffd2b3 45%,
              #ffffff 50%,
              #ffd2b3 55%,
              #f97316 70%,
              #f97316 100%
            );
            animation:shineMove .7s ease forwards;
          }

          @keyframes shineMove{
            0%{background-position:180% center;}
            100%{background-position:-20% center;}
          }
        `}</style>

        <div className="px-4 sm:px-6 lg:px-10">
          <div className="h-[65px] flex items-center justify-between gap-8">
            {/* Logo */}
            <a href="#" className="flex items-center gap-3 shrink-0 no-underline">
              <div className="w-[42px] h-[42px] rounded-[3px] flex items-center justify-center bg-[#f97316]">
                <GraduationCap className="text-white" size={22} />
              </div>

              <span className="hero-font text-[22px] font-black tracking-tight text-[#0f1e45]">
                EDUWAVE
              </span>
            </a>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-1 flex-1 justify-center body-font">
              {navItems.map((item, i) => (
                <a
                  key={i}
                  href="#"
                  className={`nav-shine px-[22px] py-2 text-[13px] font-semibold tracking-[0.08em] uppercase no-underline ${
                    i === 0
                      ? "text-[#f97316]"
                      : "text-slate-500"
                  }`}
                >
                  {item}
                </a>
              ))}
            </nav>

            {/* CTA */}
            <button className="hidden lg:inline-flex group relative overflow-hidden items-center gap-2 px-5 py-3 rounded-[3px] text-[13px] font-bold uppercase tracking-[0.05em] bg-[#0f1e45] text-white border-2 border-[#0f1e45] hover:bg-white hover:text-[#f97316] hover:border-[#f97316] transition-all duration-300 body-font">
              <span>Find Courses</span>

              <ArrowUpRight
                size={16}
                className="transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:opacity-0"
              />

              <ArrowUpRight
                size={16}
                className="absolute right-6 opacity-0 translate-x-[-6px] translate-y-[6px] transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0"
              />
            </button>

            {/* Mobile Toggle */}
            <button
              onClick={() => setOpen(!open)}
              className="lg:hidden w-10 h-10 rounded-[3px] border border-slate-200 flex items-center justify-center text-[#0f1e45]"
            >
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {open && (
          <div className="lg:hidden border-t border-slate-100 bg-white px-4 sm:px-6 py-5 body-font">
            <div className="flex flex-col gap-2">
              {navItems.map((item, i) => (
                <a
                  key={i}
                  href="#"
                  className={`py-3 px-4 text-[13px] font-semibold uppercase tracking-wide no-underline border-b border-slate-100 ${
                    i === 0 ? "text-[#f97316]" : "text-slate-500"
                  }`}
                >
                  {item}
                </a>
              ))}

              <button className="group mt-2 relative overflow-hidden flex items-center justify-center gap-2 py-3 rounded-[3px] text-[13px] font-bold uppercase tracking-wide bg-[#0f1e45] text-white border-2 border-[#0f1e45] hover:bg-white hover:text-[#f97316] hover:border-[#f97316] transition-all duration-300">
                <span>Find Courses</span>

                <ArrowUpRight
                  size={15}
                  className="transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:opacity-0"
                />

                <ArrowUpRight
                  size={15}
                  className="absolute right-6 opacity-0 translate-x-[-6px] translate-y-[6px] transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0"
                />
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
}