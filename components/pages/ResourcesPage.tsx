"use client";

import Link from "next/link";

type Resource = {
  name: string;
  description: string;
  href: string;
  tag: string;
  iconBg: string;
  icon: string;
};

type Category = {
  title: string;
  iconBg: string;
  icon: string;
  resources: Resource[];
};

const categories: Category[] = [
  {
    title: "Dev tools",
    icon: "🛠️",
    iconBg: "#e8f4fd",
    resources: [
      {
        name: "VS Code",
        description: "My primary code editor. Fast, extensible, and has the best ecosystem of extensions for web development.",
        href: "https://code.visualstudio.com",
        tag: "Editor",
        iconBg: "#e8f4fd",
        icon: "💻",
      },
      {
        name: "GitHub",
        description: "Version control and collaboration. Every project lives here — public and private.",
        href: "https://github.com",
        tag: "Version Control",
        iconBg: "#f0f0f0",
        icon: "🐙",
      },
      {
        name: "Postman",
        description: "API testing made easy. I use it to test every endpoint before integrating on the frontend.",
        href: "https://www.postman.com",
        tag: "API Testing",
        iconBg: "#fff3ee",
        icon: "📮",
      },
      {
        name: "Vercel",
        description: "My go-to deployment platform for Next.js projects. Zero config, instant previews, great DX.",
        href: "https://vercel.com",
        tag: "Deployment",
        iconBg: "#f0f0f0",
        icon: "▲",
      },
      {
        name: "MongoDB Atlas",
        description: "Cloud-hosted MongoDB. Easy to spin up, scale, and connect to any Node.js backend.",
        href: "https://www.mongodb.com/atlas",
        tag: "Database",
        iconBg: "#f0fdf4",
        icon: "🍃",
      },
      {
        name: "Render",
        description: "Where I host Node/Express backends. Simple deploys from GitHub with free tier support.",
        href: "https://render.com",
        tag: "Hosting",
        iconBg: "#eef4ff",
        icon: "☁️",
      },
    ],
  },
  {
    title: "Design tools",
    icon: "🎨",
    iconBg: "#fdf4ff",
    resources: [
      {
        name: "Figma",
        description: "My main design tool. I use it for wireframing, UI design, prototyping, and handing off specs to devs.",
        href: "https://figma.com",
        tag: "UI Design",
        iconBg: "#fdf4ff",
        icon: "🖌️",
      },
      {
        name: "Shadcn UI",
        description: "Accessible, unstyled components built on Radix UI. I use this as the backbone for most React projects.",
        href: "https://ui.shadcn.com",
        tag: "Component Library",
        iconBg: "#f5f5f5",
        icon: "🧩",
      },
      {
        name: "Coolors",
        description: "Fast colour palette generator. Great for building cohesive design systems and exploring colour combinations.",
        href: "https://coolors.co",
        tag: "Colours",
        iconBg: "#fff0f0",
        icon: "🎨",
      },
      {
        name: "Google Fonts",
        description: "Free, high-quality typefaces for the web. Always my first stop when picking fonts for a project.",
        href: "https://fonts.google.com",
        tag: "Typography",
        iconBg: "#fef9ee",
        icon: "🔤",
      },
    ],
  },
  {
    title: "Helpful links",
    icon: "🔗",
    iconBg: "#f0f9ff",
    resources: [
      {
        name: "Next.js Docs",
        description: "The official Next.js documentation. Best resource for learning the App Router, server components, and more.",
        href: "https://nextjs.org/docs",
        tag: "Documentation",
        iconBg: "#f0f0f0",
        icon: "📄",
      },
      {
        name: "Tailwind Docs",
        description: "The utility-first CSS framework I rely on daily. Their search is lightning fast — exactly what you need mid-build.",
        href: "https://tailwindcss.com/docs",
        tag: "Documentation",
        iconBg: "#f0f9ff",
        icon: "🌊",
      },
      {
        name: "MDN Web Docs",
        description: "The definitive reference for HTML, CSS, and JavaScript. My go-to for understanding how the web platform works.",
        href: "https://developer.mozilla.org",
        tag: "Reference",
        iconBg: "#fff7f0",
        icon: "📚",
      },
      {
        name: "Frontend Roadmap",
        description: "A visual guide to becoming a frontend developer. Great for finding gaps in your knowledge and what to learn next.",
        href: "https://roadmap.sh/frontend",
        tag: "Learning",
        iconBg: "#fff0f0",
        icon: "🗺️",
      },
      {
        name: "Framer Motion",
        description: "The animation library I use for React. Powerful, declarative, and makes bringing interfaces to life genuinely fun.",
        href: "https://www.framer.com/motion",
        tag: "Animation",
        iconBg: "#f5f0ff",
        icon: "✨",
      },
    ],
  },
];

