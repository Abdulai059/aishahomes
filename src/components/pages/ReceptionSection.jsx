export default function ReceptionSection() {
    return (
        <section className="bg-white py-16">
            <div className="max-w-[1400px] mx-auto px-4">
                <div className="text-center mb-12  mx-auto" data-aos="fade-up">
                    <p className="text-yellow-700 text-xs uppercase tracking-widest mb-4">
                        Introducing Our Services & Facilities
                    </p>
                    <h2 className="text-3xl md:text-5xl font-serif mb-6 leading-tight"
                        style={{ fontFamily: "Columbia-Serial" }}>
                        State-of-the-art Amenities.
                    </h2>
                    <p className="text-gray-700 max-w-2xl px-2 md:text-base text-sm mx-auto leading-relaxed">State-of-the-art amenities include a dramatic double-story loft lounge, spectacular rooftop lounge, Technogym fitness center, media corner, and a gracious 24/7 resident services team.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2">
                    <div className="overflow-hidden transition-transform duration-500 ease-in-out " data-aos="fade-left">
                        <img
                            src="./Reception-2.jpg"
                            alt="Reception area"
                            className="w-full h-80 md:h-full object-cover"
                        />
                    </div>

                    <div className="bg-gray-100  p-8 md:p-22 flex flex-col justify-center" data-aos="fade-right">
                        <p className="text-yellow-700 text-xs uppercase tracking-widest mb-4">
                            wellcome Reception
                        </p>
                        <h3 className="text-3xl md:text-4xl font-serif mb-4"
                            style={{ fontFamily: "Columbia-Serial" }}>
                            Reception
                        </h3>
                        <p className="text-gray-700 md:text-base text-sm leading-relaxed">
                            From the moment you step into our reception, you will know that "you have arrived" This is why we are "Aisha Homes." From beautifully crafted glass feather-light installation to your first experience of our impeccably curated art from local artists, you will know that you have made the right choice to stay in Tamale.
                        </p>

                        <button className="mt-4 w-28 px-3 py-3 border rounded-full border-blue-900 boader-blue-900 bg-transparent text-sm  hover:bg-blue-900  hover:text-white text-black  rounded">
                            Details
                        </button>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 ">
                    <div className="bg-gray-100  p-8 md:p-22 flex flex-col justify-center order-2 md:order-1" data-aos="fade-right">
                        <p className="text-yellow-700 text-xs uppercase tracking-widest mb-4">
                            entertainment
                        </p>
                        <h3 className="text-3xl md:text-4xl font-serif mb-4"
                            style={{ fontFamily: "Columbia-Serial" }}>
                            Lounges
                        </h3>
                        <p className="text-gray-700 md:text-base text-sm leading-relaxed">
                            Either fine dining or buffet, the Lounge Bar offers the finest foods and dining experiences. The Restaurant boasts an impressive menu that caters for all tastes. Opened for breakfast, lunch and dinner.
                        </p>

                        <button className="mt-4 w-28 px-3 py-3 border rounded-full border-blue-900 boader-blue-900 bg-transparent text-sm  hover:bg-blue-900  hover:text-white text-black  rounded">
                            Details
                        </button>
                    </div>

                    <div className="overflow-hidden transition-transform duration-500 ease-in-out order-1 md:order-2" data-aos="fade-left">
                        <img
                            src="./Lobby-1.jpg"
                            alt="Lobby area"
                            className="w-full h-80 md:h-full object-cover"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}