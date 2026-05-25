export default function LocationsPage() {
  return (
    <section className="rounded bg-white p-6 shadow-sm lg:p-10">
      <p className="mb-3 text-xl font-bold text-[#ff4d30]">Locations</p>
      <h1 className="max-w-3xl text-4xl font-black leading-tight">
        Pick up your rental where the trip begins.
      </h1>
      <div className="mt-8 grid gap-5 md:grid-cols-3">
        {[
          "Santa Monica - 2102 Lincoln Blvd",
          "Los Angeles - W Century Blvd",
          "Las Vegas - Centennial Center Blvd",
        ].map((location) => (
          <article key={location} className="rounded border border-zinc-100 p-5">
            <h2 className="text-xl font-black">{location}</h2>
            <p className="mt-3 text-zinc-500">
              Daily pickup windows, staffed support, and easy returns.
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
