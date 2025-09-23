import type { Metadata } from "next";
import Link from "next/link";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nagaraj Jayaraman | DevOps & Multi‑Cloud Architect",
  description: "Portfolio showcasing DevOps and multi‑cloud architecture projects, tooling, and expertise.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <header style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "12px 16px",
          borderBottom: "1px solid #e5e7eb",
          position: "sticky",
          top: 0,
          background: "#fff",
          zIndex: 10,
        }}>
          <Link href="/" style={{ fontWeight: 600 }}>NJ</Link>
          <nav style={{ display: "flex", gap: 16 }}>
            <Link href="/devops">DevOps</Link>
            <Link href="/solutions-architect">Solutions Architect</Link>
            <Link href="/">Home</Link>
          </nav>
        </header>
        <main style={{ maxWidth: 1040, margin: "0 auto", padding: 16 }}>
          {children}
        </main>
        <footer style={{
          borderTop: "1px solid #e5e7eb",
          marginTop: 32,
          padding: 16,
          textAlign: "center",
          color: "#6b7280",
        }}>
          © {new Date().getFullYear()} Nagaraj Jayaraman
        </footer>
      </body>
    </html>
  );
}
