"use client";

import { useEffect, useRef, useState, useCallback } from "react";

const steps = [
  {
    number: "01",
    title: "Discover",
    description:
      "I listen deeply, ask the right questions and understand the full context — the user, the goal, and the constraints — before touching any code.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        className="w-[18px] h-[18px] fill-none stroke-[1.8] [stroke-linecap:round] [stroke-linejoin:round]"
      >
        <circle cx="11" cy="11" r="8" />
        <path d="M21 21l-4.35-4.35" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Define",
    description:
      "I break the problem into smaller pieces, define clear requirements, and map out the user flow or system architecture before any implementation starts.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        className="w-[18px] h-[18px] fill-none stroke-[1.8] [stroke-linecap:round] [stroke-linejoin:round]"
      >
        <path d="M12 20h9" />
        <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Build",
    description:
      "I develop iteratively — starting with the core functionality, writing clean and scalable code, and testing at every stage to catch issues early.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        className="w-[18px] h-[18px] fill-none stroke-[1.8] [stroke-linecap:round] [stroke-linejoin:round]"
      >
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    ),
  },
  {
    number: "04",
    title: "Deliver",
    description:
      "I review, refine, and ship — then stay available for feedback. A good solution isn't just working code; it's code the client is genuinely happy with.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        className="w-[18px] h-[18px] fill-none stroke-[1.8] [stroke-linecap:round] [stroke-linejoin:round]"
      >
        <polyline points="20 6 9 17 4 12" />
      </svg>
    ),
  },
];

export default function ProcessStepper() {
  const [current, setCurrent] = useState(0);
  const autoRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const stepperRef = useRef<HTMLDivElement>(null);

  const stopAuto = useCallback(() => {
    if (autoRef.current) clearInterval(autoRef.current);
  }, []);

  const goTo = useCallback(
    (idx: number) => {
      setCurrent(idx);
      stopAuto();
    },
    [stopAuto]
  );

  useEffect(() => {
    autoRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % steps.length);
    }, 3000);
    return () => {
      if (autoRef.current) clearInterval(autoRef.current);
    };
  }, []);

  return (
    <section className="py-20 px-6 bg-white dark:bg-neutral-950 text-center overflow-hidden">

      {/* Heading */}
      <p
        className="text-xs tracking-widest uppercase text-neutral-400 dark:text-neutral-500 mb-2"
        style={{ fontFamily: "'DM Sans', sans-serif" }}
      >
        How I work
      </p>
      <h2
        className="font-extrabold text-neutral-900 dark:text-white mb-3"
        style={{ fontFamily: "'Syne', sans-serif", fontSize: "clamp(22px, 4vw, 38px)" }}
      >
        My problem-solving{" "}
        <span className="text-[#ff6b6b]">process</span>
      </h2>
      <p
        className="text-sm text-neutral-400 dark:text-neutral-500 max-w-md mx-auto mb-14"
        style={{ fontFamily: "'DM Sans', sans-serif" }}
      >
        A clear, repeatable approach I follow from understanding the problem to delivering the solution.
      </p>

      {/* Stepper */}
      <div
        ref={stepperRef}
        className="max-w-4xl mx-auto flex flex-col sm:flex-row items-stretch sm:items-start gap-0"
      >
        {steps.map((step, i) => {
          const isActive = i === current;
          const isDone = i < current;

          return (
            <div key={step.number} className="flex flex-row sm:flex-col flex-1 items-start sm:items-center">

              {/* Step content */}
              <div
                className="flex flex-row sm:flex-col items-start sm:items-center gap-4 sm:gap-0 flex-1 cursor-pointer group"
                onClick={() => goTo(i)}
              >
                {/* Number + icon */}
                <div className="flex flex-col items-center gap-2.5 shrink-0 sm:mb-5">
                  {/* Number circle */}
                  <div
                    className={[
                      "w-14 h-14 rounded-full flex items-center justify-center border-2 transition-all duration-300",
                      "font-extrabold text-lg",
                      isActive
                        ? "border-[#ff6b6b] bg-[#ff6b6b] text-white scale-110"
                        : isDone
                        ? "border-[#ff6b6b] text-[#ff6b6b] bg-white dark:bg-neutral-950"
                        : "border-neutral-200 dark:border-neutral-700 text-neutral-400 dark:text-neutral-500 bg-white dark:bg-neutral-950 group-hover:border-neutral-400 dark:group-hover:border-neutral-500",
                    ].join(" ")}
                    style={{ fontFamily: "'Syne', sans-serif" }}
                  >
                    {step.number}
                  </div>

                  {/* Icon pill */}
                  <div
                    className={[
                      "w-9 h-9 rounded-xl flex items-center justify-center border transition-all duration-300",
                      isActive
                        ? "bg-red-50 dark:bg-red-950/30 border-[#ff6b6b]"
                        : "bg-neutral-100 dark:bg-neutral-800 border-neutral-200 dark:border-neutral-700",
                    ].join(" ")}
                  >
                    <span
                      className={[
                        "transition-colors duration-300",
                        isActive
                          ? "stroke-[#ff6b6b]"
                          : "stroke-neutral-400 dark:stroke-neutral-500",
                      ].join(" ")}
                      style={{ display: "contents" }}
                    >
                      {step.icon}
                    </span>
                  </div>
                </div>

                {/* Text */}
                <div
                  className={[
                    "text-left sm:text-center px-0 sm:px-3 transition-all duration-400",
                    isActive || isDone
                      ? "opacity-100 translate-y-0"
                      : "opacity-50 translate-y-1",
                  ].join(" ")}
                >
                  <p
                    className={[
                      "font-bold text-sm mb-1.5 transition-colors duration-300",
                      isActive
                        ? "text-[#ff6b6b]"
                        : "text-neutral-800 dark:text-neutral-200",
                    ].join(" ")}
                    style={{ fontFamily: "'Syne', sans-serif" }}
                  >
                    {step.title}
                  </p>
                  <p
                    className="text-[12.5px] text-neutral-500 dark:text-neutral-400 leading-relaxed"
                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                  >
                    {step.description}
                  </p>
                </div>
              </div>

              {/* Connector — hidden after last step */}
              {i < steps.length - 1 && (
                <>
                  {/* Horizontal connector (desktop) */}
                  <div className="hidden sm:block flex-1 h-[2px] mt-7 bg-neutral-200 dark:bg-neutral-800 relative overflow-hidden mx-1">
                    <div
                      className="absolute top-0 left-0 h-full bg-[#ff6b6b] transition-all duration-500"
                      style={{ width: i < current ? "100%" : "0%" }}
                    />
                  </div>

                  {/* Vertical connector (mobile) */}
                  <div className="sm:hidden w-[2px] h-10 ml-7 bg-neutral-200 dark:bg-neutral-800 relative overflow-hidden my-1 shrink-0">
                    <div
                      className="absolute top-0 left-0 w-full bg-[#ff6b6b] transition-all duration-500"
                      style={{ height: i < current ? "100%" : "0%" }}
                    />
                  </div>
                </>
              )}
            </div>
          );
        })}
      </div>

      {/* Nav dots */}
      <div className="flex justify-center gap-2 mt-10">
        {steps.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            aria-label={`Go to step ${i + 1}`}
            className={[
              "w-2 h-2 rounded-full transition-all duration-300 border-none cursor-pointer",
              i === current
                ? "bg-[#ff6b6b] scale-125"
                : "bg-neutral-300 dark:bg-neutral-700",
            ].join(" ")}
          />
        ))}
      </div>
    </section>
  );
}