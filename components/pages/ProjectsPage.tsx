"use client";

import Link from "next/link";
import Image from "next/image";

type Project = {
  number: string;
  tag: string;
  name: string;
  description: string;
  stack: string[];
  liveUrl: string;
  githubUrl: string;
  image?: string;
  placeholderBg: string;
  placeholderIcon: React.ReactNode;
};

const projects: Project[] = [
  {
    number: "01",
    tag: "Web App",
    name: "Az-Pros",
    description:
      "A full stack web application where service providers can create profiles, list their services, and connect with potential clients. Built with Next.js, TypeScript, MongoDB, and Tailwind CSS.",
    stack: ["Next.js", "TypeScript", "MongoDB", "Tailwind","Framer Motion","Node.js","Express"],
    liveUrl: "https://azpros.vercel.app/",
    githubUrl: "https://github.com/addyjerry/Az-Pros-revamp",
    placeholderBg: "#e8f4fd",
    placeholderIcon: (
      <svg
        width="90" height="90" viewBox="0 0 24 24"
        fill="none" stroke="#378ADD"
        strokeWidth="0.8" strokeLinecap="round" strokeLinejoin="round"
      >
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <path d="M8 21h8M12 17v4" />
      </svg>
    ),
     image:'/images/azpros.PNG',
  },
  {
    number: "02",
    tag: "Management System",
    name:  "School Management System",
    description:
      "A Saas platform for schools to manage student records, attendance, and communication. ",
    stack: ["Next.js", "Express", "MongoDB", "Paystack"],
    liveUrl: "https://edumanagement.vercel.app/",
    githubUrl: "https://github.com/addyjerry/School-management-system-frontend",
    placeholderBg: "#f0fdf4",
    placeholderIcon: (
      <svg
        width="90" height="90" viewBox="0 0 24 24"
        fill="none" stroke="#4DB33D"
        strokeWidth="0.8" strokeLinecap="round" strokeLinejoin="round"
      >
        <circle cx="9" cy="21" r="1" />
        <circle cx="20" cy="21" r="1" />
        <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
      </svg>
    ),
    image:'/images/edumanagement.PNG',
  },
  {
    number: "03",
    tag: "Task Manager",
    name: "Taskidio",
    description:
      "A task management app with features like task creation, categorisation, and progress tracking. ",
    stack: ["Next.js","Framer Motion", "Tailwind","Node.js","Express","MongoDB"],
    liveUrl: "https://taskidio.vercel.app/",
    githubUrl: "https://github.com/addyjerry/taskmanager",
    placeholderBg: "#fff7ed",
    placeholderIcon: (
      <svg
        width="90" height="90" viewBox="0 0 24 24"
        fill="none" stroke="#FF6C37"
        strokeWidth="0.8" strokeLinecap="round" strokeLinejoin="round"
      >
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
    image:'/images/taskidio.PNG',
  },
   {
    number: "04",
    tag: "E-commerce",
    name: "Techlo-Electronics",
    description: "An e-commerce platform for buying and selling electronics, featuring product listings, shopping cart, and secure checkout.",
    stack: ["React", "Node.js", "MongoDB", "Tailwind"],
    liveUrl: "https://techlo-electronics.vercel.app/",
    githubUrl: "https://github.com/addyjerry/techlo-electronics",
    placeholderBg: "#fff7ed",
    placeholderIcon: (
      <svg
        width="90" height="90" viewBox="0 0 24 24"
        fill="none" stroke="#FF6C37"
        strokeWidth="0.8" strokeLinecap="round" strokeLinejoin="round"
      >
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
    image:'/images/techlo.PNG',
  },
   {
    number: "05",
    tag: " Management System",
    name: "Church Management System",
    description:
      "A management system for churches to handle member records, event planning, and communication.",
    stack: ["React", "Node.js", "MongoDB", "Tailwind"],
    liveUrl: "https://arkpalacechapel.vercel.app/",
    githubUrl: "https://github.com/addyjerry/ark-palace-chapel",
    placeholderBg: "#fff7ed",
    placeholderIcon: (
      <svg
        width="90" height="90" viewBox="0 0 24 24"
        fill="none" stroke="#FF6C37"
        strokeWidth="0.8" strokeLinecap="round" strokeLinejoin="round"
      >
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
    image:'/images/arkpalace.PNG',
  },
];

function ExternalIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="w-[13px] h-[13px] fill-none stroke-white stroke-2 shrink-0"
      strokeLinecap="round" strokeLinejoin="round"
    >
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  );
}

function GitHubIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="w-[13px] h-[13px] fill-none stroke-current stroke-2 shrink-0"
      strokeLinecap="round" strokeLinejoin="round"
    >
      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
    </svg>
  );
}

