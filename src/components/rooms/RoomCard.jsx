import { RoomDetails } from "./RoomDetails";
import { RoomGallery } from "./RoomGallery";

export function RoomCard({ room, images, currentImageIndex, onPrevImage, onNextImage }) {
    return (
        <div className="grid lg:grid-cols-2 place-items-center" data-aos="fade-up">
            <RoomGallery
                images={images}
                currentIndex={currentImageIndex}
                onPrev={onPrevImage}
                onNext={onNextImage}
                roomType={room.type}
            />
            <RoomDetails room={room} />
        </div>
    );
}