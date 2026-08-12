import type { Metadata } from "next";
import { Space_Grotesk, Inter, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import { profile } from "@/lib/data";
import Canvas3D from "@/components/Canvas3D";

const display = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["500", "700"],
  display: "swap",
});

const body = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500", "600"],
  display: "swap",
});

const mono = IBM_Plex_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "500"],
  display: "swap",
});

const siteUrl = "https://varshakotegar.me";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${profile.name} — Analyst Portfolio`,
    template: `%s — ${profile.name}`,
  },
  description:
    "Varsha Kotegar — Information Science engineer building data, risk, and decision systems. Case studies in crowd analytics, financial-agent governance, and compliance automation.",
  keywords: [
    "Varsha Kotegar",
    "Analyst portfolio",
    "Data analyst",
    "Risk analyst",
    "Computer vision",
    "VoxelQ",
  ],
  authors: [{ name: profile.name }],
  openGraph: {
    title: `${profile.name} — Analyst Portfolio`,
    description:
      "Case studies in crowd analytics, financial-agent governance, and compliance automation.",
    url: siteUrl,
    siteName: `${profile.name} — Portfolio`,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${profile.name} — Analyst Portfolio`,
    description:
      "Case studies in crowd analytics, financial-agent governance, and compliance automation.",
  },
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable} ${mono.variable}`}>
      <body>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:bg-ink focus:text-paper focus:px-4 focus:py-2 focus:rounded"
        >
          Skip to content
        </a>
        <Canvas3D />
        {children}
      </body>
    </html>
  );
}
