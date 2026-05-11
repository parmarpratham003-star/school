"use client";

import React, { useState } from "react";
import {
  BookOpen,
  GraduationCap,
  School,
  Library,
  ChevronDown,
} from "lucide-react";

export default function CourseCategories() {

  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const categories = [
    {
      icon: <BookOpen size={28} />,
      title: "Primary School",
      age: "Classes 1 - 5",
      department: "Foundation Learning",
      courses: [
        "Basic Mathematics",
        "English Grammar",
        "Creative Drawing",
        "Science Activities",
      ],
    },

    {
      icon: <School size={28} />,
      title: "Middle School",
      age: "Classes 6 - 8",
      department: "Skill Development",
      courses: [
        "Advanced Science",
        "Computer Basics",
        "Language Skills",
        "Mathematics",
      ],
    },

    {
      icon: <Library size={28} />,
      title: "Secondary School",
      age: "Classes 9 - 10",
      department: "Academic Excellence",
      courses: [
        "Physics",
        "Chemistry",
        "Biology",
        "Social Studies",
      ],
    },

    {
      icon: <GraduationCap size={28} />,
      title: "Higher Secondary",
      age: "Classes 11 - 12",
      department: "Career Preparation",
      courses: [
        "Commerce",
        "Computer Science",
        "Arts & Humanities",
        "Entrance Preparation",
      ],
    },
  ];

  return (
    <section className="relative overflow-hidden">

      {/* FONT */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Barlow:wght@400;500;600;700&display=swap');

        *{
          font-family: 'Barlow', sans-serif;
        }
      `}</style>

      <div className="grid lg:grid-cols-2 min-h-[850px]">

        {/* LEFT IMAGE */}
        <div className="relative">

          <img
            src="AC3.png"
            alt="Students"
            className="w-full h-full object-cover"
          />

          {/* OVERLAY */}
          <div className="absolute inset-0 bg-[#14285f]/45"></div>

          {/* CONTENT */}
          <div className="absolute bottom-10 left-6 sm:left-10 max-w-[520px] z-10">

            <p className="text-[#ff6b00] uppercase tracking-[0.18em] text-sm font-semibold mb-4">
              Learning Programs
            </p>

            <h2 className="text-white text-[34px] sm:text-[48px] leading-[1.08] font-medium">
              Explore Courses
              <br />
              For Every Level
            </h2>

            <p className="mt-5 text-gray-200 text-sm sm:text-base leading-8">
              Inspiring students with engaging education,
              creativity, and practical learning experiences.
            </p>

          </div>

        </div>

        {/* RIGHT SIDE */}
        <div className="relative bg-[#14285f]">

          {/* BG EFFECT */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#14285f] via-[#1d3571] to-[#14285f]"></div>

          <div className="relative z-10 p-6 sm:p-10 lg:p-14">

            {/* TITLE */}
            <h3 className="text-white text-[34px] sm:text-[42px] font-medium mb-10">
              Course Categories
            </h3>

            {/* ACCORDION */}
            <div className="space-y-5">

              {categories.map((item, index) => {

                const isOpen = openIndex === index;

                return (
                  <div
                    key={index}
                    className="bg-[#43547d] rounded-2xl overflow-hidden transition-all duration-300"
                  >

                    {/* HEADER */}
                    <button
                      onClick={() =>
                        setOpenIndex(isOpen ? null : index)
                      }
                      className="w-full flex items-center justify-between gap-4 p-6 text-left"
                    >

                      <div className="flex items-center gap-4">

                        {/* ICON */}
                        <div className="w-14 h-14 rounded-xl bg-[#ff6b00] flex items-center justify-center text-white shrink-0">
                          {item.icon}
                        </div>

                        {/* TEXT */}
                        <div>

                          <h4 className="text-white text-[24px] font-medium">
                            {item.title}
                          </h4>

                          <p className="text-[#ff6b00] text-sm mt-1">
                            {item.age}
                          </p>

                        </div>

                      </div>

                      {/* ARROW */}
                      <ChevronDown
                        size={24}
                        className={`text-white transition-all duration-300 ${
                          isOpen ? "rotate-180" : ""
                        }`}
                      />

                    </button>

                    {/* DROPDOWN */}
                    <div
                      className={`grid transition-all duration-500 ease-in-out ${
                        isOpen
                          ? "grid-rows-[1fr]"
                          : "grid-rows-[0fr]"
                      }`}
                    >

                      <div className="overflow-hidden">

                        <div className="px-6 pb-6">

                          {/* DEPARTMENT */}
                          <div className="mb-5">

                            <p className="text-[#ff6b00] text-sm uppercase tracking-[0.12em] mb-2">
                              Department
                            </p>

                            <h5 className="text-white text-[20px] font-medium">
                              {item.department}
                            </h5>

                          </div>

                          {/* COURSES */}
                          <div className="flex flex-wrap gap-3">

                            {item.courses.map((course, i) => (
                              <div
                                key={i}
                                className="px-4 py-2 rounded-full bg-white/10 border border-white/10"
                              >

                                <p className="text-gray-200 text-sm">
                                  {course}
                                </p>

                              </div>
                            ))}

                          </div>

                        </div>

                      </div>

                    </div>

                  </div>
                );
              })}

            </div>

          </div>
        </div>
      </div>
    </section>
  );
}