import { useNavigate } from "react-router-dom";

export default function () {
    const navigate = useNavigate();

    return (
        <button
            onClick={() => navigate("/bookings")}
            className="border border-yellow-600 text-yellow-600 px-6 py-2 hover:bg-yellow-600 hover:text-white transition"
        >
            Book Now
        </button>
    );
}
