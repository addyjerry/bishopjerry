"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Projects", href: "/projects" },
  { label: "About", href: "/about" },
  { label: "Resources", href: "/resources" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
     
      <header className="sticky top-0 z-50 px-4 sm:px-6 py-4 ">
        <nav className="relative place-self-center flex items-center justify-between h-16 px-6 sm:px-8 rounded-2xl border border-black/10 dark:border-white/10 bg-white/85 dark:bg-neutral-900/85 backdrop-blur-md overflow-hidden">

          {/* Accent gradient top-bar */}
          <div className="absolute top-0 left-0 h-0.5 w-44 bg-linear-to-r from-[#ff6b6b] via-[#17ff0f] to-transparent" />

          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-1.5 text-[20px] mr-15  font-extrabold tracking-tight text-neutral-900 dark:text-white no-underline"
            style={{ fontFamily: "'Syne', sans-serif" }}
          >
           <Image src='/my-avatar.png' width={50} height={50} alt='Bishop' />
           <p className="lg:hidden">Bishop</p>
          </Link>

          {/* Desktop nav links */}
          <ul className="hidden sm:flex items-center gap-1 list-none m-0 p-0">
            {navLinks.map(({ label, href }) => (
              <li key={href}>
                <Link
                  href={href}
                  className={[
                    "relative px-3.5 py-1.5 rounded-lg text-sm no-underline transition-colors duration-200",
                    "after:absolute after:bottom-1 after:left-1/2 after:-translate-x-1/2",
                    "after:h-[1.5px] after:w-[calc(100%-28px)] after:rounded-full after:bg-[#ff6b6b]",
                    "after:transition-transform after:duration-300",
                    pathname === href
                      ? "text-neutral-900 dark:text-white font-medium after:scale-x-100"
                      : "text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white after:scale-x-0 hover:after:scale-x-100",
                  ].join(" ")}
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Right — resume button + hamburger */}
          <div className="flex items-center gap-2.5">
            <a
              href="/resume.pdf"
              download
              className="hidden sm:flex items-center gap-1.5 px-4 py-2 rounded-xl text-[13px] font-medium text-white bg-[#0df82c] hover:bg-[#89e85d] active:scale-95 transition-all duration-150 no-underline"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              <svg
                width="14" height="14"
                viewBox="0 0 16 16"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="shrink-0"
              >
                <path d="M8 2v8M5 7l3 3 3-3" />
                <path d="M3 12h10" />
              </svg>
              Resume
            </a>

            {/* Hamburger button */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
              className="sm:hidden flex flex-col gap-1.25 p-1 bg-transparent border-none cursor-pointer"
            >
              <span
                className={`block w-5.5 h-[1.5px] bg-neutral-800 dark:bg-neutral-200 rounded-full transition-transform duration-300 origin-center ${
                  menuOpen ? "translate-y-[6.5px] rotate-45" : ""
                }`}
              />
              <span
                className={`block w-5.5 h-[1.5px] bg-neutral-800 dark:bg-neutral-200 rounded-full transition-all duration-300 ${
                  menuOpen ? "opacity-0 scale-x-0" : ""
                }`}
              />
              <span
                className={`block w-5.5 h-[1.5px] bg-neutral-800 dark:bg-neutral-200 rounded-full transition-transform duration-300 origin-center ${
                  menuOpen ? "-translate-y-[6.5px] -rotate-45" : ""
                }`}
              />
            </button>
          </div>
        </nav>

        {/* Mobile dropdown menu */}
        <div
          className={`sm:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            menuOpen ? "max-h-80 mt-2" : "max-h-0"
          }`}
        >
          <div className="rounded-2xl border border-black/10 dark:border-white/10 bg-white/95 dark:bg-neutral-900/95 backdrop-blur-md">
            <ul className="list-none m-0 p-2">
              {navLinks.map(({ label, href }) => (
                <li key={href}>
                  <Link
                    href={href}
                    onClick={() => setMenuOpen(false)}
                    className={[
                      "block px-4 py-2.5 rounded-xl text-[15px] no-underline transition-colors duration-150",
                      pathname === href
                        ? "bg-black/5 dark:bg-white/5 text-neutral-900 dark:text-white font-medium"
                        : "text-neutral-500 dark:text-neutral-400 hover:bg-black/5 dark:hover:bg-white/5 hover:text-neutral-900 dark:hover:text-white",
                    ].join(" ")}
                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>

            <a
              href="/resume.pdf"
              download
              onClick={() => setMenuOpen(false)}
              className="mx-2 mb-3 flex items-center justify-center gap-1.5 py-2.5 rounded-xl text-sm font-medium text-white bg-[#0df82c] hover:bg-[#89e85d] transition-colors no-underline"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              <svg
                width="14" height="14"
                viewBox="0 0 16 16"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M8 2v8M5 7l3 3 3-3" />
                <path d="M3 12h10" />
              </svg>
              Download Resume
            </a>
          </div>
        </div>
      </header>
    </>
  );
}