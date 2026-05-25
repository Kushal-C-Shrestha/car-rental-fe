import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
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
  title: "Car Rental",
  description: "Car rental booking landing page.",
};

const navLinks = [
  { href: "/home", label: "Home" },
  { href: "/vehicle-models", label: "Vehicle Models" },
  { href: "/company/about", label: "About" },
  { href: "/testimonials", label: "Testimonials" },
  { href: "/support/contact", label: "Contact" },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-white text-zinc-950">
        <header className="sticky top-0 z-50 border-b border-zinc-100 bg-white/95 shadow-sm backdrop-blur">
          <nav className="mx-auto flex max-w-6xl flex-col gap-4 px-5 py-4 lg:flex-row lg:items-center lg:justify-between">
            <Link href="/home" className="block w-32">
              <Image
                src="/carrental/logo_v4.png"
                alt="Car Rental"
                width={300}
                height={107}
                priority
                className="h-auto w-full"
              />
            </Link>
            <div className="flex flex-wrap items-center gap-3 text-sm font-bold text-zinc-800">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="px-2 py-1 transition hover:text-[#ff4d30]"
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/sign-in"
                className="px-2 py-1 transition hover:text-[#ff4d30]"
              >
                Sign in
              </Link>
              <Link
                href="/register"
                className="rounded bg-[#ff4d30] px-5 py-3 text-white shadow-[0_10px_18px_rgba(255,77,48,0.28)] transition hover:bg-[#e33f25]"
              >
                Register
              </Link>
            </div>
          </nav>
        </header>
        <main>{children}</main>
        <footer className="border-t border-zinc-100 bg-white">
          <div className="mx-auto flex max-w-6xl flex-col gap-2 px-5 py-6 text-sm text-zinc-600 sm:flex-row sm:items-center sm:justify-between">
            <p>&copy;2026 Car Rental. All Rights Reserved.</p>
            <p>Mon - Fri: 09:00AM - 09:00PM</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
