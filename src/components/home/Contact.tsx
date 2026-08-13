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
            {/* Glow */}
            <div className="pointer-events-none absolute bottom-[-250px] right-[-150px] h-[600px] w-[600px] rounded-full bg-[var(--accent)]/8 blur-[160px]" />

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

                {/* Contact content */}
                <div className="mt-14 grid gap-12 border-t border-white/10 pt-10 lg:mt-20 lg:grid-cols-[1.3fr_0.7fr] lg:items-end lg:pt-12">
                    <div>
                        <p className="mb-4 text-xs uppercase tracking-[0.2em] text-white/30">
                            Email
                        </p>

                        <a
                            href={`mailto:${email}`}
                            className="group inline-flex max-w-full items-center gap-3 font-[var(--font-manrope)] text-2xl font-medium tracking-[-0.04em] sm:text-4xl lg:text-5xl"
                        >
                            <span className="break-all transition duration-300 group-hover:text-[var(--accent)]">
                                {email}
                            </span>

                            <span className="shrink-0 text-[var(--accent)] transition duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
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
                                    : "border border-white/15 text-white hover:border-[var(--accent)] hover:text-[var(--accent)]"
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

                {/* Bottom meta */}
                <div className="mt-16 flex flex-col gap-6 border-t border-white/10 pt-8 text-sm text-white/35 sm:flex-row sm:items-center sm:justify-between">
                    <div className="flex items-center gap-3">
                        <span className="relative flex h-2 w-2">
                            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--accent)] opacity-40" />
                            <span className="relative inline-flex h-2 w-2 rounded-full bg-[var(--accent)]" />
                        </span>

                        <span>Available for interesting opportunities</span>
                    </div>

                    <div className="flex gap-6">
                        <a
                            href="https://github.com/adiczq"
                            target="_blank"
                            rel="noreferrer"
                            className="transition hover:text-white"
                        >
                            GitHub ↗
                        </a>
                        <a
                            href="https://www.linkedin.com/in/adrian-lacheta-633270182/"
                            target="_blank"
                            rel="noreferrer"
                            className="transition hover:text-white"
                        >
                            LinkedIn ↗
                        </a>
                        <a
                            href="#home"
                            className="transition hover:text-white"
                        >
                            Back to top ↑
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}