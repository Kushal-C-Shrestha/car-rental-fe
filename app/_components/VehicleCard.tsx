import Image from "next/image";
import { Button } from "./Button";
export type VehicleCardData = {
  slug: string;
  name: string;
  image?: string;
  imageUrl?: string | null;
  price?: string;
  pricePerDay?: number;
  type?: string;
  category?: {
    name: string;
  };
  doors: number;
  seats: number;
  luggage: string;
  transmission?: string;
  fuelType?: string;
};

type VehicleCardProps = {
  vehicle: VehicleCardData;
};

export function VehicleCard({ vehicle }: VehicleCardProps) {
  const image = vehicle.imageUrl || vehicle.image || "/carrental/vehicle-1.png";
  const type = vehicle.category?.name || vehicle.type || "Rental";
  const price =
    typeof vehicle.pricePerDay === "number"
      ? `$${vehicle.pricePerDay}`
      : vehicle.price;

  return (
    <article className="rounded bg-white p-6 shadow-sm">
      <Image
        src={image}
        alt={vehicle.name}
        width={757}
        height={392}
        className="mb-5 h-52 w-full object-contain"
      />
      <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#ff4d30]">
        {type}
      </p>
      <h2 className="mt-2 text-2xl font-black text-zinc-950">
        {vehicle.name}
      </h2>
      <p className="mt-3 leading-7 text-zinc-600">
        Doors: {vehicle.doors} | Seats: {vehicle.seats} | Luggage:{" "}
        {vehicle.luggage}
      </p>
      <div className="mt-5 flex items-center justify-between gap-4">
        <p className="text-xl font-black text-zinc-950">{price}/day</p>
        <Button href={`/vehicle-models/${vehicle.slug}`} size="sm">
          View Details
        </Button>
      </div>
    </article>
  );
}
