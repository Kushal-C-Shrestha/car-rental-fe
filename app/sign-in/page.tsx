import Link from "next/link";
import { PageHero } from "../_components/PageHero";

export default function SignInPage() {
  return (
    <div>
      <PageHero
        eyebrow="Welcome back"
        title="Sign in to manage your rental."
        description="Access your bookings, update trip details, and keep your next vehicle ready."
      />
      <section className="mx-auto max-w-lg px-5 pb-16">
        <form className="rounded bg-white p-6 shadow-sm">
          <label className="block text-sm font-semibold text-zinc-700">
            Email address
            <input
              type="email"
              className="mt-2 w-full rounded border border-zinc-300 px-3 py-3 outline-none focus:border-[#d94f30]"
              placeholder="you@example.com"
            />
          </label>
          <label className="mt-4 block text-sm font-semibold text-zinc-700">
            Password
            <input
              type="password"
              className="mt-2 w-full rounded border border-zinc-300 px-3 py-3 outline-none focus:border-[#d94f30]"
              placeholder="Enter your password"
            />
          </label>
          <button
            type="submit"
            className="mt-6 w-full rounded bg-[#d94f30] px-5 py-3 font-semibold text-white transition hover:bg-[#bd4227]"
          >
            Sign in
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
