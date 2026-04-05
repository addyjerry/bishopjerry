"use client";

import Link from "next/link";
import Image from "next/image";
import { DiPhotoshop } from "react-icons/di";
import { FaFigma, FaGitAlt, FaGithub, FaNode, FaReact } from "react-icons/fa";
import { IoLogoJavascript, IoLogoVercel } from "react-icons/io5";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiCanva, SiExpress, SiMongodb, SiNextdotjs, SiPostman, SiTypescript } from "react-icons/si";
import { VscVscode } from "react-icons/vsc";

const skills = [
  { name: "React",       level: "Advanced",     bg: "#e8f4fd", icon: <FaReact color="#00FFFF"/> },
  { name: "Next.js",     level: "Advanced",     bg: "#f0f0f0", icon: <SiNextdotjs /> },
  { name: "TypeScript",  level: "Advanced",     bg: "#e8f0fb", icon: <SiTypescript color="#3178c6"/> },
  { name: "Node.js",     level: "Intermediate", bg: "#f0fdf4", icon: <FaNode color="#215732"/>},
  { name: "Tailwind CSS",level: "Advanced",     bg: "#f0f9ff", icon: <RiTailwindCssFill color="#38BDF8" />},
  { name: "Figma",       level: "Intermediate", bg: "#fdf4ff", icon: <FaFigma color="#F24E1E"/>},
  { name: "MongoDB",     level: "Intermediate", bg: "#f0fdf4", icon: <SiMongodb color="#4DB33D"/>},
  { name: "Express.js",  level: "Intermediate", bg: "#fff7ed", icon: <SiExpress /> },
];

const experience = [
  {
    period:   "2024 — Present",
    role:     "Frontend Developer",
    company:  "Fyaora Labs · Remote (UK)",
    description:
      "Building and maintaining frontend systems for client-facing products. Working closely with design and backend teams to ship fast, accessible, and pixel-perfect interfaces using React and Next.js.",
  },
  {
    period:   "2023 — 2024",
    role:     "Frontend Developer",
    company:  "Starinx Technologies · Accra, Ghana",
    description:
      "Developed responsive web applications and internal dashboards. Collaborated with cross-functional teams to translate design mockups into production-ready code, improving UI performance and user experience.",
  },
  {
    period:   "2021 — 2023",
    role:     "Freelance Developer & Designer",
    company:  "Self-employed · Accra, Ghana",
    description:
      "Worked independently with clients across Ghana and beyond, building websites, e-commerce stores, and custom web solutions. Also provided photography and video editing services alongside development work.",
  },
];

function DownloadIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-[14px] h-[14px] fill-none stroke-white stroke-2 shrink-0" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="7 10 12 15 17 10" />
      <line x1="12" y1="15" x2="12" y2="3" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-[14px] h-[14px] fill-none stroke-current stroke-2 shrink-0" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      <polyline points="22,6 12,13 2,6" />
    </svg>
  );
}

function Divider() {
  return <div className="h-px bg-neutral-100 dark:bg-neutral-800 my-14" />;
}

