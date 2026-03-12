import { useNavigate } from "react-router";
import BgVideo from "../../../public/media/Aisha-Homes.mp4";
import BookingAvailability from "./BookingAvailability";

export default function Hero() {
  const navigate = useNavigate();

  const handleBooking = () => {
    navigate("/bookings");
  };

  return (
    <div className="relative min-h-screen">
      <video
        src={BgVideo}
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      />

      <div className="absolute inset-0 bg-black/60 z-[1]" />

      <div className="relative z-10 flex flex-col min-h-screen">
        <div className="flex flex-col items-center justify-center flex-1 text-center px-4">
          <h1
            className="font-cormorant font-medium italic text-white leading-tight mb-8"
            style={{ fontSize: "clamp(2rem, 8vw, 4rem)" }}
          >
            Stay Where Comfort Feels Like Home.
            <br />
            <span>Discover premium stays at Aisha Homes.</span>
          </h1>

          <button
            onClick={handleBooking}
            className="bg-gray-100 hover:bg-gray-300 rounded-full text-black px-8 py-3 text-base transition"
          >
            Book Your Stay With Us
          </button>
        </div>

        <BookingAvailability
          guestOptions={[
            "1 Adult, 0 Child",
            "2 Adults, 0 Child",
            "2 Adults, 1 Child",
            "2 Adults, 2 Children",
          ]}
          handleBooking={handleBooking}
        />
      </div>
    </div>
  );
}
