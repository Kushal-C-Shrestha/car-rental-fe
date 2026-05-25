type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export function PageHero({ eyebrow, title, description }: PageHeroProps) {
  return (
    <section className="mx-auto max-w-6xl px-5 py-14 sm:py-20">
      <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-[#d94f30]">
        {eyebrow}
      </p>
      <h1 className="max-w-3xl text-4xl font-bold leading-tight text-zinc-950 sm:text-6xl">
        {title}
      </h1>
      <p className="mt-5 max-w-2xl text-lg leading-8 text-zinc-700">
        {description}
      </p>
    </section>
  );
}
