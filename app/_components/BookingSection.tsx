import { BookingForm } from "./BookingForm";
import { HomeSection } from "./HomeSection";

export function BookingSection() {
  return (
    <HomeSection id="booking" className="relative z-10 py-0">
      <BookingForm />
    </HomeSection>
  );
}