function ProjectRow({ project, index }: { project: Project; index: number }) {
  const isReversed = index % 2 !== 0;

  return (
    <div className="flex flex-col gap-10">
      <div
        className={[
          "grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-14 items-center",
          isReversed ? "sm:[direction:rtl]" : "",
        ].join(" ")}
      >
        {/* Image */}
        <div
          className="rounded-2xl overflow-hidden border border-neutral-200 dark:border-neutral-800 aspect-[16/10] flex items-center justify-center sm:[direction:ltr]"
          style={{ background: project.placeholderBg }}
        >
          {project.image ? (
            <div className="relative w-full h-full">
              <Image
                src={project.image}
                alt={project.name}
                fill
                className="object-cover"
              />
            </div>
          ) : (
            <div className="relative w-full h-full flex items-center justify-center">
              <div className="opacity-10">{project.placeholderIcon}</div>
              <span
                className="absolute text-[11px] font-bold tracking-widest uppercase text-neutral-400 opacity-40"
                style={{ fontFamily: "'Syne', sans-serif" }}
              >
                project image
              </span>
            </div>
          )}
        </div>

        {/* Info */}
        <div className="sm:[direction:ltr]">
          <p
            className="text-[11px] font-bold tracking-[.12em] text-neutral-400 dark:text-neutral-500 mb-3 uppercase"
            style={{ fontFamily: "'Syne', sans-serif" }}
          >
            {project.number} / {String(projects.length).padStart(2, "0")}
          </p>

          <span
            className="inline-block text-[11px] font-medium px-3 py-1 rounded-full bg-neutral-100 dark:bg-neutral-800 text-neutral-500 dark:text-neutral-400 border border-neutral-200 dark:border-neutral-700 mb-3"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            {project.tag}
          </span>

          <h2
            className="font-extrabold text-neutral-900 dark:text-white leading-[1.15] mb-4"
            style={{
              fontFamily: "'Syne', sans-serif",
              fontSize: "clamp(20px, 2.5vw, 28px)",
            }}
          >
            {project.name}
          </h2>

          <p
            className="text-[13.5px] text-neutral-500 dark:text-neutral-400 leading-[1.75] mb-5"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            {project.description}
          </p>

          {/* Stack pills */}
          <div className="flex flex-wrap gap-1.5 mb-6">
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

          {/* Action buttons */}
          <div className="flex items-center gap-2.5 flex-wrap">
            <Link
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-xl text-[13px] font-medium text-white bg-[#ff6b6b] hover:bg-[#e85d5d] active:scale-95 transition-all duration-150 no-underline"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              Live preview <ExternalIcon />
            </Link>
            <Link
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-xl text-[13px] font-medium text-neutral-600 dark:text-neutral-300 border border-neutral-200 dark:border-neutral-700 hover:border-neutral-400 dark:hover:border-neutral-500 hover:text-neutral-900 dark:hover:text-white transition-all duration-150 no-underline"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              GitHub <GitHubIcon />
            </Link>
          </div>
        </div>
      </div>

      {/* Divider — not after last item */}
      {index < projects.length - 1 && (
        <div className="h-px bg-neutral-100 dark:bg-neutral-800" />
      )}
    </div>
  );
}

export default function ProjectsPage() {
  return (
    <main className="py-20 px-6 bg-white dark:bg-neutral-950 min-h-screen">

      {/* Page heading */}
      <div className="text-center mb-20">
        <p
          className="text-xs tracking-widest uppercase text-neutral-400 dark:text-neutral-500 mb-3"
          style={{ fontFamily: "'DM Sans', sans-serif" }}
        >
          My work
        </p>
        <h1
          className="font-extrabold text-neutral-900 dark:text-white leading-[1.1] mb-4"
          style={{
            fontFamily: "'Syne', sans-serif",
            fontSize: "clamp(28px, 5vw, 52px)",
          }}
        >
          All <span className="text-[#ff6b6b]">projects</span>
        </h1>
        <p
          className="text-sm text-neutral-400 dark:text-neutral-500 max-w-md mx-auto leading-[1.75]"
          style={{ fontFamily: "'DM Sans', sans-serif" }}
        >
          A detailed look at everything I&apos;ve designed, built, and shipped — from concept to deployment.
        </p>
      </div>

      {/* Project list */}
      <div className="max-w-4xl mx-auto flex flex-col gap-16">
        {projects.map((project, index) => (
          <ProjectRow key={project.name} project={project} index={index} />
        ))}
      </div>
    </main>
  );
}