import { Skeleton } from "../../_components/Skeleton";

function CardSkeleton() {
  return (
    <div className="border border-zinc-200 bg-white p-5 shadow-sm">
      <div className="flex items-start justify-between gap-4">
        <div className="w-full">
          <Skeleton className="h-4 w-24" />
          <Skeleton className="mt-3 h-7 w-2/3" />
        </div>
        <Skeleton className="h-7 w-24" />
      </div>
      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <div>
          <Skeleton className="h-5 w-20" />
          <Skeleton className="mt-2 h-4 w-36" />
          <Skeleton className="mt-2 h-4 w-28" />
        </div>
        <div>
          <Skeleton className="h-5 w-20" />
          <Skeleton className="mt-2 h-4 w-36" />
          <Skeleton className="mt-2 h-4 w-28" />
        </div>
      </div>
      <Skeleton className="mt-6 h-5 w-3/4" />
    </div>
  );
}

export function ProfileSkeleton() {
  return (
    <div className="bg-[#f8f8f8]">
      <section className="mx-auto max-w-6xl px-5 py-10 sm:py-14">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="w-full max-w-2xl">
            <Skeleton className="h-4 w-24" />
            <Skeleton className="mt-4 h-12 w-3/4" />
            <Skeleton className="mt-5 h-5 w-full" />
            <Skeleton className="mt-2 h-5 w-4/5" />
          </div>
          <Skeleton className="h-20 w-full max-w-xs" />
        </div>

        <div className="mt-8 grid gap-3 sm:grid-cols-4">
          {Array.from({ length: 4 }).map((_, index) => (
            <div key={index} className="border border-zinc-200 bg-white px-4 py-4">
              <Skeleton className="h-4 w-24" />
              <Skeleton className="mt-3 h-8 w-16" />
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-8 px-5 pb-16 lg:grid-cols-[1.4fr_0.9fr]">
        <div className="grid gap-4">
          <Skeleton className="h-8 w-40" />
          <CardSkeleton />
          <CardSkeleton />
        </div>
        <aside className="grid h-fit gap-5">
          {Array.from({ length: 3 }).map((_, index) => (
            <div key={index} className="border border-zinc-200 bg-white p-5">
              <Skeleton className="h-6 w-32" />
              <Skeleton className="mt-4 h-4 w-full" />
              <Skeleton className="mt-3 h-4 w-2/3" />
            </div>
          ))}
        </aside>
      </section>
    </div>
  );
}
