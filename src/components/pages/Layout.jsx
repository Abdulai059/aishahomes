import { Outlet, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Nav from "../ui/Nav";
import TopBar from "../ui/TopBar";
import Footer from "./Footer";

export default function Layout() {
    const location = useLocation();

    useEffect(() => {
        if (location.hash) {
            const el = document.querySelector(location.hash);
            if (el) {
                // Delay fixes mobile Safari + animated menus
                setTimeout(() => {
                    el.scrollIntoView({ behavior: "smooth", block: "start" });
                }, 100);
            }
        } else {
            // Scroll to top on normal route change
            window.scrollTo({ top: 0, behavior: "smooth" });
        }
    }, [location]);

    return (
        <>
            <TopBar />
            <Nav />
            <main className="pt-28">
                <Outlet />
            </main>
            <Footer />
        </>
    );
}
