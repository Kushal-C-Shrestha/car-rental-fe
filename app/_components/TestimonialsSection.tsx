"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { getPublicReviews } from "@/lib/api";
import { HomeSection } from "./HomeSection";
import { SectionTitle } from "./SectionTitle";
import { Skeleton } from "./Skeleton";

type PublicReview = {
  id: string;
  rating: number;
  comment?: string | null;
  user?: {
    name: string;
  };
  vehicle?: {
    name: string;
  };
};

export function TestimonialsSection() {
  const [reviews, setReviews] = useState<PublicReview[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;

    async function loadReviews() {
      try {
        const response = await getPublicReviews();

        if (isMounted) {
          setReviews((response.data || []).slice(0, 3));
        }
      } catch {
        if (isMounted) {
          setReviews([]);
        }
      } finally {
        if (isMounted) {
          setIsLoading(false);
        }
      }
    }

    loadReviews();

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <HomeSection id="testimonials" tone="muted">
      <SectionTitle
        eyebrow="Reviewed by People"
        title="Clients' Testimonials"
        text="Certain but she but shyness why cottage. Guy the put instrument sir entreaties affronting."
      />
      <div className="grid gap-6 md:grid-cols-3">
        {isLoading
          ? Array.from({ length: 3 }).map((_, index) => (
              <article key={index} className="rounded bg-white p-8 shadow-sm">
                <Skeleton className="h-7 w-full" />
                <Skeleton className="mt-3 h-7 w-4/5" />
                <Skeleton className="mt-8 h-14 w-2/3" />
              </article>
            ))
          : reviews.map((review) => (
              <article key={review.id} className="rounded bg-white p-8 shadow-sm">
                <p className="text-xl font-semibold leading-9">
                  &quot;{review.comment || "Great rental experience."}&quot;
                </p>
                <p className="mt-4 text-sm font-bold text-[#d94f30]">
                  {review.rating} / 5 rating
                </p>
                <div className="mt-8 flex items-center gap-4">
                  <Image
                    src="/carrental/user.png"
                    alt={review.user?.name || "Customer"}
                    width={64}
                    height={64}
                    className="h-14 w-14 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-black">{review.user?.name || "Customer"}</p>
                    <p className="text-sm text-zinc-500">
                      {review.vehicle?.name || "Rental vehicle"}
                    </p>
                  </div>
                </div>
              </article>
            ))}
        {!isLoading && reviews.length === 0 ? (
          <article className="rounded bg-white p-8 text-center shadow-sm md:col-span-3">
            <p className="text-lg font-black text-zinc-950">
              No client reviews yet.
            </p>
            <p className="mt-2 text-zinc-600">
              Customer reviews will show here after vehicles are reviewed.
            </p>
          </article>
        ) : null}
      </div>
    </HomeSection>
  );
}
