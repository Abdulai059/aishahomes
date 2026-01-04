import React, { useState } from "react";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

export default function HotelExplore() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const cards = [
    {
      id: 1,
      tag: "Our focus",
      title:
        "A versatile platform offering a wide range of hotel options and services",
      location: "NR, Tamaale",
      image: "/Interior2.webp",
    },
    {
      id: 2,
      tag: "out door",
      title:
        "Explore the perfect destination for comfort, relaxation, and luxury. Where hospitality meets excellence in every stay",
      location: "NR, Tamaale",
      image: "Interior4.webp",
    },
    // {
    //   id: 3,
    //   tag: "Luxury",
    //   title: "Experience world-class amenities and exceptional service",
    //   location: "Miami, United States",
    //   image:
    //     "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=800&h=600&fit=crop",
    // },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <button className="mb-8 px-6 py-2 bg-transparent border border-gray-300 rounded-full text-sm font-medium text-gray-700 hover:bg-gray-100 transition-all inline-flex items-center gap-2">
            Let's know us
            <ArrowRight className="w-4 h-4" />
          </button>

          <h1 className="text-4xl md:text-4xl font-medium text-gray-900 leading-tight">
            Explore Stays, About Comfort, Your Stay,
            <br />
            Our Priority
          </h1>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-10 gap-6 items-start">
          {/* Left Column - About Us */}
          <div className="lg:col-span-4 bg-white rounded-3xl p-8 shadow-sm">
            <span className="inline-block px-4 py-1.5 bg-gray-100 rounded-full text-sm font-medium text-gray-700 mb-6">
              About Us
            </span>

            <h2 className="text-3xl font-medium text-gray-900 mb-8 leading-tight">
              Sunrise is a trusted platform connecting travelers with top hotels
              across the country
            </h2>

            <button className="inline-flex items-center gap-2 bg-black text-white px-6 py-3 rounded-full font-medium hover:bg-gray-800 transition-all">
              Learn More
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>

          {/* Middle Column - Main Card */}
          <div className="lg:col-span-3 relative group">
            <div className="relative h-[450px] rounded-3xl overflow-hidden shadow-lg">
              <img
                src={cards[0].image}
                alt="Hotel exterior"
                className="w-full h-full object-cover"
              />

              {/* Overlay Content */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-black/20 to-transparent">
                <div className="absolute top-6 left-6">
                  <span className="inline-block px-4 py-1.5 text-white border border-gray-300  rounded-full text-sm font-medium">
                    {cards[0].tag}
                  </span>
                </div>

                <div className="absolute bottom-6 left-6 right-6">
                  <p className="text-white text-lg tracking-tight mb-4 leading-relaxed">
                    {cards[0].title}
                  </p>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 bg-white/90 backdrop-blur-sm rounded-full px-4 py-2">
                      <svg
                        className="w-4 h-4 text-gray-700"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="text-sm font-medium text-gray-800">
                        {cards[0].location}
                      </span>
                    </div>

                    <button className="bg-white/90 backdrop-blur-sm p-3 rounded-full hover:bg-white transition-all">
                      <ArrowRight className="w-5 h-5 text-gray-800" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Card with Navigation */}

          <div className="lg:col-span-3 relative">
            <div className="relative h-[270px] rounded-3xl overflow-hidden shadow-lg">
              <img
                src={cards[currentSlide + 1]?.image || cards[1].image}
                alt="Hotel interior"
                className="w-full h-full object-cover"
              />

              {/* Overlay Content */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-black/20 to-transparent">
                <div className="absolute top-6 left-6">
                  <span className="inline-block px-4 py-1.5  border border-gray-300 text-white rounded-full text-sm font-medium ">
                    {cards[currentSlide + 1]?.tag || cards[1].tag}
                  </span>
                </div>

                <div className="absolute bottom-8 left-6 right-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2 bg-white/90 backdrop-blur-sm rounded-full px-4 py-2">
                      <svg
                        className="w-4 h-4 text-gray-700"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="text-sm font-medium text-gray-800">
                        {cards[currentSlide + 1]?.location || cards[1].location}
                      </span>
                    </div>

                    <button className="bg-white/90 backdrop-blur-sm p-3 rounded-full hover:bg-white transition-all">
                      <ArrowRight className="w-5 h-5 text-gray-800" />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="md:mt-10 text-base  leading-relaxed">
              Explore the perfect destination for comfort, relaxation, and
              luxury. Where hospitality meets excellence in every stay
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
