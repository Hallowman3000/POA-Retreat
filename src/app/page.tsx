
import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { Overview } from "@/components/Overview";
import { AccommodationDining } from "@/components/AccommodationDining";
import { ActivitiesFacilities } from "@/components/ActivitiesFacilities";
import { PhotoGallery } from "@/components/PhotoGallery";
import { BookingForm } from "@/components/BookingForm";
import { AiConcierge } from "@/components/AiConcierge";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <Overview />
      <AccommodationDining />
      <ActivitiesFacilities />
      <PhotoGallery />
      <BookingForm />
      <Footer />
      <AiConcierge />
    </main>
  );
}
