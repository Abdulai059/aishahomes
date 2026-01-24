import React from 'react';

export default function Room() {
    const rooms = [
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
        <div className="min-h-screen w-full bg-white py-16 md:py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-8 md:mb-12">
                    <h1 className="text-2xl md:text-4xl px-2 text-gray-900 mb-3 md:mb-4 leading-tight" style={{ fontFamily: "Columbia-Serial" }}>
                        Find The Room That Fits Your Stay
                    </h1>
                    <p className="text-gray-600 text-sm md:text-base px-4">
                        Not sure which room is right for you? Compare our options at a glance.
                    </p>
                </div>

                <div className="hidden md:block overflow-x-auto mb-8">
                    <table className="w-full border-collapse">
                        <thead>
                            <tr className="bg-gray-900">
                                <th className="text-left text-white font-semibold px-6 py-4 text-sm md:text-sm border-r border-gray-700">
                                    Room Type
                                </th>
                                <th className="text-left text-white font-semibold px-6 py-4 text-sm md:text-sm border-r border-gray-700">
                                    Size
                                </th>
                                <th className="text-left text-white font-semibold px-6 py-4 text-sm md:text-sm border-r border-gray-700">
                                    Bed
                                </th>
                                <th className="text-left text-white font-semibold px-6 py-4 text-sm md:text-sm border-r border-gray-700">
                                    Lounge / Dining
                                </th>
                                <th className="text-left text-white font-semibold px-6 py-4 text-sm md:text-sm">
                                    Best For
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {rooms.map((room, index) => (
                                <tr
                                    key={index}
                                    className={`${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'} hover:bg-gray-100 transition-colors`}
                                >
                                    <td className="px-14 py-5 bg-[#f0f0f0]  text-gray-900 font-semibold text-sm md:text-sm border-r border-gray-200">
                                        {room.type}
                                    </td>
                                    <td className="px-10 py-5text-gray-900 text-xs md:text-sm border-r border-gray-200">
                                        {room.size}
                                    </td>
                                    <td className="px-10 py-5 text-gray-900 text-sm md:text-sm border-r border-gray-200">
                                        {room.bed}
                                    </td>
                                    <td className="px-10 py-5 text-gray-900 text-sm md:text-sm border-r border-gray-200">
                                        {room.lounge}
                                    </td>
                                    <td className="px-6 py-5 text-gray-900 text-sm md:text-sm">
                                        {room.bestFor}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <div className="md:hidden grid gap-4 mb-8">
                    {rooms.map((room, index) => (
                        <div
                            key={index}
                            className="bg-gray-50 border border-gray-200 rounded-sm shadow-sm overflow-hidden"
                        >

                            <div className="text-center bg-[#f0f0f0] py-4 border-b border-gray-300">
                                <div className="font-semibold text-gray-900 text-sm mb-1">
                                    Room Type
                                </div>
                                <div className="font-bold text-gray-900 text-base">
                                    {room.type}
                                </div>
                            </div>


                            <div className="p-5 space-y-4">
                                <div className="pb-4 border-b border-gray-200">
                                    <div className="font-bold text-gray-900 text-sm mb-2">Size</div>
                                    <div className="text-gray-700 text-sm">{room.size}</div>
                                </div>

                                <div className="pb-4 border-b border-gray-200">
                                    <div className="font-bold text-gray-900 text-sm mb-2">Bed</div>
                                    <div className="text-gray-700 text-sm">{room.bed}</div>
                                </div>

                                <div className="pb-4 border-b border-gray-200">
                                    <div className="font-bold text-gray-900 text-sm mb-2">
                                        Lounge / Dining
                                    </div>
                                    <div className="text-gray-700 text-sm">{room.lounge}</div>
                                </div>

                                <div>
                                    <div className="font-bold text-gray-900 text-sm mb-2">Best For</div>
                                    <div className="text-gray-700 text-sm leading-relaxed">
                                        {room.bestFor}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>


                <div className="text-center mb-8 px-4">
                    <p className="text-gray-600 text-sm md:text-sm max-w-4xl mx-auto leading-relaxed">
                        Whichever room or suite you choose, Aish Homes promises the same hallmark touches: luxurious rain showers, smart control systems, free high-speed WiFi, and 24-hour dining at your service.
                    </p>
                </div>

                <div className="text-center">
                    <button className="bg-black text-white px-8 md:px-10 py-3 md:py-4 rounded-full font-semibold text-sm md:text-lg hover:bg-gray-800 transition-all hover:shadow-xl uppercase tracking-wide">
                        Check Availability
                    </button>
                </div>
            </div>
        </div>
    );
}