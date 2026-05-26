import { VehicleDetailClient } from "./VehicleDetailClient";

type VehiclePageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function VehicleModelPage({ params }: VehiclePageProps) {
  const { slug } = await params;

  return <VehicleDetailClient slug={slug} />;
}
