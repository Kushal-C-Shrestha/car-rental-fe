import { PageHero } from "../_components/PageHero";

export default function ContactPage() {
  return (
    <div>
      <PageHero
        eyebrow="Contact"
        title="Tell us where you are going."
        description="Send your trip details and our rental team will help match you with the right vehicle."
      />
      <section className="mx-auto grid max-w-6xl gap-6 px-5 pb-16 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="rounded bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-bold">VaadaMa Motors</h2>
          <div className="mt-5 space-y-4 text-zinc-700">
            <p>Phone: +1 (555) 014-7788</p>
            <p>Email: rentals@vaadamamotors.com</p>
            <p>Address: 42 Main Street, Auto District</p>
          </div>
        </div>
        <form className="grid gap-4 rounded bg-white p-6 shadow-sm sm:grid-cols-2">
          <label className="block text-sm font-semibold text-zinc-700">
            Name
            <input className="mt-2 w-full rounded border border-zinc-300 px-3 py-3 outline-none focus:border-[#d94f30]" />
          </label>
          <label className="block text-sm font-semibold text-zinc-700">
            Phone
            <input className="mt-2 w-full rounded border border-zinc-300 px-3 py-3 outline-none focus:border-[#d94f30]" />
          </label>
          <label className="block text-sm font-semibold text-zinc-700 sm:col-span-2">
            Message
            <textarea
              className="mt-2 min-h-36 w-full rounded border border-zinc-300 px-3 py-3 outline-none focus:border-[#d94f30]"
              placeholder="Pickup date, return date, vehicle preference..."
            />
          </label>
          <button
            type="submit"
            className="rounded bg-[#d94f30] px-5 py-3 font-semibold text-white transition hover:bg-[#bd4227] sm:col-span-2"
          >
            Send Message
          </button>
        </form>
      </section>
    </div>
  );
}
