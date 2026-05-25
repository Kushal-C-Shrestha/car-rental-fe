import Image from "next/image";
import { Button } from "../_components/Button";
import { PageHero } from "../_components/PageHero";
import { cars } from "../_data/cars";

export default function VehicleModelsPage() {
  return (
    <div className="bg-[#f8f8f8]">
      <PageHero
        eyebrow="Vehicle Models"
        title="Our rental fleet"
        description="Choose from the same featured models shown in the booking demo, with clear daily pricing and automatic transmission."
      />
      <section className="mx-auto grid max-w-6xl gap-6 px-5 pb-16 md:grid-cols-2">
        {cars.map((car) => (
          <article key={car.slug} className="rounded bg-white p-6 shadow-sm">
            <Image
              src={car.image}
              alt={car.name}
              width={757}
              height={392}
              className="mb-5 h-52 w-full object-contain"
            />
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#ff4d30]">
              {car.type}
            </p>
            <h2 className="mt-2 text-2xl font-black text-zinc-950">
              {car.name}
            </h2>
            <p className="mt-3 leading-7 text-zinc-600">
              Doors: {car.doors} | Seats: {car.seats} | Luggage: {car.luggage}
            </p>
            <div className="mt-5 flex items-center justify-between gap-4">
              <p className="text-xl font-black text-zinc-950">
                {car.price}/day
              </p>
              <Button
                href={`/vehicle-models/${car.slug}`}
                size="sm"
              >
                View Details
              </Button>
            </div>
          </article>
        ))}
      </section>
    </div>
  );
}
