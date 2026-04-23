import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export function UseScrollToTop() {
    const location = useLocation();

    useEffect(() => {
        if (location.hash) {
            const el = document.querySelector(location.hash);
            if (el) {

                setTimeout(() => {
                    el.scrollIntoView({ behavior: "smooth", block: "start" });
                }, 100);
            }
        } else {

            window.scrollTo({ top: 0, behavior: "smooth" });
        }
    }, [location]);

    return null;

}

