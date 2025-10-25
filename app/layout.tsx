import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "K2AI Hub - Advanced AI technology platform",
  description: "K2AI Hub - Advanced AI technology platform providing educational products and creative tools",
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
