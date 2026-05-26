"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";
import { useAuth } from "../_context/AuthContext";
import { PageHero } from "../_components/PageHero";

export default function RegisterPage() {
  const router = useRouter();
  const { register } = useAuth();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setErrorMessage("");
    setIsSubmitting(true);

    try {
      await register({
        name: `${firstName} ${lastName}`.trim(),
        email,
        password,
      });
      router.push("/profile");
    } catch (error) {
      const message =
        error instanceof Error
          ? error.message
          : "Unable to create your account right now.";
      setErrorMessage(message);
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div>
      <PageHero
        eyebrow="Create account"
        title="Register for faster rentals."
        description="Save your contact details and speed through future bookings with VaadaMa Motors."
      />
      <section className="mx-auto max-w-2xl px-5 pb-16">
        <form
          className="grid gap-4 rounded bg-white p-6 shadow-sm sm:grid-cols-2"
          onSubmit={handleSubmit}
        >
          <label className="block text-sm font-semibold text-zinc-700">
            First name
            <input
              value={firstName}
              onChange={(event) => setFirstName(event.target.value)}
              className="mt-2 w-full rounded border border-zinc-300 px-3 py-3 outline-none focus:border-[#d94f30]"
              required
            />
          </label>
          <label className="block text-sm font-semibold text-zinc-700">
            Last name
            <input
              value={lastName}
              onChange={(event) => setLastName(event.target.value)}
              className="mt-2 w-full rounded border border-zinc-300 px-3 py-3 outline-none focus:border-[#d94f30]"
            />
          </label>
          <label className="block text-sm font-semibold text-zinc-700 sm:col-span-2">
            Email address
            <input
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              className="mt-2 w-full rounded border border-zinc-300 px-3 py-3 outline-none focus:border-[#d94f30]"
              required
            />
          </label>
          <label className="block text-sm font-semibold text-zinc-700 sm:col-span-2">
            Password
            <input
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              className="mt-2 w-full rounded border border-zinc-300 px-3 py-3 outline-none focus:border-[#d94f30]"
              minLength={8}
              required
            />
          </label>
          {errorMessage ? (
            <p className="rounded border border-red-200 bg-red-50 px-3 py-2 text-sm font-semibold text-red-700 sm:col-span-2">
              {errorMessage}
            </p>
          ) : null}
          <button
            type="submit"
            disabled={isSubmitting}
            className="rounded bg-[#d94f30] px-5 py-3 font-semibold text-white transition hover:bg-[#bd4227] disabled:cursor-not-allowed disabled:bg-zinc-400 sm:col-span-2"
          >
            {isSubmitting ? "Creating account..." : "Register"}
          </button>
          <p className="text-center text-sm text-zinc-600 sm:col-span-2">
            Already have an account?{" "}
            <Link href="/sign-in" className="font-semibold text-zinc-950">
              Sign in
            </Link>
          </p>
        </form>
      </section>
    </div>
  );
}
