import { useState } from "react";
import { Square, Users, ArrowRight } from "lucide-react";

const ROOMS = [
  {
    name: "Standard Room",
    description:
      "A comfortable and stylish space designed for relaxation. Perfect for travelers looking for a cozy stay with modern amenities.",
    image:
      "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&q=80",
    size: 25,
    capacity: 2,
    price: 120,
  },
  {
    name: "Deluxe Room",
    description:
      "Enjoy extra space and refined comfort. Our Deluxe Rooms feature elegant interiors and thoughtful amenities for a relaxing stay.",
    image:
      "https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=800&q=80",
    size: 35,
    capacity: 2,
    price: 180,
  },
  {
    name: "Executive Room",
    description:
      "Designed for professionals and long-stay guests, this room blends comfort with functionality.",
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=800&q=80",
    size: 40,
    capacity: 2,
    price: 220,
  },
  {
    name: "Executive Suite",
    description:
      "A spacious suite offering premium comfort and a stylish living area, ideal for families or extended stays.",
    image:
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&q=80",
    size: 60,
    capacity: 3,
    price: 320,
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
          className="mb-2 text-2xl font-bold text-stone-900"
          style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
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
          <span className="text-[10px] font-semibold uppercase tracking-widest text-yellow-700">
            Starts from
          </span>
          <span className="text-xl font-bold text-stone-900">${price}</span>
        </div>

        <button className="group/btn flex items-center gap-2 rounded-full bg-blue-900 px-6 py-2 text-[10px] font-bold uppercase tracking-widest text-white transition-colors duration-200 hover:bg-blue-800">
          Book Now
          <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover/btn:translate-x-1" />
        </button>
      </div>
    </div>
  );
}

export default function RoomsPage() {
  return (
    <>
      <div className="min-h-screen bg-white px-6 py-16">
        <div className="mx-auto max-w-375">
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
              className="text-gray-600 text-sm md:text-lg px-2 max-w-4xl mx-auto leading-relaxed"
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
