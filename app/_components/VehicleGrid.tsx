"use client";

import { useEffect, useState } from "react";
import { getVehicles } from "@/lib/api";
import { cars } from "../_data/cars";
import { Skeleton } from "./Skeleton";
import { VehicleCard } from "./VehicleCard";
import type { VehicleCardData } from "./VehicleCard";

function VehicleCardSkeleton() {
  return (
    <article className="rounded bg-white p-6 shadow-sm">
      <Skeleton className="mb-5 h-52 w-full" />
      <Skeleton className="h-4 w-24" />
      <Skeleton className="mt-3 h-8 w-2/3" />
      <Skeleton className="mt-4 h-5 w-full" />
      <Skeleton className="mt-2 h-5 w-4/5" />
      <div className="mt-6 flex items-center justify-between gap-4">
        <Skeleton className="h-7 w-24" />
        <Skeleton className="h-11 w-28" />
      </div>
    </article>
  );
}

export function VehicleGrid() {
  const [vehicles, setVehicles] = useState<VehicleCardData[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    let isMounted = true;

    async function loadVehicles() {
      setIsLoading(true);
      setHasError(false);

      try {
        const response = await getVehicles();

        if (!isMounted) {
          return;
        }

        setVehicles(response.data || []);
      } catch {
        if (!isMounted) {
          return;
        }

        setVehicles(cars);
        setHasError(true);
      } finally {
        if (isMounted) {
          setIsLoading(false);
        }
      }
    }

    loadVehicles();

    return () => {
      isMounted = false;
    };
  }, []);

  if (isLoading) {
    return (
      <section className="mx-auto grid max-w-6xl gap-6 px-5 pb-16 md:grid-cols-2">
        {Array.from({ length: 6 }).map((_, index) => (
          <VehicleCardSkeleton key={index} />
        ))}
      </section>
    );
  }

  return (
    <>
      {hasError ? (
        <div className="mx-auto mb-6 max-w-6xl px-5">
          <div className="rounded border border-amber-200 bg-amber-50 px-4 py-3 text-sm font-semibold text-amber-800">
            Live vehicle data could not load, so the saved demo fleet is shown.
          </div>
        </div>
      ) : null}
      <section className="mx-auto grid max-w-6xl gap-6 px-5 pb-16 md:grid-cols-2">
        {vehicles.map((vehicle) => (
          <VehicleCard key={vehicle.slug} vehicle={vehicle} />
        ))}
      </section>
    </>
  );
}
