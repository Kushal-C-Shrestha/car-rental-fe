export default function CareersPage() {
  return (
    <section className="rounded bg-white p-6 shadow-sm lg:p-10">
      <p className="mb-3 text-xl font-bold text-[#ff4d30]">Careers</p>
      <h1 className="max-w-3xl text-4xl font-black leading-tight">
        Join the rental team behind every smooth trip.
      </h1>
      <div className="mt-8 grid gap-5 md:grid-cols-2">
        {[
          "Rental Operations Coordinator",
          "Customer Support Specialist",
          "Fleet Maintenance Assistant",
          "Airport Pickup Lead",
        ].map((role) => (
          <article key={role} className="rounded border border-zinc-100 p-5">
            <h2 className="text-xl font-black">{role}</h2>
            <p className="mt-3 leading-7 text-zinc-500">
              Full-time role supporting bookings, vehicle handovers, and
              customer care across our rental outlets.
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