function ExternalArrow() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="w-4 h-4 shrink-0 mt-0.5 fill-none stroke-neutral-400 dark:stroke-neutral-600 stroke-2 transition-all duration-200 group-hover:stroke-neutral-600 dark:group-hover:stroke-neutral-300 group-hover:translate-x-px group-hover:-translate-y-px"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  );
}

function ResourceCard({ resource }: { resource: Resource }) {
  return (
    <Link
      href={resource.href}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex flex-col gap-2 p-5 bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-2xl no-underline transition-all duration-200 hover:border-neutral-300 dark:hover:border-neutral-700 hover:-translate-y-0.5"
    >
      {/* Top row — icon + arrow */}
      <div className="flex items-start justify-between gap-2">
        <div
          className="w-10 h-10 rounded-xl flex items-center justify-center text-[20px] shrink-0"
          style={{ background: resource.iconBg }}
        >
          {resource.icon}
        </div>
        <ExternalArrow />
      </div>

      {/* Name */}
      <p
        className="text-[14px] font-extrabold text-neutral-900 dark:text-white"
        style={{ fontFamily: "'Syne', sans-serif" }}
      >
        {resource.name}
      </p>

      {/* Description */}
      <p
        className="text-[12.5px] text-neutral-500 dark:text-neutral-400 leading-[1.65] flex-1"
        style={{ fontFamily: "'DM Sans', sans-serif" }}
      >
        {resource.description}
      </p>

      {/* Tag */}
      <span
        className="self-start text-[10px] font-medium px-2 py-0.5 rounded-full border border-neutral-200 dark:border-neutral-700 text-neutral-400 dark:text-neutral-500"
        style={{ fontFamily: "'DM Sans', sans-serif" }}
      >
        {resource.tag}
      </span>
    </Link>
  );
}

function CategorySection({ category }: { category: Category }) {
  return (
    <div>
      {/* Category header */}
      <div className="flex items-center gap-3 mb-5">
        <div
          className="w-[34px] h-[34px] rounded-xl flex items-center justify-center text-[17px] shrink-0"
          style={{ background: category.iconBg }}
        >
          {category.icon}
        </div>
        <h2
          className="text-[17px] font-extrabold text-neutral-900 dark:text-white"
          style={{ fontFamily: "'Syne', sans-serif" }}
        >
          {category.title}
        </h2>
        <span
          className="text-[12px] text-neutral-400 dark:text-neutral-500 bg-neutral-100 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-full px-2.5 py-0.5"
          style={{ fontFamily: "'DM Sans', sans-serif" }}
        >
          {category.resources.length}
        </span>
      </div>

      {/* Resource cards grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {category.resources.map((resource) => (
          <ResourceCard key={resource.name} resource={resource} />
        ))}
      </div>
    </div>
  );
}

export default function ResourcesPage() {
  return (
    <main className="py-20 px-6 bg-white dark:bg-neutral-950 min-h-screen">
      <div className="max-w-5xl mx-auto">

        {/* Page heading */}
        <div className="text-center mb-16">
          <p
            className="text-xs tracking-widest uppercase text-neutral-400 dark:text-neutral-500 mb-3"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            Curated by Bishop
          </p>
          <h1
            className="font-extrabold text-neutral-900 dark:text-white leading-[1.1] mb-4"
            style={{
              fontFamily: "'Syne', sans-serif",
              fontSize: "clamp(28px, 5vw, 52px)",
            }}
          >
            Tools &amp; <span className="text-[#ff6b6b]">resources</span>
          </h1>
          <p
            className="text-sm text-neutral-400 dark:text-neutral-500 max-w-md mx-auto leading-[1.75]"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            A hand-picked collection of tools, apps, and links I use and
            recommend — built up over years of building for the web.
          </p>
        </div>

        {/* Categories */}
        <div className="flex flex-col gap-14">
          {categories.map((category, i) => (
            <div key={category.title}>
              <CategorySection category={category} />
              {i < categories.length - 1 && (
                <div className="h-px bg-neutral-100 dark:bg-neutral-800 mt-14" />
              )}
            </div>
          ))}
        </div>

      </div>
    </main>
  );
}