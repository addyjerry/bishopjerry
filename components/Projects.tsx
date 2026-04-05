"use client";

import Link from "next/link";
import Image from "next/image";

type Project = {
  name: string;
  tag: string;
  description: string;
  stack: string[];
  year: string;
  link: string;
  image?: string;
  placeholderBg: string;
  placeholderStroke: string;
  placeholderIcon: React.ReactNode;
};

const projects: Project[] = [
  {
    name: "Project Alpha",
    tag: "Web App",
    description:
      "A full-stack web application that helps teams manage tasks and collaborate in real time. Built with performance and scalability in mind.",
    stack: ["Next.js", "TypeScript", "MongoDB", "Tailwind"],
    year: "2024",
    link: "#",
    placeholderBg: "#e8f4fd",
    placeholderStroke: "#378ADD",
    placeholderIcon: (
      <svg
        width="80" height="80" viewBox="0 0 24 24"
        fill="none" stroke="#378ADD"
        strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"
      >
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <path d="M8 21h8M12 17v4" />
      </svg>
    ),
  },
  {
    name: "Project Beta",
    tag: "E-Commerce",
    description:
      "An e-commerce platform for second-hand electronics with integrated mobile money payments, an admin dashboard, and PWA support.",
    stack: ["Next.js", "Express", "MongoDB", "Paystack"],
    year: "2024",
    link: "#",
    placeholderBg: "#f0fdf4",
    placeholderStroke: "#4DB33D",
    placeholderIcon: (
      <svg
        width="80" height="80" viewBox="0 0 24 24"
        fill="none" stroke="#4DB33D"
        strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"
      >
        <circle cx="9" cy="21" r="1" />
        <circle cx="20" cy="21" r="1" />
        <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
      </svg>
    ),
  },
  {
    name: "Project Gamma",
    tag: "Marketplace",
    description:
      "A home services marketplace connecting clients with verified local service providers, featuring booking, reviews, and a provider dashboard.",
    stack: ["Next.js", "Shadcn UI", "Framer Motion", "Tailwind"],
    year: "2025",
    link: "#",
    placeholderBg: "#fff7ed",
    placeholderStroke: "#FF6C37",
    placeholderIcon: (
      <svg
        width="80" height="80" viewBox="0 0 24 24"
        fill="none" stroke="#FF6C37"
        strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"
      >
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
  },
  {
    name: "Project Delta",
    tag: "Platform",
    description:
      "A streaming platform with user authentication, content categorisation, and a responsive video player built for low-bandwidth environments.",
    stack: ["React", "Node.js", "MongoDB", "Tailwind"],
    year: "2023",
    link: "#",
    placeholderBg: "#fdf4ff",
    placeholderStroke: "#a855f7",
    placeholderIcon: (
      <svg
        width="80" height="80" viewBox="0 0 24 24"
        fill="none" stroke="#a855f7"
        strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"
      >
        <polygon points="23 7 16 12 23 17 23 7" />
        <rect x="1" y="5" width="15" height="14" rx="2" />
      </svg>
    ),
  },
];

function ArrowIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="w-[14px] h-[14px] stroke-[#ff6b6b] fill-none shrink-0"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14M12 5l7 7-7 7" />
    </svg>
  );
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="bg-white dark:bg-neutral-900 rounded-2xl border border-neutral-200 dark:border-neutral-800 overflow-hidden flex flex-col transition-all duration-250 hover:-translate-y-1 hover:border-neutral-300 dark:hover:border-neutral-700">

      {/* Image / placeholder */}
      {project.image ? (
        <div className="relative w-full h-[190px]">
          <Image
            src={project.image}
            alt={project.name}
            fill
            className="object-cover"
          />
        </div>
      ) : (
        <div
          className="w-full h-[190px] flex items-center justify-center relative overflow-hidden"
          style={{ background: project.placeholderBg }}
        >
          <div className="opacity-15">{project.placeholderIcon}</div>
          <span
            className="absolute text-[13px] font-bold tracking-wider opacity-40 text-neutral-500"
            style={{ fontFamily: "'Syne', sans-serif" }}
          >
            project image
          </span>
        </div>
      )}

      {/* Body */}
      <div className="p-5 flex flex-col gap-2.5 flex-1">
        <span
          className="inline-block self-start text-[11px] font-medium px-2.5 py-1 rounded-full bg-neutral-100 dark:bg-neutral-800 text-neutral-500 dark:text-neutral-400 border border-neutral-200 dark:border-neutral-700"
          style={{ fontFamily: "'DM Sans', sans-serif" }}
        >
          {project.tag}
        </span>

        <h3
          className="text-[17px] font-extrabold text-neutral-900 dark:text-white leading-snug"
          style={{ fontFamily: "'Syne', sans-serif" }}
        >
          {project.name}
        </h3>

        <p
          className="text-[13px] text-neutral-500 dark:text-neutral-400 leading-relaxed flex-1"
          style={{ fontFamily: "'DM Sans', sans-serif" }}
        >
          {project.description}
        </p>

        {/* Stack pills */}
        <div className="flex flex-wrap gap-1.5 mt-1">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="text-[11px] font-medium px-2.5 py-1 rounded-lg bg-neutral-100 dark:bg-neutral-800 text-neutral-500 dark:text-neutral-400 border border-neutral-200 dark:border-neutral-700"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="px-5 py-4 border-t border-neutral-100 dark:border-neutral-800 flex items-center justify-between">
        <span
          className="text-xs text-neutral-400 dark:text-neutral-500"
          style={{ fontFamily: "'DM Sans', sans-serif" }}
        >
          {project.year}
        </span>

        <Link
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 text-[13px] font-medium text-[#ff6b6b] no-underline transition-all duration-200 hover:gap-2.5"
          style={{ fontFamily: "'DM Sans', sans-serif" }}
        >
          View project <ArrowIcon />
        </Link>
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <section className="py-20 px-6 bg-neutral-50 dark:bg-neutral-950">

      {/* Heading */}
      <div className="text-center mb-14">
        <p
          className="text-xs tracking-widest uppercase text-neutral-400 dark:text-neutral-500 mb-2"
          style={{ fontFamily: "'DM Sans', sans-serif" }}
        >
          What I&apos;ve built
        </p>
        <h2
          className="font-extrabold text-neutral-900 dark:text-white mb-3"
          style={{ fontFamily: "'Syne', sans-serif", fontSize: "clamp(22px, 4vw, 38px)" }}
        >
          Featured <span className="text-[#ff6b6b]">projects</span>
        </h2>
        <p
          className="text-sm text-neutral-400 dark:text-neutral-500 max-w-sm mx-auto"
          style={{ fontFamily: "'DM Sans', sans-serif" }}
        >
          A selection of real-world projects I&apos;ve designed and built from scratch.
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-5 max-w-4xl mx-auto">
        {projects.map((project) => (
          <ProjectCard key={project.name} project={project} />
        ))}
      </div>
    </section>
  );
}