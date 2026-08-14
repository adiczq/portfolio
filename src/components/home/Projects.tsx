import Image from "next/image";

import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative border-t border-white/10 px-6 py-20 sm:py-28 lg:px-10 lg:py-32"
    >
      <div className="mx-auto max-w-[1440px]">
        <div className="mb-12 grid gap-8 lg:mb-16 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
          <div>
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.28em] text-[var(--accent)]">
              Selected work
            </p>

            <h2 className="max-w-3xl font-[var(--font-manrope)] text-4xl font-semibold tracking-[-0.05em] sm:text-6xl lg:text-7xl">
              Projects built to solve
              <span className="block text-white/35">real problems.</span>
            </h2>
          </div>

          <p className="max-w-md text-base leading-7 text-white/45 lg:justify-self-end">
            A selection of commercial, product and full-stack projects showing
            how I approach design, development and implementation.
          </p>
        </div>

        <div className="space-y-6">
          {projects.map((project) => (
            <article
              key={project.title}
              className="group overflow-hidden rounded-[24px] border border-white/10 bg-black/55 backdrop-blur-xl transition duration-500 hover:border-[var(--accent)]/20 hover:bg-black/65 sm:rounded-[28px]"
            >
              <div className="grid lg:grid-cols-[1.15fr_0.85fr]">
                {/* PROJECT IMAGE */}
                <div className="relative bg-white/[0.025] p-4 sm:p-6 lg:p-7">
                  <div className="relative aspect-[16/10] overflow-hidden rounded-xl border border-white/10 bg-black/70 shadow-2xl sm:rounded-2xl">
                    {/* Browser top bar */}
                    <div className="absolute left-0 right-0 top-0 z-20 flex h-10 items-center gap-2 border-b border-white/10 bg-black/75 px-4 backdrop-blur-xl">
                      <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
                      <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
                      <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
                    </div>

                    <div className="absolute bottom-0 left-0 right-0 top-10 overflow-hidden">
                      <Image
                        src={project.image}
                        alt={`${project.title} project preview`}
                        fill
                        className="object-cover object-top transition duration-700 ease-out group-hover:scale-[1.025]"
                        sizes="(max-width: 1024px) 100vw, 60vw"
                      />
                    </div>
                  </div>

                  <div className="absolute left-2 top-2 z-30 rounded-full border border-white/10 bg-black/70 px-3 py-1.5 text-[11px] font-bold tracking-[0.15em] backdrop-blur-md sm:left-4 sm:top-4">
                    {project.number}
                  </div>
                </div>

                {/* PROJECT CONTENT */}
                <div className="flex flex-col justify-center p-7 sm:p-10 lg:p-12">
                  <h3 className="font-[var(--font-manrope)] text-3xl font-semibold tracking-[-0.045em] sm:text-4xl lg:text-[42px]">
                    {project.title}
                  </h3>

                  <p className="mt-5 max-w-lg text-base leading-7 text-white/50">
                    {project.description}
                  </p>

                  <div className="mt-7 flex flex-wrap gap-2">
                    {project.stack.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-white/10 bg-white/[0.02] px-3 py-1.5 text-xs text-white/50 transition group-hover:border-white/15 group-hover:text-white/65"
                      >
                        {item}
                      </span>
                    ))}
                  </div>

                  <a
                    href={project.href}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-10 inline-flex w-fit items-center gap-3 text-sm font-semibold transition duration-300 hover:text-[var(--accent)]"
                  >
                    View project

                    <span className="transition duration-300 group-hover:-translate-y-1 group-hover:translate-x-1">
                      ↗
                    </span>
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}