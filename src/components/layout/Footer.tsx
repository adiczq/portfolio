export default function Footer() {
    return (
        <footer className="border-t border-white/10 px-6 lg:px-10">
            <div className="mx-auto flex max-w-[1440px] flex-col gap-5 py-7 text-sm text-white/30 sm:flex-row sm:items-center sm:justify-between">
                <p>© {new Date().getFullYear()} Adrian Lacheta</p>

                <p>
                    Designed & built with{" "}
                    <span className="text-white/55">Next.js</span> and{" "}
                    <span className="text-white/55">TypeScript</span>
                </p>
            </div>
        </footer>
    );
}