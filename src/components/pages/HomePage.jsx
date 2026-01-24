import Hero from "./hero";
import BlogPost from "./BlogPost";
import CtaSection from "./CtaSection";
import GallerySection from "./GallerySection";
import HotelExplore from "./HotelExplore";
import MeetingSection from "./MeetingSection";
import ReceptionSection from "./ReceptionSection";
import RestaurantSection from "./RestaurantSection.";
import Rooms from "./Rooms";
import FindUs from "./FindUs";

export default function HomePage() {
    return (
        <div className="min-h-screen w-full bg-background font-sans antialiased selection:bg-primary selection:text-primary-foreground">
            <Hero />
            <HotelExplore />
            <Rooms />
            <MeetingSection />
            <GallerySection />
            <CtaSection />
            <RestaurantSection />
            <ReceptionSection />
            <FindUs />
        </div>
    );
}
