import Image from "next/image";
import { HomeSection } from "./HomeSection";

const stats = [
  ["/carrental/car.png", "20", "Car Types"],
  ["/carrental/parking.png", "85", "Rental Outlets"],
  ["/carrental/pickup-car.png", "75", "Repair Shop"],
];

export function AboutSection() {
  return (
    <HomeSection
      id="about"
      innerClassName="grid gap-12 lg:grid-cols-2 lg:items-center"
    >
      <Image
        src="/carrental/about_image.jpg"
        alt="Driver opening a car door"
        width={461}
        height={480}
        className="w-full rounded object-cover shadow-lg"
      />
      <div>
        <p className="mb-3 text-xl font-bold text-[#ff4d30]">About Company</p>
        <h2 className="text-4xl font-black leading-tight">
          You start the engine and your adventure begins
        </h2>
        <p className="mt-5 leading-8 text-zinc-500">
          Certain but she but shyness why cottage. Guy the put instrument sir
          entreaties affronting. Pretended exquisite see cordially the you.
          Weeks quiet do vexed or whose.
        </p>
        <div className="mt-8 grid gap-5 sm:grid-cols-3">
          {stats.map(([icon, value, label]) => (
            <div key={label}>
              <Image
                src={icon}
                alt=""
                width={48}
                height={48}
                className="h-10 w-10 object-contain"
              />
              <p className="mt-3 text-4xl font-black">{value}</p>
              <p className="font-bold text-zinc-500">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </HomeSection>
  );
}
