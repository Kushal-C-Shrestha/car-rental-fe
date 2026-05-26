type EmptyStateProps = {
  title: string;
  description: string;
};

export function EmptyState({ title, description }: EmptyStateProps) {
  return (
    <div className="border border-dashed border-zinc-300 bg-white px-5 py-10 text-center">
      <h2 className="text-lg font-black text-zinc-950">{title}</h2>
      <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-zinc-600">
        {description}
      </p>
    </div>
  );
}
