const timeline = [
    {
        number: "01",
        title: "Manufacturing",
        description:
            "Hands-on experience with production processes, machining and technical problem solving.",
        label: "Foundation",
    },
    {
        number: "02",
        title: "CNC Programming",
        description:
            "Programming machining processes, optimizing production and working with technical documentation.",
        label: "Technical growth",
    },
    {
        number: "03",
        title: "Engineering",
        description:
            "A broader engineering perspective focused on production systems, process thinking and practical solutions.",
        label: "Engineering mindset",
    },
    {
        number: "04",
        title: "Software Development",
        description:
            "Building modern web applications with React, Next.js, TypeScript and full-stack technologies.",
        label: "Today",
    },
];

export default function Experience() {
    return (
        <section
            id="experience"
            className="relative border-t border-white/10 px-6 py-20 sm:py-28 lg:px-10 lg:py-36"
        >
            <div className="mx-auto max-w-[1440px]">
                <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
                    <div>
                        <p className="mb-5 text-xs font-bold uppercase tracking-[0.28em] text-[var(--accent)]">
                            Engineering background
                        </p>

                        <h2 className="max-w-2xl font-[var(--font-manrope)] text-4xl font-semibold tracking-[-0.05em] sm:text-6xl lg:text-7xl">
                            More than
                            <span className="block text-white/35">just code.</span>
                        </h2>

                        <p className="mt-8 max-w-lg text-base leading-8 text-white/45">
                            My path into software development is built on more than 16 years
                            of technical experience in manufacturing, CNC machining and CNC
                            programming.
                        </p>

                        <p className="mt-5 max-w-lg text-base leading-8 text-white/45">
                            That background influences the way I build software today:
                            understand the problem, simplify the process and create something
                            that works reliably in the real world.
                        </p>

                        <div className="mt-10 inline-flex items-center gap-4 rounded-full border border-white/10 bg-black/20 px-5 py-3 backdrop-blur-md">
                            <span className="h-2 w-2 rounded-full bg-[var(--accent)]" />

                            <span className="text-sm text-white/55">
                                16+ years technical experience
                            </span>
                        </div>
                    </div>

                    <div className="relative">
                        <div className="absolute bottom-8 left-[23px] top-8 hidden w-px bg-white/10 sm:block" />

                        <div className="space-y-4">
                            {timeline.map((item) => (
                                <div
                                    key={item.number}
                                    className="group relative grid gap-5 rounded-2xl border border-white/10 bg-black/50 p-6 backdrop-blur-xl transition duration-300 hover:border-[var(--accent)]/20 hover:bg-black/60 sm:grid-cols-[48px_1fr_auto] sm:items-center sm:p-7"
                                >
                                    <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-black/55 font-[var(--font-manrope)] text-sm font-semibold text-white/45 backdrop-blur-md transition duration-300 group-hover:border-[var(--accent)]/40 group-hover:text-[var(--accent)]">
                                        {item.number}
                                    </div>

                                    <div>
                                        <h3 className="font-[var(--font-manrope)] text-2xl font-semibold tracking-[-0.035em] sm:text-3xl">
                                            {item.title}
                                        </h3>

                                        <p className="mt-2 max-w-2xl text-sm leading-7 text-white/45 sm:text-base">
                                            {item.description}
                                        </p>
                                    </div>

                                    <span className="w-fit rounded-full border border-white/10 bg-white/[0.02] px-3 py-1.5 text-[11px] uppercase tracking-[0.16em] text-white/30 transition group-hover:border-white/15 group-hover:text-white/50">
                                        {item.label}
                                    </span>

                                    <span className="absolute bottom-0 left-0 h-px w-0 bg-[var(--accent)] transition-all duration-500 group-hover:w-full" />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 backdrop-blur-xl sm:grid-cols-3">
                    <div className="bg-black/50 p-6 transition duration-300 hover:bg-black/60 sm:p-7">
                        <p className="text-xs uppercase tracking-[0.2em] text-white/30">
                            Mindset
                        </p>

                        <p className="mt-3 font-[var(--font-manrope)] text-xl font-medium">
                            Engineering first
                        </p>
                    </div>

                    <div className="bg-black/50 p-6 transition duration-300 hover:bg-black/60 sm:p-7">
                        <p className="text-xs uppercase tracking-[0.2em] text-white/30">
                            Approach
                        </p>

                        <p className="mt-3 font-[var(--font-manrope)] text-xl font-medium">
                            Solve real problems
                        </p>
                    </div>

                    <div className="bg-black/50 p-6 transition duration-300 hover:bg-black/60 sm:p-7">
                        <p className="text-xs uppercase tracking-[0.2em] text-white/30">
                            Direction
                        </p>

                        <p className="mt-3 font-[var(--font-manrope)] text-xl font-medium">
                            Software development
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}