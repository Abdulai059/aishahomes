import React, { useState } from 'react';

const RoomBookingApp = () => {
   

    return (
        <div className="min-h-screen w-full bg-white py-16 md:py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto space-y-0">
                {rooms.map((room, roomIndex) => (
                    <div key={roomIndex} className="grid lg:grid-cols-2 min-h-screen">
                        <div className="relative bg-gray-900">
                            <img
                                src={images[getCurrentImageIndex(roomIndex)]}
                                alt={room.type}
                                className="w-full h-full object-cover"
                            />
                            <button
                                onClick={() => prevImage(roomIndex)}
                                className="absolute left-6 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white w-12 h-12 rounded-full shadow-lg transition flex items-center justify-center"
                            >
                                <ChevronLeft className="w-6 h-6" />
                            </button>
                            <button
                                onClick={() => nextImage(roomIndex)}
                                className="absolute right-6 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white w-12 h-12 rounded-full shadow-lg transition flex items-center justify-center"
                            >
                                <ChevronRight className="w-6 h-6" />
                            </button>
                        </div>

                        <div className="bg-gray-200 p-12 lg:p-16 flex flex-col justify-center">
                            <h1 className="text-5xl font-light mb-6 tracking-tight">{room.type}</h1>

                            <p className="text-gray-800 mb-8 leading-relaxed text-lg">
                                {room.description}
                            </p>

                            <div className="mb-8">
                                <h2 className="text-base font-semibold mb-4">What's inside:</h2>
                                <div className="space-y-1 text-gray-800">
                                    {room.features.map((feature, idx) => (
                                        <div key={idx} className="text-sm">{idx + 1}. {feature}</div>
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

                            <button className="bg-black text-white py-4 px-8 rounded-md hover:bg-gray-900 transition font-medium text-base w-64">
                                Book Now
                            </button>
                        </div>
                    </div>
                ))}
            </div>


        </div>
    );
};

export default RoomBookingApp;