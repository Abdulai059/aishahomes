export default function TopBar() {
    return (
        <div className="fixed top-0 left-0 w-full z-50 bg-blue-900 bg-opacity-40 md:flex hidden text-white text-xs py-2 px-4">
            <div className="max-w-7xl mx-auto w-full flex justify-between items-center">
                <div className="flex items-center gap-2 italic">
                    <span>📍</span>
                    <span>Old Airport Road, Tamale</span>
                </div>
                <div className="flex items-center gap-6 italic">
                    <span>TEL:0598948931/0203690506</span>
                    <span>reservations@aishahomesgh.com</span>
                </div>
            </div>
        </div>
    )
}
