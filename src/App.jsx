import Hero from "./components/pages/hero";
import HotelExplore from "./components/pages/HotelExplore";
import Navbar from "./components/pages/navbar";

function App() {
  return (
    <main className="min-h-screen bg-background font-sans antialiased selection:bg-primary selection:text-primary-foreground">
      {/* <nav className="fixed top-0 left-0 w-full z-50">
        <Navbar />
      </nav> */}

      <Hero />
      <HotelExplore />
    </main>
  );
}

export default App;
