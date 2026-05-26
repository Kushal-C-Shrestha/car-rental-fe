import type { Appointment, Review } from "../types";
import { formatDate } from "./profileUtils";

type ActivityPanelProps = {
  appointments: Appointment[];
  reviews: Review[];
};

export function ActivityPanel({ appointments, reviews }: ActivityPanelProps) {
  const latestAppointment = appointments[0];
  const latestReview = reviews[0];

  return (
    <section className="border border-zinc-200 bg-white p-5">
      <h2 className="text-lg font-black text-zinc-950">Recent activity</h2>
      <div className="mt-4 grid gap-4 text-sm">
        {latestAppointment ? (
          <div className="border-l-2 border-[#d94f30] pl-3">
            <p className="font-bold text-zinc-950">
              {latestAppointment.vehicle.name}
            </p>
            <p className="mt-1 text-zinc-500">
              Pickup {formatDate(latestAppointment.pickupAt)}
            </p>
          </div>
        ) : (
          <p className="text-zinc-500">No appointment activity yet.</p>
        )}
        {latestReview ? (
          <div className="border-l-2 border-zinc-300 pl-3">
            <p className="font-bold text-zinc-950">
              Reviewed {latestReview.vehicle?.name || "a vehicle"}
            </p>
            <p className="mt-1 text-zinc-500">
              {latestReview.rating} / 5 on {formatDate(latestReview.createdAt)}
            </p>
          </div>
        ) : (
          <p className="text-zinc-500">No review activity yet.</p>
        )}
      </div>
    </section>
  );
}
