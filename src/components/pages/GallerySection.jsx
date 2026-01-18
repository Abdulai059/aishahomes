import { useState, useEffect } from "react";

export default function GallerySection() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const images = [
        { src: "./Interior2.webp", alt: "Luxury bathroom" },
        { src: "./Interior5.webp", alt: "Hotel bar" },
        { src: "./bg-hero.webp", alt: "Restaurant dining" },
        { src: "./Interior2.webp", alt: "Luxury bathroom" },
        { src: "./Interior5.webp", alt: "Hotel bar" },
        { src: "./bg-hero.webp", alt: "Restaurant dining" },
    ];

    const getVisibleCount = () => {
        if (typeof window === 'undefined') return 3;
        if (window.innerWidth < 768) return 1;
        return 3;
    };

    const [visibleCount, setVisibleCount] = useState(getVisibleCount());
    const maxIndex = images.length - visibleCount;

    useEffect(() => {
        const handleResize = () => {
            const newCount = getVisibleCount();
            setVisibleCount(newCount);
            setCurrentIndex(0);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
    };

    const gap = 24;

    return (
        <section className="bg-white py-16">
            <div className="max-w-[1800px] mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-6xl mb-6 leading-tight"
                        style={{ fontFamily: "Columbia-Serial" }}>
                        Take A Look Inside The Aiash Homes
                    </h2>
                    <p className="text-gray-700 text-base md:text-lg max-w-4xl mx-auto leading-relaxed">
                        From breathtaking rooftop sunsets to aisha-inspired suites, every corner of The Aisha Homes is designed to delight the senses. Explore our gallery for a glimpse into the 5-star experience that awaits you.
                    </p>
                </div>

                <div className="relative mb-8">
                    <div className="overflow-hidden">
                        <div
                            className="flex transition-transform duration-700 ease-in-out"
                            style={{
                                gap: `${gap}px`,
                                transform: `translateX(calc(-${currentIndex * (100 / visibleCount)}% - ${currentIndex * gap}px))`
                            }}
                        >
                            {images.map((image, index) => (
                                <div
                                    key={index}
                                    className="flex-shrink-0 overflow-hidden rounded-3xl transition-transform duration-500 ease-in-out hover:scale-105"
                                    style={{
                                        width: `calc(${100 / visibleCount}% - ${(gap * (visibleCount - 1)) / visibleCount}px)`
                                    }}
                                >
                                    <img
                                        src={image.src}
                                        alt={image.alt}
                                        className="w-full h-64 md:h-80 object-cover"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>

                    <button
                        onClick={prevSlide}
                        className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-3 rounded-full hover:bg-black/70 transition z-10"
                        aria-label="Previous slide"
                    >
                        &#10094;
                    </button>

                    <button
                        onClick={nextSlide}
                        className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-3 rounded-full hover:bg-black/70 transition z-10"
                        aria-label="Next slide"
                    >
                        &#10095;
                    </button>
                </div>

                <div className="flex justify-center">
                    <button className="bg-black text-white px-10 py-4 rounded-full hover:bg-gray-800 transition-colors duration-300 font-semibold text-sm md:text-sm uppercase tracking-wide">
                        Book Your Stay With Us
                    </button>
                </div>
            </div>
        </section>
    );
}