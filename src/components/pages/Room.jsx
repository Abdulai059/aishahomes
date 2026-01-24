
import { useState } from 'react';

import { Users, Bed, Maximize2, Wifi, Tv, Coffee, Droplets, Lock, Plug, Settings, UtensilsCrossed, Home, Sofa, ChevronRight } from 'lucide-react';
import { RoomCard } from '../rooms/RoomCard';
import { ComparisonSection } from '../rooms/ComparisonSection';

export default function Room() {
    const [currentImages, setCurrentImages] = useState({});

    const rooms = [
        {
            type: 'Standard Room',
            size: '30 sqm',
            bed: 'Double',
            lounge: '–',
            bestFor: 'Ideal for business trips, solo travelers, and short stays',
            capacity: '1-2 Adults',
            description: 'Walk in, drop your bags, and breathe. The comfortable double bed gives you a perfect retreat. The modern bathroom resets your day in minutes. And if you\'re not ready to unplug, the smart TV and USB outlets keep everything charged and running.',
            amenities: [
                { icon: Users, label: '1-2 Adults' },
                { icon: UtensilsCrossed, label: '24/7 In-Room Dining' },
                { icon: Bed, label: '1 Double Bed' },
                { icon: Droplets, label: 'Rain Shower' },
                { icon: Maximize2, label: '30 sqm' },
                { icon: Users, label: 'Bathrobes & Slippers' },
                { icon: Wifi, label: 'Complimentary WiFi' },
                { icon: Lock, label: 'Safe' },
                { icon: Tv, label: '43 inch Smart TV' },
                { icon: Plug, label: 'USB Outlets' },
                { icon: Coffee, label: 'Mini Bar/Fridge' },
                { icon: Settings, label: 'Smart Room Control' }
            ],
            features: [
                'Comfortable double bed for 1-2 adults',
                '30 sqm of efficient space',
                'Rain shower with premium toiletries',
                '24/7 in-room dining, Minibar/fridge',
                'Complimentary Wi-Fi, USB outlets, Smart TV',
                'In-room safe & Smart room control system'
            ]
        },
        {
            type: 'Deluxe Master Room',
            size: '55 sqm',
            bed: 'King',
            lounge: '–',
            bestFor: 'Perfect for business travelers or couples needing extra comfort',
            capacity: '2 Adults',
            description: 'Experience elevated luxury in our spacious master room. The extra-length king bed provides ultimate comfort while the expansive layout gives you room to work and relax. Premium amenities and thoughtful design create the perfect environment for extended stays.',
            amenities: [
                { icon: Users, label: '2 Adults' },
                { icon: UtensilsCrossed, label: '24/7 In-Room Dining' },
                { icon: Bed, label: '1 King Bed' },
                { icon: Droplets, label: 'Luxury Rain Shower' },
                { icon: Maximize2, label: '55 sqm' },
                { icon: Users, label: 'Premium Bathrobes' },
                { icon: Wifi, label: 'High-Speed WiFi' },
                { icon: Lock, label: 'Electronic Safe' },
                { icon: Tv, label: '55 inch Smart TV' },
                { icon: Plug, label: 'Multiple USB Outlets' },
                { icon: Coffee, label: 'Premium Mini Bar' },
                { icon: Settings, label: 'Smart Room Control' }
            ],
            features: [
                'Extra-length King bed with premium linens',
                '55 sqm of luxurious space',
                'Walk-in rain shower with separate bathtub',
                'Work desk and seating area',
                'Premium Wi-Fi, multiple charging stations',
                'Enhanced entertainment and control systems'
            ]
        },
        {
            type: 'Down Floor Apartment',
            size: '70 sqm',
            bed: 'King',
            lounge: 'Yes',
            bestFor: 'Great for small families or guests who prefer easy access',
            capacity: '2-4 Adults',
            description: 'Enjoy apartment-style living with convenient ground-floor access. The separate lounge area provides space for relaxation while the king bedroom offers privacy. Perfect for families or those seeking a home-away-from-home experience with easy accessibility.',
            amenities: [
                { icon: Users, label: '2-4 Adults' },
                { icon: UtensilsCrossed, label: '24/7 In-Room Dining' },
                { icon: Bed, label: '1 King Bed' },
                { icon: Sofa, label: 'Separate Lounge' },
                { icon: Droplets, label: 'Rain Shower' },
                { icon: Maximize2, label: '70 sqm' },
                { icon: Wifi, label: 'Premium WiFi' },
                { icon: Lock, label: 'Electronic Safe' },
                { icon: Tv, label: '2 Smart TVs' },
                { icon: Plug, label: 'USB Outlets' },
                { icon: Coffee, label: 'Full Mini Bar' },
                { icon: Settings, label: 'Smart Control System' }
            ],
            features: [
                'King bedroom with separate lounge area',
                '70 sqm of apartment-style living',
                'Ground floor for easy access',
                'Full kitchenette and dining space',
                'Multiple entertainment zones',
                'Enhanced privacy and comfort features'
            ]
        },
        {
            type: 'Upper Floor Apartment',
            size: '120 sqm',
            bed: 'King',
            lounge: 'Yes',
            bestFor: 'Well suited for families who want space, privacy, and great views',
            capacity: '4-6 Adults',
            description: 'Indulge in spacious elegance with breathtaking views. This expansive apartment features a luxurious king bedroom, generous living area, and panoramic windows. The elevated location ensures tranquility while premium amenities deliver an unforgettable stay for families.',
            amenities: [
                { icon: Users, label: '4-6 Adults' },
                { icon: UtensilsCrossed, label: '24/7 In-Room Dining' },
                { icon: Bed, label: '1 King + Sofa Bed' },
                { icon: Sofa, label: 'Spacious Lounge' },
                { icon: Droplets, label: 'Rain Shower & Tub' },
                { icon: Maximize2, label: '120 sqm' },
                { icon: Wifi, label: 'Ultra-Fast WiFi' },
                { icon: Lock, label: 'Electronic Safe' },
                { icon: Tv, label: 'Multiple Smart TVs' },
                { icon: Plug, label: 'USB Outlets' },
                { icon: Coffee, label: 'Premium Mini Bar' },
                { icon: Settings, label: 'Smart Home System' }
            ],
            features: [
                'King bedroom plus convertible sofa bed',
                '120 sqm with panoramic views',
                'Separate living and dining areas',
                'Full kitchen with premium appliances',
                'Multiple bathrooms for convenience',
                'Premium entertainment throughout'
            ]
        },
        {
            type: 'Full Home',
            size: '120 sqm',
            bed: 'King',
            lounge: 'Yes',
            bestFor: 'Best choice for large families or group stays seeking full privacy',
            capacity: '6-8 Adults',
            description: 'Your private sanctuary awaits. This entire home offers complete independence with multiple bedrooms, full kitchen, and spacious living areas. Perfect for extended stays, family gatherings, or groups seeking the ultimate in privacy and comfort with all the amenities of home.',
            amenities: [
                { icon: Home, label: 'Entire Home' },
                { icon: Users, label: '6-8 Adults' },
                { icon: Bed, label: 'Multiple Bedrooms' },
                { icon: Sofa, label: 'Full Living Room' },
                { icon: UtensilsCrossed, label: 'Full Kitchen' },
                { icon: Maximize2, label: '120 sqm' },
                { icon: Wifi, label: 'Whole-Home WiFi' },
                { icon: Lock, label: 'Private Entry' },
                { icon: Tv, label: 'Smart TVs' },
                { icon: Plug, label: 'USB Outlets' },
                { icon: Coffee, label: 'Full Bar & Kitchen' },
                { icon: Settings, label: 'Smart Home System' }
            ],
            features: [
                'Multiple king and queen bedrooms',
                '120 sqm of complete privacy',
                'Full kitchen with dining area',
                'Dedicated living and entertainment spaces',
                'Multiple full bathrooms',
                'Private entrance and complete independence'
            ]
        }
    ];

    const images = [
        "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&q=80",
        "https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=800&q=80",
        "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=800&q=80"
    ];

    const getCurrentImageIndex = (roomIndex) => {
        return currentImages[roomIndex] || 0;
    };

    const setImageIndex = (roomIndex, imageIndex) => {
        setCurrentImages(prev => ({
            ...prev,
            [roomIndex]: imageIndex
        }));
    };

    const nextImage = (roomIndex) => {
        const current = getCurrentImageIndex(roomIndex);
        setImageIndex(roomIndex, (current + 1) % images.length);
    };

    const prevImage = (roomIndex) => {
        const current = getCurrentImageIndex(roomIndex);
        setImageIndex(roomIndex, (current - 1 + images.length) % images.length);
    };

    const roomsdetails = [
        {
            type: 'Standard Room',
            size: '30 sqm',
            bed: 'Double',
            lounge: '–',
            bestFor: 'Ideal for business trips, solo travelers, and short stays'
        },
        {
            type: 'Deluxe Master Room',
            size: '55 sqm',
            bed: 'King',
            lounge: '–',
            bestFor: 'Perfect for business travelers or couples needing extra comfort'
        },
        {
            type: 'Down Floor Apartment',
            size: '70 sqm',
            bed: 'King',
            lounge: 'Yes',
            bestFor: 'Great for small families or guests who prefer easy access'
        },
        {
            type: 'Upper Floor Apartment',
            size: '120 sqm',
            bed: 'King',
            lounge: 'Yes',
            bestFor: 'Well suited for families who want space, privacy, and great views'
        },
        {
            type: 'Full Home',
            size: '120 sqm',
            bed: 'King',
            lounge: 'Yes',
            bestFor: 'Best choice for large families or group stays seeking full privacy'
        }
    ];

    return (
        <div className="min-h-screen w-full bg-white">
            <section
                className="relative text-white py-16 md:py-24 bg-cover bg-center mb-16"
                style={{ backgroundImage: "url('/Walkthrough-video.jpg')" }}
            >
                <div className="absolute inset-0 bg-black/60"></div>

                <div className="relative max-w-4xl mx-auto px-4 sm:px-6 text-center">
                    <div className="flex items-center justify-center gap-2 mb-6">
                        <span className="text-sm text-gray-100">HOME</span>
                        <span className="text-gray-100"><ChevronRight size={16} /></span>
                        <span className="text-sm text-yellow-500 font-medium tracking-wider">ROOMS</span>
                    </div>

                    <h1
                        className="text-3xl md:text-5xl font-semibold mb-6"
                        style={{ fontFamily: "Columbia-Serial" }}
                    >
                        Luxurious Rooms
                    </h1>

                    <p className="text-gray-300 md:text-base text-sm max-w-3xl mx-auto">
                        Explore our luxurious rooms, each designed with comfort and elegance in mind.
                        Enjoy modern amenities, cozy interiors, and breathtaking views for a perfect stay.
                    </p>
                </div>
            </section>

            <div className="max-w-9xl mx-auto py-16 md:py-12 px-4 sm:px-6 lg:px-8">
                <div className='space-y-24'>
                    {rooms.map((room, roomIndex) => (
                        <RoomCard
                            key={roomIndex}
                            room={room}
                            images={images}
                            currentImageIndex={getCurrentImageIndex(roomIndex)}
                            onPrevImage={() => prevImage(roomIndex)}
                            onNextImage={() => nextImage(roomIndex)}
                        />
                    ))}
                </div>

                <ComparisonSection rooms={roomsdetails} />
            </div>
        </div>
    );
}