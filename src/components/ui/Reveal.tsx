"use client";

import { type ReactNode, useEffect, useRef, useState } from "react";

type RevealProps = {
    children: ReactNode;
    delay?: number;
};

export default function Reveal({
    children,
    delay = 0,
}: RevealProps) {
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
                threshold: isMobile ? 0.03 : 0.15,
                rootMargin: isMobile
                    ? "0px 0px -20px 0px"
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
                transitionDuration: "1400ms",
            }}
            className={`transition-[opacity,transform] ease-[cubic-bezier(0.22,1,0.36,1)] ${visible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-10 opacity-0 sm:translate-y-14"
                }`}
        >
            {children}
        </div>
    );
}