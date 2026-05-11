"use client";

import { useState, useEffect, useRef } from "react";

const subjectImages: Record<string, string> = {
  "English Grammar": "https://i.pinimg.com/736x/f3/89/1f/f3891ffa4d11cb4575da8f5621258e88.jpg",
  "Basic Mathematics": "https://i.pinimg.com/1200x/cc/e6/b2/cce6b2d5ba2e04f366bc35594b23bea7.jpg",
  "EVS (Environmental Studies)": "https://i.pinimg.com/736x/a8/c8/d6/a8c8d6732dc77a2d44a4011588f22aae.jpg",
  "Drawing & Coloring": "https://images.unsplash.com/photo-1513364776144-60967b0f800f?q=80&w=800&auto=format&fit=crop",
  "General Knowledge": "https://i.pinimg.com/736x/49/79/f2/4979f227800183e6d86bd91a39ec5fb3.jpg",
  "Moral Education": "https://i.pinimg.com/736x/72/93/08/7293086d0aa277535789f293fc2925dd.jpg",
  "Science": "https://i.pinimg.com/736x/3a/b3/d6/3ab3d6865a60d53f7a3ba3b0618992be.jpg",
  "Mathematics": "https://i.pinimg.com/736x/e8/5f/67/e85f67e3d1ac38ab105fd033d975031e.jpg",
  "English Literature": "https://i.pinimg.com/736x/c2/51/a5/c251a5015ebc9a358786804cb341c000.jpg",
  "Social Science": "https://i.pinimg.com/736x/ed/7d/45/ed7d45d2804fdf8dee651b575bb22d97.jpg",
  "Computer Basics": "https://i.pinimg.com/1200x/f0/c6/40/f0c6404fddba90eb52a173e388c6b501.jpg",
  "Hindi / Regional Language": "https://i.pinimg.com/736x/a8/ff/69/a8ff69f504736e6377c08483f456316b.jpg",
  "Physics": "https://i.pinimg.com/736x/38/d2/56/38d2569a0131ec1f8d6414fcc2096e4a.jpg",
  "Chemistry": "https://i.pinimg.com/736x/db/d6/71/dbd671872d58802732652ed49697c86b.jpg",
  "Biology": "https://i.pinimg.com/736x/0e/08/af/0e08af7e72c939427e85866f312a2310.jpg",
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
    subjects: ["English Grammar","Basic Mathematics","EVS (Environmental Studies)","Drawing & Coloring","General Knowledge","Moral Education"],
  },
  {
    category: "Middle School",
    subjects: ["Science","Mathematics","English Literature","Social Science","Computer Basics","Hindi / Regional Language"],
  },
  {
    category: "Science Stream",
    subjects: ["Physics","Chemistry","Biology","Mathematics","Computer Science","Physical Education"],
  },
  {
    category: "Commerce Stream",
    subjects: ["Accountancy","Business Studies","Economics","Statistics","Entrepreneurship","Informatics Practices"],
  },
  {
    category: "Arts Stream",
    subjects: ["Political Science","Psychology","Sociology","History","Geography","Fine Arts"],
  },
];

const fallbackImage = "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=800&auto=format&fit=crop";
const fallbackDesc = "Comprehensive subject coverage designed for effective learning outcomes.";

// ── Card ──────────────────────────────────────────────────────────────────
function CourseCard({ subject, index, tabKey }: { subject: string; index: number; tabKey: number }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(false);
    const t = setTimeout(() => setVisible(true), index * 80);
    return () => clearTimeout(t);
  }, [tabKey, index]);

  const image = subjectImages[subject] ?? fallbackImage;
  const desc = subjectDescs[subject] ?? fallbackDesc;

  return (
    <div
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateX(0px)" : "translateX(-40px)",
        transition: `opacity 0.5s ease ${index * 60}ms, transform 0.5s cubic-bezier(0.22,1,0.36,1) ${index * 60}ms`,
      }}
      className="group bg-white overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-400 flex flex-row cursor-pointer h-[130px] sm:h-[148px]"
      onMouseEnter={(e) => {
        const h3 = e.currentTarget.querySelector("h3") as HTMLElement | null;
        if (h3) { h3.style.backgroundSize = "100% 2px"; h3.style.color = "#ff6b00"; }
      }}
      onMouseLeave={(e) => {
        const h3 = e.currentTarget.querySelector("h3") as HTMLElement | null;
        if (h3) { h3.style.backgroundSize = "0% 2px"; h3.style.color = "#14285f"; }
      }}
    >
      {/* Image */}
      <div className="w-[110px] sm:w-[140px] flex-shrink-0 overflow-hidden">
        <img src={image} alt={subject} className="w-full h-full object-cover" style={{ height: "100%" }} />
      </div>

      {/* Content */}
      <div className="flex flex-col justify-center px-4 sm:px-5 py-4 flex-1 overflow-hidden gap-2 min-w-0">
        {/* Title — flex so underline hugs text width */}
        <div className="flex min-w-0">
          <h3
            style={{
              backgroundImage: "linear-gradient(#ff6b00, #ff6b00)",
              backgroundRepeat: "no-repeat",
              backgroundSize: "0% 2px",
              backgroundPosition: "left bottom",
              paddingBottom: "2px",
              transition: "color 0.3s ease, background-size 0.3s ease",
              color: "#14285f",
              fontSize: "clamp(14px, 2.5vw, 17px)",
              fontWeight: 700,
              lineHeight: 1.3,
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
              maxWidth: "100%",
            }}
          >
            {subject}
          </h3>
        </div>

        <p className="text-[#7b7b7b] text-[11px] sm:text-[12px] leading-[1.7] line-clamp-2">
          {desc}
        </p>
      </div>
    </div>
  );
}

