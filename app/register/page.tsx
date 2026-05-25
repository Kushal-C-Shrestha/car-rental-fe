import Link from "next/link";
import { PageHero } from "../_components/PageHero";

export default function RegisterPage() {
  return (
    <div>
      <PageHero
        eyebrow="Create account"
        title="Register for faster rentals."
        description="Save your contact details and speed through future bookings with VaadaMa Motors."
      />
      <section className="mx-auto max-w-2xl px-5 pb-16">
        <form className="grid gap-4 rounded bg-white p-6 shadow-sm sm:grid-cols-2">
          <label className="block text-sm font-semibold text-zinc-700">
            First name
            <input className="mt-2 w-full rounded border border-zinc-300 px-3 py-3 outline-none focus:border-[#d94f30]" />
          </label>
          <label className="block text-sm font-semibold text-zinc-700">
            Last name
            <input className="mt-2 w-full rounded border border-zinc-300 px-3 py-3 outline-none focus:border-[#d94f30]" />
          </label>
          <label className="block text-sm font-semibold text-zinc-700 sm:col-span-2">
            Email address
            <input
              type="email"
              className="mt-2 w-full rounded border border-zinc-300 px-3 py-3 outline-none focus:border-[#d94f30]"
            />
          </label>
          <label className="block text-sm font-semibold text-zinc-700 sm:col-span-2">
            Password
            <input
              type="password"
              className="mt-2 w-full rounded border border-zinc-300 px-3 py-3 outline-none focus:border-[#d94f30]"
            />
          </label>
          <button
            type="submit"
            className="rounded bg-[#d94f30] px-5 py-3 font-semibold text-white transition hover:bg-[#bd4227] sm:col-span-2"
          >
            Register
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
