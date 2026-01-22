import { Link } from "react-router-dom";

export default function BookNowButton() {
    return (
        <Link
            to="/bookings"
            className="inline-block border border-yellow-600 text-yellow-600 px-6 py-2 hover:bg-yellow-600 hover:text-white transition bg-primary "
        >
            Book Now
        </Link>
    );
}
