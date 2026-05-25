type SectionTitleProps = {
  eyebrow: string;
  title: string;
  text?: string;
};

export function SectionTitle({ eyebrow, title, text }: SectionTitleProps) {
  return (
    <div className="mx-auto mb-12 max-w-2xl text-center">
      <p className="mb-3 text-xl font-bold text-[#ff4d30]">{eyebrow}</p>
      <h2 className="text-4xl font-black leading-tight text-zinc-950">
        {title}
      </h2>
      {text ? <p className="mt-4 leading-7 text-zinc-500">{text}</p> : null}
    </div>
  );
}
