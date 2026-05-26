"use client";

import { useEffect, useMemo, useState } from "react";
import { useAuth } from "../_context/AuthContext";
import { Button } from "../_components/Button";
import { getMyAppointments, getMyReviews } from "@/lib/api";
import { AccountSummary } from "./_components/AccountSummary";
import { ActivityPanel } from "./_components/ActivityPanel";
import { AppointmentsSection } from "./_components/AppointmentsSection";
import { ProfileHeader } from "./_components/ProfileHeader";
import { ProfileSkeleton } from "./_components/ProfileSkeleton";
import { QuickActions } from "./_components/QuickActions";
import { ReviewsSection } from "./_components/ReviewsSection";
import { StatTile } from "./_components/StatTile";
import type { Appointment, LoadState, Review } from "./types";

export default function ProfilePage() {
  const {
    isAuthenticated,
    isLoading: isAuthLoading,
    user,
  } = useAuth();
  const [appointments, setAppointments] = useState<Appointment[]>([]);
  const [reviews, setReviews] = useState<Review[]>([]);
  const [state, setState] = useState<LoadState>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    let isMounted = true;

    async function loadProfile() {
      if (isAuthLoading) {
        return;
      }

      if (!isAuthenticated) {
        setState("signed-out");
        return;
      }

      setState("loading");
      setErrorMessage("");

      try {
        const [appointmentResponse, reviewResponse] = await Promise.all([
          getMyAppointments(),
          getMyReviews(),
        ]);

        if (!isMounted) {
          return;
        }

        setAppointments(appointmentResponse.data || []);
        setReviews(reviewResponse.data || []);
        setState("ready");
      } catch {
        if (!isMounted) {
          return;
        }

        setErrorMessage("We could not load your profile details right now.");
        setState("error");
      }
    }

    loadProfile();

    return () => {
      isMounted = false;
    };
  }, [isAuthLoading, isAuthenticated]);

  const activeAppointments = useMemo(
    () =>
      appointments.filter(
        (appointment) =>
          !["CANCELLED", "COMPLETED"].includes(appointment.status),
      ).length,
    [appointments],
  );
  const totalSpent = useMemo(
    () =>
      appointments
        .filter((appointment) => appointment.status !== "CANCELLED")
        .reduce((total, appointment) => total + appointment.totalAmount, 0),
    [appointments],
  );

  if (isAuthLoading || state === "idle" || state === "loading") {
    return <ProfileSkeleton />;
  }

  if (state === "signed-out") {
    return (
      <section className="mx-auto max-w-3xl px-5 py-20 text-center">
        <p className="text-sm font-bold uppercase text-[#d94f30]">
          Account required
        </p>
        <h1 className="mt-3 text-4xl font-black text-zinc-950">
          Sign in to view your profile.
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-base leading-7 text-zinc-600">
          Your appointments and reviews are connected to your account, so we
          need you signed in before showing them here.
        </p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Button href="/sign-in">Sign in</Button>
          <Button href="/register" variant="ghost">
            Register
          </Button>
        </div>
      </section>
    );
  }

  return (
    <div className="bg-[#f8f8f8]">
      <section className="mx-auto max-w-6xl px-5 py-10 sm:py-14">
        <ProfileHeader user={user ?? undefined} />

        <div className="mt-8 grid gap-3 sm:grid-cols-4">
          <StatTile label="Appointments" value={appointments.length} />
          <StatTile label="Active trips" value={activeAppointments} />
          <StatTile label="Reviews" value={reviews.length} />
          <StatTile label="Rental spend" value={`$${totalSpent}`} />
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-8 px-5 pb-16 lg:grid-cols-[1.4fr_0.9fr]">
        <AppointmentsSection
          appointments={appointments}
          errorMessage={errorMessage}
          state={state}
        />

        <aside className="grid h-fit gap-5">
          <AccountSummary user={user ?? undefined} />
          <QuickActions />
          <ActivityPanel appointments={appointments} reviews={reviews} />
          <ReviewsSection
            errorMessage={errorMessage}
            reviews={reviews}
            state={state}
          />
        </aside>
      </section>
    </div>
  );
}
