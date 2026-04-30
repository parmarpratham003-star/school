"use client";

import { GraduationCap, ArrowUpRight, Menu, X } from "lucide-react";
import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);

  const navItems = ["Home", "About", "Courses", "Contact"];

  return (
    <>
      <header className="sticky top-0 z-[999] w-full bg-white/95 backdrop-blur-md border-b border-slate-200 font-[Outfit]">

        {/* SAME LEFT RIGHT PADDING AS HERO */}
        <div className="px-4 sm:px-6 lg:px-10">
          <div className="h-[82px] flex items-center justify-between gap-8">

            {/* Logo */}
            <a href="#" className="flex items-center gap-3 shrink-0 no-underline">
              <div className="w-[42px] h-[42px] rounded-[3px] flex items-center justify-center bg-[#f97316] shadow-[0_4px_14px_rgba(249,115,22,0.35)]">
                <GraduationCap className="text-white" size={22} />
              </div>

              <span className="text-[22px] font-black tracking-tight text-[#0f1e45]">
                EDUWAVE
              </span>
            </a>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-1 flex-1 justify-center">
              {navItems.map((item, i) => (
                <a
                  key={i}
                  href="#"
                  className={`px-[22px] py-2 text-[13px] font-semibold tracking-[0.08em] uppercase no-underline transition-all duration-300 ${
                    i === 0
                      ? "text-[#f97316]"
                      : "text-slate-500 hover:text-[#f97316]"
                  }`}
                >
                  {item}
                </a>
              ))}
            </nav>

            {/* CTA BUTTON SAME HERO ANIMATION */}
            <button className="hidden lg:inline-flex group relative overflow-hidden items-center gap-2 px-7 py-3 rounded-[3px] text-[13px] font-bold uppercase tracking-[0.05em] bg-[#0f1e45] text-white border-2 border-[#0f1e45] hover:bg-white hover:text-[#f97316] hover:border-[#f97316] transition-all duration-300">

              <span>Find Courses</span>

              {/* Main Arrow */}
              <ArrowUpRight
                size={16}
                className="transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:opacity-0"
              />

              {/* Second Arrow */}
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
          <div className="lg:hidden border-t border-slate-100 bg-white px-4 sm:px-6 py-5">
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

              {/* Mobile Button */}
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

      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700;800;900&display=swap");
      `}</style>
    </>
  );
}