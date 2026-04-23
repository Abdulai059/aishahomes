import { useState } from "react";
import { useNavigate } from "react-router";

function CtaSection() {
  const navigate = useNavigate();
  const [showVideo, setShowVideo] = useState(false);

  const handleBooking = () => {
    navigate("/bookings");
  };

  // Replace this with your actual YouTube video ID
  const youtubeVideoId = "YOUR_YOUTUBE_VIDEO_ID";

  return (
    <>
      <section
        className="relative md:min-h-90 min-h-50 py-12 bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/ah9.jpeg')",
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-8 px-6 pt-12 text-white max-w-7xl mx-auto">
          {/* Text + Button */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-6 flex-1">
            <p
              className="md:text-4xl text-xl tracking-wider text-gray-200 max-w-5xl"
              style={{ fontFamily: "Columbia-Serial" }}
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              Refined living. Calm and comfort await. <br />
              Welcome to Aisha Homes.
            </p>

            <div
              data-aos="zoom-in"
              data-aos-duration="800"
              data-aos-delay="200"
            >
              <button
                onClick={handleBooking}
                className="bg-white text-gray-900 px-12 py-2.5 uppercase rounded-full text-xs md:text-sm font-semibold border border-transparent hover:bg-transparent hover:text-white hover:border-white transition-all duration-300"
              >
                Book Your Stay With Us
              </button>
            </div>
          </div>

          {/* Play Button */}
          <div
            data-aos="zoom-in"
            data-aos-duration="800"
            data-aos-delay="100"
            className="cursor-pointer group flex items-center justify-center flex-shrink-0"
            onClick={() => setShowVideo(true)}
          >
            <div className="relative flex items-center justify-center w-24 h-24">
              <span className="absolute inline-flex h-full w-full rounded-full bg-white/20 animate-ping"></span>
              <span className="absolute inline-flex h-[140%] w-[140%] rounded-full border border-white/30"></span>

              <div className="relative z-10 flex items-center justify-center w-20 h-20 rounded-full bg-yellow-600 group-hover:bg-yellow-600 transition-colors duration-300 shadow-lg">
                <svg
                  className="w-7 h-7 text-white ml-1"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Modal */}
      {showVideo && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-4"
          onClick={() => setShowVideo(false)}
        >
          <div
            className="relative w-full max-w-4xl aspect-video rounded-xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setShowVideo(false)}
              className="absolute top-3 right-3 z-10 bg-black/60 hover:bg-black text-white rounded-full w-9 h-9 flex items-center justify-center transition-colors duration-200"
            >
              ✕
            </button>

            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/4HvHugeHWDY?si=2fVzni2uZksF0LFg&autoplay=1"
              title="Aisha Homes Walkthrough"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      )}
    </>
  );
}

export default CtaSection;
