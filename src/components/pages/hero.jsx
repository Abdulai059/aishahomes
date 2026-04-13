import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import BgImage2 from "../../../public/images/ah11.jpeg";
import BgImage1 from "../../../public/images/ah0.jpeg";
import BgImage3 from "../../../public/images/ah5.jpeg";
import BookingAvailability from "./BookingAvailability";

const images = [BgImage1, BgImage2, BgImage3];

export default function Hero() {
  const navigate = useNavigate();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  const handleBooking = () => {
    navigate("/bookings");
  };

  return (
    <div className="relative min-h-screen">
      {images.map((img, i) => (
        <img
          key={i}
          src={img}
          alt={`Hotel background ${i + 1}`}
          className={`absolute inset-0 w-full h-full object-cover z-0 transition-opacity duration-1000 ${
            i === current ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}

      <div className="absolute inset-0 bg-black/55 z-[1]" />

      <div className="relative z-10 flex flex-col min-h-screen">
        <div className="flex flex-col items-center justify-center flex-1 text-center px-4">
          <div className="flex items-center justify-center gap-3 mb-5">
            <span
              className="text-white/80 text-xs tracking-widest uppercase"
              style={{ fontFamily: "'Jost', sans-serif" }}
            >
              Where Luxury Meets Uniqueness
            </span>
          </div>

          <h1
            className="text-white font-bold uppercase text-4xl md:text-6xl  mb-4"
            style={{
              fontFamily: "'Raleway', sans-serif",
              letterSpacing: "0.07em",
            }}
          >
            <span className="block">Where Every Stay</span>
            <span className="block">
              Becomes a <br /> Story
            </span>
          </h1>

          <div className="w-10 h-0.5 bg-amber-500 mx-auto my-4" />

          <button
            onClick={handleBooking}
            className="inline-block px-8 py-3 border border-amber-500 rounded-sm text-white text-xs font-bold tracking-widest uppercase hover:bg-amber-500 transition-colors duration-300 mt-2"
            style={{ fontFamily: "'Jost', sans-serif" }}
          >
            Rooms &amp; Suites
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

      <div className="absolute bottom-24 left-1/2 -translate-x-1/2 z-10 flex gap-2">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`h-2 rounded-full transition-all duration-300 ${
              i === current ? "bg-white w-5" : "bg-white/50 w-2"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
