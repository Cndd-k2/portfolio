import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kdev — Fullstack Developer",
  description:
    "Fullstack Developer crafting beautiful, fast, and functional web experiences with React, Next.js, Node.js, and PostgreSQL.",
  keywords: ["fullstack developer", "react", "next.js", "typescript", "postgresql", "portfolio"],
  authors: [{ name: "Kdev" }],
  openGraph: {
    title: "Kdev — Fullstack Developer Portfolio",
    description: "Fullstack Developer crafting beautiful web experiences.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen antialiased">{children}</body>
    </html>
  );
}
