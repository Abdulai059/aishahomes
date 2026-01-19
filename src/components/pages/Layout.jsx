import { Outlet } from "react-router-dom";
import Nav from "../ui/Nav";
import TopBar from "./TopBar";

export default function Layout() {
    return (
        <>
            <TopBar />
            <Nav />
            <main className="pt-28">
                <Outlet />
            </main>
        </>
    );
}
