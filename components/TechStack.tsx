"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { FaFigma, FaGitAlt, FaGithub, FaNode, FaReact } from "react-icons/fa";
import { IoLogoJavascript, IoLogoVercel } from "react-icons/io5";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiExpress, SiMongodb, SiNextdotjs, SiPostman, SiTypescript } from "react-icons/si";
import { VscVscode } from "react-icons/vsc";

const techStack = [
  {
    name: "React",
    svg: <FaReact color="#00FFFF"/>,
  },
  {
    name: "Next.js",
    svg:<SiNextdotjs />,
  },
  {
    name: "TypeScript",
    svg:<SiTypescript color="#3178c6"/>,
  },
  {
    name: "Node.js",
    svg:<FaNode color="#215732"/>,
  },
  {
    name: "Express",
    svg: <SiExpress />,
  },
  {
    name: "MongoDB",
    svg: <SiMongodb color="#4DB33D"/>,
  },
  {
    name: "Tailwind",
    svg: <RiTailwindCssFill color="#38BDF8" />,
  },
  {
    name: "JavaScript",
    svg:<IoLogoJavascript color="#F7DF1E"/>,
  },
];

const tools = [
  {
    name: "VS Code",
    svg:<VscVscode color="#007ACC"/>,
  },
  {
    name: "Figma",
    svg: <FaFigma color="#F24E1E"/>,
  },
  {
    name: "Git",
    svg: <FaGitAlt color="#F1502F"/>,
  },
  {
    name: "Postman",
    svg: <SiPostman color="#EF5B25"/>,
  },
  {
    name: "Vercel",
    svg: <IoLogoVercel />,
  },
  {
    name: "GitHub",
    svg: <FaGithub />,
  },
];

type Sizes = {
  outer: number;
  inner: number;
  iconSize: number;
  iconWrap: number;
  fontSize: number;
  center: number;
  centerIcon: number;
};

function getSizes(vw: number): Sizes {
  if (vw <= 380) return { outer: 260, inner: 148, iconSize: 18, iconWrap: 32, fontSize: 9,  center: 36, centerIcon: 16 };
  if (vw <= 480) return { outer: 320, inner: 182, iconSize: 20, iconWrap: 36, fontSize: 10, center: 40, centerIcon: 18 };
  if (vw <= 640) return { outer: 380, inner: 218, iconSize: 22, iconWrap: 38, fontSize: 10, center: 44, centerIcon: 20 };
  return               { outer: 520, inner: 300, iconSize: 26, iconWrap: 44, fontSize: 10, center: 56, centerIcon: 24 };
}

