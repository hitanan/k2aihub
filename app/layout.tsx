import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "K2AI Hub - Nền tảng công nghệ AI tiên tiến",
  description: "K2AI Hub - Nền tảng công nghệ AI tiên tiến cung cấp các sản phẩm giáo dục và công cụ sáng tạo",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
