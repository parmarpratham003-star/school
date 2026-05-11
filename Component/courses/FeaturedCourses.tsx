"use client";

import { useState, useEffect } from "react";

const subjectImages: Record<string, string> = {
  "English Grammar": "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=800&auto=format&fit=crop",
  "Basic Mathematics": "https://images.unsplash.com/photo-1509228468518-180dd4864904?q=80&w=800&auto=format&fit=crop",
  "EVS (Environmental Studies)": "https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?q=80&w=800&auto=format&fit=crop",
  "Drawing & Coloring": "https://images.unsplash.com/photo-1513364776144-60967b0f800f?q=80&w=800&auto=format&fit=crop",
  "General Knowledge": "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?q=80&w=800&auto=format&fit=crop",
  "Moral Education": "https://images.unsplash.com/photo-1529390079861-591de354fafa?q=80&w=800&auto=format&fit=crop",
  "Science": "https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=800&auto=format&fit=crop",
  "Mathematics": "https://images.unsplash.com/photo-1509228468518-180dd4864904?q=80&w=800&auto=format&fit=crop",
  "English Literature": "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=800&auto=format&fit=crop",
  "Social Science": "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=800&auto=format&fit=crop",
  "Computer Basics": "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=800&auto=format&fit=crop",
  "Hindi / Regional Language": "https://images.unsplash.com/photo-1471107340929-a87cd0f5b5f3?q=80&w=800&auto=format&fit=crop",
  "Physics": "https://images.unsplash.com/photo-1636466497217-26a8cbeaf0aa?q=80&w=800&auto=format&fit=crop",
  "Chemistry": "https://images.unsplash.com/photo-1576086213369-97a306d36557?q=80&w=800&auto=format&fit=crop",
  "Biology": "https://images.unsplash.com/photo-1532187643603-ba119ca4109e?q=80&w=800&auto=format&fit=crop",
  "Advanced Mathematics": "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?q=80&w=800&auto=format&fit=crop",
  "Computer Science": "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=800&auto=format&fit=crop",
  "History & Geography": "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?q=80&w=800&auto=format&fit=crop",
  "Accountancy": "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=800&auto=format&fit=crop",
  "Business Studies": "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=800&auto=format&fit=crop",
  "Economics": "https://images.unsplash.com/photo-1556740749-887f6717d7e4?q=80&w=800&auto=format&fit=crop",
  "Statistics": "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop",
  "Entrepreneurship": "https://images.unsplash.com/photo-1559136555-9303baea8ebd?q=80&w=800&auto=format&fit=crop",
  "Informatics Practices": "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=800&auto=format&fit=crop",
  "Political Science": "https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?q=80&w=800&auto=format&fit=crop",
  "Psychology": "https://images.unsplash.com/photo-1491841550275-ad7854e35ca6?q=80&w=800&auto=format&fit=crop",
  "Sociology": "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=800&auto=format&fit=crop",
  "History": "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?q=80&w=800&auto=format&fit=crop",
  "Geography": "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=800&auto=format&fit=crop",
  "Fine Arts": "https://images.unsplash.com/photo-1513364776144-60967b0f800f?q=80&w=800&auto=format&fit=crop",
  "Physical Education": "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=800&auto=format&fit=crop",
};

