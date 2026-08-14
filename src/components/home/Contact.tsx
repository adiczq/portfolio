"use client";

import { useState } from "react";

export default function Contact() {
    const [copied, setCopied] = useState(false);

    const email = "adiczq@gmail.com";

    const copyEmail = async () => {
        try {
            await navigator.clipboard.writeText(email);

            setCopied(true);

            window.setTimeout(() => {
                setCopied(false);
            }, 2000);
        } catch {
            window.location.href = `mailto:${email}`;
        }
    };

    return (
        <section
            id="contact"
            className="relative overflow-hidden border-t border-white/10 px-6 py-24 sm:py-32 lg:px-10 lg:py-40"
        >
            <div className="relative mx-auto max-w-[1440px]">
                {/* Label */}
                <div className="mb-10 flex items-center gap-4">
                    <span className="h-px w-10 bg-[var(--accent)] sm:w-12" />

                    <p className="text-xs font-bold uppercase tracking-[0.28em] text-[var(--accent)]">
                        Contact
                    </p>
                </div>

                {/* Main heading */}
                <h2 className="max-w-[1200px] font-[var(--font-manrope)] text-[48px] font-semibold leading-[0.93] tracking-[-0.06em] sm:text-7xl lg:text-[110px]">
                    Let&apos;s build
                    <span className="block text-white/30">something useful.</span>
                </h2>

                {/* Contact glass panel */}
                <div className="mt-14 overflow-hidden rounded-[24px] border border-white/10 bg-black/35 backdrop-blur-xl sm:rounded-[28px] lg:mt-20">
                    <div className="grid gap-12 p-7 sm:p-10 lg:grid-cols-[1.3fr_0.7fr] lg:items-end lg:p-12">
                        <div>
                            <p className="mb-4 font-mono text-xs uppercase tracking-[0.2em] text-white/30">
                                Email
                            </p>

                            <a
                                href={`mailto:${email}`}
                                className="group inline-flex max-w-full items-center gap-3 font-[var(--font-manrope)] text-2xl font-medium tracking-[-0.04em] sm:text-4xl lg:text-5xl"
                            >
                                <span className="break-all transition duration-300 group-hover:text-[var(--accent)]">
                                    {email}
                                </span>

                                <span className="shrink-0 text-[var(--accent)] transition duration-300 group-hover:-translate-y-1 group-hover:translate-x-1">
                                    ↗
                                </span>
                            </a>
                        </div>

                        <div className="lg:justify-self-end">
                            <p className="max-w-md text-base leading-7 text-white/45">
                                Have a project, an idea or an opportunity? Feel free to send me
                                a message. I&apos;m always interested in useful projects and new
                                challenges.
                            </p>

                            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                                <button
                                    type="button"
                                    onClick={copyEmail}
                                    className={`min-w-[140px] rounded-full px-6 py-3 text-sm font-semibold transition duration-300 ${copied
                                            ? "bg-[var(--accent)] text-black"
                                            : "border border-white/15 bg-white/[0.025] text-white hover:border-[var(--accent)]/50 hover:bg-[var(--accent)]/[0.05] hover:text-[var(--accent)]"
                                        }`}
                                >
                                    {copied ? "Copied ✓" : "Copy email"}
                                </button>

                                <a
                                    href={`mailto:${email}`}
                                    className="rounded-full bg-[var(--accent)] px-6 py-3 text-center text-sm font-semibold text-black transition duration-300 hover:scale-[1.03]"
                                >
                                    Send email
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Small terminal-like footer */}
                    <div className="flex items-center gap-2 border-t border-white/10 bg-black/20 px-7 py-4 font-mono text-[11px] text-white/25 sm:px-10 lg:px-12">
                        <span className="text-[var(--accent)]">$</span>
                        <span>ready for the next project</span>
                        <span className="h-3.5 w-[6px] animate-pulse bg-[var(--accent)]/60" />
                    </div>
                </div>

                {/* Bottom meta */}
                <div className="mt-12 flex flex-col gap-6 border-t border-white/10 pt-8 text-sm text-white/35 sm:flex-row sm:items-center sm:justify-between">
                    <div className="flex items-center gap-3">
                        <span className="relative flex h-2 w-2">
                            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--accent)] opacity-40" />
                            <span className="relative inline-flex h-2 w-2 rounded-full bg-[var(--accent)]" />
                        </span>

                        <span>Available for interesting opportunities</span>
                    </div>

                    <div className="flex flex-wrap gap-x-6 gap-y-3">
                        <a
                            href="https://github.com/adiczq"
                            target="_blank"
                            rel="noreferrer"
                            className="transition hover:text-[var(--accent)]"
                        >
                            GitHub ↗
                        </a>

                        <a
                            href="https://www.linkedin.com/in/adrian-lacheta-633270182/"
                            target="_blank"
                            rel="noreferrer"
                            className="transition hover:text-[var(--accent)]"
                        >
                            LinkedIn ↗
                        </a>

                        <a
                            href="#home"
                            className="transition hover:text-[var(--accent)]"
                        >
                            Back to top ↑
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}