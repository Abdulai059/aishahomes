import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import BookingAvailability from "./BookingAvailability";

const images = ["/images/ah0.jpeg", "/images/ah11.jpeg", "/images/ah5.jpeg"];

export default function Hero() {
  const navigate = useNavigate();
  const [current, setCurrent] = useState(0);
  const [loadedImages, setLoadedImages] = useState(new Set());

  // Preload all hero images
  useEffect(() => {
    images.forEach((src) => {
      const img = new Image();
      img.src = src;
      img.onload = () => {
        setLoadedImages((prev) => new Set(prev).add(src));
      };
    });
  }, []);

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
          width={1920}
          height={1080}
          loading={i === 0 ? "eager" : "lazy"}
          fetchPriority={i === 0 ? "high" : "auto"}
          className={`absolute inset-0 w-full h-full object-cover z-0 transition-opacity duration-1000 ${
            i === current && loadedImages.has(img) ? "opacity-100" : "opacity-0"
          }`}
          style={{
            transform: "translate3d(0,0,0)",
            backfaceVisibility: "hidden",
          }}
        />
      ))}

      <div className="absolute inset-0 bg-black/55 z-10" />

      <div className="relative z-10 flex flex-col min-h-screen">
        <div className="flex flex-col items-center justify-center flex-1 text-center px-4">
          <div className="flex items-center justify-center gap-3 mb-5">
            <span
              className="text-yellow-500 text-xs tracking-widest uppercase"
              style={{ fontFamily: "'Jost', sans-serif" }}
            >
              Far Away From Home
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

          <div className="w-10 h-0.5 bg-brand-gold mx-auto my-4" />

          <button
            onClick={handleBooking}
            className="inline-block px-8 py-3 border border-brand-gold rounded-sm text-white text-xs font-bold tracking-widest uppercase hover:bg-brand-gold transition-colors duration-300 mt-2"
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