const subjectDescs: Record<string, string> = {
  "English Grammar": "Improves reading, writing, vocabulary, and communication skills through interactive learning.",
  "Basic Mathematics": "Builds understanding of numbers, counting, operations, and foundational problem-solving.",
  "EVS (Environmental Studies)": "Explores the natural world, habitats, ecology, and our relationship with the environment.",
  "Drawing & Coloring": "Encourages creativity, imagination, color recognition, and artistic expression.",
  "General Knowledge": "Broadens awareness of current events, science, geography, history, and everyday facts.",
  "Moral Education": "Instills values, ethics, empathy, and responsible decision-making in young learners.",
  "Science": "Introduces scientific concepts through activities, projects, and hands-on experiments.",
  "Mathematics": "Develops logical thinking, numerical fluency, and problem-solving through core math topics.",
  "English Literature": "Improves reading, storytelling, critical writing, and speaking confidence.",
  "Social Science": "Explores society, history, civics, and geography to understand the world around us.",
  "Computer Basics": "Introduces typing, hardware, internet awareness, and fundamental digital tools.",
  "Hindi / Regional Language": "Builds reading, writing, and communication skills in the regional language.",
  "Physics": "Explains energy, electricity, motion, forces, and practical scientific principles.",
  "Chemistry": "Focuses on elements, reactions, compounds, and laboratory experiments.",
  "Biology": "Covers living organisms, ecosystems, anatomy, genetics, and environmental science.",
  "Advanced Mathematics": "Explores algebra, geometry, statistics, and foundational calculus concepts.",
  "Computer Science": "Introduces programming logic, algorithms, software basics, and computational thinking.",
  "History & Geography": "Studies civilizations, global geography, historical events, and cultural heritage.",
  "Accountancy": "Teaches bookkeeping, balance sheets, accounting principles, and financial records.",
  "Business Studies": "Introduces management, marketing, entrepreneurship, and organizational leadership.",
  "Economics": "Explains markets, trade, macroeconomics, and financial decision-making frameworks.",
  "Statistics": "Covers data collection, probability, distributions, and statistical analysis methods.",
  "Entrepreneurship": "Develops business ideation, planning, risk management, and startup thinking skills.",
  "Informatics Practices": "Covers databases, networking, Python programming, and digital infrastructure basics.",
  "Political Science": "Explains government systems, constitutions, democracy, and public administration.",
  "Psychology": "Studies emotions, personality, human behavior, cognition, and mental processes.",
  "Sociology": "Examines social institutions, culture, group behavior, and societal structures.",
  "History": "Traces civilizations, revolutions, empires, and key turning points in world history.",
  "Geography": "Studies landforms, climates, resources, human settlements, and global geography.",
  "Fine Arts": "Encourages painting, sketching, design thinking, and expressive artistic creation.",
  "Physical Education": "Promotes fitness, sports, teamwork, health awareness, and physical well-being.",
};

const data = [
  {
    category: "Primary School",
    subjects: [
      "English Grammar",
      "Basic Mathematics",
      "EVS (Environmental Studies)",
      "Drawing & Coloring",
      "General Knowledge",
      "Moral Education",
    ],
  },
  {
    category: "Middle School",
    subjects: [
      "Science",
      "Mathematics",
      "English Literature",
      "Social Science",
      "Computer Basics",
      "Hindi / Regional Language",
    ],
  },
  {
    category: "Secondary School",
    subjects: [
      "Physics",
      "Chemistry",
      "Biology",
      "Advanced Mathematics",
      "Computer Science",
      "History & Geography",
    ],
  },
  {
    category: " Science Stream",
    subjects: [
      "Physics",
      "Chemistry",
      "Biology",
      "Mathematics",
      "Computer Science",
      "Physical Education",
    ],
  },
  {
    category: "Commerce Stream",
    subjects: [
      "Accountancy",
      "Business Studies",
      "Economics",
      "Statistics",
      "Entrepreneurship",
      "Informatics Practices",
    ],
  },
  {
    category: "Arts Stream  ",
    subjects: [
      "Political Science",
      "Psychology",
      "Sociology",
      "History",
      "Geography",
      "Fine Arts",
    ],
  },
];

const fallbackImage =
  "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=800&auto=format&fit=crop";
const fallbackDesc =
  "Comprehensive subject coverage designed for effective learning outcomes.";