export default function TechStack() {
  const outerAngleRef = useRef(0);
  const innerAngleRef = useRef(Math.PI / tools.length);
  const rafRef        = useRef<number | null>(null);
  const [sizes, setSizes] = useState<Sizes>(() =>
    typeof window !== "undefined" ? getSizes(window.innerWidth) : getSizes(1024)
  );

  const updateSizes = useCallback(() => {
    setSizes(getSizes(window.innerWidth));
  }, []);

  useEffect(() => {
    updateSizes();
    window.addEventListener("resize", updateSizes);
    return () => window.removeEventListener("resize", updateSizes);
  }, [updateSizes]);

  useEffect(() => {
    function positionItems(
      items: typeof techStack,
      trackId: string,
      angle: number
    ) {
      const track = document.getElementById(trackId);
      if (!track) return;
      const r = track.offsetWidth / 2;
      items.forEach((_, i) => {
        const el = document.getElementById(`${trackId}-item-${i}`);
        if (!el) return;
        const a = angle + (i / items.length) * Math.PI * 2;
        el.style.left = `${r + r * Math.cos(a)}px`;
        el.style.top  = `${r + r * Math.sin(a)}px`;
      });
    }

    function animate() {
      outerAngleRef.current -= 0.003;
      innerAngleRef.current += 0.005;
      positionItems(techStack, "track-outer", outerAngleRef.current);
      positionItems(tools, "track-inner", innerAngleRef.current);
      rafRef.current = requestAnimationFrame(animate);
    }

    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    rafRef.current = requestAnimationFrame(animate);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [sizes]); // restart animation loop when sizes change so r is recalculated

  const { outer, inner, iconSize, iconWrap, fontSize, center, centerIcon } = sizes;

  return (
    <section className="py-20 px-4 text-center bg-white dark:bg-neutral-950 overflow-hidden">

      {/* Heading */}
      <p
        className="text-xs tracking-widest uppercase text-neutral-400 dark:text-neutral-500 mb-2"
        style={{ fontFamily: "'DM Sans', sans-serif" }}
      >
        What I work with
      </p>
      <h2
        className="font-extrabold text-neutral-900 dark:text-white mb-2"
        style={{ fontFamily: "'Syne', sans-serif", fontSize: "clamp(22px, 4vw, 38px)" }}
      >
        Tech stack <span className="text-[#c6ff6b]">&amp;</span> tools
      </h2>
      <p
        className="text-sm text-neutral-400 dark:text-neutral-500 mb-14"
        style={{ fontFamily: "'DM Sans', sans-serif" }}
      >
        Outer ring — tech stack &nbsp;·&nbsp; Inner ring — tools
      </p>

      {/* Orbit container */}
      <div
        className="relative mx-auto"
        style={{ width: outer, height: outer }}
      >
        {/* Dashed orbit rings */}
        {[outer, inner].map((size) => (
          <div
            key={size}
            className="absolute rounded-full border border-dashed border-neutral-200 dark:border-neutral-800"
            style={{
              width: size, height: size,
              top: "50%", left: "50%",
              transform: "translate(-50%,-50%)",
            }}
          />
        ))}

        {/* Ring labels */}
        <span
          className="absolute text-neutral-400 dark:text-neutral-500 bg-white dark:bg-neutral-950 px-2 py-0.5 rounded-full border border-neutral-200 dark:border-neutral-800 whitespace-nowrap font-medium"
          style={{ fontSize, top: `calc(50% - ${outer / 2 + 8}px)`, left: "50%", transform: "translateX(-50%)" }}
        >
          Tech stack
        </span>
        <span
          className="absolute text-neutral-400 dark:text-neutral-500 bg-white dark:bg-neutral-950 px-2 py-0.5 rounded-full border border-neutral-200 dark:border-neutral-800 whitespace-nowrap font-medium"
          style={{ fontSize, top: `calc(50% - ${inner / 2 + 8}px)`, left: "50%", transform: "translateX(-50%)" }}
        >
          Tools
        </span>

        {/* Center dot */}
        <div
          className="absolute z-10 rounded-full bg-[#ff6b6b] flex items-center justify-center"
          style={{ width: center, height: center, top: "50%", left: "50%", transform: "translate(-50%,-50%)" }}
        >
          <svg
            width={centerIcon} height={centerIcon}
            viewBox="0 0 24 24" fill="none"
            stroke="white" strokeWidth="2"
            strokeLinecap="round" strokeLinejoin="round"
          >
            <polyline points="16 18 22 12 16 6" />
            <polyline points="8 6 2 12 8 18" />
          </svg>
        </div>

        {/* Outer track — tech stack */}
        <div
          id="track-outer"
          className="absolute rounded-full"
          style={{ width: outer, height: outer, top: "50%", left: "50%", transform: "translate(-50%,-50%)" }}
        >
          {techStack.map((item, i) => (
            <div
              key={item.name}
              id={`track-outer-item-${i}`}
              className="absolute -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-1 group cursor-default"
            >
              <div
                className="rounded-xl bg-neutral-100 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 flex items-center justify-center transition-all duration-200 group-hover:border-neutral-400 dark:group-hover:border-neutral-500 group-hover:bg-white dark:group-hover:bg-neutral-700"
                style={{ width: iconWrap, height: iconWrap }}
              >
               {item.svg}
              </div>
              <span
                className="font-medium text-neutral-400 dark:text-neutral-500 group-hover:text-neutral-700 dark:group-hover:text-neutral-300 whitespace-nowrap transition-colors duration-200"
                style={{ fontSize, fontFamily: "'DM Sans', sans-serif" }}
              >
                {item.name}
              </span>
            </div>
          ))}
        </div>

        {/* Inner track — tools */}
        <div
          id="track-inner"
          className="absolute rounded-full"
          style={{ width: inner, height: inner, top: "50%", left: "50%", transform: "translate(-50%,-50%)" }}
        >
          {tools.map((item, i) => (
            <div
              key={item.name}
              id={`track-inner-item-${i}`}
              className="absolute -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-1 group cursor-default"
            >
              <div
                className="rounded-xl bg-neutral-100 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 flex items-center justify-center transition-all duration-200 group-hover:border-neutral-400 dark:group-hover:border-neutral-500 group-hover:bg-white dark:group-hover:bg-neutral-700"
                style={{ width: iconWrap, height: iconWrap }}
              >
                 {item.svg}
              </div>
              <span
                className="font-medium text-neutral-400 dark:text-neutral-500 group-hover:text-neutral-700 dark:group-hover:text-neutral-300 whitespace-nowrap transition-colors duration-200"
                style={{ fontSize, fontFamily: "'DM Sans', sans-serif" }}
              >
                {item.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}