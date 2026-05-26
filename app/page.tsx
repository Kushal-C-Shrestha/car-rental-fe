import { AboutSection } from "./_components/AboutSection";
import { AppDownloadSection } from "./_components/AppDownloadSection";
import { BookingSection } from "./_components/BookingSection";
import { ContactInfoSection } from "./_components/ContactInfoSection";
import { DealBannerSection } from "./_components/DealBannerSection";
import { FaqSection } from "./_components/FaqSection";
import { FleetSection } from "./_components/FleetSection";
import { HeroSection } from "./_components/HeroSection";
import { QuickStepsSection } from "./_components/QuickStepsSection";
import { TestimonialsSection } from "./_components/TestimonialsSection";
import { WhyChooseUsSection } from "./_components/WhyChooseUsSection";

export default function Home() {
  return (
    <div className="overflow-hidden bg-white">
      <HeroSection />
      <BookingSection />
      <QuickStepsSection />
      <FleetSection />
      <AboutSection />
      <DealBannerSection />
      <WhyChooseUsSection />
      <TestimonialsSection />
      <FaqSection />
      <AppDownloadSection />
      <ContactInfoSection />
    </div>
  );
}
