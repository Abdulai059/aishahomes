

export default function MeetingSection() {


    return (
        <section className="bg-white py-8">
            <div className="max-w-7xl mx-auto px-4">
                <div className="grid md:grid-cols-2 gap-8 md:gap-12">
                    <div className="flex flex-col mb-4 md:mb-0 md: text-start justify-center">
                        <h2
                            className="text-3xl px-2 md:text-4xl font-serif mb-6 leading-tight"
                            style={{ fontFamily: "Columbia-Serial" }}
                            data-aos="fade-right"
                            data-aos-duration="1000"
                        >
                            A Good Room Makes For A Better Meeting
                        </h2>

                        <p
                            className="text-gray-700 text-sm md:text-base mb-8 leading-relaxed"
                            data-aos="fade-right"
                            data-aos-duration="1000"
                            data-aos-delay="100"
                        >
                            From quick board meetings to full-scale events, our four fully-equipped meeting rooms are designed to keep things effortless.
                        </p>

                        <div
                            data-aos="fade-right"
                            data-aos-duration="800"
                            data-aos-delay="200"
                        >
                            <button className="bg-black text-white px-8 py-4 rounded hover:bg-gray-800 transition-colors duration-300 font-semibold text-xs md:text-sm uppercase tracking-wide">
                                EXPLORE OUR MEETING SPACES
                            </button>
                        </div>
                    </div>

                    <div className="relative grid grid-cols-2 gap-4">
                        <div
                            className="col-span-1 mt-12 md:mt-24 overflow-hidden rounded-3xl transition-transform duration-500 ease-in-out hover:scale-105"
                            data-aos="fade-up"
                            data-aos-duration="1200"
                            data-aos-delay="100"
                        >
                            <img
                                src="./Lobby-1.jpg"
                                alt="Modern hotel lobby"
                                className="w-full h-48 md:h-80 object-cover rounded-3xl"
                            />
                        </div>

                        <div
                            className="col-span-1 -mt-4 md:-mt-8 overflow-hidden rounded-3xl transition-transform duration-500 ease-in-out hover:scale-105"
                            data-aos="fade-down"
                            data-aos-duration="1200"
                            data-aos-delay="300"
                        >
                            <img
                                src="./Meeting-Rooms.jpg"
                                alt="Conference room"
                                className="w-full h-48 md:h-64 object-cover rounded-3xl"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}