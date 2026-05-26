import Image from "next/image";
import Link from "next/link";
import { cars, fleetDetailIcons } from "../_data/cars";
import { Button } from "./Button";
import { HomeSection } from "./HomeSection";
import { SectionTitle } from "./SectionTitle";

const featuredCar = cars[0];

const featuredDetails = [
  [fleetDetailIcons.model, `Model: ${featuredCar.type}`],
  [fleetDetailIcons.doors, `Doors: ${featuredCar.doors}`],
  [fleetDetailIcons.seats, `Seats: ${featuredCar.seats}`],
  [fleetDetailIcons.luggage, `Luggage: ${featuredCar.luggage}`],
  [fleetDetailIcons.transmission, `Transmission: ${featuredCar.transmission}`],
];

export function FleetSection() {
  return (
    <HomeSection id="fleet" tone="muted">
      <SectionTitle
        eyebrow="Vehicle Models"
        title="Our rental fleet"
        text="Choose from popular models with automatic transmission, roomy interiors, and clear daily pricing."
      />
      <div className="grid gap-8 lg:grid-cols-[220px_1fr_290px] lg:items-center">
        <div className="grid gap-2">
          {cars.map((car, index) => (
            <Link
              href={`/vehicle-models/${car.slug}`}
              key={car.name}
              className={`rounded px-5 py-4 text-left text-lg font-bold transition ${
                index === 0
                  ? "bg-[#ff4d30] text-white"
                  : "bg-white hover:bg-zinc-100"
              }`}
            >
              {car.name}
            </Link>
          ))}
        </div>
        <Image
          src={featuredCar.image}
          alt={featuredCar.name}
          width={757}
          height={392}
          className="w-full object-contain"
        />
        <div className="overflow-hidden rounded bg-white shadow-sm">
          <div className="bg-[#ff4d30] p-5 text-white">
            <p className="text-3xl font-black">{featuredCar.price}</p>
            <p className="font-bold">rent per day</p>
          </div>
          {featuredDetails.map(([icon, item]) => (
            <p
              key={item}
              className="flex items-center gap-3 border-b border-zinc-100 px-5 py-4 font-semibold text-zinc-700"
            >
              <Image src={icon} alt="" width={22} height={22} />
              {item}
            </p>
          ))}
          <Button
            href="#booking"
            className="block w-full rounded-none uppercase"
            variant="dark"
          >
            Book Ride
          </Button>
        </div>
      </div>
    </HomeSection>
  );
}
