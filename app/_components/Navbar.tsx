"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useAuth } from "../_context/AuthContext";
import { Button } from "./Button";

const navLinks = [
  { href: "/home", label: "Home" },
  { href: "/vehicle-models", label: "Vehicle Models" },
  { href: "/company/about", label: "About" },
  { href: "/testimonials", label: "Testimonials" },
  { href: "/support/contact", label: "Contact" },
];

export function Navbar() {
  const router = useRouter();
  const { isAuthenticated, isLoading, logout, user } = useAuth();
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);
  const handleLogout = () => {
    logout();
    closeMenu();
    router.push("/home");
  };

  return (
    <header className="sticky top-0 z-50 border-b border-zinc-100 bg-white/95 shadow-sm backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
        <Link href="/home" className="block w-32" onClick={closeMenu}>
          <Image
            src="/carrental/logo_v4.png"
            alt="Car Rental"
            width={300}
            height={107}
            priority
            className="h-auto w-full"
          />
        </Link>
        <div className="hidden items-center gap-3 text-sm font-bold text-zinc-800 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="px-2 py-1 transition hover:text-[#ff4d30]"
            >
              {link.label}
            </Link>
          ))}
          {isLoading ? (
            <span className="h-10 w-32 animate-pulse rounded bg-zinc-100" />
          ) : isAuthenticated ? (
            <>
              <Link
                href="/profile"
                className="px-2 py-1 transition hover:text-[#ff4d30]"
              >
                {user?.name || "Profile"}
              </Link>
              <Button type="button" onClick={handleLogout} variant="ghost">
                Logout
              </Button>
            </>
          ) : (
            <>
              <Link
                href="/sign-in"
                className="px-2 py-1 transition hover:text-[#ff4d30]"
              >
                Sign in
              </Link>
              <Button href="/register">Register</Button>
            </>
          )}
        </div>
        <button
          type="button"
          aria-label="Open menu"
          aria-expanded={isOpen}
          onClick={() => setIsOpen(true)}
          className="grid h-11 w-11 place-items-center rounded border border-zinc-200 bg-white lg:hidden"
        >
          <span className="grid gap-1.5">
            <span className="block h-0.5 w-5 bg-zinc-950" />
            <span className="block h-0.5 w-5 bg-zinc-950" />
            <span className="block h-0.5 w-5 bg-zinc-950" />
          </span>
        </button>
      </nav>
      <div
        className={`fixed inset-0 z-50 bg-zinc-950/40 transition-opacity lg:hidden ${
          isOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={closeMenu}
      />
      <aside
        className={`fixed right-0 top-0 z-50 flex h-dvh w-[min(86vw,360px)] flex-col bg-white p-6 shadow-2xl transition-transform duration-300 lg:hidden ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
        aria-hidden={!isOpen}
      >
        <div className="flex items-center justify-between">
          <Link href="/home" className="block w-32" onClick={closeMenu}>
            <Image
              src="/carrental/logo_v4.png"
              alt="Car Rental"
              width={300}
              height={107}
              className="h-auto w-full"
            />
          </Link>
          <button
            type="button"
            aria-label="Close menu"
            onClick={closeMenu}
            className="grid h-11 w-11 place-items-center rounded border border-zinc-200 text-2xl leading-none text-zinc-950"
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div className="mt-10 grid gap-1 text-lg font-black text-zinc-950">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={closeMenu}
              className="rounded px-3 py-3 transition hover:bg-[#fff1ee] hover:text-[#ff4d30]"
            >
              {link.label}
            </Link>
          ))}
        </div>
        <div className="mt-auto grid gap-3 border-t border-zinc-100 pt-6 text-base font-bold">
          {isLoading ? (
            <span className="h-12 animate-pulse rounded bg-zinc-100" />
          ) : isAuthenticated ? (
            <>
              <Link
                href="/profile"
                onClick={closeMenu}
                className="rounded px-3 py-3 text-zinc-950 transition hover:bg-zinc-100"
              >
                My profile
              </Link>
              <Button
                type="button"
                className="w-full"
                onClick={handleLogout}
                variant="ghost"
              >
                Logout
              </Button>
            </>
          ) : (
            <>
              <Link
                href="/sign-in"
                onClick={closeMenu}
                className="rounded px-3 py-3 text-zinc-950 transition hover:bg-zinc-100"
              >
                Sign in
              </Link>
              <Button href="/register" className="w-full" onClick={closeMenu}>
                Register
              </Button>
            </>
          )}
        </div>
      </aside>
    </header>
  );
}
