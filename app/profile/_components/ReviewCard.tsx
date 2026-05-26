import Link from "next/link";
import type { Review } from "../types";
import { formatDate } from "./profileUtils";

type ReviewCardProps = {
  review: Review;
};

export function ReviewCard({ review }: ReviewCardProps) {
  return (
    <article className="border border-zinc-200 bg-white p-5 shadow-sm">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-xs font-bold uppercase text-[#d94f30]">
            {review.vehicle?.name || "Vehicle review"}
          </p>
          <h2 className="mt-1 text-lg font-black text-zinc-950">
            {review.rating} / 5 rating
          </h2>
        </div>
        <p className="shrink-0 text-xs font-semibold text-zinc-500">
          {formatDate(review.createdAt)}
        </p>
      </div>
      <p className="mt-4 text-sm leading-6 text-zinc-700">
        {review.comment || "No written comment added."}
      </p>
      {review.vehicle?.slug ? (
        <Link
          href={`/vehicle-models/${review.vehicle.slug}`}
          className="mt-4 inline-block text-sm font-bold text-zinc-950 transition hover:text-[#d94f30]"
        >
          View vehicle
        </Link>
      ) : null}
    </article>
  );
}
