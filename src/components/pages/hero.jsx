
import { useNavigate } from 'react-router';
import BgVideo from '../../../public/media/Aisha-Homes.mp4';
import BookingAvailability from './BookingAvailability';

export default function Hero() {

  const navigate = useNavigate()

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

      <div className="absolute inset-0 bg-black/60 z-[1]"></div>

      <div className="relative z-10">

        <div className="flex flex-col items-center justify-center min-h-[75vh] text-center px-4">
          <h1 className="text-white text-3xl md:text-5xl mb-6 max-w-4xl leading-tight"
            style={{ fontFamily: "Columbia-Serial" }}>
            WELCOME TO AISHA HOMES,<br />
            <span>WHERE ELEGANCE MEETS EXCELLENCE</span>
          </h1>
          <p className="text-yellow-600 text-base md:text-2xl mb-8 tracking-wide">
            CLICK TO EXPERIENCE UNPARALLELED LUXURY
          </p>
          <button
            onClick={handleBooking}
            className="bg-gray-100 hover:bg-gray-300 rounded-full text-black px-8 py-3 text-base md:text-xl transition">
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