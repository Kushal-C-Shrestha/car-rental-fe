const questions = [
  "What is special about comparing rental car deals?",
  "How do I find the best car rental deals?",
  "How do I find such low rental car prices?",
  "Can I change my pickup time?",
];

export default function SupportFaqPage() {
  return (
    <section className="rounded bg-white p-6 shadow-sm lg:p-10">
      <p className="mb-3 text-xl font-bold text-[#ff4d30]">FAQ</p>
      <h1 className="max-w-3xl text-4xl font-black leading-tight">
        Frequently Asked Questions
      </h1>
      <div className="mt-8 grid gap-4">
        {questions.map((question, index) => (
          <details key={question} open={index === 0} className="rounded border border-zinc-100 p-5">
            <summary className="cursor-pointer text-lg font-black">
              {question}
            </summary>
            <p className="mt-4 leading-7 text-zinc-500">
              Compare vehicle type, pickup location, time, daily rate, and
              support options before confirming your booking.
            </p>
          </details>
        ))}
      </div>
    </section>
  );
}
