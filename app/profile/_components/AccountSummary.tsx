import type { ApiUser } from "../types";

type AccountSummaryProps = {
  user?: ApiUser;
};

export function AccountSummary({ user }: AccountSummaryProps) {
  return (
    <section className="border border-zinc-200 bg-white p-5">
      <h2 className="text-lg font-black text-zinc-950">Account</h2>
      <dl className="mt-4 grid gap-3 text-sm">
        <div>
          <dt className="font-bold text-zinc-500">Name</dt>
          <dd className="mt-1 text-zinc-950">{user?.name || "Signed-in user"}</dd>
        </div>
        <div>
          <dt className="font-bold text-zinc-500">Email</dt>
          <dd className="mt-1 text-zinc-950">{user?.email || "Hidden until booking"}</dd>
        </div>
        <div>
          <dt className="font-bold text-zinc-500">Phone</dt>
          <dd className="mt-1 text-zinc-950">{user?.phone || "Not added"}</dd>
        </div>
      </dl>
    </section>
  );
}
