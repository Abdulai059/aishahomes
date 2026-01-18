import Hero from "./components/pages/hero";
import HotelExplore from "./components/pages/HotelExplore";
import MeetingSection from "./components/pages/MeetingSection";
import Rooms from "./components/pages/Rooms";

function App() {
  return (
    <main className="min-h-screen bg-background font-sans antialiased selection:bg-primary selection:text-primary-foreground">


      <Hero />
      <HotelExplore />
      <Rooms />
      <MeetingSection />
    </main>
  );
}

export default App;
