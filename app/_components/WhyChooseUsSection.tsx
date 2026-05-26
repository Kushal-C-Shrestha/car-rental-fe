import Image from "next/image";
import { Button } from "./Button";
import { HomeSection } from "./HomeSection";

const benefits = [
  [
    "/carrental/drive.png",
    "Cross Country Drive",
    "Speedily say has suitable disposal add boy.",
  ],
  [
    "/carrental/price.png",
    "All inclusive pricing",
    "Clear daily rates with no surprise fees.",
  ],
  [
    "/carrental/charge.png",
    "No hidden charges",
    "Know what you pay before you pick up.",
  ],
];

export function WhyChooseUsSection() {
  return (
    <HomeSection innerClassName="grid gap-10 lg:grid-cols-2 lg:items-center">
      <Image
        src="/carrental/display_car_image-1024x449.png"
        alt="Rental car display"
        width={1024}
        height={449}
        className="w-full object-contain"
      />
      <div>
        <p className="mb-3 text-xl font-bold text-[#ff4d30]">Why Choose Us</p>
        <h2 className="text-4xl font-black leading-tight">
          Best valued deals you will ever find
        </h2>
        <p className="mt-5 leading-8 text-zinc-500">
          Find the best deals for cross country drives, all inclusive pricing,
          and no hidden charges.
        </p>
        <Button href="#booking" className="mt-7" size="lg">
          Find Deals
        </Button>
        <div className="mt-8 grid gap-5">
          {benefits.map(([icon, title, text]) => (
            <div key={title} className="flex gap-4">
              <div className="grid h-16 w-16 shrink-0 place-items-center rounded bg-[#fff1ee]">
                <Image src={icon} alt="" width={44} height={44} />
              </div>
              <div>
                <h3 className="text-xl font-black">{title}</h3>
                <p className="mt-1 text-zinc-500">{text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </HomeSection>
  );
}
