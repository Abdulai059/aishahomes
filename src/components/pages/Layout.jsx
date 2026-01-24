import { Outlet } from "react-router-dom";
import Nav from "../ui/Nav";
import TopBar from "../ui/TopBar";
import Footer from "./Footer";
import { UseScrollToTop } from "../../hook/useScrollToTop"

export default function Layout() {


    return (
        <>
            <UseScrollToTop />
            <TopBar />
            <Nav />
            <main className="pt-28 w-full overflow-x-hidden">
                <Outlet />
            </main>
            <Footer />
        </>
    );
}
