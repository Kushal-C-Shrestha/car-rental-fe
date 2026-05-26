import { PageHero } from "../_components/PageHero";
import { VehicleGrid } from "../_components/VehicleGrid";

export default function VehicleModelsPage() {
  return (
    <div className="bg-[#f8f8f8]">
      <PageHero
        eyebrow="Vehicle Models"
        title="Our rental fleet"
        description="Choose from the same featured models shown in the booking demo, with clear daily pricing and automatic transmission."
      />
      <VehicleGrid />
    </div>
  );
}
