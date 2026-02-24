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
  alternates: {
    canonical: "https://vista.wtf",
  },
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
    shortcut: "/favicon.svg",
  },
  openGraph: {
    title: "Vista | Blockchain and AI Research Collective",
    description:
      "Research and execution across blockchain and AI for builders, operators, and investors.",
    type: "website",
    url: "https://vista.wtf",
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
    googleBot: {
      index: true,
      follow: true,
    },
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
        <meta name="theme-color" content="#FF5233" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Vista",
              url: "https://vista.wtf",
              logo: "https://vista.wtf/og-image.png",
              description:
                "Vista is a research and execution team focused on blockchain and AI. We turn emerging signals into practical strategy and production-ready products.",
              sameAs: [
                "https://x.com/vistawtf",
                "https://vistalabs.substack.com",
              ],
            }),
          }}
        />
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
