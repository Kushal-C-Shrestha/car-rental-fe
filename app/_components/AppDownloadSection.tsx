import Image from "next/image";
import { HomeSection } from "./HomeSection";

export function AppDownloadSection() {
  return (
    <HomeSection
      className="py-20"
      innerClassName="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between"
      tone="muted"
    >
      <div>
        <h2 className="max-w-2xl text-4xl font-black leading-tight">
          Download our app to get most out of it
        </h2>
        <p className="mt-4 max-w-xl leading-8 text-zinc-500">
          Book faster, manage reservations, and keep your rental details in one
          place.
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
    </HomeSection>
  );
}
