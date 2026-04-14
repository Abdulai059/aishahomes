import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Layout from "./components/pages/Layout";
import HomePage from "./components/pages/HomePage";
import BlogPostPage from "./components/pages/BlogPostPage";
import BlogPost from "./components/pages/BlogPost";
import CreateReservation from "./components/pages/CreateReservation";
import ContactUs from "./components/pages/ContactUs";
import ConferenceHall from "./components/pages/ConferenceHall";
import Room from "./components/pages/Room";
import useAOS from "./hook/useAOS";
import GalleryPage from "./components/pages/GalleryPage";
import AboutUs from "./components/pages/about-us";
import Facilities from "./components/pages/Facilities";

function App() {
  useAOS();

  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/blog" element={<BlogPost />} />
          <Route path="/bookings" element={<CreateReservation />} />
          <Route path="/blog/:id" element={<BlogPostPage />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/facilities-homes" element={<Facilities />} />
          <Route path="/conference" element={<ConferenceHall />} />
          <Route path="/rooms-suites" element={<Room />} />
          <Route path="/gallery" element={<GalleryPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
