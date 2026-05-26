import type { ApiUser } from "../types";

type ProfileHeaderProps = {
  user?: ApiUser;
};

export function ProfileHeader({ user }: ProfileHeaderProps) {
  return (
    <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
      <div>
        <p className="text-sm font-bold uppercase text-[#d94f30]">My profile</p>
        <h1 className="mt-3 text-4xl font-black leading-tight text-zinc-950 sm:text-5xl">
          {user ? `${user.name}'s dashboard` : "Your rental dashboard"}
        </h1>
        <p className="mt-4 max-w-2xl text-base leading-7 text-zinc-600">
          Track your rental appointments, pickup details, and the reviews you
          have shared after each drive.
        </p>
      </div>
      {user ? (
        <div className="border border-zinc-200 bg-white px-5 py-4 text-sm text-zinc-600">
          <p className="font-black text-zinc-950">{user.name}</p>
          <p className="mt-1">{user.email}</p>
        </div>
      ) : null}
    </div>
  );
}
