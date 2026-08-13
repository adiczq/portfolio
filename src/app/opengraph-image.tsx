import { ImageResponse } from "next/og";

export const alt =
    "Adrian Lacheta — Frontend & Full-stack Developer";

export const size = {
    width: 1200,
    height: 630,
};

export const contentType = "image/png";

export default function OpenGraphImage() {
    return new ImageResponse(
        (
            <div
                style={{
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    padding: "72px",
                    background: "#0a0a0a",
                    color: "#f4f2ed",
                }}
            >
                <div
                    style={{
                        display: "flex",
                        alignItems: "center",
                        fontSize: 28,
                        fontWeight: 700,
                    }}
                >
                    ADICZQ
                    <span style={{ color: "#b7ff3c" }}>.</span>
                </div>

                <div style={{ display: "flex", flexDirection: "column" }}>
                    <div
                        style={{
                            fontSize: 76,
                            fontWeight: 700,
                            letterSpacing: "-4px",
                            lineHeight: 0.95,
                        }}
                    >
                        Frontend developer
                    </div>

                    <div
                        style={{
                            marginTop: 10,
                            fontSize: 76,
                            fontWeight: 700,
                            letterSpacing: "-4px",
                            lineHeight: 0.95,
                            color: "#666666",
                        }}
                    >
                        with an engineering mindset.
                    </div>
                </div>

                <div
                    style={{
                        display: "flex",
                        justifyContent: "space-between",
                        fontSize: 20,
                        color: "#888888",
                    }}
                >
                    <span>React · Next.js · TypeScript</span>

                    <span style={{ color: "#b7ff3c" }}>
                        adiczq.dev
                    </span>
                </div>
            </div>
        ),
        {
            ...size,
        },
    );
}