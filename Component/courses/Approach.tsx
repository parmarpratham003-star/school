    "use client";

    import React, { useState, useEffect, useRef } from "react";

    export default function Approach() {
    const [hovered, setHovered] = useState<number | null>(null);
    const [mounted, setMounted] = useState(false);
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => { setMounted(true); }, []);

    useEffect(() => {
        if (!mounted) return;

        const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
            if (!entry.isIntersecting) return;

            const els =
                sectionRef.current?.querySelectorAll<HTMLElement>("[data-reveal]");
            if (!els) return;

            els.forEach((el) => {
                const delay = parseInt(el.dataset.delay || "0");
                setTimeout(() => {
                el.style.opacity = "1";
                el.style.transform = "translateX(0)";
                }, delay);
            });

            observer.disconnect();
            });
        },
        { threshold: 0.15 }
        );

        if (sectionRef.current) observer.observe(sectionRef.current);
        return () => observer.disconnect();
    }, [mounted]);

    // Reveal animation — unchanged
    const revealStyle: React.CSSProperties = {
        opacity: 0,
        transform: "translateX(-50px)",
        transition:
        "opacity 0.85s cubic-bezier(0.22,1,0.36,1), transform 0.85s cubic-bezier(0.22,1,0.36,1)",
    };

    const cards = [
        {
        id: "01",
        title: "Balanced Learning",
        desc: "We combine academics, creativity, and practical understanding for confident student growth. Focused on purity, integrity, and alignment with natural learning.",
        image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=900&q=80",
        },
        {
        id: "02",
        title: "Creative Development",
        desc: "Students build confidence through activities, teamwork, communication, and skill-based learning. No hidden processes — just honest, traceable practices you can trust.",
        image: "https://images.unsplash.com/photo-1560785496-3c9d27877182?w=900&q=80",
        },
        {
        id: "03",
        title: "Academic Excellence",
        desc: "Structured programs for Primary, Middle, and Secondary students. Preserving tradition while ensuring fair practices and long-term academic sustainability.",
        image: "https://images.unsplash.com/photo-1491841651911-c44c30c34548?w=900&q=80",
        },
    ];

    return (
        <>
        <style>{`
            @import url('https://fonts.googleapis.com/css2?family=Lato:wght@300;400;500;600;700&display=swap');
            @import url('https://fonts.googleapis.com/css2?family=Barlow:wght@400;500;600;700&display=swap');
            * { font-family: 'Lato', sans-serif; }

            /* ── Desktop accordion grid ── */
            .approach-desktop {
            display: none;
            gap: 12px;
            height: 340px;
            }

            /* ── Each accordion card ── */
            .approach-card {
            position: relative;
            overflow: hidden;
            cursor: pointer;
            min-width: 0;
            border-radius: 3px;
            border: 3px solid #f0f0f0;
            flex: 1;
            transition: flex 0.65s cubic-bezier(0.4,0,0.2,1);
            }
            .approach-card.is-hovered { flex: 2.4; }
            .approach-card.is-shrunk  { flex: 0.5; }

            .approach-card img {
            position: absolute;
            inset: 0; width: 100%; height: 100%;
            object-fit: cover;
            transition: transform 0.8s cubic-bezier(0.4,0,0.2,1);
            }
            .approach-card.is-hovered img { transform: scale(1.05); }

            .approach-overlay {
            position: absolute;
            inset: 0;
            transition: background 0.5s ease;
            background: linear-gradient(160deg,rgba(0,0,0,0.08) 0%,rgba(0,0,0,0.38) 55%,rgba(0,0,0,0.68) 100%);
            }
            .approach-card.is-hovered .approach-overlay {
            background: linear-gradient(160deg,rgba(0,0,0,0.12) 0%,rgba(0,0,0,0.45) 48%,rgba(0,0,0,0.78) 100%);
            }

            .approach-card-title {
            font-family: 'Barlow', sans-serif;
            font-weight: 500;
            font-size: 30px;
            line-height: 1.15;
            color: #fff;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            margin-bottom: 0;
            transition: margin-bottom 0.45s ease;
            }
            .approach-card.is-hovered .approach-card-title {
            white-space: normal;
            margin-bottom: 12px;
            }

            .approach-accent {
            height: 2px;
            background: #ff6b00;
            border-radius: 9999px;
            width: 0; opacity: 0; margin-bottom: 0;
            transition: width 0.5s cubic-bezier(0.4,0,0.2,1),
                        opacity 0.5s ease,
                        margin-bottom 0.5s ease;
            }
            .approach-card.is-hovered .approach-accent {
            width: 36px; opacity: 1; margin-bottom: 12px;
            }

            .approach-card-desc {
            font-size: 14px;
            line-height: 1.75;
            color: rgba(255,255,255,0.90);
            overflow: hidden;
            max-height: 0; opacity: 0;
            transition: max-height 0.55s cubic-bezier(0.4,0,0.2,1) 0.1s,
                        opacity 0.45s ease 0.15s;
            }
            .approach-card.is-hovered .approach-card-desc {
            max-height: 140px; opacity: 1;
            }

            @media (min-width: 1024px) {
            .approach-mobile  { display: none; }
            .approach-desktop { display: flex; }
            }
        `}</style>

        {/* py-10 sm:py-12 — reduced from py-16 sm:py-20 | px matches header: px-4 sm:px-6 lg:px-10 */}
        <section ref={sectionRef} className="bg-white pt-6 pb-10 sm:pt-1 sm:pb-12">
            <div className="px-4 sm:px-6 lg:px-10">

            {/* ── HEADING ── */}
            <div className="text-center mb-6 sm:mb-8">

                {/* Orange label */}
                <p
                data-reveal
                data-delay="0"
                style={{
                    ...revealStyle,
                    color: "#ff6b00",
                    marginBottom: "14px",
                }}
                className="text-[13px] font-semibold tracking-[0.18em] uppercase"
                >
                Our Teaching Method
                </p>

                {/* Big heading */}
                <h2
                data-reveal
                data-delay="140"
                style={{
                    ...revealStyle,
                    fontFamily: "'Barlow', sans-serif",
                    fontSize: "clamp(28px, 5vw, 58px)",
                    letterSpacing: "-0.02em",
                }}
                className="font-medium text-[#14285f] leading-[1.1] mb-4"
                >
                Our <span style={{ color: "#ff6b00" }}>Approach</span>
                </h2>

                {/* Subtitle */}
                <p
                data-reveal
                data-delay="300"
                style={revealStyle}
                className="text-[#4b5563] text-[15px] leading-[1.8] max-w-[560px] mx-auto"
                >
                We follow a balanced teaching approach that combines academics,
                creativity, and practical understanding to help every student
                grow confidently.
                </p>
            </div>

            {/* ── MOBILE: stacked cards ── */}
            <div className="approach-mobile flex flex-col gap-3">
                {cards.map((card, index) => (
                <div
                    key={index}
                    data-reveal
                    data-delay={460 + index * 120}
                    style={revealStyle}
                    className="relative overflow-hidden h-[170px] rounded-[3px] border-[3px] border-[#f0f0f0]"
                >
                    <img
                    src={card.image}
                    alt={card.title}
                    className="absolute inset-0 w-full h-full object-cover"
                    />
                    <div
                    className="absolute inset-0"
                    style={{
                        background:
                        "linear-gradient(160deg,rgba(0,0,0,0.08) 0%,rgba(0,0,0,0.40) 50%,rgba(0,0,0,0.72) 100%)",
                    }}
                    />
                    <span
                    className="absolute top-3 right-3 z-10 text-[11px] font-medium tracking-[0.08em] text-white/50"
                    style={{ fontFamily: "'Barlow', sans-serif" }}
                    >
                    {card.id}
                    </span>
                    <div className="absolute bottom-0 left-0 right-0 z-10 px-[18px] pb-5 pt-4">
                    <h3
                        className="font-medium text-[20px] leading-[1.15] text-white mb-1.5"
                        style={{ fontFamily: "'Barlow', sans-serif" }}
                    >
                        {card.title}
                    </h3>
                    <p className="text-[12.5px] leading-[1.65] text-white/85">
                        {card.desc}
                    </p>
                    </div>
                </div>
                ))}
            </div>

            {/* ── DESKTOP: accordion cards ── */}
            <div className="approach-desktop">
                {cards.map((card, index) => {
                const isHovered = mounted && hovered === index;
                const isShrunk = mounted && hovered !== null && hovered !== index;

                return (
                    <div
                    key={index}
                    data-reveal
                    data-delay={460 + index * 120}
                    style={{
                        ...revealStyle,
                        flex: isHovered ? "2.4" : isShrunk ? "0.5" : "1",
                        transition: [
                        "flex 0.65s cubic-bezier(0.4,0,0.2,1)",
                        "opacity 0.85s cubic-bezier(0.22,1,0.36,1)",
                        "transform 0.85s cubic-bezier(0.22,1,0.36,1)",
                        ].join(", "),
                        minWidth: 0,
                    }}
                    className={`approach-card${isHovered ? " is-hovered" : isShrunk ? " is-shrunk" : ""}`}
                    onMouseEnter={() => setHovered(index)}
                    onMouseLeave={() => setHovered(null)}
                    >
                    <img src={card.image} alt={card.title} />
                    <div className="approach-overlay" />

                    <span
                        className="absolute top-4 right-4 z-10 text-[11px] font-medium tracking-[0.08em] text-white/50"
                        style={{ fontFamily: "'Barlow', sans-serif" }}
                    >
                        {card.id}
                    </span>

                    <div className="absolute bottom-0 left-0 right-0 z-10 px-6 pb-[26px] pt-[22px]">
                        <h3 className="approach-card-title">{card.title}</h3>
                        <div className="approach-accent" />
                        <p className="approach-card-desc">{card.desc}</p>
                    </div>
                    </div>
                );
                })}
            </div>

            </div>
        </section>
        </>
    );
    }