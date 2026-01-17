import ButtonEye from "../ui/ButtomEye";
import Button from "../ui/button";
import Logo from "../ui/Logo";

export default function NavbarHeader() {
  return (
    <nav className="relative bg-white shadow-md px-30 py-5 overflow-hidden shadow-md">
      <div className="absolute top-0">
        <Logo />
      </div>

      <div className="flex items-center justify-between">
        <div className="w-12"></div>

        <div className="hidden sm:flex gap-6  font-semibold text-sm">
          <a href="#" className="text-gray-900 hover:text-black">
            Home
          </a>
          <a href="#" className="text-gray-900 hover:text-black">
            Our Rooms
          </a>
          <a href="#" className="text-gray-900 hover:text-black">
            Facilities & Homes
          </a>
          <a href="#" className="text-gray-900 hover:text-black">
            About Us
          </a>

          <a href="#" className="text-gray-900 hover:text-black">
            Gallery
          </a>
          <a href="#" className="text-gray-900 hover:text-black">
            Contact
          </a>
        </div>

        <div className="flex items-center gap-4">
          <ButtonEye
            href="#"
            className="bg-blue-800 shimmer-effect text-white px-8 py-4 rounded-full text-base font-medium hover:bg-blue-700"
          >
            Book Now
          </ButtonEye>
        </div>
      </div>
    </nav>
  );
}