// ── Scrollable tab bar ────────────────────────────────────────────────────
function TabBar({ categories, activeTab, onSelect }: { categories: string[]; activeTab: string; onSelect: (c: string) => void }) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const activeRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    if (activeRef.current && scrollRef.current) {
      const c = scrollRef.current;
      const b = activeRef.current;
      c.scrollTo({ left: b.offsetLeft - c.offsetWidth / 2 + b.offsetWidth / 2, behavior: "smooth" });
    }
  }, [activeTab]);

  return (
    <div className="relative mb-10 sm:mb-14">
      <div
        ref={scrollRef}
        className="flex overflow-x-auto border-b border-gray-200"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        <style>{`.tab-scroll::-webkit-scrollbar{display:none}`}</style>
        <div className="flex sm:justify-center min-w-full px-4 sm:px-0">
          {categories.map((cat) => {
            const isActive = cat === activeTab;
            return (
              <button
                key={cat}
                ref={isActive ? activeRef : null}
                onClick={() => onSelect(cat)}
                className="relative flex-shrink-0 px-4 sm:px-6 pb-3.5 pt-1 text-[13px] sm:text-[15px] font-medium whitespace-nowrap transition-colors duration-200"
                style={{ color: isActive ? "#14285f" : "#9ca3af" }}
              >
                {cat}
                <span
                  className="absolute left-0 bottom-[-1px] h-[2.5px] rounded-t bg-[#ff6b00]"
                  style={{ width: isActive ? "100%" : "0%", transition: "width 0.3s ease" }}
                />
              </button>
            );
          })}
        </div>
      </div>
      {/* Mobile fade edges */}
      <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-6 bg-gradient-to-r from-[#f7f7f7] to-transparent sm:hidden" />
      <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-6 bg-gradient-to-l from-[#f7f7f7] to-transparent sm:hidden" />
    </div>
  );
}

// ── Main ──────────────────────────────────────────────────────────────────
export default function FeaturedCourses() {
  const [activeTab, setActiveTab] = useState(data[0].category);
  const [animKey, setAnimKey] = useState(0);
  const [headingVisible, setHeadingVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  // Trigger heading animation when section enters viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setHeadingVisible(true); },
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const activeData = data.find((d) => d.category === activeTab);

  function handleTab(cat: string) {
    if (cat === activeTab) return;
    setActiveTab(cat);
    setAnimKey((k) => k + 1);
  }

  return (
    <section ref={sectionRef} className="relative py-16 sm:py-24 bg-[#f7f7f7] overflow-hidden">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Barlow:wght@400;500;600;700&display=swap');
        * { font-family: 'Barlow', sans-serif; }
        .tab-scroll::-webkit-scrollbar { display: none; }

        @keyframes slideLeft {
          from { opacity: 0; transform: translateX(-48px); }
          to   { opacity: 1; transform: translateX(0); }
        }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(18px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        .anim-eyebrow  { animation: slideLeft 0.55s cubic-bezier(0.22,1,0.36,1) both; }
        .anim-word-1   { animation: slideLeft 0.6s cubic-bezier(0.22,1,0.36,1) 0.1s both; }
        .anim-word-2   { animation: slideLeft 0.6s cubic-bezier(0.22,1,0.36,1) 0.22s both; }
        .anim-subtitle { animation: fadeUp   0.6s ease 0.38s both; }

        .anim-paused { animation-play-state: paused; }
        .anim-running { animation-play-state: running; }
      `}</style>

      <div className="px-4 sm:px-6 lg:px-14">

        {/* ── Heading ── */}
        <div className="text-center max-w-[850px] mx-auto mb-10 sm:mb-14 overflow-hidden">

          <p className={`text-[#ff6b00] uppercase tracking-[0.22em] text-[11px] sm:text-sm font-semibold mb-4 anim-eyebrow ${headingVisible ? "anim-running" : "anim-paused"}`}
            style={{ opacity: headingVisible ? undefined : 0 }}>
            FEATURED COURSES
          </p>

          <h2 className="text-[#14285f] text-[32px] sm:text-[50px] lg:text-[58px] leading-[1.08] font-medium flex flex-wrap justify-center gap-x-3 sm:gap-x-4">
            <span
              className={`inline-block anim-word-1 ${headingVisible ? "anim-running" : "anim-paused"}`}
              style={{ opacity: headingVisible ? undefined : 0 }}
            >
              Academic
            </span>
            <span
              className={`inline-block text-[#ff6b00] anim-word-2 ${headingVisible ? "anim-running" : "anim-paused"}`}
              style={{ opacity: headingVisible ? undefined : 0 }}
            >
              Programs
            </span>
          </h2>

          <p
            className={`mt-4 sm:mt-5 text-[#6b7280] text-[13px] sm:text-[15px] leading-[1.8] max-w-[680px] mx-auto anim-subtitle ${headingVisible ? "anim-running" : "anim-paused"}`}
            style={{ opacity: headingVisible ? undefined : 0 }}
          >
            Explore structured academic programs designed to build creativity,
            confidence, practical skills, and future-ready learning.
          </p>
        </div>

        {/* ── Tabs ── */}
        <TabBar
          categories={data.map((d) => d.category)}
          activeTab={activeTab}
          onSelect={handleTab}
        />

        {/* ── Cards ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6 max-w-5xl mx-auto">
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