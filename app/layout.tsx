import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "K2AI Hub - Advanced AI Technology Platform",
  description: "Explore AI-powered solutions: K2AI Education (90+ free learning modules), K2AI Creator Studio (10x faster content creation), K2AI Finance (smart budget tracking), and interactive Vietnam Map. Smart learning, content creation, finance management, and innovation powered by AI.",
  keywords: [
    "AI platform",
    "AI education",
    "smart learning",
    "AI content creation",
    "content repurposing",
    "AI finance",
    "budget tracker",
    "personal finance",
    "AI tools",
    "online learning",
    "Vietnam education",
    "interactive learning",
    "AI technology",
    "education technology",
    "content automation",
    "free education",
    "AI powered tools",
    "Vietnam geography",
    "financial insights",
    "expense tracking",
  ],
  authors: [{ name: "K2AI Team" }],
  creator: "K2AI Team",
  publisher: "K2AI Hub",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://k2aihub.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://k2aihub.com",
    siteName: "K2AI Hub",
    title: "K2AI Hub - Advanced AI Technology Platform",
    description: "Explore AI-powered solutions: K2AI Education (90+ free learning modules), K2AI Creator Studio (10x faster content creation), K2AI Finance (smart budget tracking), and interactive Vietnam Map.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "K2AI Hub - Advanced AI Technology Platform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "K2AI Hub - Advanced AI Technology Platform",
    description: "Explore AI-powered solutions: K2AI Education (90+ free learning modules), K2AI Creator Studio (10x faster content creation), K2AI Finance (smart budget tracking), and interactive Vietnam Map.",
    images: ["/og-image.png"],
    creator: "@k2aihub",
    site: "@k2aihub",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  manifest: "/manifest.json",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  other: {
    "article:author": "K2AI Team",
    "article:publisher": "https://www.facebook.com/k2aihub",
    "og:site_name": "K2AI Hub",
    "og:locale": "en_US",
    "twitter:site": "@k2aihub",
    "twitter:creator": "@k2aihub",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#3b82f6" },
    { media: "(prefers-color-scheme: dark)", color: "#1e40af" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
