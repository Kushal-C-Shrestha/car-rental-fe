import Link from "next/link";
import { HomeSection } from "./HomeSection";

export function ContactInfoSection() {
  return (
    <HomeSection
      id="contact"
      className="py-20"
      innerClassName="grid gap-8 md:grid-cols-4"
    >
      <div className="md:col-span-2">
        <h2 className="text-2xl font-black">Need additional information?</h2>
        <p className="mt-4 leading-8 text-zinc-500">
          A multifaceted rental team skilled in planning, support, and quick
          vehicle handovers.
        </p>
        <p className="mt-5 font-bold">(562) 498-4600</p>
        <p className="font-bold">example@carrental.com</p>
      </div>
      <div>
        <h3 className="text-xl font-black">Company</h3>
        <div className="mt-4 grid gap-2 text-zinc-500">
          <Link href="/support/locations">New York</Link>
          <Link href="/company/careers">Careers</Link>
          <Link href="/support/faq">FAQ</Link>
          <Link href="/vehicle-models/mercedes-35">Featured Car</Link>
        </div>
      </div>
      <div>
        <h3 className="text-xl font-black">Subscription</h3>
        <p className="mt-4 text-zinc-500">Subscribe for latest news.</p>
        <div className="mt-4 flex">
          <input
            className="min-w-0 flex-1 rounded-l border border-zinc-200 px-3 outline-none"
            placeholder="Email"
          />
          <button className="rounded-r bg-[#ff4d30] px-4 py-3 font-bold text-white">
            Submit
          </button>
        </div>
      </div>
    </HomeSection>
  );
}
