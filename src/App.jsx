import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Layout from "./components/pages/Layout";
import HomePage from "./components/pages/HomePage";
import BlogPostPage from "./components/pages/BlogPostPage";
import BlogPost from "./components/pages/BlogPost";
import CreateReservation from "./components/pages/CreateReservation";
import ContactUs from "./components/pages/ContactUs";

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/blog" element={<BlogPost />} />
          <Route path="/bookings" element={<CreateReservation />} /> 
          <Route path="/blog/:id" element={<BlogPostPage />} />
          <Route path="/contact" element={<ContactUs />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
