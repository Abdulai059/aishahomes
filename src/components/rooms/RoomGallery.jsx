import { ChevronLeft, ChevronRight } from 'lucide-react';

export function RoomGallery({ images, currentIndex, onPrev, onNext, roomType }) {
    return (
        <div className="relative bg-gray-900 md:h-162" data-aos="fade-right" data-aos-delay="100">
            <img
                src={images[currentIndex]}
                alt={roomType}
                className="w-full h-full object-cover"
            />

            <button
                onClick={onPrev}
                className="absolute left-6 top-1/2 -translate-y-1/2 bg-white/30 backdrop-blur-md hover:bg-white/40 w-12 h-12 rounded-full shadow-lg transition flex items-center justify-center text-black"
            >
                <ChevronLeft className="w-6 h-6" />
            </button>

            <button
                onClick={onNext}
                className="absolute right-6 top-1/2 -translate-y-1/2 bg-white/30 backdrop-blur-md hover:bg-white/40 w-12 h-12 rounded-full shadow-lg transition flex items-center text-black justify-center"
            >
                <ChevronRight className="w-6 h-6" />
            </button>
        </div>
    );
}