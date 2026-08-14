"use client";

import { useEffect, useRef, useState } from "react";

const locations = [
  "Berlin · Germany",
  "Prague · Czechia",
  "London · United Kingdom",
  "Warsaw · Poland",
  "Kraków · Poland",
  "Katowice · Poland",
  "Rybnik · Poland",
];

export default function Hero() {
  const sectionRef = useRef<HTMLElement | null>(null);

  const [experience, setExperience] = useState(0);
  const [locationIndex, setLocationIndex] = useState(0);
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || animated) return;

        setAnimated(true);

        const duration = 1200;
        const start = performance.now();

        const animateExperience = (time: number) => {
          const progress = Math.min((time - start) / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);

          setExperience(Math.round(16 * eased));

          if (progress < 1) {
            requestAnimationFrame(animateExperience);
          }
        };

        requestAnimationFrame(animateExperience);

        const delays = [90, 100, 120, 150, 190, 250, 360];

        let timeout = 0;

        delays.forEach((delay, index) => {
          timeout += delay;

          window.setTimeout(() => {
            setLocationIndex(index);
          }, timeout);
        });

        observer.disconnect();
      },
      {
        threshold: 0.2,
      },
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, [animated]);

  return (
    <section
      ref={sectionRef}
      id="home"
      className="relative min-h-screen overflow-hidden px-6 pb-20 pt-28 text-white lg:px-10 lg:pb-20 lg:pt-24"
    >
      <div className="mx-auto grid min-h-[calc(100vh-112px)] max-w-[1440px] items-center gap-14 lg:min-h-[calc(100vh-96px)] lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
        <div className="max-w-5xl">
          {/* MOBILE TERMINAL */}
          <div className="mb-10 overflow-hidden rounded-2xl border border-white/10 bg-black/35 backdrop-blur-xl lg:hidden">
            <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-white/15" />
                <span className="h-2 w-2 rounded-full bg-white/10" />
                <span className="h-2 w-2 rounded-full bg-white/10" />

                <span className="ml-2 font-mono text-[10px] text-white/25">
                  ~/portfolio
                </span>
              </div>

              <div className="flex items-center gap-2 font-mono text-[10px] text-white/30">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--accent)] opacity-40" />
                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[var(--accent)]" />
                </span>

                ready
              </div>
            </div>

            <div className="p-4 font-mono text-xs leading-6">
              <p className="text-white/25">
                <span className="text-[var(--accent)]">$</span> whoami
              </p>

              <p className="mt-1 text-white/65">Adrian Lacheta</p>

              <div className="mt-4 flex items-center gap-2 text-white/35">
                <span className="text-[var(--accent)]">&gt;</span>

                <span>frontend.dev</span>

                <span className="h-3.5 w-[6px] animate-pulse bg-[var(--accent)]/70" />
              </div>
            </div>
          </div>

          {/* DESKTOP LOCATION */}
          <div className="mb-8 hidden items-center gap-4 lg:flex">
            <span className="h-px w-12 bg-[var(--accent)]" />

            <div className="flex items-center gap-3">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--accent)] opacity-50" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[var(--accent)]" />
              </span>

              <span
                key={locationIndex}
                className="slot-value font-mono text-xs font-semibold uppercase tracking-[0.24em] text-[var(--accent)]"
              >
                {locations[locationIndex]}
              </span>
            </div>
          </div>

          {/* MOBILE SMALL LABEL */}
          <div className="mb-5 flex items-center gap-3 lg:hidden">
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--accent)]">
              01 / Developer
            </span>

            <span className="h-px flex-1 bg-white/10" />
          </div>

          {/* HEADING */}
          <h1 className="max-w-5xl font-[var(--font-manrope)] text-[58px] font-semibold leading-[0.88] tracking-[-0.06em] sm:text-7xl lg:text-[88px] lg:leading-[0.92] lg:tracking-[-0.055em]">
            Frontend
            <span className="block">
              developer
              <span className="text-[var(--accent)] lg:hidden">_</span>
            </span>

            <span className="mt-4 block text-[25px] leading-[1.05] tracking-[-0.04em] text-white/30 sm:text-4xl lg:mt-0 lg:text-[88px] lg:leading-[0.92] lg:tracking-[-0.055em]">
              with an engineering mindset.
            </span>
          </h1>

          {/* TEXT */}
          <p className="mt-8 max-w-2xl text-base leading-7 text-white/50 sm:text-lg sm:leading-8 lg:mt-10 lg:text-xl lg:leading-9">
            I&apos;m Adrian Lacheta. I build modern web experiences using React,
            Next.js and TypeScript, combining software development with years
            of technical and manufacturing experience.
          </p>

          {/* MOBILE CTA */}
          <div className="mt-9 flex items-center gap-6 lg:hidden">
            <a
              href="#projects"
              className="group flex min-h-14 items-center justify-center gap-3 rounded-xl bg-[var(--accent)] px-6 text-sm font-semibold text-black transition-transform duration-300 active:scale-[0.98]"
            >
              View projects

              <span>↓</span>
            </a>

            <a
              href="https://github.com/adiczq"
              target="_blank"
              rel="noreferrer"
              className="font-mono text-sm text-white/45 transition hover:text-[var(--accent)]"
            >
              GitHub ↗
            </a>
          </div>

          {/* MOBILE STACK */}
          <div className="mt-10 flex flex-wrap gap-x-5 gap-y-3 border-t border-white/10 pt-5 font-mono text-[11px] text-white/30 lg:hidden">
            <span>React</span>
            <span>Next.js</span>
            <span>TypeScript</span>
            <span>Node.js</span>
          </div>

          {/* MOBILE STATS */}
          <div className="mt-8 grid grid-cols-2 overflow-hidden rounded-2xl border border-white/10 bg-black/30 backdrop-blur-xl lg:hidden">
            {/* LOCATION */}
            <div className="relative min-h-[118px] border-b border-r border-white/10 p-5">
              <span className="font-mono text-[9px] uppercase tracking-[0.22em] text-white/35">
                Location
              </span>

              <div className="mt-4 flex items-center gap-2">
                <span className="relative flex h-1.5 w-1.5 shrink-0">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--accent)] opacity-40" />
                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[var(--accent)]" />
                </span>

                <p
                  key={locationIndex}
                  className="slot-value font-mono text-sm font-medium text-white/70"
                >
                  {locations[locationIndex]}
                </p>
              </div>

              <span className="absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-[var(--accent)]/30 to-transparent" />
            </div>

            {/* EXPERIENCE */}
            <div className="relative min-h-[118px] border-b border-white/10 p-5">
              <span className="font-mono text-[9px] uppercase tracking-[0.22em] text-white/35">
                Experience
              </span>

              <p className="mt-3 font-mono text-4xl font-semibold tracking-[-0.06em]">
                {experience}
                <span className="text-[var(--accent)]">+</span>
              </p>

              <p className="mt-1 font-mono text-[10px] text-white/25">
                technical years
              </p>
            </div>

            {/* FOCUS */}
            <div className="relative min-h-[110px] border-r border-white/10 p-5">
              <span className="font-mono text-[9px] uppercase tracking-[0.22em] text-white/35">
                Focus
              </span>

              <p className="mt-4 text-sm font-semibold">
                Frontend
                <span className="block text-white/30">Full-stack</span>
              </p>
            </div>

            {/* STACK */}
            <div className="relative min-h-[110px] p-5">
              <span className="font-mono text-[9px] uppercase tracking-[0.22em] text-white/35">
                Stack
              </span>

              <p className="mt-4 text-sm font-semibold">
                Next.js
                <span className="block text-white/30">TypeScript</span>
              </p>

              <span className="absolute bottom-5 right-5 h-1.5 w-1.5 rounded-full bg-[var(--accent)] shadow-[0_0_12px_var(--accent)]" />
            </div>
          </div>

          {/* DESKTOP CTA */}
          <div className="mt-10 hidden gap-4 sm:flex lg:flex">
            <a
              href="#projects"
              className="group flex min-h-16 items-center justify-center gap-3 rounded-full bg-[var(--accent)] px-9 font-semibold text-black transition-transform duration-300 hover:scale-[1.02]"
            >
              View projects

              <span className="transition-transform duration-300 group-hover:translate-x-1">
                ↓
              </span>
            </a>

            <a
              href="https://github.com/adiczq"
              target="_blank"
              rel="noreferrer"
              className="group flex min-h-16 items-center justify-center gap-3 rounded-full border border-white/15 px-9 font-semibold text-white transition-all duration-300 hover:border-[var(--accent)]/40 hover:bg-[var(--accent)]/[0.04]"
            >
              GitHub

              <span className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1">
                ↗
              </span>
            </a>
          </div>
        </div>

        {/* DESKTOP STATS */}
        <div className="hidden grid-cols-2 border-l border-t border-white/10 lg:grid">
          <div className="group relative min-h-40 border-b border-r border-white/10 p-8">
            <span className="font-mono text-[10px] uppercase tracking-[0.24em] text-white/50">
              Location
            </span>

            <p className="mt-5 text-xl font-semibold">
              Rybnik
              <span className="block text-white/35">Poland</span>
            </p>

            <span className="absolute bottom-0 left-0 h-px w-0 bg-[var(--accent)] transition-all duration-500 group-hover:w-full" />
          </div>

          <div className="group relative min-h-40 border-b border-r border-white/10 p-8">
            <span className="font-mono text-[10px] uppercase tracking-[0.24em] text-white/50">
              Experience
            </span>

            <p className="mt-4 font-mono text-5xl font-semibold tracking-[-0.05em]">
              {experience}
              <span className="text-[var(--accent)]">+</span>
            </p>

            <span className="absolute bottom-0 left-0 h-px w-0 bg-[var(--accent)] transition-all duration-500 group-hover:w-full" />
          </div>

          <div className="group relative min-h-40 border-b border-r border-white/10 p-8">
            <span className="font-mono text-[10px] uppercase tracking-[0.24em] text-white/50">
              Focus
            </span>

            <p className="mt-5 text-xl font-semibold">
              Frontend
              <span className="block text-white/35">Full-stack</span>
            </p>

            <span className="absolute bottom-0 left-0 h-px w-0 bg-[var(--accent)] transition-all duration-500 group-hover:w-full" />
          </div>

          <div className="group relative min-h-40 border-b border-r border-white/10 p-8">
            <span className="font-mono text-[10px] uppercase tracking-[0.24em] text-white/50">
              Stack
            </span>

            <p className="mt-5 text-xl font-semibold transition-colors duration-300 group-hover:text-[var(--accent)]">
              Next.js
              <span className="block text-white/35">TypeScript</span>
            </p>

            <span className="absolute bottom-0 left-0 h-px w-0 bg-[var(--accent)] transition-all duration-500 group-hover:w-full" />
          </div>
        </div>
      </div>
    </section>
  );
}