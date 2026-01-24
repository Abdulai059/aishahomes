import { ComparisonTable } from "./ComparisonTable";
import { MobileComparisonCard } from "./MobileComparisonCard";

export function ComparisonSection({ rooms }) {
    return (
        <div className="max-w-7xl mx-auto my-16">
            <div className="text-center mb-8 md:mb-12" data-aos="fade-up">
                <h1 className="text-2xl md:text-4xl px-2 text-gray-900 mb-3 md:mb-4 leading-tight" style={{ fontFamily: "Columbia-Serial" }}>
                    Find The Room That Fits Your Stay
                </h1>
                <p className="text-gray-600 text-sm md:text-base px-4">
                    Not sure which room is right for you? Compare our options at a glance.
                </p>
            </div>

            <ComparisonTable rooms={rooms} />

            <div className="md:hidden grid gap-4 mb-8">
                {rooms.map((room, index) => (
                    <MobileComparisonCard key={index} room={room} index={index} />
                ))}
            </div>

            <div className="text-center mb-8 px-4" data-aos="fade-up">
                <p className="text-gray-600 text-sm md:text-sm max-w-4xl mx-auto leading-relaxed">
                    Whichever room or suite you choose, Aish Homes promises the same hallmark touches: luxurious rain showers, smart control systems, free high-speed WiFi, and 24-hour dining at your service.
                </p>
            </div>

            <div className="text-center" data-aos="zoom-in" data-aos-delay="100">
                <button className="bg-black text-white px-8 md:px-10 py-3 md:py-4 rounded-full font-semibold text-sm md:text-lg hover:bg-gray-800 transition-all hover:shadow-xl uppercase tracking-wide">
                    Check Availability
                </button>
            </div>
        </div>
    );
}
