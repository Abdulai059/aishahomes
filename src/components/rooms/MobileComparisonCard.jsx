export function MobileComparisonCard({ room, index }) {
    return (
        <div
            className="bg-gray-50 border border-gray-200 rounded-sm shadow-sm overflow-hidden"
            data-aos="fade-up"
            data-aos-delay={index * 100}
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
    );
}