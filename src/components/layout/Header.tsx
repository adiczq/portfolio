"use client";

import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-white/10 bg-[#0a0a0a]/80 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-[1440px] items-center justify-between px-6 lg:px-10">
        <a
          href="#home"
          onClick={closeMenu}
          className="font-[var(--font-manrope)] text-lg font-bold tracking-[-0.04em]"
        >
          ADICZQ<span className="text-[var(--accent)]">.</span>
        </a>

        <nav className="hidden items-center gap-8 text-sm text-white/60 md:flex">
          <a className="transition hover:text-white" href="#projects">
            Projects
          </a>

          <a className="transition hover:text-white" href="#about">
            About
          </a>

          <a className="transition hover:text-white" href="#contact">
            Contact
          </a>
        </nav>

        <div className="hidden md:block">
          <a
            href="#contact"
            className="rounded-full border border-white/15 px-5 py-2.5 text-sm font-medium transition hover:border-[var(--accent)] hover:text-[var(--accent)]"
          >
            Let&apos;s talk
          </a>
        </div>

        <button
          type="button"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
          className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 md:hidden"
        >
          <div className="relative h-4 w-5">
            <span
              className={`absolute left-0 top-0 h-px w-5 bg-white transition duration-300 ${menuOpen ? "translate-y-[7px] rotate-45" : ""
                }`}
            />

            <span
              className={`absolute left-0 top-[7px] h-px w-5 bg-white transition duration-300 ${menuOpen ? "opacity-0" : ""
                }`}
            />

            <span
              className={`absolute left-0 top-[14px] h-px w-5 bg-white transition duration-300 ${menuOpen ? "-translate-y-[7px] -rotate-45" : ""
                }`}
            />
          </div>
        </button>
      </div>

      <div
        className={`overflow-hidden border-white/10 bg-[#0a0a0a] transition-all duration-300 md:hidden ${menuOpen
          ? "max-h-[360px] border-t opacity-100"
          : "max-h-0 border-t-0 opacity-0"
          }`}
      >
        <nav className="mx-auto flex max-w-[1440px] flex-col px-6 py-6">
          <a
            href="#projects"
            onClick={closeMenu}
            className="border-b border-white/[0.06] py-4 font-[var(--font-manrope)] text-2xl font-medium tracking-[-0.04em]"
          >
            Projects
          </a>

          <a
            href="#about"
            onClick={closeMenu}
            className="border-b border-white/[0.06] py-4 font-[var(--font-manrope)] text-2xl font-medium tracking-[-0.04em]"
          >
            About
          </a>

          <a
            href="#contact"
            onClick={closeMenu}
            className="py-4 font-[var(--font-manrope)] text-2xl font-medium tracking-[-0.04em]"
          >
            Contact
          </a>

          <a
            href="mailto:adiczq@gmail.com"
            onClick={closeMenu}
            className="mt-5 flex items-center justify-center rounded-full bg-[var(--accent)] px-6 py-3.5 text-sm font-semibold text-black"
          >
            Let&apos;s talk
          </a>
        </nav>
      </div>
    </header>
  );
}