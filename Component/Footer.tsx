"use client";

import {
  GraduationCap,
  MapPin,
  Phone,
  Mail,
  ArrowUpRight,
} from "lucide-react";

const FacebookIcon = () => (
  <svg viewBox="0 0 24 24" width="17" height="17" fill="currentColor">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const InstagramIcon = () => (
  <svg
    viewBox="0 0 24 24"
    width="17"
    height="17"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
  </svg>
);

const XIcon = () => (
  <svg viewBox="0 0 24 24" width="17" height="17" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const LinkedinIcon = () => (
  <svg viewBox="0 0 24 24" width="17" height="17" fill="currentColor">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export default function Footer() {
  const socialIcons = [
    { icon: FacebookIcon, href: "#" },
    { icon: InstagramIcon, href: "#" },
    { icon: XIcon, href: "#" },
    { icon: LinkedinIcon, href: "#" },
  ];

  return (
    <footer className="w-full bg-[#0f1e45] text-white">
      {/* HERO FONT STYLE */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Barlow:wght@400;500;600&family=Lato:wght@300;400;500;600;700;800;900&display=swap');

        *{
          font-family:'Lato',sans-serif;
        }

        .hero-font{
          font-family:'Barlow',sans-serif;
          font-weight:500;
          letter-spacing:-0.03em;
        }

        .body-font{
          font-family:'Lato',sans-serif;
        }

        @keyframes slideLeft {
          from { opacity: 0; transform: translateX(-40px); }
          to   { opacity: 1; transform: translateX(0); }
        }

        @keyframes slideRight {
          from { opacity: 0; transform: translateX(40px); }
          to   { opacity: 1; transform: translateX(0); }
        }

        @keyframes shine {
          0%   { background-position: 160% center; }
          100% { background-position: -20% center; }
        }
      `}</style>

      {/* TOP SECTION */}
      <div className="px-4 sm:px-6 lg:px-10 py-12 sm:py-14 body-font">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">

          {/* LOGO */}
          <div className="animate-[slideLeft_0.6s_cubic-bezier(0.22,1,0.36,1)_both]">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-[42px] h-[42px] rounded-[3px] bg-[#f97316] flex items-center justify-center shadow-[0_4px_14px_rgba(249,115,22,0.35)]">
                <GraduationCap size={22} className="text-white" />
              </div>

              <h2 className="hero-font text-[24px] sm:text-[26px]">
                EDUWAVE
              </h2>
            </div>

            <p className="text-slate-300 text-[14px] sm:text-[15px] leading-7">
              Empowering students with quality education, discipline,
              and future-ready learning in a modern environment.
            </p>

            <div className="flex items-center gap-3 mt-6">
              {socialIcons.map(({ icon: Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  className="w-10 h-10 rounded-[3px] bg-white/10 flex items-center justify-center hover:bg-[#f97316] hover:shadow-[0_0_18px_rgba(249,115,22,0.5)] transition-all duration-300 relative overflow-hidden group"
                >
                  <Icon />

                  <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-500 bg-[linear-gradient(120deg,transparent_0%,rgba(255,255,255,0.25)_50%,transparent_100%)] skew-x-[-20deg]" />
                </a>
              ))}
            </div>
          </div>

          {/* QUICK LINKS */}
          <div className="animate-[slideLeft_0.6s_cubic-bezier(0.22,1,0.36,1)_100ms_both]">
            <h3 className="hero-font text-[22px] mb-5">
              Quick Links
            </h3>

            <ul className="space-y-3 text-slate-300 text-[14px] sm:text-[15px]">
              {["Home", "About Us", "Courses", "Contact"].map((item, i) => (
                <li key={i}>
                  <a
                    href="#"
                    className="relative inline-block bg-[length:250%_100%] transition-all duration-300 hover:text-transparent hover:bg-clip-text hover:[-webkit-background-clip:text] hover:bg-[linear-gradient(105deg,#f97316_0%,#f97316_25%,#ffd4a8_44%,#ffffff_50%,#ffd4a8_56%,#f97316_75%,#f97316_100%)] hover:animate-[shine_0.6s_ease_forwards]"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* PROGRAMS */}
          <div className="animate-[slideRight_0.6s_cubic-bezier(0.22,1,0.36,1)_100ms_both]">
            <h3 className="hero-font text-[22px] mb-5">
              School Programs
            </h3>

            <ul className="space-y-3 text-slate-300 text-[14px] sm:text-[15px]">
              {[
                "Primary Education",
                "Secondary Classes",
                "Science Stream",
                "Commerce Stream",
                "Sports Activities",
              ].map((item, i) => (
                <li key={i}>
                  <a
                    href="#"
                    className="relative inline-block bg-[length:250%_100%] transition-all duration-300 hover:text-transparent hover:bg-clip-text hover:[-webkit-background-clip:text] hover:bg-[linear-gradient(105deg,#f97316_0%,#f97316_25%,#ffd4a8_44%,#ffffff_50%,#ffd4a8_56%,#f97316_75%,#f97316_100%)] hover:animate-[shine_0.6s_ease_forwards]"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* CONTACT */}
          <div className="animate-[slideRight_0.6s_cubic-bezier(0.22,1,0.36,1)_both]">
            <h3 className="hero-font text-[22px] mb-5">
              Contact Info
            </h3>

            <div className="space-y-4 text-slate-300 text-[14px] sm:text-[15px]">

              <div className="flex items-start gap-3">
                <MapPin size={18} className="text-[#f97316] mt-1 shrink-0" />
                <p>Ahmedabad, Gujarat, India</p>
              </div>

              <div className="flex items-center gap-3">
                <Phone size={18} className="text-[#f97316] shrink-0" />
                <p>+91 98765 43210</p>
              </div>

              <div className="flex items-center gap-3">
                <Mail size={18} className="text-[#f97316] shrink-0" />
                <p>info@eduwave.com</p>
              </div>
            </div>

            <button className="mt-6 relative overflow-hidden bg-[#f97316] hover:bg-white hover:text-[#f97316] text-white px-5 py-3 rounded-[3px] text-[13px] font-bold uppercase tracking-wide flex items-center gap-2 transition-all duration-300 group">
              <span className="relative z-10 flex items-center gap-2">
                Enroll Now
                <ArrowUpRight size={15} />
              </span>

              <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-500 bg-[linear-gradient(120deg,transparent_0%,rgba(255,255,255,0.3)_50%,transparent_100%)] skew-x-[-20deg]" />
            </button>
          </div>
        </div>
      </div>

      {/* BOTTOM */}
      <div className="border-t border-white/10 body-font">
        <div className="px-4 sm:px-6 lg:px-10 py-5 flex flex-col md:flex-row items-center justify-center gap-3">
          <p className="text-slate-400 text-[13px] sm:text-[14px] text-center">
            © 2026 EDUWAVE. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}