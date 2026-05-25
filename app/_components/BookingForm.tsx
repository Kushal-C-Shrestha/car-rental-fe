import type { ReactNode } from "react";
import { cars } from "../_data/cars";
import { Button } from "./Button";

const times = [
  "12:00 AM",
  "08:00 AM",
  "09:30 AM",
  "12:00 PM",
  "03:30 PM",
  "06:00 PM",
  "09:30 PM",
];

function Field({ label, children }: { label: string; children: ReactNode }) {
  return (
    <label className="block">
      <span className="mb-2 block text-base font-bold text-zinc-950">
        {label}
      </span>
      {children}
    </label>
  );
}

export function BookingForm() {
  return (
    <form className="-mt-8 rounded bg-white p-6 shadow-[0_12px_35px_rgba(0,0,0,0.12)]">
      <div className="mb-6 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h2 className="text-2xl font-black">Book a car</h2>
          <p className="mt-1 font-bold text-[#ff4d30]">
            Save 15% if you prepay your booking
          </p>
        </div>
        <p className="rounded bg-[#fff1ee] px-4 py-2 text-sm font-bold text-[#ff4d30]">
          All fields required
        </p>
      </div>
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        <Field label="Select Your Car Type">
          <select className="h-12 w-full rounded border border-zinc-200 px-4 text-zinc-500 outline-none focus:border-[#ff4d30]">
            {cars.map((car) => (
              <option key={car.name}>{car.name}</option>
            ))}
          </select>
        </Field>
        <Field label="Pick-up">
          <select className="h-12 w-full rounded border border-zinc-200 px-4 text-zinc-500 outline-none focus:border-[#ff4d30]">
            <option>Santa Monica - 2102 Lincoln Blvd</option>
            <option>Los Angeles - W Century Blvd</option>
            <option>Las Vegas - Centennial Center Blvd</option>
          </select>
        </Field>
        <Field label="Drop-off">
          <select className="h-12 w-full rounded border border-zinc-200 px-4 text-zinc-500 outline-none focus:border-[#ff4d30]">
            <option>3669 Oliver Street Wedgwood</option>
            <option>330 Hornor Avenue Kiefer</option>
            <option>3240 Timbercrest Road San Pedro</option>
          </select>
        </Field>
        <Field label="Pick-up Time">
          <select className="h-12 w-full rounded border border-zinc-200 px-4 text-zinc-500 outline-none focus:border-[#ff4d30]">
            {times.map((time) => (
              <option key={time}>{time}</option>
            ))}
          </select>
        </Field>
        <Field label="Drop-off Time">
          <select className="h-12 w-full rounded border border-zinc-200 px-4 text-zinc-500 outline-none focus:border-[#ff4d30]">
            {times.map((time) => (
              <option key={time}>{time}</option>
            ))}
          </select>
        </Field>
        <Button type="submit" className="mt-8 h-12">
          Search
        </Button>
      </div>
    </form>
  );
}
