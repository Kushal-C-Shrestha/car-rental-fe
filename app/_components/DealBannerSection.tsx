import { HomeSection } from "./HomeSection";

export function DealBannerSection() {
  return (
    <HomeSection className="py-14 text-center" tone="dark">
      <h2 className="text-4xl font-black">Save big with our cheap car rental!</h2>
      <p className="mt-4 text-xl">
        Top Airports. Local Suppliers.{" "}
        <span className="text-[#ff4d30]">24/7</span> Support.
      </p>
    </HomeSection>
  );
}
