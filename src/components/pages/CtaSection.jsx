import { useNavigate } from "react-router";

function CtaSection() {
  const navigate = useNavigate();

  const handleBooking = () => {
    navigate("/bookings");
  };
  return (
    <section
      className="relative md:min-h-90 min-h-50 py-12 bg-cover bg-center"
      style={{
        backgroundImage: "url('/Walkthrough-video.jpg')",
      }}
    >
      <div className="absolute inset-0 bg-black/60"></div>

      <div className="relative container mx-auto px-6 flex flex-col justify-center items-center text-center pt-12 text-white h-full space-y-6">
        <p
          className="md:text-4xl text-xl tracking-wider text-gray-200 max-w-5xl"
          style={{ fontFamily: "Columbia-Serial" }}
          data-aos="fade-up"
          data-aos-duration="1200"
        >
          Refined living. Calm and comfort await. <br />
          Welcome to Aisha Homes.
        </p>

        <div data-aos="zoom-in" data-aos-duration="800" data-aos-delay="200">
          <button
            onClick={handleBooking}
            className="bg-white text-gray-900 px-12 py-2.5 uppercase rounded-full text-xs md:text-sm font-semibold border border-transparent hover:bg-transparent hover:text-white hover:border-white transition-all duration-300"
          >
            Book Your Stay With Us
          </button>
        </div>
      </div>
    </section>
  );
}

export default CtaSection;
