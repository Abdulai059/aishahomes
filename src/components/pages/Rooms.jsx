import { useState } from "react";
import { Square, Users, ArrowRight } from "lucide-react";
import { Link } from "react-router";

const ROOMS = [
  {
    name: "Standard Room",
    category: "room",
    image: "/room/room4.webp",
    size: 30,
    capacity: 2,
    price: 85,
    currency: "GHS",
    highlight: "Best Value",
    bestFor: ["Business", "Solo Travel", "Short Stay"],
    description:
      "Step into comfort and simplicity. Designed for both business and leisure, this room features a cozy double bed, a modern rain shower, and essential amenities for a smooth and relaxing stay.",
  },

  {
    name: "Deluxe Room",
    category: "room",
    image: "/room/room6.png",
    size: 55,
    capacity: 2,
    price: 145,
    currency: "GHS",
    highlight: "Most Popular",
    bestFor: ["Couples", "Business Travel"],
    description:
      "Enjoy refined comfort with extra space to relax and recharge. The deluxe room features a spacious layout, a king-sized bed, and premium finishes designed for a more elevated stay experience.",
  },

  {
    name: "Ground Floor Apartment",
    category: "apartment",
    image: "/room/room5.png",
    size: 70,
    capacity: 4,
    price: 240,
    currency: "GHS",
    highlight: "Family Friendly",
    bestFor: ["Families", "Group Stay"],
    description:
      "Experience apartment-style living with easy access and added comfort. This space includes a king bedroom, a separate lounge, and a relaxed layout perfect for families or longer stays.",
  },

  {
    name: "Upper Floor Apartment",
    category: "apartment",
    image: "/room/room7.png",
    size: 120,
    capacity: 6,
    price: 360,
    currency: "GHS",
    highlight: "Luxury Space",
    bestFor: ["Families", "Extended Stay"],
    description:
      "Indulge in spacious elegance with elevated views. This expansive apartment features generous living areas, premium finishes, and the perfect balance of privacy and luxury.",
  },

  {
    name: "Private Full Residence",
    category: "villa",
    image: "/room/room8.png",
    size: 120,
    capacity: 8,
    price: 605,
    currency: "GHS",
    highlight: "Ultimate Privacy",
    bestFor: ["Large Groups", "Family Retreat"],
    description:
      "Enjoy complete privacy in your own fully equipped home. Featuring multiple bedrooms, a full kitchen, and spacious living areas, this residence is ideal for group stays and extended visits.",
  },
];

function RoomCard({ name, description, image, size, capacity, price }) {
  return (
    <div className="group flex flex-col overflow-hidden rounded-lg  shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      <div className="relative overflow-hidden" style={{ aspectRatio: "4/3" }}>
        <img
          src={image}
          alt={name}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/40 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h3
          className="mb-2 text-xl text-stone-900"
          style={{ fontFamily: "Columbia-Serial" }}
        >
          {name}
        </h3>

        <p className="mb-6 line-clamp-2 text-sm leading-relaxed text-gray-600">
          {description}
        </p>

        <div className="flex items-center gap-6 text-sm text-stone-700">
          <div className="flex items-center gap-2">
            <Square className="h-4 w-4 text-yellow-700" strokeWidth={1.5} />
            <span>{size} m²</span>
          </div>
          <div className="flex items-center gap-2">
            <Users className="h-4 w-4 text-yellow-700" strokeWidth={1.5} />
            <span>Up to {capacity} Guests</span>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between border-t border-stone-100 px-6 py-4">
        <div className="flex flex-col">
          <span className="text-[10px] uppercase tracking-widest text-yellow-700">
            Starts from
          </span>
          <span className="text-xl md:text-2xl font-semibold text-stone-900">
            ${price}
          </span>
        </div>

        <Link
          to="/rooms-suites"
          className="group/btn flex items-center gap-2 rounded-full bg-white text-sm text-blue-800 transition-colors duration-200"
        >
          view details
          <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover/btn:translate-x-1" />
        </Link>
      </div>
    </div>
  );
}

export default function RoomsPage() {
  return (
    <>
      <div className="min-h-screen bg-white px-6 py-16">
        <div className="mx-auto max-w-[1600px]">
          <div className="text-center mb-12">
            <p
              className="text-yellow-700 text-xs uppercase tracking-widest mb-4"
              data-aos="fade-down"
              data-aos-duration="800"
            >
              Where Comfort Meets Luxury
            </p>

            <h2
              className="text-3xl md:text-4xl font-serif text-gray-900 mb-6 leading-tight"
              style={{ fontFamily: "Columbia-Serial" }}
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="100"
            >
              Elevate Your <span className="">Hospitality</span> Experience
            </h2>

            <p
              className="text-gray-600 text-sm md:text-base px-2 max-w-4xl mx-auto leading-relaxed"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="200"
            >
              Every detail has been thoughtfully considered so you can simply
              arrive and unwind.
            </p>
          </div>

          <div className="mb-24">
            <div className="flex items-end justify-between mb-12 border-gray-200 border-b pb-6">
              <div>
                <span
                  className="text-yellow-700 text-xs uppercase tracking-widest block mb-2"
                  data-aos="fade-left"
                  data-aos-duration="800"
                  data-aos-delay="100"
                >
                  Our Collection
                </span>
                <h3
                  className="font-headline text-xl md:text-3xl"
                  style={{ fontFamily: "Columbia-Serial" }}
                >
                  Exceptional Spaces
                </h3>
              </div>
              <div className="hidden sm:block text-right">
                <p className="text-muted-foreground text-sm max-w-xs">
                  Hand-curated environments designed for comfort, productivity,
                  and inspiration.
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {ROOMS.map((room) => (
              <RoomCard key={room.name} {...room} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
