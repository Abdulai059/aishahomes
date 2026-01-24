export function ComparisonTable({ rooms }) {
    return (
        <div className="hidden md:block overflow-x-auto mb-8" data-aos="fade-up" data-aos-delay="100">
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
                            <td className="px-14 py-5 bg-[#f0f0f0] text-gray-900 font-semibold text-sm md:text-sm border-r border-gray-200">
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
    );
}