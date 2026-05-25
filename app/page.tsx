import Link from "next/link";
import Image from "next/image";
import { cars, fleetDetailIcons } from "./_data/cars";
import { Button } from "./_components/Button";
import { SectionTitle } from "./_components/SectionTitle";

const times = [
  "12:00 AM",
  "08:00 AM",
  "09:30 AM",
  "12:00 PM",
  "03:30 PM",
  "06:00 PM",
  "09:30 PM",
];

function Field({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="mb-2 block text-base font-bold text-zinc-950">
        {label}
      </span>
      {children}
    </label>
  );
}

export default function Home() {
  return (
    <div className="overflow-hidden bg-white">
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

      <section id="booking" className="relative z-10 mx-auto max-w-6xl px-5">
        <form className="-mt-8 rounded bg-white p-6 shadow-[0_12px_35px_rgba(0,0,0,0.12)]">
          <div className="mb-6 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="text-2xl font-black">Book a car</h2>
              <p className="mt-1 font-bold text-[#ff4d30]">
                Save 15% if you prepay your booking
              </p>
            </div>
            <p className="rounded bg-[#fff1ee] px-4 py-2 text-sm font-bold text-[#ff4d30]">
              All fields required
            </p>
          </div>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            <Field label="Select Your Car Type">
              <select className="h-12 w-full rounded border border-zinc-200 px-4 text-zinc-500 outline-none focus:border-[#ff4d30]">
                {cars.map((car) => (
                  <option key={car.name}>{car.name}</option>
                ))}
              </select>
            </Field>
            <Field label="Pick-up">
              <select className="h-12 w-full rounded border border-zinc-200 px-4 text-zinc-500 outline-none focus:border-[#ff4d30]">
                <option>Santa Monica - 2102 Lincoln Blvd</option>
                <option>Los Angeles - W Century Blvd</option>
                <option>Las Vegas - Centennial Center Blvd</option>
              </select>
            </Field>
            <Field label="Drop-off">
              <select className="h-12 w-full rounded border border-zinc-200 px-4 text-zinc-500 outline-none focus:border-[#ff4d30]">
                <option>3669 Oliver Street Wedgwood</option>
                <option>330 Hornor Avenue Kiefer</option>
                <option>3240 Timbercrest Road San Pedro</option>
              </select>
            </Field>
            <Field label="Pick-up Time">
              <select className="h-12 w-full rounded border border-zinc-200 px-4 text-zinc-500 outline-none focus:border-[#ff4d30]">
                {times.map((time) => (
                  <option key={time}>{time}</option>
                ))}
              </select>
            </Field>
            <Field label="Drop-off Time">
              <select className="h-12 w-full rounded border border-zinc-200 px-4 text-zinc-500 outline-none focus:border-[#ff4d30]">
                {times.map((time) => (
                  <option key={time}>{time}</option>
                ))}
              </select>
            </Field>
            <Button type="submit" className="mt-8 h-12">
              Search
            </Button>
          </div>
        </form>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-24">
        <SectionTitle
          eyebrow="Plan your trip now"
          title="Quick & easy car rental"
          text="Choose your car, contact the operator, and drive away with a smooth rental experience."
        />
        <div className="grid gap-10 md:grid-cols-3">
          {[
            ["/carrental/iconbox-image_01.png", "Select Car"],
            ["/carrental/iconbox-image_02.png", "Contact Operator"],
            ["/carrental/iconbox-image_03.png", "Let's Drive"],
          ].map(([image, title]) => (
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
      </section>

      <section id="fleet" className="bg-[#f8f8f8] px-5 py-24">
        <div className="mx-auto max-w-6xl">
          <SectionTitle
            eyebrow="Vehicle Models"
            title="Our rental fleet"
            text="Choose from popular models with automatic transmission, roomy interiors, and clear daily pricing."
          />
          <div className="grid gap-8 lg:grid-cols-[220px_1fr_290px] lg:items-center">
            <div className="grid gap-2">
              {cars.map((car, index) => (
                <Link
                  href={`/vehicle-models/${car.slug}`}
                  key={car.name}
                  className={`rounded px-5 py-4 text-left text-lg font-bold transition ${
                    index === 0
                      ? "bg-[#ff4d30] text-white"
                      : "bg-white hover:bg-zinc-100"
                  }`}
                >
                  {car.name}
                </Link>
              ))}
            </div>
            <Image
              src="/carrental/vehicle-1.png"
              alt="Mercedes 35"
              width={757}
              height={392}
              className="w-full object-contain"
            />
            <div className="overflow-hidden rounded bg-white shadow-sm">
              <div className="bg-[#ff4d30] p-5 text-white">
                <p className="text-3xl font-black">$35.40</p>
                <p className="font-bold">rent per day</p>
              </div>
              {[
                [fleetDetailIcons.model, `Model: ${cars[0].type}`],
                [fleetDetailIcons.doors, `Doors: ${cars[0].doors}`],
                [fleetDetailIcons.seats, `Seats: ${cars[0].seats}`],
                [fleetDetailIcons.luggage, `Luggage: ${cars[0].luggage}`],
                [
                  fleetDetailIcons.transmission,
                  `Transmission: ${cars[0].transmission}`,
                ],
              ].map(([icon, item]) => (
                <p
                  key={item}
                  className="flex items-center gap-3 border-b border-zinc-100 px-5 py-4 font-semibold text-zinc-700"
                >
                  <Image src={icon} alt="" width={22} height={22} />
                  {item}
                </p>
              ))}
              <Button
                href="#booking"
                className="block w-full rounded-none uppercase"
                variant="dark"
              >
                Book Ride
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="mx-auto grid max-w-6xl gap-12 px-5 py-24 lg:grid-cols-2 lg:items-center">
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
            {[
              ["/carrental/car.png", "20", "Car Types"],
              ["/carrental/parking.png", "85", "Rental Outlets"],
              ["/carrental/pickup-car.png", "75", "Repair Shop"],
            ].map(([icon, value, label]) => (
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
      </section>

      <section className="bg-zinc-950 px-5 py-14 text-center text-white">
        <h2 className="text-4xl font-black">Save big with our cheap car rental!</h2>
        <p className="mt-4 text-xl">
          Top Airports. Local Suppliers. <span className="text-[#ff4d30]">24/7</span>{" "}
          Support.
        </p>
      </section>

      <section className="mx-auto grid max-w-6xl gap-10 px-5 py-24 lg:grid-cols-2 lg:items-center">
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
            {[
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
            ].map(([icon, title, text]) => (
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
      </section>

      <section id="testimonials" className="bg-[#f8f8f8] px-5 py-24">
        <div className="mx-auto max-w-6xl">
          <SectionTitle
            eyebrow="Reviewed by People"
            title="Clients' Testimonials"
            text="Certain but she but shyness why cottage. Guy the put instrument sir entreaties affronting."
          />
          <div className="grid gap-6 md:grid-cols-3">
            {[1, 2, 3].map((item) => (
              <article key={item} className="rounded bg-white p-8 shadow-sm">
                <p className="text-xl font-semibold leading-9">
                  &quot;The rem value is the same as the em value displayed above. Both units are scalable.&quot;
                </p>
                <div className="mt-8 flex items-center gap-4">
                  <Image
                    src="/carrental/user.png"
                    alt="Kimberly Garcia"
                    width={64}
                    height={64}
                    className="h-14 w-14 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-black">Kimberly Garcia</p>
                    <p className="text-sm text-zinc-500">Boston Area</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-10 px-5 py-24 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <p className="mb-3 text-xl font-bold text-[#ff4d30]">FAQ</p>
          <h2 className="text-4xl font-black leading-tight">
            Frequently Asked Questions
          </h2>
          <p className="mt-5 leading-8 text-zinc-500">
            Use securing confined his shutters. Delightful as he it acceptance
            an solicitude discretion reasonably.
          </p>
        </div>
        <div className="grid gap-4">
          {[
            "What is special about comparing rental car deals?",
            "How do I find the best car rental deals?",
            "How do I find such low rental car prices?",
          ].map((question, index) => (
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
      </section>

      <section className="bg-[#f8f8f8] px-5 py-20">
        <div className="mx-auto flex max-w-6xl flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <h2 className="max-w-2xl text-4xl font-black leading-tight">
              Download our app to get most out of it
            </h2>
            <p className="mt-4 max-w-xl leading-8 text-zinc-500">
              Book faster, manage reservations, and keep your rental details in
              one place.
            </p>
          </div>
          <div className="flex flex-wrap gap-4">
            <Image
              src="/carrental/ios-app-btn.svg"
              alt="Download on iOS"
              width={196}
              height={57}
            />
            <Image
              src="/carrental/google-app-download-1.svg"
              alt="Get it on Google Play"
              width={196}
              height={57}
            />
          </div>
        </div>
      </section>

      <section id="contact" className="mx-auto grid max-w-6xl gap-8 px-5 py-20 md:grid-cols-4">
        <div className="md:col-span-2">
          <h2 className="text-2xl font-black">Need additional information?</h2>
          <p className="mt-4 leading-8 text-zinc-500">
            A multifaceted rental team skilled in planning, support, and quick
            vehicle handovers.
          </p>
          <p className="mt-5 font-bold">(562) 498-4600</p>
          <p className="font-bold">example@carrental.com</p>
        </div>
        <div>
          <h3 className="text-xl font-black">Company</h3>
          <div className="mt-4 grid gap-2 text-zinc-500">
            <Link href="/support/locations">New York</Link>
            <Link href="/company/careers">Careers</Link>
            <Link href="/support/faq">FAQ</Link>
            <Link href="/vehicle-models/mercedes-35">Featured Car</Link>
          </div>
        </div>
        <div>
          <h3 className="text-xl font-black">Subscription</h3>
          <p className="mt-4 text-zinc-500">Subscribe for latest news.</p>
          <div className="mt-4 flex">
            <input
              className="min-w-0 flex-1 rounded-l border border-zinc-200 px-3 outline-none"
              placeholder="Email"
            />
            <button className="rounded-r bg-[#ff4d30] px-4 py-3 font-bold text-white">
              Submit
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