export default function AboutPage() {
  return (
    <main className="py-20 px-6 bg-white dark:bg-neutral-950 min-h-screen">
      <div className="max-w-4xl mx-auto">

        {/* ── Hero split ── */}
        <div className="grid grid-cols-1 sm:grid-cols-[1fr_1.5fr] gap-10 sm:gap-16 items-center mb-14">

          {/* Photo */}
          <div className="relative">
            <div className="w-full max-w-[220px] sm:max-w-full mx-auto aspect-[4/5] sm:aspect-[4/5] rounded-3xl overflow-hidden bg-neutral-100 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 flex items-center justify-center">
             
            <Image
                src="/about.webp"
                alt="Bishop Jerry"
                fill
                className="object-cover"/>
            </div>

            {/* Badge */}
            <div
              className="absolute bottom-[-14px] right-0 sm:right-[-14px] bg-[#ff6b6b] text-white text-[11px] font-bold rounded-xl px-3 py-2 border-[3px] border-white dark:border-neutral-950 flex items-center gap-1.5"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-green-400 shrink-0" />
              Open to work
            </div>
          </div>

          {/* Text */}
          <div className="mt-6 sm:mt-0">
            <p
              className="text-xs tracking-widest uppercase text-neutral-400 dark:text-neutral-500 mb-3"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              About me
            </p>

            <h1
              className="font-extrabold text-neutral-900 dark:text-white leading-[1.1] mb-5"
              style={{ fontFamily: "'Syne', sans-serif", fontSize: "clamp(28px, 4vw, 44px)" }}
            >
              I&apos;m Bishop,<br />
              a <span className="text-[#ff6b6b]">Software</span><br />
              Engineer.
            </h1>

            <p
              className="text-[14px] text-neutral-500 dark:text-neutral-400 leading-[1.8] mb-3"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              I&apos;m a Software Engineer based in Accra, Ghana, passionate about building beautiful, fast, and purposeful digital experiences. I work primarily with React, Next.js, and TypeScript — and I care deeply about clean code, great design, and products that actually solve real problems.
            </p>

            <p
              className="text-[14px] text-neutral-500 dark:text-neutral-400 leading-[1.8] mb-7"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              Beyond code, I&apos;m also into photography and video editing, which keeps my eye sharp for visual detail in everything I build.
            </p>

            {/* Stats */}
            <div className="flex flex-wrap gap-6 mb-7">
              {[
                { num: "3+", label: "Years experience" },
                { num: "10+", label: "Projects shipped" },
                { num: "2+", label: "Companies worked at" },
              ].map((s) => (
                <div key={s.label} className="flex flex-col">
                  <span
                    className="text-[26px] font-extrabold text-neutral-900 dark:text-white leading-none"
                    style={{ fontFamily: "'Syne', sans-serif" }}
                  >
                    {s.num.replace("+", "")}
                    <span className="text-[#ff6b6b]">+</span>
                  </span>
                  <span
                    className="text-[11px] text-neutral-400 dark:text-neutral-500 mt-1"
                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                  >
                    {s.label}
                  </span>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-2.5">
              <a
                href="/resume.pdf"
                download
                className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-xl text-[13px] font-medium text-white bg-[#ff6b6b] hover:bg-[#e85d5d] active:scale-95 transition-all duration-150 no-underline"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                <DownloadIcon /> Download CV
              </a>
              <Link
                href="#contact"
                className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-xl text-[13px] font-medium text-neutral-600 dark:text-neutral-300 border border-neutral-200 dark:border-neutral-700 hover:border-neutral-400 dark:hover:border-neutral-500 hover:text-neutral-900 dark:hover:text-white transition-all duration-150 no-underline"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                <MailIcon /> Get in touch
              </Link>
            </div>
          </div>
        </div>

        <Divider />

        {/* ── Skills ── */}
        <div>
          <p
            className="text-xs tracking-widest uppercase text-neutral-400 dark:text-neutral-500 mb-2"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            What I know
          </p>
          <h2
            className="text-[20px] font-extrabold text-neutral-900 dark:text-white mb-6"
            style={{ fontFamily: "'Syne', sans-serif" }}
          >
            Skills &amp; <span className="text-[#ff6b6b]">technologies</span>
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
            {skills.map((skill) => (
              <div
                key={skill.name}
                className="flex items-center gap-3 bg-neutral-50 dark:bg-neutral-800/60 border border-neutral-200 dark:border-neutral-700 rounded-2xl px-4 py-3 transition-colors duration-200 hover:border-neutral-300 dark:hover:border-neutral-600"
              >
                <div
                  className="w-9 h-9 rounded-xl flex items-center justify-center text-[18px] shrink-0"
                  style={{ background: skill.bg }}
                >
                  {skill.icon}
                </div>
                <div>
                  <p
                    className="text-[13px] font-bold text-neutral-900 dark:text-white"
                    style={{ fontFamily: "'Syne', sans-serif" }}
                  >
                    {skill.name}
                  </p>
                  <p
                    className="text-[11px] text-neutral-400 dark:text-neutral-500 mt-0.5"
                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                  >
                    {skill.level}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <Divider />

        {/* ── Experience ── */}
        <div>
          <p
            className="text-xs tracking-widest uppercase text-neutral-400 dark:text-neutral-500 mb-2"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            Where I&apos;ve worked
          </p>
          <h2
            className="text-[20px] font-extrabold text-neutral-900 dark:text-white mb-8"
            style={{ fontFamily: "'Syne', sans-serif" }}
          >
            Work <span className="text-[#ff6b6b]">experience</span>
          </h2>

          <div className="flex flex-col">
            {experience.map((exp, i) => (
              <div key={exp.company} className="flex gap-6 relative">

                {/* Timeline spine */}
                <div className="flex flex-col items-center w-3 shrink-0 pt-1">
                  <div className="w-3 h-3 rounded-full bg-[#ff6b6b] border-2 border-white dark:border-neutral-950 outline outline-2 outline-[#ff6b6b] shrink-0" />
                  {i < experience.length - 1 && (
                    <div className="flex-1 w-px bg-neutral-200 dark:bg-neutral-800 mt-1" />
                  )}
                </div>

                {/* Content */}
                <div className={`pb-10 flex-1 ${i === experience.length - 1 ? "pb-0" : ""}`}>
                  <p
                    className="text-[11px] font-medium text-[#ff6b6b] mb-1 tracking-wide"
                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                  >
                    {exp.period}
                  </p>
                  <p
                    className="text-[16px] font-extrabold text-neutral-900 dark:text-white mb-0.5"
                    style={{ fontFamily: "'Syne', sans-serif" }}
                  >
                    {exp.role}
                  </p>
                  <p
                    className="text-[13px] text-neutral-500 dark:text-neutral-400 mb-2.5"
                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                  >
                    {exp.company}
                  </p>
                  <p
                    className="text-[13px] text-neutral-400 dark:text-neutral-500 leading-[1.75]"
                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                  >
                    {exp.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </main>
  );
}