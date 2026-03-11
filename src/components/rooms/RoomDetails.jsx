import { useNavigate } from "react-router";

export function RoomDetails({ room }) {
  const navigate = useNavigate();

  const handleBooking = () => {
    navigate("/bookings");
  };

  return (
    <div
      className="bg-gray-200 p-6 lg:p-14 flex flex-col justify-center"
      data-aos="fade-left"
      data-aos-delay="200"
    >
      <h1
        className="text-2xl md:text-3xl font-light mb-6 tracking-tight"
        style={{ fontFamily: "Columbia-Serial" }}
      >
        {room.type}
      </h1>

      <p className="text-gray-600 mb-8 leading-relaxed text-sm ">
        {room.description}
      </p>

      <div className="mb-8">
        <h2 className="text-base font-semibold mb-4">What's inside:</h2>
        <div className="space-y-2 text-gray-800">
          {room.features.map((feature, idx) => (
            <div key={idx} className="text-sm">
              {idx + 1}. {feature}
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-2 gap-x-8 gap-y-5 mb-10">
        {room.amenities.map((amenity, idx) => {
          const Icon = amenity.icon;
          return (
            <div key={idx} className="flex items-center gap-3">
              <Icon className="w-5 h-5 text-gray-700 flex-shrink-0" />
              <span className="text-sm text-gray-800">{amenity.label}</span>
            </div>
          );
        })}
      </div>

      <button
        onClick={handleBooking}
        className="bg-blue-900 text-white py-2.5 px-8 rounded-full w-36 hover:bg-blue-800 transition font-medium text-sm"
      >
        Book Now
      </button>
    </div>
  );
}
