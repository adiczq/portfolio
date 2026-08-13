"use client";

import { useEffect, useRef, useState } from "react";

const cities = [
  "Katowice",
  "Berlin",
  "Prague",
  "London",
  "Warsaw",
  "Kraków",
  "Rybnik",
];

const countries = [
  "Germany",
  "Czechia",
  "United Kingdom",
  "Poland",
  "Germany",
  "Czechia",
  "Poland",
];

export default function Hero() {
  const [experience, setExperience] = useState(0);

  const [city, setCity] = useState("Rybnik");
  const [country, setCountry] = useState("Poland");

  const statsRef = useRef<HTMLDivElement | null>(null);
  const animated = useRef(false);

  useEffect(() => {
    const node = statsRef.current;

    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || animated.current) return;

        animated.current = true;

        /*
         * EXPERIENCE COUNTER
         */
        const target = 16;
        const duration = 1200;
        const start = performance.now();

        const animateExperience = (currentTime: number) => {
          const progress = Math.min((currentTime - start) / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);

          setExperience(Math.round(target * eased));

          if (progress < 1) {
            requestAnimationFrame(animateExperience);
          }
        };

        requestAnimationFrame(animateExperience);

        /*
         * LOCATION SLOT MACHINE
         */
        let step = 0;

        const spinLocation = () => {
          if (step >= cities.length) {
            setCity("Rybnik");
            setCountry("Poland");
            return;
          }

          setCity(cities[step]);
          setCountry(countries[step]);

          step += 1;

          // Maszyna stopniowo zwalnia
          const delay = 70 + step * 35;

          window.setTimeout(spinLocation, delay);
        };

        spinLocation();
      },
      {
        threshold: 0.4,
      },
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="home" className="relative min-h-screen overflow-hidden pt-20">
      {/* Background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:64px_64px]" />

      {/* Background glow */}
      <div className="absolute right-[-200px] top-[180px] h-[600px] w-[600px] rounded-full bg-[var(--accent)]/8 blur-[150px]" />

      <div className="relative mx-auto flex min-h-[calc(100vh-80px)] max-w-[1440px] flex-col justify-center px-6 py-16 sm:py-20 lg:px-10">
        {/* Top location */}
        <div className="mb-7 flex items-center gap-4 sm:mb-8">
          <span className="h-px w-10 bg-[var(--accent)] sm:w-12" />

          <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-[var(--accent)] sm:text-xs sm:tracking-[0.28em]">
            Rybnik · Poland
          </span>
        </div>

        {/* Hero title */}
        <h1 className="max-w-[1150px] font-[var(--font-manrope)] text-[44px] font-semibold leading-[0.98] tracking-[-0.055em] sm:text-6xl md:text-7xl lg:text-[96px] lg:leading-[0.95]">
          Frontend developer
          <span className="block text-white/35">
            with an engineering mindset.
          </span>
        </h1>

        {/* Text + CTA */}
        <div className="mt-8 flex max-w-4xl flex-col gap-8 sm:mt-10 lg:flex-row lg:items-end lg:justify-between">
          <p className="max-w-xl text-base leading-7 text-white/55 sm:text-lg">
            I&apos;m Adrian Lacheta. I build modern web experiences using
            React, Next.js and TypeScript, combining software development with
            years of technical and manufacturing experience.
          </p>

          <div className="flex shrink-0 flex-col gap-3 sm:flex-row">
            <a
              href="#projects"
              className="rounded-full bg-[var(--accent)] px-6 py-3 text-center text-sm font-semibold text-black transition duration-300 hover:scale-[1.03]"
            >
              View projects
            </a>

            <a
              href="https://github.com/adiczq"
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-white/15 px-6 py-3 text-center text-sm font-semibold transition duration-300 hover:border-white/40"
            >
              GitHub ↗
            </a>
          </div>
        </div>

        {/* Stats */}
        <div
          ref={statsRef}
          className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4"
        >
          {/* LOCATION */}
          <div className="group relative overflow-hidden bg-[#0d0d0d] p-5 transition duration-300 hover:bg-[#111] sm:p-6">
            <div className="absolute bottom-0 left-0 h-px w-0 bg-[var(--accent)] transition-all duration-500 group-hover:w-full" />

            <p className="text-xs uppercase tracking-[0.2em] text-white/35">
              Location
            </p>

            <div className="mt-3 flex items-center gap-3">
              <span className="relative flex h-2.5 w-2.5 shrink-0">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--accent)] opacity-40" />

                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[var(--accent)]" />
              </span>

              <div className="flex items-center gap-2 overflow-hidden font-medium">
                <span key={city} className="slot-value">
                  {city}
                </span>

                <span className="text-white/25">·</span>

                <span key={country} className="slot-value">
                  {country}
                </span>
              </div>
            </div>
          </div>

          {/* EXPERIENCE */}
          <div className="group relative overflow-hidden bg-[#0d0d0d] p-5 transition duration-300 hover:bg-[#111] sm:p-6">
            <div className="absolute bottom-0 left-0 h-px w-0 bg-[var(--accent)] transition-all duration-500 group-hover:w-full" />

            <p className="text-xs uppercase tracking-[0.2em] text-white/35">
              Experience
            </p>

            <p className="mt-3 font-[var(--font-manrope)] font-medium">
              <span className="text-[var(--accent)]">{experience}+</span>{" "}
              years technical
            </p>
          </div>

          {/* FOCUS */}
          <div className="group relative overflow-hidden bg-[#0d0d0d] p-5 transition duration-300 hover:bg-[#111] sm:p-6">
            <div className="absolute bottom-0 left-0 h-px w-0 bg-[var(--accent)] transition-all duration-500 group-hover:w-full" />

            <p className="text-xs uppercase tracking-[0.2em] text-white/35">
              Focus
            </p>

            <div className="mt-3 flex items-center gap-3">
              <p className="font-medium">Frontend / Full-stack</p>

              <span className="text-[var(--accent)] transition duration-300 group-hover:translate-x-1">
                →
              </span>
            </div>
          </div>

          {/* STACK */}
          <div className="group relative overflow-hidden bg-[#0d0d0d] p-5 transition duration-300 hover:bg-[#111] sm:p-6">
            <div className="absolute bottom-0 left-0 h-px w-0 bg-[var(--accent)] transition-all duration-500 group-hover:w-full" />

            <p className="text-xs uppercase tracking-[0.2em] text-white/35">
              Stack
            </p>

            <div className="mt-3 flex items-center gap-2 font-medium">
              <span className="transition duration-300 group-hover:text-[var(--accent)]">
                Next.js
              </span>

              <span className="text-white/25">·</span>

              <span className="transition delay-75 duration-300 group-hover:text-[var(--accent)]">
                TypeScript
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}