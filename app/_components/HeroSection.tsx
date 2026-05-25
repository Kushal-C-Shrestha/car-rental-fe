import Image from "next/image";
import { Button } from "./Button";

const trustPoints = ["No hidden fees", "Unlimited miles", "24/7 support"];

export function HeroSection() {
  return (
    <section className="relative bg-[#f8f8f8]">
      <Image
        src="/carrental/banner_image.png"
        alt=""
        width={680}
        height={869}
        className="pointer-events-none absolute right-0 top-0 hidden h-full max-h-[720px] w-auto object-contain lg:block"
      />
      <div className="relative mx-auto grid max-w-6xl gap-10 px-5 pb-20 pt-16 lg:grid-cols-[0.85fr_1.15fr] lg:items-center lg:pt-24">
        <div>
          <p className="mb-3 text-2xl font-bold">Plan your trip now</p>
          <h1 className="text-5xl font-black leading-[1.05] text-zinc-950 sm:text-6xl">
            Save <span className="text-[#ff4d30]">big</span> with our car
            rental
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-8 text-zinc-500">
            Rent the car of your dreams. Unbeatable prices, unlimited miles,
            flexible pick-up options and much more.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Button href="#booking" size="lg">
              Book Ride
            </Button>
            <Button href="#about" size="lg" variant="dark">
              Learn More
            </Button>
          </div>
          <div className="mt-7 flex flex-wrap gap-3 text-sm font-bold text-zinc-600">
            {trustPoints.map((point) => (
              <span
                key={point}
                className="rounded bg-white px-4 py-2 shadow-sm ring-1 ring-zinc-100"
              >
                {point}
              </span>
            ))}
          </div>
        </div>
        <div className="relative min-h-72 lg:min-h-[460px]">
          <Image
            src="/carrental/banner_car.png"
            alt="White rental car"
            width={922}
            height={525}
            priority
            className="absolute bottom-0 right-0 w-full max-w-3xl drop-shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
}
