type StatTileProps = {
  label: string;
  value: string | number;
};

export function StatTile({ label, value }: StatTileProps) {
  return (
    <div className="border border-zinc-200 bg-white px-4 py-4">
      <p className="text-xs font-bold uppercase text-zinc-500">{label}</p>
      <p className="mt-2 text-2xl font-black text-zinc-950">{value}</p>
    </div>
  );
}
