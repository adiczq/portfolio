const groups = [
    {
        number: "01",
        title: "Frontend",
        description:
            "Interfaces, responsive layouts and modern user experiences.",
        items: [
            "React",
            "Next.js",
            "TypeScript",
            "JavaScript",
            "Tailwind CSS",
            "HTML",
            "CSS",
        ],
    },
    {
        number: "02",
        title: "Backend",
        description:
            "APIs, authentication, databases and application logic.",
        items: [
            "Node.js",
            "Express",
            "REST API",
            "MongoDB",
            "Mongoose",
            "JWT",
        ],
    },
    {
        number: "03",
        title: "Workflow",
        description:
            "Tools I use to build, test, deploy and maintain projects.",
        items: [
            "Git",
            "GitHub",
            "Vercel",
            "Netlify",
            "Postman",
            "VS Code",
        ],
    },
];

export default function Stack() {
    return (
        <section className="overflow-hidden border-t border-white/10 px-6 py-20 sm:py-28 lg:px-10 lg:py-36">
            <div className="mx-auto max-w-[1440px]">
                <div className="mb-12 grid gap-8 sm:mb-14 lg:mb-20 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
                    <div>
                        <p className="mb-5 text-xs font-bold uppercase tracking-[0.28em] text-[var(--accent)]">
                            Tech stack
                        </p>

                        <h2 className="max-w-4xl font-[var(--font-manrope)] text-4xl font-semibold tracking-[-0.05em] sm:text-6xl lg:text-7xl">
                            Tools are just tools.
                            <span className="block text-white/35">
                                What matters is what you build.
                            </span>
                        </h2>
                    </div>

                    <p className="max-w-md text-base leading-7 text-white/45 lg:justify-self-end">
                        I choose technologies based on the problem, not because they make
                        the list longer.
                    </p>
                </div>

                <div className="overflow-hidden rounded-[24px] border border-white/10 sm:rounded-[28px]">
                    {groups.map((group, index) => (
                        <div
                            key={group.title}
                            className="group border-b border-white/10 bg-[#0d0d0d] last:border-b-0"
                        >
                            <div className="grid lg:grid-cols-[340px_1fr]">
                                <div className="relative border-b border-white/10 p-6 sm:p-8 lg:border-b-0 lg:border-r">
                                    <div className="flex items-start gap-5">
                                        <span className="pt-1 font-[var(--font-manrope)] text-xs font-semibold tracking-[0.2em] text-[var(--accent)]">
                                            {group.number}
                                        </span>

                                        <div>
                                            <h3 className="font-[var(--font-manrope)] text-2xl font-semibold tracking-[-0.04em] sm:text-3xl">
                                                {group.title}
                                            </h3>

                                            <p className="mt-3 max-w-xs text-sm leading-6 text-white/40">
                                                {group.description}
                                            </p>
                                        </div>
                                    </div>

                                    <div className="absolute bottom-0 left-0 h-px w-0 bg-[var(--accent)] transition-all duration-500 group-hover:w-full" />
                                </div>

                                <div className="relative flex min-h-[110px] items-center overflow-hidden sm:min-h-[140px] lg:min-h-[150px]">
                                    <div className="pointer-events-none absolute bottom-0 left-0 top-0 z-10 w-8 bg-gradient-to-r from-[#0d0d0d] to-transparent sm:w-16" />

                                    <div className="pointer-events-none absolute bottom-0 right-0 top-0 z-10 w-8 bg-gradient-to-l from-[#0d0d0d] to-transparent sm:w-16" />

                                    <div
                                        className={`tech-marquee-track ${index === 1 ? "tech-marquee-reverse" : ""
                                            }`}
                                    >
                                        <div className="tech-marquee-group">
                                            {group.items.map((item) => (
                                                <span
                                                    key={`${group.title}-${item}-1`}
                                                    className="tech-pill"
                                                >
                                                    {item}
                                                </span>
                                            ))}
                                        </div>

                                        <div className="tech-marquee-group" aria-hidden="true">
                                            {group.items.map((item) => (
                                                <span
                                                    key={`${group.title}-${item}-2`}
                                                    className="tech-pill"
                                                >
                                                    {item}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-8 flex flex-col gap-5 border-t border-white/10 pt-8 text-sm text-white/35 sm:flex-row sm:items-center sm:justify-between">
                    <p>Always learning. Always building.</p>

                    <div className="flex items-center gap-3">
                        <span className="relative flex h-2 w-2">
                            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--accent)] opacity-40" />
                            <span className="relative inline-flex h-2 w-2 rounded-full bg-[var(--accent)]" />
                        </span>

                        <span>Current focus: Next.js + TypeScript</span>
                    </div>
                </div>
            </div>
        </section>
    );
}