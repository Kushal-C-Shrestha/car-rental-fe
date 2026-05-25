import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Navbar } from "./_components/Navbar";
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
        <Navbar />
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
