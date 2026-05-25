import Image from "next/image";
import { PageHero } from "../_components/PageHero";

const testimonials = [
  "The rem value is the same as the em value displayed above. Both units are scalable.",
  "The rem value is the same as the em value displayed above. Both units are scalable.",
  "The rem value is the same as the em value displayed above. Both units are scalable.",
];

export default function TestimonialsPage() {
  return (
    <div className="bg-[#f8f8f8]">
      <PageHero
        eyebrow="Reviewed by People"
        title="Clients' Testimonials"
        description="Certain but she but shyness why cottage. Guy the put instrument sir entreaties affronting."
      />
      <section className="mx-auto grid max-w-6xl gap-6 px-5 pb-16 md:grid-cols-3">
        {testimonials.map((quote, index) => (
          <article key={index} className="rounded bg-white p-8 shadow-sm">
            <p className="text-xl font-semibold leading-9">&quot;{quote}&quot;</p>
            <div className="mt-8 flex items-center gap-4">
              <Image
                src="/carrental/user.png"
                alt="Kimberly Garcia"
                width={64}
                height={64}
                className="h-14 w-14 rounded-full object-cover"
              />
              <div>
                <p className="font-black">Kimberly Garcia</p>
                <p className="text-sm text-zinc-500">Boston Area</p>
              </div>
            </div>
          </article>
        ))}
      </section>
    </div>
  );
}
