import type { LoadState, Review } from "../types";
import { EmptyState } from "./EmptyState";
import { ReviewCard } from "./ReviewCard";

type ReviewsSectionProps = {
  errorMessage: string;
  reviews: Review[];
  state: LoadState;
};

export function ReviewsSection({
  errorMessage,
  reviews,
  state,
}: ReviewsSectionProps) {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-black text-zinc-950">Reviews</h2>

      {state === "loading" ? (
        <EmptyState
          title="Loading reviews"
          description="Checking the feedback you have added to vehicles."
        />
      ) : state === "error" ? (
        <EmptyState title="Could not load reviews" description={errorMessage} />
      ) : reviews.length === 0 ? (
        <EmptyState
          title="No reviews yet"
          description="Once you review a vehicle, your rating and comments will be listed here."
        />
      ) : (
        <div className="grid gap-4">
          {reviews.map((review) => (
            <ReviewCard key={review.id} review={review} />
          ))}
        </div>
      )}
    </section>
  );
}
