import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import BookingAvailability from "./BookingAvailability";
import { HERO_IMAGES, TIMING, ROUTES } from "../../constants";

export default function Hero() {
  const navigate = useNavigate();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % HERO_IMAGES.length);
    }, TIMING.HERO_SLIDE_INTERVAL);

    return () => clearInterval(interval);
  }, []);

  const handleBooking = () => navigate(ROUTES.BOOKINGS);

  return (
    <div className="relative min-h-screen">
<<<<<<< HEAD
      {HERO_IMAGES.map((img, i) => (
=======
      {images.map((img, i) => (
>>>>>>> update
        <img
          key={i}
          src={img}
          alt={`Hotel background ${i + 1}`}
          width={1920}
          height={1080}
          loading={i === 0 ? "eager" : "lazy"}
          fetchPriority={i === 0 ? "high" : "auto"}
          className={`absolute inset-0 w-full h-full object-cover z-0 transition-opacity duration-1000 ${
            i === current ? "opacity-100" : "opacity-0"
          }`}
          style={{
            transform: "translate3d(0,0,0)",
            backfaceVisibility: "hidden",
          }}
        />
      ))}

<<<<<<< HEAD
      <div className="absolute inset-0 bg-black/55 z-10" />

      <div className="relative z-10 flex flex-col min-h-screen">
        <div className="flex flex-col items-center justify-center flex-1 text-center px-4">
          <span
            className="text-brand-gold font-semibold text-xs tracking-widest uppercase mb-5"
            style={{ fontFamily: "'Jost', sans-serif" }}
          >
            Where Luxury Meets Uniqueness
          </span>

          <h1 className="impact-title text-gray-100 uppercase text-4xl md:text-6xl leading-tight tracking-wide mb-4">
            Where Every Stay Becomes a <br /> Story
          </h1>

          <div className="w-10 h-0.5 bg-brand-gold mx-auto my-4" />

          <button
            onClick={handleBooking}
            className="inline-block px-8 py-3 border border-brand-gold rounded-sm text-white text-xs font-bold tracking-widest uppercase hover:bg-brand-gold transition-colors duration-300 mt-2"
=======
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
>>>>>>> update
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
        {HERO_IMAGES.map((_, i) => (
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
