
export default function HotelExplore() {

  return (
    <section className="bg-gray-100 py-20">
      <div className="max-w-[1500px] mx-auto px-4">

        <div className="text-center mb-12" data-aos="fade-up">
          <h2 className="text-3xl md:text-5xl font-serif text-gray-900 mb-4">
            <span className="relative inline-block"
              style={{ fontFamily: "Columbia-Serial" }}>
              WELCOME TO AISHA HOME
              {/* <span className="absolute -bottom-2 left-1/4 right-0 h-1 bg-blue-600"></span> */}
            </span>
          </h2>
        </div>


        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          <div className="relative">


            <div className="grid grid-cols-2 gap-4">

              <div className="col-span-2" data-aos="fade-left">
                <img
                  src="./bg-hero.webp"
                  alt="Hotel Reception"
                  className="w-full h-64 md:w-[600px] md:h-90 object-cover rounded-lg shadow-lg"
                />
              </div>
              <div className="col-span-2 z-1 -mt-20 md:ml-[50%] ml-auto w-3/5 md:w-90" data-aos="fade-right">
                <img
                  src="./Interior4.webp"
                  alt="Hotel Rooftop"
                  className="w-full h-40  md:h-56 object-cover rounded-lg shadow-lg"
                />
              </div>
            </div>

          </div>


          <div className="px-2" data-aos="fade-up">
            <p className="text-yellow-700 text-xs tracking-widest mb-4">
              DISCOVER WHERE TO STAY IN ACCRA &TAMALE
            </p>
            <h3 className="text-2xl md:text-5xl font-serif text-gray-900 mb-6"
              style={{ fontFamily: "Columbia-Serial" }}>
              Luxury hotel in Tamale
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed mb-8">
              Aisha presents a fresh perspective on luxury, beautiful rooms and a
              comprehensive range of amenities. Located in Accra & Tamale, Ghana, it delivers
              a redefined level of service.
            </p>
            <button className="border-2 rounded border-gray-900 text-gray-900 px-8 py-3 text-white text-xs md:text-base hover:bg-gray-900 hover:text-white transition-all duration-300">
              Take A Tour
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
