import { Link } from "react-router-dom";

export default function BookNowButton() {
  return (
    <Link
      to="/bookings"
      className="inline-block border border-yellow-700 rounded-full text-sm text-white px-6 py-2 hover:bg-white hover:text-black transition bg-blue-900 "
    >
      Book Now
    </Link>
  );
}
