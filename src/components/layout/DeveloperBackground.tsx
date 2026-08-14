export default function DeveloperBackground() {
    return (
        <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden bg-[#070807]">
            {/* Green ambient glow */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_28%,rgba(183,255,60,0.11),transparent_28%),radial-gradient(circle_at_18%_78%,rgba(183,255,60,0.045),transparent_32%)]" />

            {/* Giant syntax */}
            <div className="absolute -right-10 top-[18%] select-none font-mono text-[150px] font-semibold tracking-[-0.12em] text-white/[0.025] sm:text-[220px] lg:right-[2%] lg:text-[320px]">
                {"{ }"}
            </div>

            <div className="absolute -left-8 bottom-[6%] select-none font-mono text-[130px] font-semibold text-[var(--accent)]/[0.025] sm:text-[190px] lg:text-[270px]">
                {"</>"}
            </div>

            {/* Code panel */}
            <div className="absolute right-[-320px] top-[24%] w-[620px] rotate-[-7deg] opacity-[0.13] sm:right-[-200px] lg:right-[-40px] lg:w-[720px] lg:opacity-[0.2]">
                <div className="rounded-2xl border border-white/10 bg-white/[0.025] p-7 font-mono text-[12px] leading-7 text-white/45 backdrop-blur-[2px]">
                    <div className="mb-6 flex items-center gap-2">
                        <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
                        <span className="h-2.5 w-2.5 rounded-full bg-white/10" />
                        <span className="h-2.5 w-2.5 rounded-full bg-white/10" />

                        <span className="ml-4 text-white/20">portfolio.tsx</span>
                    </div>

                    <p>
                        <span className="text-[var(--accent)]">const</span>{" "}
                        <span className="text-white/70">developer</span>{" "}
                        <span className="text-white/25">=</span>{" "}
                        <span className="text-white/50">{"{"}</span>
                    </p>

                    <p className="pl-6">
                        name:{" "}
                        <span className="text-[var(--accent)]/70">
                            &quot;Adrian&quot;
                        </span>
                        ,
                    </p>

                    <p className="pl-6">
                        stack:{" "}
                        <span className="text-white/60">
                            [&quot;React&quot;, &quot;Next.js&quot;, &quot;TypeScript&quot;]
                        </span>
                        ,
                    </p>

                    <p className="pl-6">
                        mindset:{" "}
                        <span className="text-[var(--accent)]/70">
                            &quot;engineering&quot;
                        </span>
                        ,
                    </p>

                    <p className="text-white/50">{"}"};</p>

                    <p className="mt-7">
                        <span className="text-[var(--accent)]">export default</span>{" "}
                        <span className="text-white/70">function</span>{" "}
                        <span className="text-white/60">Build()</span>{" "}
                        <span className="text-white/40">{"{"}</span>
                    </p>

                    <p className="pl-6 text-white/40">
                        return &lt;Experience /&gt;;
                    </p>

                    <p className="text-white/40">{"}"}</p>

                    <div className="mt-7 flex items-center gap-2 text-white/25">
                        <span className="text-[var(--accent)]">$</span>
                        <span>npm run build</span>

                        <span className="inline-block h-4 w-[7px] animate-pulse bg-[var(--accent)]/60" />
                    </div>
                </div>
            </div>

            {/* Floating code */}
            <div className="absolute left-[7%] top-[22%] hidden font-mono text-xs text-white/[0.07] lg:block">
                01&nbsp;&nbsp;import React from &quot;react&quot;;
            </div>

            <div className="absolute left-[43%] top-[13%] hidden font-mono text-xs text-[var(--accent)]/[0.09] lg:block">
                =&gt;
            </div>

            <div className="absolute bottom-[15%] right-[9%] hidden font-mono text-xs text-white/[0.07] lg:block">
                git push origin main
            </div>

            {/* Subtle dark overlay */}
            <div className="absolute inset-0 bg-black/10" />
        </div>
    );
}