export default function RestaurantSection() {
    return (
        <section className="bg-white py-16">
            <div className="max-w-8xl mx-auto px-4">
                <div className="text-center mb-12">
                    <p className="text-yellow-700 text-xs uppercase tracking-widest mb-4">
                        Fine Dining & Culinary Delights
                    </p>

                    <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif mb-4 leading-tight"
                        style={{ fontFamily: "Columbia-Serial" }}>
                        Aisha Restaurant/Railway
                    </h2>

                    <p className="text-gray-600 text-sm md:text-base px-2 max-w-4xl mx-auto leading-relaxed">
                        Savor exquisite flavors and enjoy an unforgettable dining experience in a <br />  refined and welcoming atmosphere.
                    </p>
                </div>

                <div className="relative">
                    <div className="absolute left-0 top-0 bottom-0 w-full md:w-1/3 bg-gray-100 -ml-4 md:ml-0"></div>

                    <div className="relative grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
                        <div className="bg-gray-100 p-8 md:py-30 flex flex-col items-center justify-center text-center min-h-[400px]">
                            <span className="flex flex-col items-center justify-center text-center">
                                <div className="mb-6">
                                    <img src="./mist-icon.png" alt="restaurant" />
                                </div>

                                <h3 className="text-md md:px-20 px-0 md:text-xl font-semibold mb-6">
                                    Savoury Plates. Great Pours. Even Better Company
                                </h3>

                                <p className="text-gray-700 leading-relaxed">
                                    Experience refined dining at Aisha Homes. From sunset cocktails at our rooftop lounge to carefully prepared signature dishes, every detail is crafted for elegance, comfort, and exceptional taste. Enjoy in-room dining anytime — luxury, uninterrupted.
                                </p>
                            </span>

                        </div>


                        <div className="overflow-hidden transition-transform duration-500 ease-in-out hover:scale-105">
                            <img
                                src="./Mist-Restaurant-5.jpg"
                                alt="Mist Restaurant interior"
                                className="w-full h-80 md:h-84 object-cover"
                            />
                        </div>

                        <div className="overflow-hidden hidden md:pr-10 md:flex transition-transform duration-500 ease-in-out hover:scale-105">
                            <img
                                src="./Interior5.webp"
                                alt="Cloud Terrace rooftop bar"
                                className="w-full h-80 md:h-84 object-cover"
                            />
                        </div>




                    </div>
                </div>
            </div>
        </section>
    );
}