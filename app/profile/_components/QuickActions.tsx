import { Button } from "../../_components/Button";

export function QuickActions() {
  return (
    <section className="border border-zinc-200 bg-white p-5">
      <h2 className="text-lg font-black text-zinc-950">Quick actions</h2>
      <div className="mt-4 grid gap-3">
        <Button href="/vehicle-models" className="w-full" size="sm">
          Book another car
        </Button>
        <Button href="/support/contact" className="w-full" size="sm" variant="ghost">
          Contact support
        </Button>
        <Button href="/support/locations" className="w-full" size="sm" variant="ghost">
          View locations
        </Button>
      </div>
    </section>
  );
}
