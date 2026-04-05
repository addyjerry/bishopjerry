"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const skills = [
  {
    id: 0,
    label: "Web Design",
    image: "/design.png",
    icon: (
      <svg
        className="w-7 h-7 stroke-white fill-none"
        strokeWidth={1.8}
        strokeLinecap="round"
        strokeLinejoin="round"
        viewBox="0 0 24 24"
      >
        <rect x="3" y="3" width="18" height="18" rx="3" />
        <path d="M3 9h18M9 21V9" />
      </svg>
    ),
  },
  {
    id: 1,
    label: "Web Dev",
    image: "/dev.png",
    icon: (
      <svg
        className="w-7 h-7 stroke-white fill-none"
        strokeWidth={1.8}
        strokeLinecap="round"
        strokeLinejoin="round"
        viewBox="0 0 24 24"
      >
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    ),
  },
  {
    id: 2,
    label: "Photography",
    image: "/cam.png",
    icon: (
      <svg
        className="w-7 h-7 stroke-white fill-none"
        strokeWidth={1.8}
        strokeLinecap="round"
        strokeLinejoin="round"
        viewBox="0 0 24 24"
      >
        <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
        <circle cx="12" cy="13" r="4" />
      </svg>
    ),
  },
  {
    id: 3,
    label: "Video Editing",
    image: "/vid.png",
    icon: (
      <svg
        className="w-7 h-7 stroke-white fill-none"
        strokeWidth={1.8}
        strokeLinecap="round"
        strokeLinejoin="round"
        viewBox="0 0 24 24"
      >
        <polygon points="23 7 16 12 23 17 23 7" />
        <rect x="1" y="5" width="15" height="14" rx="2" />
      </svg>
    ),
  },
];

const DESKTOP_SLOTS = [
  { top: "8%",  left: "4%",   rotate: "-8deg"  },
  { top: "6%",  right: "4%",  rotate: "7deg"   },
  { bottom: "8%", left: "6%", rotate: "6deg"   },
  { bottom: "7%", right: "5%", rotate: "-9deg" },
];

const MOBILE_SLOTS = [
  { top: "4%",    left: "1%",  rotate: "-8deg" },
  { top: "4%",    right: "1%", rotate: "7deg"  },
  { bottom: "4%", left: "1%",  rotate: "6deg"  },
  { bottom: "4%", right: "1%", rotate: "-9deg" },
];

const SWAP_PAIRS = [
  [0, 1], [2, 3], [0, 2], [1, 3], [0, 3], [1, 2],
];

type Slot = {
  top?: string;
  bottom?: string;
  left?: string;
  right?: string;
  rotate: string;
};

type CardState = {
  skillId: number;
  slot: Slot;
  visible: boolean;
  entered: boolean;
};

