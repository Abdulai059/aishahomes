export default function CtaSection() {
    return (
        <section
            className="relative md:min-h-[450px] min-h-[400px] py-24 bg-cover bg-center"
            style={{
                backgroundImage: "url('/Walkthrough-video.jpg')",
            }}
        >
            <div className="absolute inset-0 bg-black/60"></div>

            <div className="relative container mx-auto px-6 flex flex-col justify-center items-center text-center text-white h-full space-y-6 animate-fadeInUp">
                <p
                    className="md:text-5xl text-xl text-gray-200 max-w-5xl"
                    style={{ fontFamily: "Columbia-Serial" }}
                >
                    Refined living. Calm and comfort await. <br />Welcome to Aisha Homes.
                </p>
                <button className="bg-white text-gray-900 px-12 py-4 uppercase rounded-full text-sm md:text-base font-semibold border border-transparent hover:bg-transparent hover:text-white hover:border-white transition-all duration-300">
                    Book Your Stay With Us
                </button>
            </div>
        </section>
    )
}
