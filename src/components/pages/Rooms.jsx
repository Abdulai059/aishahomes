import { useNavigate } from 'react-router';
import { useState, useEffect, useCallback } from "react";


export default function Rooms() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isHovered, setIsHovered] = useState(false);
    const navigate = useNavigate()

    const handleBooking = () => {
        navigate("/rooms-suites");
    };

    const cardData = [
        { src: "./bg-hero.webp", label: "Conference room" },
        { src: "./Interior5.webp", label: "Hotel lobby" },
        { src: "./Interior2.webp", label: "Luxury room" },
        { src: "./bg-hero.webp", label: "Conference room" },
        { src: "./Interior5.webp", label: "Hotel lobby" },
        { src: "./Interior2.webp", label: "Luxury room" },
        { src: "./bg-hero.webp", label: "Conference room" },
        { src: "./Interior5.webp", label: "Hotel lobby" },
        { src: "./Interior2.webp", label: "Luxury room" },
        { src: "./bg-hero.webp", label: "Conference room" },
    ];

    const getVisibleCount = () => {
        if (typeof window === 'undefined') return 3;
        if (window.innerWidth < 768) return 1;
        if (window.innerWidth < 1024) return 2;
        return 3;
    };

    const [visibleCount, setVisibleCount] = useState(getVisibleCount());
    const maxIndex = cardData.length - visibleCount;

    useEffect(() => {
        const handleResize = () => {
            const newCount = getVisibleCount();
            setVisibleCount(newCount);
            setCurrentIndex(0);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const nextSlide = useCallback(() => {
        setCurrentIndex((prev) => {
            if (prev >= maxIndex) return 0;
            return prev + 1;
        });
    }, [maxIndex]);

    const prevSlide = useCallback(() => {
        setCurrentIndex((prev) => {
            if (prev <= 0) return maxIndex;
            return prev - 1;
        });
    }, [maxIndex]);

    useEffect(() => {
        if (isHovered) return;

        const interval = setInterval(nextSlide, 4000);
        return () => clearInterval(interval);
    }, [nextSlide, isHovered]);

    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'ArrowLeft') prevSlide();
            if (e.key === 'ArrowRight') nextSlide();
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [nextSlide, prevSlide]);

    const totalDots = maxIndex + 1;
    const gap = 16;

    return (
        <section className="bg-white py-10">
            <div className="max-w-[1500px] mx-auto px-4">
                <div className="text-center mb-8">
                    <p
                        className="text-yellow-700 text-xs uppercase tracking-widest mb-4"
                        data-aos="fade-down"
                        data-aos-duration="800"
                    >
                        Where Comfort Meets Luxury
                    </p>

                    <h2
                        className="text-3xl md:text-5xl font-serif text-gray-900 mb-6 leading-tight"
                        style={{ fontFamily: "Columbia-Serial" }}
                        data-aos="fade-up"
                        data-aos-duration="1000"
                        data-aos-delay="100"
                    >
                        You Deserve Rooms & Suites For Your<br />Great Taste
                    </h2>

                    <p
                        className="text-gray-600 text-sm md:text-lg px-2 max-w-4xl mx-auto leading-relaxed"
                        data-aos="fade-up"
                        data-aos-duration="1000"
                        data-aos-delay="200"
                    >
                        Every detail has been thoughtfully considered so you can simply arrive and unwind.
                    </p>
                </div>

                <div
                    className="relative max-w-[1400px] mx-auto overflow-hidden"
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                    role="region"
                    aria-label="Room gallery carousel"
                    data-aos="zoom-in"
                    data-aos-duration="1200"
                    data-aos-delay="300"
                >
                    <div
                        className="flex transition-transform duration-700 ease-in-out"
                        style={{
                            gap: `${gap}px`,
                            transform: `translateX(calc(-${currentIndex * (100 / visibleCount)}% - ${currentIndex * gap}px))`
                        }}
                    >
                        {cardData.map((card, index) => (
                            <div
                                key={`${card.label}-${index}`}
                                className="flex-shrink-0 h-64 md:h-80 relative group"
                                style={{
                                    width: `calc(${100 / visibleCount}% - ${(gap * (visibleCount - 1)) / visibleCount}px)`
                                }}
                            >
                                <img
                                    src={card.src}
                                    alt={card.label}
                                    className="w-full h-full object-cover rounded-lg transition-transform duration-300 group-hover:scale-105"
                                    loading={index < visibleCount ? "eager" : "lazy"}
                                />
                                <div className="absolute bottom-0 left-0 right-0 rounded-b-lg h-16 bg-black/40 flex items-center justify-center">
                                    <p className="text-white font-semibold">{card.label}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <button
                        onClick={prevSlide}
                        className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition z-10"
                        aria-label="Previous slide"
                    >
                        &#10094;
                    </button>

                    <button
                        onClick={nextSlide}
                        className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition z-10"
                        aria-label="Next slide"
                    >
                        &#10095;
                    </button>
                </div>

                <div
                    className="flex justify-center gap-2 mt-6"
                    role="tablist"
                    aria-label="Carousel pagination"

                >
                    {Array.from({ length: totalDots }).map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentIndex(index)}
                            className={`h-2 rounded-full transition-all duration-300 ${index === currentIndex ? "w-6 bg-gray-900" : "w-2 bg-gray-300"
                                }`}
                            role="tab"
                            aria-label={`Go to slide ${index + 1}`}
                            aria-selected={index === currentIndex}
                        />
                    ))}
                </div>

                <div
                    onClick={handleBooking}
                    className="flex justify-center mt-8"
                    data-aos="zoom-in"
                    data-aos-duration="800"
                    data-aos-delay="500"
                >
                    <button className="bg-gray-900 text-white px-8 py-3 rounded hover:bg-gray-800 text-sm md:text-base transition-colors duration-300">
                        View Rooms
                    </button>
                </div>
            </div>
        </section>
    );
}