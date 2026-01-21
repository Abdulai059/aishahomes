import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

export default function BookingAvailability({ guestOptions, onSubmit }) {
    const [checkIn, setCheckIn] = useState("2026-01-17");
    const [checkOut, setCheckOut] = useState("2026-01-18");
    const [guests, setGuests] = useState(guestOptions[0]);
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="max-w-6xl mx-auto px-4 pb-12">

            <div className="bg-white/20 backdrop-blur-md rounded-t-lg md:bg-white p-2 md:p-4 flex items-center justify-between"

            >
                <h2 className="text-white text-sm md:text-base md:text-black uppercase font-semibold tracking-wide">
                    Find Your Booking
                </h2>

                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="p-2 rounded transition-all md:hidden bg-white/10 hover:bg-white/20"
                    aria-label="Toggle booking form"
                >
                    {isOpen ? (
                        <ChevronUp className="w-6 h-6 text-white" />
                    ) : (
                        <ChevronDown className="w-6 h-6 text-white" />
                    )}
                </button>
            </div>



            <div
                className={`overflow-hidden transition-all duration-300 ${isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                    } md:max-h-full md:opacity-100`}
            >
                <div className="bg-white border border-gray-200 rounded-b-lg shadow-lg p-4">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                        <div>
                            <label className="text-gray-700 text-sm font-semibold mb-2 block">
                                Check-In Date
                            </label>
                            <input
                                type="date"
                                value={checkIn}
                                onChange={(e) => setCheckIn(e.target.value)}
                                className="w-full bg-gray-50 border border-gray-300 text-gray-900 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-200 focus:border-transparent"
                            />
                        </div>

                        <div>
                            <label className="text-gray-700 text-sm font-semibold mb-2 block">
                                Check-Out Date
                            </label>
                            <input
                                type="date"
                                value={checkOut}
                                onChange={(e) => setCheckOut(e.target.value)}
                                className="w-full bg-gray-50 border border-gray-300 text-gray-900 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-200 focus:border-transparent"
                            />
                        </div>

                        <div>
                            <label className="text-gray-700 text-sm font-semibold mb-2 block">
                                Number of Guests
                            </label>
                            <select
                                value={guests}
                                onChange={(e) => setGuests(e.target.value)}
                                className="w-full bg-gray-50 border border-gray-300 text-gray-900 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-200 focus:border-transparent"
                            >
                                {guestOptions.map((option) => (
                                    <option
                                        key={option}
                                        value={option}
                                        className="bg-white text-gray-900"
                                    >
                                        {option}
                                    </option>
                                ))}
                            </select>
                        </div>

                        <div className="flex items-end">
                            <button
                                onClick={() => onSubmit({ checkIn, checkOut, guests })}
                                className="w-full text-white px-6 py-3 transition rounded-lg font-semibold shadow-md hover:shadow-lg"
                            >
                                Check Availability
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
