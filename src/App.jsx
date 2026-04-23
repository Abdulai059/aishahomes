import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
import useAOS from "./hooks/useAOS";
import { ROUTES } from "./constants";

const Layout = lazy(() => import("./components/pages/Layout"));
const HomePage = lazy(() => import("./components/pages/HomePage"));
const BlogPostPage = lazy(() => import("./components/pages/BlogPostPage"));
const BlogPost = lazy(() => import("./components/pages/BlogPost"));
const CreateReservation = lazy(
  () => import("./components/pages/CreateReservation"),
);
const ContactUs = lazy(() => import("./components/pages/ContactUs"));
const ConferenceHall = lazy(() => import("./components/pages/ConferenceHall"));
const Room = lazy(() => import("./components/pages/Room"));
const GalleryPage = lazy(() => import("./components/pages/GalleryPage"));
const AboutUs = lazy(() => import("./components/pages/about-us"));
const Facilities = lazy(() => import("./components/pages/Facilities"));

const LoadingSpinner = () => (
  <div className="min-h-screen flex items-center justify-center bg-black/20 backdrop-blur-sm">
    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-900" />
  </div>
);

const routes = [
  { path: ROUTES.HOME, element: <HomePage /> },
  { path: ROUTES.BLOG, element: <BlogPost /> },
  { path: ROUTES.BOOKINGS, element: <CreateReservation /> },
  { path: `${ROUTES.BLOG}/:id`, element: <BlogPostPage /> },
  { path: ROUTES.CONTACT, element: <ContactUs /> },
  { path: ROUTES.ABOUT, element: <AboutUs /> },
  { path: ROUTES.FACILITIES, element: <Facilities /> },
  { path: ROUTES.CONFERENCE, element: <ConferenceHall /> },
  { path: ROUTES.ROOMS, element: <Room /> },
  { path: ROUTES.GALLERY, element: <GalleryPage /> },
];

function App() {
  useAOS();

  return (
    <Router>
      <Suspense fallback={<LoadingSpinner />}>
        <Routes>
          <Route element={<Layout />}>
            {routes.map(({ path, element }) => (
              <Route key={path} path={path} element={element} />
            ))}
          </Route>
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
