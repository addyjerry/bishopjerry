"use client";

import Link from "next/link";

type SocialLink = {
  name: string;
  handle: string;
  href: string;
  iconBg: string;
  iconBorder: string;
  icon: React.ReactNode;
};

const socialLinks: SocialLink[] = [
  {
    name: "GitHub",
    handle: "github.com/addyjerry",
    href: "https://github.com/addyjerry",
    iconBg: "#f6f8fa",
    iconBorder: "#d0d7de",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="#24292f">
        <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z" />
      </svg>
    ),
  },
  {
    name: "LinkedIn",
    handle: "linkedin.com/in/jerry-addy-193437249",
    href: "https://linkedin.com/in/jerry-addy-193437249",
    iconBg: "#e8f3fb",
    iconBorder: "#bcd9ef",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="#0077b5">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
  name: "Whatsapp",
  handle: "+233 505009586",
  href: "https://wa.me/233505009586",
  iconBg: "#f0fdf4",
  iconBorder: "#bbf7d0",
  icon: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="#25D366">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
      <path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.126 1.532 5.862L.057 23.428a.75.75 0 0 0 .916.916l5.669-1.474A11.942 11.942 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.75a9.737 9.737 0 0 1-4.964-1.355l-.355-.212-3.668.954.978-3.58-.232-.368A9.715 9.715 0 0 1 2.25 12C2.25 6.615 6.615 2.25 12 2.25S21.75 6.615 21.75 12 17.385 21.75 12 21.75z" />
    </svg>
  ),
},
  {
    name: "X (Twitter)",
    handle: "@JayCodes27",
    href: "https://x.com/JayCodes27",
    iconBg: "#f0f8ff",
    iconBorder: "#cfe8ff",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="#1d9bf0">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.736-8.861L1.254 2.25H8.08l4.261 5.632L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z" />
      </svg>
    ),
  },
];

function ArrowIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="w-4 h-4 shrink-0 transition-transform duration-200"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14M12 5l7 7-7 7" />
    </svg>
  );
}

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-20 px-6 bg-white dark:bg-neutral-950"
    >
      <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-12 sm:gap-16 items-center">

        {/* Left — headline + email + availability */}
        <div>
          <p
            className="text-xs tracking-widest uppercase text-neutral-400 dark:text-neutral-500 mb-3"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            Get in touch
          </p>

          <h2
            className="font-extrabold text-neutral-900 dark:text-white leading-[1.1] mb-5"
            style={{
              fontFamily: "'Syne', sans-serif",
              fontSize: "clamp(28px, 4vw, 46px)",
            }}
          >
            Let&apos;s build<br />
            something{" "}
            <span className="text-[#ff6b6b]">great</span>
            <br />together.
          </h2>

          <p
            className="text-[14.5px] text-neutral-500 dark:text-neutral-400 leading-[1.75] mb-8 max-w-sm"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            I&apos;m always open to new opportunities, collaborations, or just a good
            conversation about tech and ideas. Reach out — I respond fast.
          </p>

          {/* Email */}
          <div className="flex items-center gap-2.5 mb-5">
            <div className="w-[38px] h-[38px] rounded-xl bg-red-50 dark:bg-red-950/30 border border-red-100 dark:border-red-900/40 flex items-center justify-center shrink-0">
              <svg
                className="w-[18px] h-[18px] stroke-[#ff6b6b] fill-none"
                strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"
                viewBox="0 0 24 24"
              >
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
            </div>
            <a
              href="mailto:bishopjerry@example.com"
              className="text-[14px] font-medium text-[#ff6b6b] no-underline border-b border-transparent hover:border-[#ff6b6b] transition-colors duration-200"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              addyjerry2704@gmail.com
            </a>
          </div>

          {/* Availability badge */}
          <div
            className="inline-flex items-center gap-2 text-xs text-neutral-500 dark:text-neutral-400 bg-neutral-100 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-full px-3 py-1.5"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            <span className="w-2 h-2 rounded-full bg-green-500 shrink-0" />
            Available for freelance &amp; remote work
          </div>
        </div>

        {/* Right — social cards */}
        <div className="flex flex-col gap-3">
          <p
            className="text-[15px] font-bold text-neutral-900 dark:text-white mb-1"
            style={{ fontFamily: "'Syne', sans-serif" }}
          >
            Find me on
          </p>

          {socialLinks.map((social) => (
            <Link
              key={social.name}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3.5 px-4 py-3.5 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 no-underline transition-all duration-200 hover:border-neutral-300 dark:hover:border-neutral-700 hover:bg-neutral-50 dark:hover:bg-neutral-800 hover:translate-x-1 text-neutral-400 dark:text-neutral-500 group"
            >
              {/* Icon */}
              <div
                className="w-[42px] h-[42px] rounded-xl flex items-center justify-center shrink-0"
                style={{
                  background: social.iconBg,
                  border: `0.5px solid ${social.iconBorder}`,
                }}
              >
                {social.icon}
              </div>

              {/* Info */}
              <div className="flex-1 min-w-0">
                <p
                  className="text-[14px] font-bold text-neutral-900 dark:text-white mb-0.5"
                  style={{ fontFamily: "'Syne', sans-serif" }}
                >
                  {social.name}
                </p>
                <p
                  className="text-[12px] text-neutral-400 dark:text-neutral-500 truncate"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                >
                  {social.handle}
                </p>
              </div>

              {/* Arrow */}
              <ArrowIcon />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}