import Link from "next/link";

export default function CompanyLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="bg-[#f8f8f8]">
      <div className="mx-auto grid max-w-6xl gap-8 px-5 py-10 lg:grid-cols-[220px_1fr]">
        <aside className="h-fit rounded bg-white p-5 shadow-sm">
          <p className="mb-4 text-sm font-black uppercase tracking-[0.16em] text-[#ff4d30]">
            Company
          </p>
          <nav className="grid gap-2 text-sm font-bold text-zinc-700">
            <Link className="rounded px-3 py-2 hover:bg-[#fff1ee]" href="/company/about">
              About
            </Link>
            <Link className="rounded px-3 py-2 hover:bg-[#fff1ee]" href="/company/careers">
              Careers
            </Link>
          </nav>
        </aside>
        <div>{children}</div>
      </div>
    </div>
  );
}
