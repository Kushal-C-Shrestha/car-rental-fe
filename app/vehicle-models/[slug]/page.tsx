import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Button } from "../../_components/Button";
import { cars, fleetDetailIcons } from "../../_data/cars";

type VehiclePageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return cars.map((car) => ({ slug: car.slug }));
}

export default async function VehicleModelPage({ params }: VehiclePageProps) {
  const { slug } = await params;
  const car = cars.find((item) => item.slug === slug);

  if (!car) {
    notFound();
  }

  const details = [
    [fleetDetailIcons.model, `Model: ${car.type}`],
    [fleetDetailIcons.doors, `Doors: ${car.doors}`],
    [fleetDetailIcons.seats, `Seats: ${car.seats}`],
    [fleetDetailIcons.luggage, `Luggage: ${car.luggage}`],
    [fleetDetailIcons.transmission, `Transmission: ${car.transmission}`],
  ];

  return (
    <section className="bg-[#f8f8f8] px-5 py-16">
      <div className="mx-auto grid max-w-6xl gap-10 rounded bg-white p-6 shadow-sm lg:grid-cols-[1.2fr_0.8fr] lg:p-10">
        <div>
          <Link
            href="/vehicle-models"
            className="font-bold text-[#ff4d30] hover:text-[#e33f25]"
          >
            Back to fleet
          </Link>
          <h1 className="mt-5 text-5xl font-black leading-tight">{car.name}</h1>
          <p className="mt-4 max-w-2xl leading-8 text-zinc-500">
            {car.description}
          </p>
          <Image
            src={car.image}
            alt={car.name}
            width={757}
            height={392}
            className="mt-8 w-full object-contain"
            priority
          />
        </div>
        <aside className="h-fit overflow-hidden rounded border border-zinc-100">
          <div className="bg-[#ff4d30] p-6 text-white">
            <p className="text-4xl font-black">{car.price}</p>
            <p className="font-bold">rent per day</p>
          </div>
          {details.map(([icon, detail]) => (
            <p
              key={detail}
              className="flex items-center gap-3 border-b border-zinc-100 px-5 py-4 font-semibold text-zinc-700"
            >
              <Image src={icon} alt="" width={22} height={22} />
              {detail}
            </p>
          ))}
          <Button
            href="/home#booking"
            className="block w-full rounded-none uppercase"
            variant="dark"
          >
            Book Ride
          </Button>
        </aside>
      </div>
    </section>
  );
}
