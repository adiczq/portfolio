"use client";

import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="pointer-events-none fixed left-0 top-0 z-50 w-full px-4 pt-4 sm:px-6 lg:px-10">
      <div className="mx-auto max-w-[1440px]">
        {/* MAIN BAR */}
        <div className="pointer-events-auto flex h-16 items-center justify-between rounded-2xl border border-white/10 bg-black/45 px-4 shadow-[0_12px_50px_rgba(0,0,0,0.25)] backdrop-blur-2xl sm:px-5">
          {/* BRAND */}
          <a
            href="#home"
            onClick={closeMenu}
            className="group flex items-center gap-3"
          >
            <span className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/10 bg-white/[0.03] font-mono text-xs text-[var(--accent)] transition duration-300 group-hover:border-[var(--accent)]/30 group-hover:bg-[var(--accent)]/[0.05]">
              &gt;_
            </span>

            <div className="flex items-center gap-2">
              <span className="font-[var(--font-manrope)] text-base font-bold tracking-[-0.04em] sm:text-lg">
                ADICZQ<span className="text-[var(--accent)]">.</span>
              </span>

              <span className="hidden font-mono text-[10px] text-white/25 sm:inline">
                /dev
              </span>
            </div>
          </a>

          {/* DESKTOP NAV */}
          <nav className="hidden items-center rounded-xl border border-white/[0.06] bg-white/[0.025] p-1 md:flex">
            <a
              href="#projects"
              className="rounded-lg px-4 py-2 text-sm text-white/50 transition duration-300 hover:bg-white/[0.05] hover:text-white"
            >
              Projects
            </a>

            <a
              href="#experience"
              className="rounded-lg px-4 py-2 text-sm text-white/50 transition duration-300 hover:bg-white/[0.05] hover:text-white"
            >
              Experience
            </a>

            <a
              href="#about"
              className="rounded-lg px-4 py-2 text-sm text-white/50 transition duration-300 hover:bg-white/[0.05] hover:text-white"
            >
              About
            </a>
          </nav>

          {/* DESKTOP RIGHT */}
          <div className="hidden items-center gap-4 md:flex">
            <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.14em] text-white/30">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--accent)] opacity-40" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[var(--accent)]" />
              </span>

              Available
            </div>

            <a
              href="#contact"
              className="group flex items-center gap-2 rounded-xl bg-[var(--accent)] px-4 py-2.5 text-sm font-semibold text-black transition duration-300 hover:scale-[1.03]"
            >
              Let&apos;s talk

              <span className="transition duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                ↗
              </span>
            </a>
          </div>

          {/* MOBILE BUTTON */}
          <button
            type="button"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label="Toggle navigation"
            aria-expanded={menuOpen}
            className="flex h-10 items-center gap-2 rounded-xl border border-white/10 bg-white/[0.025] px-3 font-mono text-[11px] uppercase tracking-[0.14em] text-white/60 transition hover:border-white/20 hover:text-white md:hidden"
          >
            <span>{menuOpen ? "Close" : "Menu"}</span>

            <div className="relative h-3.5 w-4">
              <span
                className={`absolute left-0 top-0 h-px w-4 bg-current transition duration-300 ${menuOpen ? "translate-y-[6px] rotate-45" : ""
                  }`}
              />

              <span
                className={`absolute left-0 top-[6px] h-px w-4 bg-current transition duration-300 ${menuOpen ? "opacity-0" : ""
                  }`}
              />

              <span
                className={`absolute left-0 top-[12px] h-px w-4 bg-current transition duration-300 ${menuOpen ? "-translate-y-[6px] -rotate-45" : ""
                  }`}
              />
            </div>
          </button>
        </div>

        {/* MOBILE MENU */}
        <div
          className={`pointer-events-auto overflow-hidden transition-all duration-300 md:hidden ${menuOpen
              ? "mt-3 max-h-[430px] translate-y-0 opacity-100"
              : "max-h-0 -translate-y-2 opacity-0"
            }`}
        >
          <div className="rounded-2xl border border-white/10 bg-black/65 p-3 shadow-[0_20px_60px_rgba(0,0,0,0.35)] backdrop-blur-2xl">
            <div className="mb-2 flex items-center justify-between border-b border-white/[0.06] px-3 py-3">
              <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-white/25">
                navigation
              </span>

              <div className="flex items-center gap-2 font-mono text-[10px] text-white/30">
                <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent)]" />
                online
              </div>
            </div>

            <nav className="flex flex-col">
              <a
                href="#projects"
                onClick={closeMenu}
                className="group flex items-center justify-between rounded-xl px-3 py-4 font-[var(--font-manrope)] text-2xl font-medium tracking-[-0.04em] transition hover:bg-white/[0.04]"
              >
                Projects

                <span className="font-mono text-xs text-white/20 transition group-hover:text-[var(--accent)]">
                  01
                </span>
              </a>

              <a
                href="#experience"
                onClick={closeMenu}
                className="group flex items-center justify-between rounded-xl px-3 py-4 font-[var(--font-manrope)] text-2xl font-medium tracking-[-0.04em] transition hover:bg-white/[0.04]"
              >
                Experience

                <span className="font-mono text-xs text-white/20 transition group-hover:text-[var(--accent)]">
                  02
                </span>
              </a>

              <a
                href="#about"
                onClick={closeMenu}
                className="group flex items-center justify-between rounded-xl px-3 py-4 font-[var(--font-manrope)] text-2xl font-medium tracking-[-0.04em] transition hover:bg-white/[0.04]"
              >
                About

                <span className="font-mono text-xs text-white/20 transition group-hover:text-[var(--accent)]">
                  03
                </span>
              </a>

              <a
                href="#contact"
                onClick={closeMenu}
                className="group flex items-center justify-between rounded-xl px-3 py-4 font-[var(--font-manrope)] text-2xl font-medium tracking-[-0.04em] transition hover:bg-white/[0.04]"
              >
                Contact

                <span className="font-mono text-xs text-white/20 transition group-hover:text-[var(--accent)]">
                  04
                </span>
              </a>
            </nav>

            <a
              href="mailto:adiczq@gmail.com"
              onClick={closeMenu}
              className="mt-3 flex items-center justify-between rounded-xl bg-[var(--accent)] px-4 py-4 text-sm font-semibold text-black"
            >
              <span>Start a conversation</span>
              <span>↗</span>
            </a>

            <div className="mt-3 flex items-center gap-2 px-3 py-2 font-mono text-[10px] text-white/20">
              <span className="text-[var(--accent)]">$</span>
              <span>open portfolio --ready</span>
              <span className="h-3 w-[5px] animate-pulse bg-[var(--accent)]/60" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}