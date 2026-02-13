import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL('https://vista.wtf'),
  title: "Vista | Blockchain and AI Research Collective",
  description:
    "Vista is a research and execution team focused on blockchain and AI. We turn emerging signals into practical strategy and production-ready products.",
  keywords: [
    "blockchain research",
    "AI agents",
    "AI and blockchain",
    "DeFi research",
    "Ethereum",
    "crypto analysis",
    "web3 research",
    "research collective",
  ],
  authors: [{ name: "Vista" }],
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico", sizes: "any" }
    ],
  },
  openGraph: {
    title: "Vista | Blockchain and AI Research Collective",
    description:
      "Research and execution across blockchain and AI for builders, operators, and investors.",
    type: "website",
    locale: "en_US",
    siteName: "Vista",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Vista - Blockchain and AI Research Collective",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Vista | Blockchain and AI Research Collective",
    description:
      "Research and execution across blockchain and AI for builders, operators, and investors.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`} suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var theme = localStorage.getItem('theme');
                  // Default to light mode unless explicitly set to dark
                  if (theme === 'dark') {
                    document.documentElement.classList.add('dark');
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body className="antialiased font-sans">{children}</body>
    </html>
  );
}
