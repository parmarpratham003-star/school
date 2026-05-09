"use client";

import React from "react";
import {
  GraduationCap,
  ShieldCheck,
  Sparkles,
  Users,
} from "lucide-react";

const faqs = [
  {
    question: "Modern Learning",
    answer:
      "Concept-based education focused on creativity and real understanding.",
    icon: <GraduationCap size={24} />,
    borderColor: "border-[#0f224a]",
    textColor: "text-[#0f224a]",
    iconBg: "bg-slate-50",
  },
  {
    question: "Student Growth",
    answer:
      "Helping students build confidence, discipline, and communication skills.",
    icon: <ShieldCheck size={24} />,
    borderColor: "border-orange-500",
    textColor: "text-orange-500",
    iconBg: "bg-orange-50",
  },
  {
    question: "Creative Activities",
    answer:
      "Sports, arts, leadership programs, and extracurricular activities.",
    icon: <Sparkles size={24} />,
    borderColor: "border-orange-500",
    textColor: "text-orange-500",
    iconBg: "bg-orange-50",
  },
  {
    question: "Safe Environment",
    answer:
      "A secure and supportive campus with proper student guidance and care.",
    icon: <Users size={24} />,
    borderColor: "border-[#0f224a]",
    textColor: "text-[#0f224a]",
    iconBg: "bg-slate-50",
  },
];

export default function FAQSection() {
  return (
    <section
  className="relative overflow-hidden bg-white pt-4 pb-12 sm:pt-6 sm:pb-14 lg:pt-5 lg:pb-18"
  style={{ fontFamily: "'Barlow', sans-serif" }}
>
      {/* CONTAINER */}
      <div className="w-full px-4 sm:px-6 lg:px-10">

        {/* HEADER */}
        <div className="mb-10 grid gap-6 lg:grid-cols-2 lg:items-end">

          {/* LEFT */}
          <div>

            <p className="mb-3 text-[10px] font-bold uppercase tracking-[6px] text-orange-500 sm:text-xs">
              FAQ
            </p>

            <h2 className="text-3xl font-bold leading-[1.1] text-[#0f224a] sm:text-4xl lg:text-[45px]">
              Questions About
              <br />
              <span className="text-orange-500">
                School Life & Learning.
              </span>
            </h2>

          </div>

          {/* RIGHT */}
          <div className="lg:pl-16 py-8">

            <p className="max-w-md text-sm leading-7 text-gray-500 sm:text-base">
              Find quick answers about academics, activities,
              student support, and school facilities.
            </p>

          </div>

        </div>

        {/* GRID */}
        <div className="grid gap-x-8 gap-y-14 md:grid-cols-2 lg:gap-x-10 lg:gap-y-16">

          {faqs.map((faq, index) => {
            const isLeftColumn = index % 2 === 0;

            return (
              <div
                key={index}
                className="relative group w-full"
              >

                {/* DOTTED LINE */}
                <div
                  className={`absolute hidden w-20 border-t-2 border-dotted border-gray-200 lg:block ${
                    isLeftColumn
                      ? "-top-4 right-10"
                      : "-bottom-4 left-10"
                  }`}
                />

                {/* CARD */}
                <div
                  className={`relative border-2 bg-white p-5 sm:p-6 lg:p-8 transition-all duration-300 hover:shadow-xl ${faq.borderColor} ${
                    isLeftColumn
                      ? "rounded-[38px] rounded-br-none text-left"
                      : "rounded-[38px] rounded-tl-none text-right"
                  }`}
                >

                  {/* TITLE */}
                  <h3
                    className={`mb-3 text-base font-bold uppercase tracking-wider sm:text-lg ${faq.textColor}`}
                  >
                    {faq.question}
                  </h3>

                  {/* ANSWER */}
                  <p
                    className={`max-w-[260px] text-sm leading-6 text-gray-500 sm:text-[15px] ${
                      !isLeftColumn ? "ml-auto" : ""
                    }`}
                  >
                    {faq.answer}
                  </p>

                  {/* ICON */}
                  <div
                    className={`absolute flex h-16 w-16 sm:h-20 sm:w-20 items-center justify-center rounded-full border-2 bg-white transition-transform duration-300 group-hover:scale-110 ${faq.borderColor} ${faq.textColor} ${
                      isLeftColumn
                        ? "-bottom-8 sm:-bottom-10 -right-3 sm:-right-5"
                        : "-top-8 sm:-top-10 -left-3 sm:-left-5"
                    }`}
                  >

                    <div className={`rounded-full p-2 sm:p-3 ${faq.iconBg}`}>
                      {faq.icon}
                    </div>

                  </div>

                </div>

              </div>
            );
          })}

        </div>

      </div>
    </section>
    );      
}