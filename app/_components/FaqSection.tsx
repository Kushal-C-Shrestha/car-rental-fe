import { HomeSection } from "./HomeSection";

const questions = [
  "What is special about comparing rental car deals?",
  "How do I find the best car rental deals?",
  "How do I find such low rental car prices?",
];

export function FaqSection() {
  return (
    <HomeSection innerClassName="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
      <div>
        <p className="mb-3 text-xl font-bold text-[#ff4d30]">FAQ</p>
        <h2 className="text-4xl font-black leading-tight">
          Frequently Asked Questions
        </h2>
        <p className="mt-5 leading-8 text-zinc-500">
          Use securing confined his shutters. Delightful as he it acceptance an
          solicitude discretion reasonably.
        </p>
      </div>
      <div className="grid gap-4">
        {questions.map((question, index) => (
          <details
            key={question}
            open={index === 0}
            className="rounded bg-white p-5 shadow-sm"
          >
            <summary className="cursor-pointer text-lg font-black">
              {question}
            </summary>
            <p className="mt-4 leading-7 text-zinc-500">
              Compare car types, locations, pickup windows, mileage, and
              support before booking your ride.
            </p>
          </details>
        ))}
      </div>
    </HomeSection>
  );
}
