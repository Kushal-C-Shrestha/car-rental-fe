import type { Appointment } from "../types";
import { formatDate, statusClasses } from "./profileUtils";

type AppointmentCardProps = {
  appointment: Appointment;
};

export function AppointmentCard({ appointment }: AppointmentCardProps) {
  return (
    <article className="border border-zinc-200 bg-white p-5 shadow-sm">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <p className="text-xs font-bold uppercase text-[#d94f30]">
            {appointment.vehicle.year} {appointment.vehicle.brand}
          </p>
          <h2 className="mt-1 text-xl font-black text-zinc-950">
            {appointment.vehicle.name}
          </h2>
        </div>
        <span
          className={`w-fit px-3 py-1 text-xs font-black uppercase ring-1 ${statusClasses(
            appointment.status,
          )}`}
        >
          {appointment.status}
        </span>
      </div>

      <div className="mt-5 grid gap-4 text-sm text-zinc-700 sm:grid-cols-2">
        <div>
          <p className="font-bold text-zinc-950">Pickup</p>
          <p className="mt-1">{formatDate(appointment.pickupAt)}</p>
          <p className="mt-1 text-zinc-500">
            {appointment.pickupLocation.name}, {appointment.pickupLocation.city}
          </p>
        </div>
        <div>
          <p className="font-bold text-zinc-950">Dropoff</p>
          <p className="mt-1">{formatDate(appointment.dropoffAt)}</p>
          <p className="mt-1 text-zinc-500">
            {appointment.dropoffLocation.name},{" "}
            {appointment.dropoffLocation.city}
          </p>
        </div>
      </div>

      <div className="mt-5 flex flex-wrap items-center gap-3 border-t border-zinc-100 pt-4 text-sm">
        <span className="font-bold text-zinc-950">
          ${appointment.totalAmount}
        </span>
        <span className="text-zinc-500">
          {appointment.vehicle.transmission} / {appointment.vehicle.fuelType}
        </span>
        {appointment.note ? (
          <span className="text-zinc-500">Note: {appointment.note}</span>
        ) : null}
      </div>
    </article>
  );
}
