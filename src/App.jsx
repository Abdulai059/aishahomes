import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Layout from "./components/pages/Layout";
import HomePage from "./components/pages/HomePage";
import BlogPostPage from "./components/pages/BlogPostPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/blog/:id" element={<BlogPostPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
