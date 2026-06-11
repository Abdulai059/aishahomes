import { Link } from "react-router-dom";

export default function BookNowButton() {
  return (
    <Link
      to="/rooms"
      className="inline-block border border-brand-gold rounded-full text-sm text-white px-6 py-2 hover:bg-brand-gold hover:text-brand-stone transition bg-brand-blue "
    >
      Book Now
    </Link>
  );
}
