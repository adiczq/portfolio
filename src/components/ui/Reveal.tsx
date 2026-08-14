"use client";

import { type ReactNode, useEffect, useRef, useState } from "react";

type RevealProps = {
    children: ReactNode;
    delay?: number;
};

export default function Reveal({ children, delay = 0 }: RevealProps) {
    const ref = useRef<HTMLDivElement | null>(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const node = ref.current;

        if (!node) return;

        const prefersReducedMotion = window.matchMedia(
            "(prefers-reduced-motion: reduce)",
        ).matches;

        if (prefersReducedMotion) {
            setVisible(true);
            return;
        }

        const isMobile = window.matchMedia("(max-width: 767px)").matches;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (!entry.isIntersecting) return;

                setVisible(true);
                observer.disconnect();
            },
            {
                threshold: isMobile ? 0.08 : 0.15,
                rootMargin: isMobile
                    ? "0px 0px -70px 0px"
                    : "0px 0px -100px 0px",
            },
        );

        observer.observe(node);

        return () => observer.disconnect();
    }, []);

    return (
        <div
            ref={ref}
            style={{
                transitionDelay: `${delay}ms`,
            }}
            className={`transition-[opacity,transform,filter] ease-[cubic-bezier(0.22,1,0.36,1)] duration-[950ms] sm:duration-[1400ms] ${visible
                    ? "translate-y-0 scale-100 opacity-100 blur-0"
                    : "translate-y-14 scale-[0.985] opacity-0 blur-[4px] sm:translate-y-14 sm:scale-100 sm:blur-0"
                }`}
        >
            {children}
        </div>
    );
}