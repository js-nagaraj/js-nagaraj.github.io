import type { Metadata } from "next";
import Link from "next/link";
import { Sora, Work_Sans } from "next/font/google";
import "./globals.css";

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["600", "700"],
});

const workSans = Work_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Nagaraj Jayaraman | DevOps & Multi-Cloud Architect",
  description:
    "Portfolio of Nagaraj Jayaraman featuring DevOps engineering, cloud architecture, and platform delivery across AWS, Azure, and GCP.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${sora.variable} ${workSans.variable}`}>
        <header className="topNav">
          <div className="topNavInner">
            <Link href="/" className="brandLink">
              NJ
            </Link>
            <nav className="navList">
              <Link href="/#about">About</Link>
              <Link href="/#experience">Experience</Link>
              <Link href="/#projects">Projects</Link>
              <Link href="/devops">DevOps</Link>
              <Link href="/solutions-architect">Architecture</Link>
              <Link href="/#contact">Contact</Link>
            </nav>
          </div>
        </header>

        {children}

        <footer className="siteFooter">
          <p>Copyright 2026 Nagaraj Jayaraman</p>
        </footer>
      </body>
    </html>
  );
}
