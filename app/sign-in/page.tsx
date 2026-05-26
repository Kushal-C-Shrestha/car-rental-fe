"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";
import { useAuth } from "../_context/AuthContext";
import { PageHero } from "../_components/PageHero";

export default function SignInPage() {
  const router = useRouter();
  const { login } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setErrorMessage("");
    setIsSubmitting(true);

    try {
      await login({
        email,
        password,
      });
      router.push("/profile");
    } catch (error) {
      const message =
        error instanceof Error
          ? error.message
          : "Unable to sign in right now.";
      setErrorMessage(message);
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div>
      <PageHero
        eyebrow="Welcome back"
        title="Sign in to manage your rental."
        description="Access your bookings, update trip details, and keep your next vehicle ready."
      />
      <section className="mx-auto max-w-lg px-5 pb-16">
        <form className="rounded bg-white p-6 shadow-sm" onSubmit={handleSubmit}>
          <label className="block text-sm font-semibold text-zinc-700">
            Email address
            <input
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              className="mt-2 w-full rounded border border-zinc-300 px-3 py-3 outline-none focus:border-[#d94f30]"
              placeholder="you@example.com"
              required
            />
          </label>
          <label className="mt-4 block text-sm font-semibold text-zinc-700">
            Password
            <input
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              className="mt-2 w-full rounded border border-zinc-300 px-3 py-3 outline-none focus:border-[#d94f30]"
              placeholder="Enter your password"
              required
            />
          </label>
          {errorMessage ? (
            <p className="mt-4 rounded border border-red-200 bg-red-50 px-3 py-2 text-sm font-semibold text-red-700">
              {errorMessage}
            </p>
          ) : null}
          <button
            type="submit"
            disabled={isSubmitting}
            className="mt-6 w-full rounded bg-[#d94f30] px-5 py-3 font-semibold text-white transition hover:bg-[#bd4227] disabled:cursor-not-allowed disabled:bg-zinc-400"
          >
            {isSubmitting ? "Signing in..." : "Sign in"}
          </button>
          <p className="mt-4 text-center text-sm text-zinc-600">
            New to VaadaMa Motors?{" "}
            <Link href="/register" className="font-semibold text-zinc-950">
              Register
            </Link>
          </p>
        </form>
      </section>
    </div>
  );
}
