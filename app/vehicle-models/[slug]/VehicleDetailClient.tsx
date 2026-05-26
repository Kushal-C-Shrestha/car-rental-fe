"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { getVehicleDetails } from "@/lib/api";
import { Button } from "../../_components/Button";
import { Skeleton } from "../../_components/Skeleton";
import { fleetDetailIcons } from "../../_data/cars";

type VehicleDetail = {
  slug: string;
  name: string;
  brand: string;
  model: string;
  year: number;
  imageUrl?: string | null;
  pricePerDay: number;
  doors: number;
  seats: number;
  luggage: string;
  transmission: string;
  fuelType: string;
  averageRating: number;
  reviewCount: number;
  category?: {
    name: string;
    description?: string | null;
  };
};

type VehicleDetailClientProps = {
  slug: string;
};

function VehicleDetailSkeleton() {
  return (
    <section className="bg-[#f8f8f8] px-5 py-16">
      <div className="mx-auto grid max-w-6xl gap-10 rounded bg-white p-6 shadow-sm lg:grid-cols-[1.2fr_0.8fr] lg:p-10">
        <div>
          <Skeleton className="h-5 w-28" />
          <Skeleton className="mt-6 h-14 w-3/4" />
          <Skeleton className="mt-5 h-5 w-full max-w-2xl" />
          <Skeleton className="mt-3 h-5 w-4/5 max-w-xl" />
          <Skeleton className="mt-8 aspect-[757/392] w-full" />
        </div>
        <aside className="h-fit overflow-hidden rounded border border-zinc-100">
          <div className="bg-[#ff4d30] p-6">
            <Skeleton className="h-11 w-32 bg-white/40" />
            <Skeleton className="mt-3 h-5 w-24 bg-white/40" />
          </div>
          {Array.from({ length: 5 }).map((_, index) => (
            <div
              key={index}
              className="flex items-center gap-3 border-b border-zinc-100 px-5 py-4"
            >
              <Skeleton className="h-6 w-6" />
              <Skeleton className="h-5 w-40" />
            </div>
          ))}
          <Skeleton className="h-14 w-full rounded-none" />
        </aside>
      </div>
    </section>
  );
}

export function VehicleDetailClient({ slug }: VehicleDetailClientProps) {
  const [vehicle, setVehicle] = useState<VehicleDetail | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    let isMounted = true;

    async function loadVehicle() {
      setIsLoading(true);
      setHasError(false);

      try {
        const response = await getVehicleDetails(slug);

        if (!isMounted) {
          return;
        }

        setVehicle(response.data);
      } catch {
        if (!isMounted) {
          return;
        }

        setHasError(true);
        setVehicle(null);
      } finally {
        if (isMounted) {
          setIsLoading(false);
        }
      }
    }

    loadVehicle();

    return () => {
      isMounted = false;
    };
  }, [slug]);

  if (isLoading) {
    return <VehicleDetailSkeleton />;
  }

  if (hasError || !vehicle) {
    return (
      <section className="bg-[#f8f8f8] px-5 py-16">
        <div className="mx-auto max-w-3xl rounded bg-white p-8 text-center shadow-sm">
          <p className="text-sm font-bold uppercase text-[#ff4d30]">
            Vehicle unavailable
          </p>
          <h1 className="mt-3 text-4xl font-black text-zinc-950">
            We could not load this vehicle.
          </h1>
          <p className="mx-auto mt-4 max-w-xl leading-7 text-zinc-600">
            The vehicle may have been removed, or the backend may not be
            reachable right now.
          </p>
          <Button href="/vehicle-models" className="mt-7">
            Back to fleet
          </Button>
        </div>
      </section>
    );
  }

  const details = [
    [fleetDetailIcons.model, `Model: ${vehicle.model}`],
    [fleetDetailIcons.doors, `Doors: ${vehicle.doors}`],
    [fleetDetailIcons.seats, `Seats: ${vehicle.seats}`],
    [fleetDetailIcons.luggage, `Luggage: ${vehicle.luggage}`],
    [fleetDetailIcons.transmission, `Transmission: ${vehicle.transmission}`],
  ];
  const image = vehicle.imageUrl || "/carrental/vehicle-1.png";

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
          <h1 className="mt-5 text-5xl font-black leading-tight">
            {vehicle.name}
          </h1>
          <p className="mt-4 max-w-2xl leading-8 text-zinc-500">
            {vehicle.year} {vehicle.brand} {vehicle.model} with{" "}
            {vehicle.transmission.toLowerCase()} transmission,{" "}
            {vehicle.fuelType.toLowerCase()} fuel, and room for {vehicle.seats}{" "}
            passengers.
          </p>
          <div className="mt-4 flex flex-wrap gap-3 text-sm font-bold text-zinc-600">
            <span>{vehicle.category?.name || "Rental"}</span>
            <span>
              {vehicle.reviewCount > 0
                ? `${vehicle.averageRating.toFixed(1)} rating from ${
                    vehicle.reviewCount
                  } reviews`
                : "No reviews yet"}
            </span>
          </div>
          <Image
            src={image}
            alt={vehicle.name}
            width={757}
            height={392}
            className="mt-8 w-full object-contain"
            priority
          />
        </div>
        <aside className="h-fit overflow-hidden rounded border border-zinc-100">
          <div className="bg-[#ff4d30] p-6 text-white">
            <p className="text-4xl font-black">${vehicle.pricePerDay}</p>
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
