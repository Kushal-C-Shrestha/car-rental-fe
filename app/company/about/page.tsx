import Image from "next/image";

export default function CompanyAboutPage() {
  return (
    <section className="rounded bg-white p-6 shadow-sm lg:p-10">
      <p className="mb-3 text-xl font-bold text-[#ff4d30]">About Company</p>
      <h1 className="max-w-3xl text-4xl font-black leading-tight">
        You start the engine and your adventure begins
      </h1>
      <div className="mt-8 grid gap-8 lg:grid-cols-2 lg:items-center">
        <Image
          src="/carrental/about_image.jpg"
          alt="Driver opening a car door"
          width={461}
          height={480}
          className="w-full rounded object-cover"
        />
        <div>
          <p className="leading-8 text-zinc-500">
            We help renters choose clean, comfortable vehicles for business,
            family, and weekend travel. Our team keeps booking simple, pricing
            clear, and pickup support friendly.
          </p>
          <div className="mt-8 grid gap-5 sm:grid-cols-3">
            {[
              ["20", "Car Types"],
              ["85", "Rental Outlets"],
              ["75", "Repair Shops"],
            ].map(([value, label]) => (
              <div key={label}>
                <p className="text-4xl font-black">{value}</p>
                <p className="font-bold text-zinc-500">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