export default function HeroSection() {
  const [isMobile, setIsMobile] = useState(false);
  const [cards, setCards] = useState<CardState[]>([]);
  const orderRef = useRef<number[]>([0, 1, 2, 3]);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 640);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    const slots = isMobile ? MOBILE_SLOTS : DESKTOP_SLOTS;

    // Initial state — all invisible
    const initial: CardState[] = skills.map((s, i) => ({
      skillId: s.id,
      slot: slots[i],
      visible: false,
      entered: false,
    }));
    setCards(initial);

    // Staggered pop-in entrance
    skills.forEach((_, i) => {
      setTimeout(() => {
        setCards((prev) =>
          prev.map((c, idx) =>
            idx === i ? { ...c, visible: true, entered: true } : c
          )
        );
        setTimeout(() => {
          setCards((prev) =>
            prev.map((c, idx) =>
              idx === i ? { ...c, entered: false } : c
            )
          );
        }, 800);
      }, 200 + i * 180);
    });

    // Swap interval
    intervalRef.current = setInterval(() => {
      const pair = SWAP_PAIRS[Math.floor(Math.random() * SWAP_PAIRS.length)];
      const [a, b] = pair;

      // Fade out
      setCards((prev) =>
        prev.map((c, idx) => (idx === a || idx === b ? { ...c, visible: false } : c))
      );

      setTimeout(() => {
        const currentSlots = isMobile ? MOBILE_SLOTS : DESKTOP_SLOTS;
        orderRef.current = [...orderRef.current];
        [orderRef.current[a], orderRef.current[b]] = [
          orderRef.current[b],
          orderRef.current[a],
        ];

        setCards((prev) => {
          const next = [...prev];
          const slotA = next[a].slot;
          const slotB = next[b].slot;
          next[a] = { ...next[a], slot: slotB };
          next[b] = { ...next[b], slot: slotA };
          return next;
        });

        setTimeout(() => {
          setCards((prev) =>
            prev.map((c, idx) =>
              idx === a || idx === b ? { ...c, visible: true } : c
            )
          );
        }, 400);
      }, 400);
    }, 10000);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isMobile]);

  return (
    <>
      <style>{`
        @keyframes popIn {
          0%   { opacity: 0; transform: scale(0.5) rotate(var(--rot)); }
          70%  { opacity: 1; transform: scale(1.08) rotate(var(--rot)); }
          100% { opacity: 1; transform: scale(1) rotate(var(--rot)); }
        }
        .skill-card-entering {
          animation: popIn 0.75s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
        }
        .skill-card-base {
          transition:
            top    1.1s cubic-bezier(0.65,0,0.35,1),
            left   1.1s cubic-bezier(0.65,0,0.35,1),
            right  1.1s cubic-bezier(0.65,0,0.35,1),
            bottom 1.1s cubic-bezier(0.65,0,0.35,1),
            transform 1.1s cubic-bezier(0.65,0,0.35,1),
            opacity 0.9s ease;
        }
      `}</style>

      <section className="relative min-h-[600px] max-w-[1000px] w-full bg-[#f0ede8] rounded-[20px] flex place-self-center items-center justify-center overflow-hidden px-4 py-16">

        {/* Floating skill cards */}
        {cards.map((card, idx) => {
          const skill = skills[card.skillId];
          const { top, bottom, left, right, rotate } = card.slot;

          return (
            <div
              key={idx}
              className={[
                "absolute z-10 group cursor-pointer overflow-hidden rounded-[20px]",
                "sm:w-[110px] sm:h-[110px] w-[76px] h-[76px]",
                "skill-card-base",
                card.entered ? "skill-card-entering" : "",
              ].join(" ")}
              style={{
                top, bottom, left, right,
                transform: `rotate(${rotate})`,
                ["--rot" as string]: rotate,
                opacity: card.visible ? 1 : 0.3,
              }}
            >
              <img
                src={skill.image}
                alt={skill.label}
                className="w-full h-full object-cover transition-all duration-300 group-hover:scale-105 group-hover:brightness-50"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 gap-1.5 p-2">
                {skill.icon}
                <span
                  className="text-white text-center text-[11px] font-bold leading-tight"
                  style={{ fontFamily: "'Syne', sans-serif" }}
                >
                  {skill.label}
                </span>
              </div>
            </div>
          );
        })}

        {/* Center content */}
        <div className="relative z-20 text-center max-w-[600px]">
          <span
            className="inline-block border border-gray-300 rounded-full px-4 py-1 text-xs text-gray-500 mb-6 bg-[#f0ede8]"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            Available for freelance work
          </span>

          <h1
            className="font-extrabold tracking-tight text-neutral-900 leading-[1.15] mb-4"
            style={{
              fontFamily: "'Syne', sans-serif",
              fontSize: "clamp(26px, 4.2vw, 46px)",
            }}
          >
            Need a{" "}
            <span className="text-[#ff6b6b]">designer</span>,<br />
            <span className="text-[#ffc70f]">developer</span> or creative?<br />
            I do it all.
          </h1>

          <p
            className="text-gray-500 text-[15px] leading-relaxed max-w-[440px] mx-auto mb-6"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            From pixel-perfect interfaces and clean code to stunning photography
            and cinematic video — Bishop brings your ideas to life end-to-end.
          </p>

          <span
            className="inline-block border-[1.5px] border-[#ff6b6b] text-[#ff6b6b] rounded-full px-5 py-1.5 text-[13px] mb-4"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            Let&apos;s build something great
          </span>

          <br />

          <a
            href="#contact"
            className="inline-block bg-[#1a9e6e] hover:bg-[#158059] active:scale-95 text-white font-medium rounded-full px-8 py-3 text-[15px] transition-all duration-150 no-underline"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            Get in touch
          </a>

          <p
            className="text-gray-400 text-[13px] mt-3"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            Based in Accra, Ghana · Open to remote
          </p>
        </div>
      </section>
    </>
  );
}