import Button from "../ui/button";

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px- text-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="/bg-hero.webp"
          alt="Luxury Resort Background"
          className="object-cover w-full h-full"
        />
        <div className="absolute inset-0 bg-black/40 backdrop-blur-[1px]" />
      </div>

      <div className="max-w-4xl space-y-8 z-10 mt-20 md:mt-0 text-white">
        <h1 className="text-4xl md:text-7xl font-semibold font-serif tracking-tight leading-[1.05] animate-in fade-in slide-in-from-bottom-8  duration-1000">
          Aisha Homes <br /> Luxury Apartment
        </h1>
        <p className="max-w-2xl mx-auto text-lg md:text-xl text-white leading-relaxed animate-in px-4 fade-in slide-in-from-bottom-8 delay-300 duration-1000">
          Relax and unwind in our service apartment, your ideal base for
          exploring Northern Ghana.
        </p>

        <div className="flex flex-row sm:flex-row items-center justify-center gap-6 pt-8 animate-in fade-in slide-in-from-bottom-8 delay-500 duration-1000">
          <Button size="xl" className="bg-white text-black hover:bg-white/90">
            Book Your Stay
          </Button>

          <Button
            size="xl"
            variant="outline"
            className="text-white backdrop-blur-md border-white"
          >
            Explore Suites
          </Button>
        </div>
      </div>

      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <div className="w-[1px] h-16 bg-gradient-to-b from-white to-transparent" />
      </div>
    </section>
  );
}