function CourseCard({
  subject,
  index,
  tabKey,
}: {
  subject: string;
  index: number;
  tabKey: number;
}) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(false);
    const timer = setTimeout(() => {
      setVisible(true);
    }, index * 80);
    return () => clearTimeout(timer);
  }, [tabKey, index]);

  const image = subjectImages[subject] ?? fallbackImage;
  const desc = subjectDescs[subject] ?? fallbackDesc;

  return (
    <div
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0px) scale(1)" : "translateY(28px) scale(0.97)",
        transition: "opacity 0.5s ease, transform 0.5s ease",
      }}
      className="group bg-white overflow-hidden shadow-sm hover:shadow-2xl transition-shadow duration-500 flex flex-row h-[148px] cursor-pointer"
    >
      {/* Left — Image */}
      <div className="w-[130px] sm:w-[150px] flex-shrink-0 overflow-hidden relative">
        <img
          src={image}
          alt={subject}
          className="w-full h-full object-cover transition-all duration-700 group-hover:brightness-75 group-hover:saturate-150"
        />

      </div>

      {/* Right — Content */}
      <div className="flex flex-col justify-center px-5 py-4 flex-1 border-l-[3px] border-transparent group-hover:border-[#ff6b00] transition-all duration-300 overflow-hidden">
        <h3 className="text-[#14285f] text-[16px] sm:text-[18px] font-bold leading-tight mb-2 group-hover:text-[#ff6b00] transition-colors duration-300 truncate">
          {subject}
        </h3>
        <p className="text-[#7b7b7b] text-[12px] leading-[1.7] line-clamp-2">
          {desc}
        </p>
      </div>
    </div>
  );
}

export default function FeaturedCourses() {
  const [activeTab, setActiveTab] = useState("Primary School");
  const [animKey, setAnimKey] = useState(0);

  const activeData = data.find((d) => d.category === activeTab);

  function handleTab(cat: string) {
    if (cat === activeTab) return;
    setActiveTab(cat);
    setAnimKey((k: number) => k + 1);
  }

  return (
    <section className="relative py-20 sm:py-24 bg-[#f7f7f7] overflow-hidden">
      {/* Font */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Barlow:wght@400;500;600;700&display=swap');
        * { font-family: 'Barlow', sans-serif; }
      `}</style>

      <div className="px-4 sm:px-6 lg:px-14">
{/* Heading */}
<div className="text-center max-w-[850px] mx-auto mb-12">

  <p className="text-[#ff6b00] uppercase tracking-[0.22em] text-sm font-semibold mb-4">
    FEATURED COURSES
  </p>

  <h2 className="text-[#14285f] text-[40px] sm:text-[54px] lg:text-[55px] leading-[1.05] font-medium">

    Academic{" "}

    <span className="text-[#ff6b00]">
      Programs
    </span>

  </h2>

  <p className="mt-5 text-[#6b7280] text-[15px] sm:text-[14px] leading-5 max-w-[750px] mx-auto">
  Explore structured academic programs designed to build creativity, confidence, practical skills, and future-ready learning.
</p>

</div>

       {/* TABS */}
<div className="flex flex-wrap justify-center gap-8 sm:gap-10 border-b border-gray-200 mb-14">

  {data.map((d, index) => (
    <button
      key={index}
      onClick={() => handleTab(d.category)}
      className={`relative pb-4 text-[15px] sm:text-[16px] font-medium transition-all duration-300 ${
        activeTab === d.category
          ? "text-[#14285f]"
          : "text-[#7b7b7b] hover:text-[#14285f]"
      }`}
    >

      {d.category}

      {/* ACTIVE LINE */}
      <span
        className={`absolute left-0 -bottom-[1px] h-[3px] bg-[#ff6b00] transition-all duration-300 ${
          activeTab === d.category
            ? "w-full"
            : "w-0"
        }`}
      />

    </button>
  ))}

</div>
        {/* Cards Grid — 2-column horizontal card layout */}
        <div className="grid sm:grid-cols-2 gap-5 max-w-5xl mx-auto">
          {activeData?.subjects.map((subject, index) => (
            <CourseCard
              key={`${activeTab}-${subject}-${index}`}
              subject={subject}
              index={index}
              tabKey={animKey}
            />
          ))}
        </div>

      </div>
    </section>
  );
}