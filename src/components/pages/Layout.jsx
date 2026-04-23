import { Outlet } from "react-router-dom";
import Nav from "../ui/Nav";
import TopBar from "../ui/TopBar";
import Footer from "./Footer";
import { UseScrollToTop } from "../../hooks/useScrollToTop";

export default function Layout() {
  return (
    <div className="flex flex-col min-h-screen w-full overflow-x-hidden">
      <UseScrollToTop />
      <TopBar />
      <Nav />
      <main className="flex-1 w-full pt-16 md:pt-28">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
