import { Link } from "react-router-dom";

export default function BookNowButton() {
  return (
    <Link
      to="/bookings"
      className="inline-block border border-yellow-700 rounded-sm text-white px-6 py-2 hover:bg-white hover:text-black transition bg-primary "
    >
      Book Now
    </Link>
  );
}
