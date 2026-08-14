import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Privacy Policy | ADICZQ",
    description: "Privacy policy for adiczq.dev.",
};

export default function PrivacyPage() {
    return (
        <main className="relative min-h-screen px-6 pb-24 pt-32 text-white lg:px-10 lg:pt-40">
            <div className="mx-auto max-w-4xl">
                <div className="mb-12 flex items-center gap-4">
                    <span className="h-px w-10 bg-[var(--accent)]" />

                    <span className="font-mono text-xs uppercase tracking-[0.24em] text-[var(--accent)]">
                        Privacy
                    </span>
                </div>

                <h1 className="font-[var(--font-manrope)] text-5xl font-semibold tracking-[-0.055em] sm:text-7xl">
                    Privacy Policy
                    <span className="text-[var(--accent)]">.</span>
                </h1>

                <p className="mt-6 max-w-2xl text-base leading-8 text-white/45">
                    This page explains how personal data may be processed when using
                    adiczq.dev or contacting me through the website.
                </p>

                <div className="mt-16 space-y-12 border-t border-white/10 pt-12">
                    <Section number="01" title="Data controller">
                        <p>
                            The controller of personal data processed in connection with this
                            website is:
                        </p>

                        <div className="mt-5 rounded-2xl border border-white/10 bg-black/30 p-5 backdrop-blur-xl">
                            <p className="font-medium text-white/80">Adrian Lacheta</p>
                            <p className="mt-1 text-white/45">Rybnik, Poland</p>

                            <a
                                href="mailto:adiczq@gmail.com"
                                className="mt-1 inline-block text-[var(--accent)] transition hover:opacity-70"
                            >
                                adiczq@gmail.com
                            </a>
                        </div>
                    </Section>

                    <Section number="02" title="What data may be processed">
                        <p>
                            The website does not contain a contact form and does not require
                            registration.
                        </p>

                        <p className="mt-4">
                            If you contact me by email, I may process the information you
                            provide, such as your name, email address and the content of your
                            message.
                        </p>

                        <p className="mt-4">
                            Technical information related to website requests, such as an IP
                            address or browser information, may also be processed by the
                            hosting provider in connection with operating and securing the
                            website.
                        </p>
                    </Section>

                    <Section number="03" title="Purpose and legal basis">
                        <p>Personal data may be processed in order to:</p>

                        <ul className="mt-5 space-y-3 text-white/45">
                            <li>— respond to messages and enquiries,</li>
                            <li>— discuss potential projects or cooperation,</li>
                            <li>— operate and secure the website.</li>
                        </ul>

                        <p className="mt-5">
                            Depending on the nature of the contact, processing may be based
                            on legitimate interests or on taking steps requested before
                            entering into a contract.
                        </p>
                    </Section>

                    <Section number="04" title="Hosting">
                        <p>
                            The website is hosted by Vercel. Vercel may process technical data
                            necessary to provide, protect and operate the hosting service.
                        </p>
                    </Section>

                    <Section number="05" title="Cookies">
                        <p>
                            This website does not currently use cookies for advertising,
                            behavioural tracking or marketing analytics.
                        </p>

                        <p className="mt-4">
                            For this reason, no cookie consent banner is currently displayed.
                            If tracking or analytics requiring consent are introduced in the
                            future, this policy and the website configuration will be updated.
                        </p>
                    </Section>

                    <Section number="06" title="Data retention">
                        <p>
                            Personal data received through direct contact is retained only
                            for as long as necessary to respond to the enquiry, continue the
                            relevant communication or protect legitimate legal interests.
                        </p>
                    </Section>

                    <Section number="07" title="Your rights">
                        <p>
                            Depending on the circumstances, you may have the right to request:
                        </p>

                        <ul className="mt-5 space-y-3 text-white/45">
                            <li>— access to your personal data,</li>
                            <li>— correction of inaccurate data,</li>
                            <li>— deletion of data,</li>
                            <li>— restriction of processing,</li>
                            <li>— objection to processing.</li>
                        </ul>

                        <p className="mt-5">
                            You also have the right to lodge a complaint with the competent
                            data protection supervisory authority.
                        </p>
                    </Section>

                    <Section number="08" title="Automated decisions">
                        <p>
                            Personal data is not used for automated decision-making or
                            profiling on this website.
                        </p>
                    </Section>

                    <Section number="09" title="Contact">
                        <p>
                            For questions concerning privacy or personal data, contact:
                        </p>

                        <a
                            href="mailto:adiczq@gmail.com"
                            className="mt-4 inline-flex font-mono text-sm text-[var(--accent)] transition hover:opacity-70"
                        >
                            adiczq@gmail.com ↗
                        </a>
                    </Section>
                </div>

                <div className="mt-16 flex items-center justify-between border-t border-white/10 pt-8 font-mono text-xs text-white/25">
                    <span>Last updated: 14 August 2026</span>

                    <a
                        href="/"
                        className="transition hover:text-[var(--accent)]"
                    >
                        ← Back home
                    </a>
                </div>
            </div>
        </main>
    );
}

type SectionProps = {
    number: string;
    title: string;
    children: React.ReactNode;
};

function Section({ number, title, children }: SectionProps) {
    return (
        <section className="grid gap-5 sm:grid-cols-[70px_1fr]">
            <span className="font-mono text-xs text-[var(--accent)]">{number}</span>

            <div>
                <h2 className="font-[var(--font-manrope)] text-2xl font-semibold tracking-[-0.04em] sm:text-3xl">
                    {title}
                </h2>

                <div className="mt-5 max-w-2xl text-sm leading-7 text-white/45 sm:text-base sm:leading-8">
                    {children}
                </div>
            </div>
        </section>
    );
}