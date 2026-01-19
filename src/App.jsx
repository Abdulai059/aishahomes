import CtaSection from "./components/pages/CtaSection";
import GallerySection from "./components/pages/GallerySection";
import Hero from "./components/pages/hero";
import HotelExplore from "./components/pages/HotelExplore";
import MeetingSection from "./components/pages/MeetingSection";
import ReceptionSection from "./components/pages/ReceptionSection";
import RestaurantSection from "./components/pages/RestaurantSection.";
import Rooms from "./components/pages/Rooms";

function App() {
  return (
    <main className="min-h-screen bg-background font-sans antialiased selection:bg-primary pt-28 selection:text-primary-foreground">


      <Hero />
      <HotelExplore />
      <Rooms />
      <MeetingSection />
      <GallerySection />
      <CtaSection />
      <RestaurantSection />
      <ReceptionSection />
    </main>
  );
}

export default App;
