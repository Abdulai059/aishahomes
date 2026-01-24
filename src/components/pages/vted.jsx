import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Users, Bed, Maximize2, Wifi, Tv, Coffee, Droplets, Lock, Plug, Settings, UtensilsCrossed } from 'lucide-react';

const DukeRoomBooking = () => {
    const [currentImage, setCurrentImage] = useState(0);

    const images = [
        "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&q=80",
        "https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=800&q=80",
        "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=800&q=80"
    ];

    const amenities = [
        { icon: Users, label: '2 Adults' },
        { icon: UtensilsCrossed, label: '24/7 In-Room Dining' },
        { icon: Bed, label: '1 King Bed' },
        { icon: Droplets, label: 'Rain Shower' },
        { icon: Maximize2, label: '36sm' },
        { icon: Users, label: 'Bathrobes & Slippers' },
        { icon: Wifi, label: 'Complimentary WiFi' },
        { icon: Lock, label: 'Safe' },
        { icon: Tv, label: '50 inch Smart TV' },
        { icon: Plug, label: 'USB Outlets' },
        { icon: Coffee, label: 'Mini Bar/Fridge' },
        { icon: Settings, label: 'Smart Room Control System' }
    ];

    const nextImage = () => {
        setCurrentImage((prev) => (prev + 1) % images.length);
    };

    const prevImage = () => {
        setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
    };

    return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
            <div className="max-w-6xl w-full bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="grid md:grid-cols-2 gap-0">
                    {/* Image Gallery */}
                    <div className="relative bg-gray-900 aspect-[4/3] md:aspect-auto">
                        <img
                            src={images[currentImage]}
                            alt="Duke Room"
                            className="w-full h-full object-cover"
                        />
                        <button
                            onClick={prevImage}
                            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-2 rounded-full shadow-lg transition"
                        >
                            <ChevronLeft className="w-6 h-6" />
                        </button>
                        <button
                            onClick={nextImage}
                            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-2 rounded-full shadow-lg transition"
                        >
                            <ChevronRight className="w-6 h-6" />
                        </button>
                        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                            {images.map((_, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => setCurrentImage(idx)}
                                    className={`w-2 h-2 rounded-full transition ${idx === currentImage ? 'bg-white w-8' : 'bg-white/50'
                                        }`}
                                />
                            ))}
                        </div>
                    </div>

                    {/* Content */}
                    <div className="p-8 md:p-12">
                        <h1 className="text-4xl font-light mb-6">Duke Room (King)</h1>

                        <p className="text-gray-700 mb-6 leading-relaxed">
                            Walk in, drop your bags, and breathe. The extra-length king bed gives you room to stretch. The luxurious walk-in rain shower resets your day in minutes. And if you're not ready to unplug, the smart TV and USB outlets keep everything charged and running.
                        </p>

                        <div className="mb-6">
                            <h2 className="text-lg font-medium mb-4">What's inside:</h2>
                            <ol className="text-gray-700 space-y-2 text-sm">
                                <li>1. Extra-length King bed for 2 adults</li>
                                <li>2. 36 sqm of space</li>
                                <li>3. Walk-in rain shower, Bathrobes & slippers</li>
                                <li>4. 24/7 in-room dining, Minibar/fridge</li>
                                <li>5. Complimentary Wi-Fi, USB outlets, 50-inch Smart TV</li>
                                <li>6. In-room safe & Smart room control system</li>
                            </ol>
                        </div>

                        <div className="grid grid-cols-2 gap-4 mb-8">
                            {amenities.map((amenity, idx) => {
                                const Icon = amenity.icon;
                                return (
                                    <div key={idx} className="flex items-center gap-3">
                                        <Icon className="w-5 h-5 text-gray-600 flex-shrink-0" />
                                        <span className="text-sm text-gray-700">{amenity.label}</span>
                                    </div>
                                );
                            })}
                        </div>

                        <button className="w-full bg-black text-white py-4 rounded-lg hover:bg-gray-800 transition font-medium text-lg">
                            Book Now
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DukeRoomBooking;