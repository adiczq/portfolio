export default function Footer() {
    return (
        <footer className="relative z-10 border-t border-white/10 bg-black/25 px-6 backdrop-blur-xl lg:px-10">
            <div className="mx-auto flex max-w-[1440px] flex-col gap-5 py-7 text-xs text-white/35 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-center gap-3">
                    <span className="font-[var(--font-manrope)] font-semibold text-white/60">
                        ADICZQ<span className="text-[var(--accent)]">.</span>
                    </span>

                    <span className="text-white/15">/</span>

                    <span>© {new Date().getFullYear()} Adrian Lacheta</span>
                </div>

                <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
                    <p>
                        Built with{" "}
                        <span className="text-white/55">Next.js</span>
                        {" + "}
                        <span className="text-white/55">TypeScript</span>
                    </p>

                    <a
                        href="/privacy"
                        className="font-mono transition duration-300 hover:text-[var(--accent)]"
                    >
                        Privacy ↗
                    </a>

                    <a
                        href="#home"
                        className="font-mono transition duration-300 hover:text-[var(--accent)]"
                    >
                        ↑ Top
                    </a>
                </div>
            </div>
        </footer>
    );
}