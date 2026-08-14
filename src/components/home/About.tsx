const principles = [
    {
        number: "01",
        title: "Understand",
        text: "I like to understand how something works before I start building it.",
    },
    {
        number: "02",
        title: "Simplify",
        text: "Good solutions should remove complexity, not introduce more of it.",
    },
    {
        number: "03",
        title: "Build",
        text: "The best way to learn is to create something that actually works.",
    },
];

export default function About() {
    return (
        <section
            id="about"
            className="relative overflow-hidden border-t border-white/10 px-6 py-20 sm:py-28 lg:px-10 lg:py-36"
        >
            <div className="mx-auto max-w-[1440px]">
                {/* HEADER */}
                <div className="grid gap-12 lg:grid-cols-[0.6fr_1.4fr] lg:gap-24">
                    <div>
                        <p className="text-xs font-bold uppercase tracking-[0.28em] text-[var(--accent)]">
                            About me
                        </p>
                    </div>

                    <div>
                        <h2 className="max-w-5xl font-[var(--font-manrope)] text-4xl font-semibold leading-[1.05] tracking-[-0.05em] sm:text-6xl lg:text-7xl">
                            I enjoy figuring out
                            <span className="block text-white/35">how things work.</span>
                        </h2>

                        <div className="mt-10 grid gap-8 text-base leading-8 text-white/45 md:grid-cols-2">
                            <p>
                                I&apos;m Adrian Lacheta, a developer based in Rybnik, Poland. My
                                background combines software development with many years of
                                experience in manufacturing, CNC programming and engineering.
                            </p>

                            <p>
                                I enjoy turning ideas and real-world problems into simple,
                                useful digital products — from modern websites to full-stack
                                applications and integrations.
                            </p>
                        </div>
                    </div>
                </div>

                {/* PRINCIPLES */}
                <div className="mt-16 grid overflow-hidden rounded-[28px] border border-white/10 bg-black/25 backdrop-blur-xl lg:grid-cols-3">
                    {principles.map((item) => (
                        <div
                            key={item.number}
                            className="group relative min-h-[280px] overflow-hidden border-b border-white/10 bg-black/40 p-7 transition duration-500 last:border-b-0 hover:bg-black/50 sm:p-9 lg:border-b-0 lg:border-r lg:last:border-r-0"
                        >
                            {/* glow */}
                            <div className="absolute -right-20 -top-20 h-44 w-44 rounded-full bg-[var(--accent)]/0 blur-[70px] transition duration-700 group-hover:bg-[var(--accent)]/10" />

                            {/* number */}
                            <div className="relative flex items-center justify-between">
                                <span className="font-mono text-xs font-semibold tracking-[0.2em] text-white/25 transition duration-300 group-hover:text-[var(--accent)]">
                                    {item.number}
                                </span>

                                <span className="-translate-x-[5px] text-xl text-[var(--accent)] opacity-0 transition duration-300 group-hover:translate-x-0 group-hover:opacity-100">
                                    ↗
                                </span>
                            </div>

                            <div className="relative mt-20">
                                <h3 className="font-[var(--font-manrope)] text-3xl font-semibold tracking-[-0.04em] sm:text-4xl">
                                    {item.title}
                                </h3>

                                <p className="mt-5 max-w-sm text-sm leading-7 text-white/40 sm:text-base">
                                    {item.text}
                                </p>
                            </div>

                            {/* bottom line */}
                            <div className="absolute bottom-0 left-0 h-px w-0 bg-[var(--accent)] transition-all duration-700 group-hover:w-full" />
                        </div>
                    ))}
                </div>

                {/* BOTTOM */}
                <div className="mt-12 flex flex-col gap-8 border-t border-white/10 pt-8 sm:flex-row sm:items-end sm:justify-between">
                    <div className="max-w-2xl">
                        <p className="font-mono text-xs uppercase tracking-[0.2em] text-white/30">
                            Outside the code
                        </p>

                        <p className="mt-3 font-[var(--font-manrope)] text-xl leading-8 text-white/65 sm:text-2xl">
                            Engineering taught me precision.
                            <span className="text-white/30">
                                {" "}
                                Software taught me that there&apos;s always another way to
                                solve the problem.
                            </span>
                        </p>
                    </div>

                    <div className="flex shrink-0 flex-wrap gap-3">
                        <a
                            href="https://github.com/adiczq"
                            target="_blank"
                            rel="noreferrer"
                            className="rounded-full border border-white/15 bg-white/[0.02] px-5 py-2.5 text-sm font-medium transition duration-300 hover:border-[var(--accent)]/50 hover:bg-[var(--accent)]/[0.04] hover:text-[var(--accent)]"
                        >
                            GitHub ↗
                        </a>

                        <a
                            href="https://www.linkedin.com/in/adrian-lacheta-633270182/"
                            target="_blank"
                            rel="noreferrer"
                            className="rounded-full border border-white/15 bg-white/[0.02] px-5 py-2.5 text-sm font-medium transition duration-300 hover:border-[var(--accent)]/50 hover:bg-[var(--accent)]/[0.04] hover:text-[var(--accent)]"
                        >
                            LinkedIn ↗
                        </a>

                        <a
                            href="#contact"
                            className="rounded-full border border-white/15 bg-white/[0.02] px-5 py-2.5 text-sm font-medium transition duration-300 hover:border-[var(--accent)]/50 hover:bg-[var(--accent)]/[0.04] hover:text-[var(--accent)]"
                        >
                            Contact me
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}