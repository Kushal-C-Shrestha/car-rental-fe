import { Button } from "../../_components/Button";
import type { Appointment, LoadState } from "../types";
import { AppointmentCard } from "./AppointmentCard";
import { EmptyState } from "./EmptyState";

type AppointmentsSectionProps = {
  appointments: Appointment[];
  errorMessage: string;
  state: LoadState;
};

export function AppointmentsSection({
  appointments,
  errorMessage,
  state,
}: AppointmentsSectionProps) {
  return (
    <div>
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-2xl font-black text-zinc-950">Appointments</h2>
        <Button href="/vehicle-models" size="sm" variant="ghost">
          Browse cars
        </Button>
      </div>

      {state === "loading" ? (
        <EmptyState
          title="Loading appointments"
          description="Fetching your booking activity from the rental desk."
        />
      ) : state === "error" ? (
        <EmptyState
          title="Could not load appointments"
          description={errorMessage}
        />
      ) : appointments.length === 0 ? (
        <EmptyState
          title="No appointments yet"
          description="Your upcoming and past rental appointments will show up here after you book a vehicle."
        />
      ) : (
        <div className="grid gap-4">
          {appointments.map((appointment) => (
            <AppointmentCard key={appointment.id} appointment={appointment} />
          ))}
        </div>
      )}
    </div>
  );
}
