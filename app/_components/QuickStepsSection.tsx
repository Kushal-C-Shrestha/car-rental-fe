import Image from "next/image";
import { HomeSection } from "./HomeSection";
import { SectionTitle } from "./SectionTitle";

const steps = [
  ["/carrental/iconbox-image_01.png", "Select Car"],
  ["/carrental/iconbox-image_02.png", "Contact Operator"],
  ["/carrental/iconbox-image_03.png", "Let's Drive"],
];

export function QuickStepsSection() {
  return (
    <HomeSection>
      <SectionTitle
        eyebrow="Plan your trip now"
        title="Quick & easy car rental"
        text="Choose your car, contact the operator, and drive away with a smooth rental experience."
      />
      <div className="grid gap-10 md:grid-cols-3">
        {steps.map(([image, title]) => (
          <article key={title} className="text-center">
            <Image
              src={image}
              alt=""
              width={175}
              height={175}
              className="mx-auto h-36 w-36 object-contain"
            />
            <h3 className="mt-5 text-2xl font-black">{title}</h3>
            <p className="mt-3 leading-7 text-zinc-500">
              To contribute to positive change and achieve our sustainability
              goals with dependable, affordable vehicles.
            </p>
          </article>
        ))}
      </div>
    </HomeSection>
  );
}
