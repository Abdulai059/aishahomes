import { useState } from "react";
import { Menu, X, ChevronDown, ChevronLeft } from "lucide-react";
import BookNowButton from "./BookNowButton";
import { Link } from "react-router-dom";

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <nav className="fixed md:top-8 top-0 left-0 w-full z-50 bg-gray-100 shadow-lg bg-opacity-30 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-white lg:hidden z-50 p-2 hover:bg-white hover:bg-opacity-20 rounded-md transition-all"
              aria-label="Toggle menu"
            >
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            <div className="hidden lg:flex items-center gap-8 text-white">
              <Link to="/" className="hover:text-brand-gold transition-colors">
                Home
              </Link>
              <Link
                to="/about-us"
                className="hover:text-brand-gold transition-colors"
              >
                About Us
              </Link>
              <Link
                to="/rooms"
                className="hover:text-brand-gold transition-colors flex items-center gap-1"
              >
                Rooms
              </Link>

              <Link
                to="/facilities"
                className="hover:text-brand-gold transition-colors"
              >
                Facilities & Homes
              </Link>
            </div>

            <div className="flex justify-center md:pr-0 pr-30">
              <div className="text-center">
                <div className="md:flex flex-col hidden">
                  <div className="text-brand-blue font-semibold font-serif text-xl tracking-widest">
                    AISHA
                  </div>
                  <div className="text-brand-gold text-xs tracking-widest">
                    HOMES
                  </div>
                </div>
              </div>
            </div>

            <div className="hidden lg:flex items-center gap-8 text-white">
              <Link
                to="/conference"
                className="hover:text-brand-gold transition-colors flex items-center gap-1"
              >
                Conference Hall
              </Link>

              <Link
                to="/gallery"
                className="hover:text-brand-gold transition-colors"
              >
                Gallery
              </Link>

              <Link
                to="/contact"
                className="hover:text-brand-gold transition-colors"
              >
                Contact
              </Link>

              {/* <Link
                to="/blog"
                className="hover:text-brand-gold transition-colors"
              >
                Blog
              </Link> */}

              <BookNowButton />
            </div>
          </div>
        </div>
      </nav>

      <div
        className={`lg:hidden fixed inset-0 bg-black z-40 transition-opacity duration-300 ${
          menuOpen
            ? "opacity-50 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setMenuOpen(false)}
      />

      <div
        className={`lg:hidden fixed top-0 left-0 h-full w-80 max-w-[85vw] bg-gray-100 shadow-2xl z-50 transform transition-transform duration-500 ease-out ${menuOpen ? "translate-x-0" : "-translate-x-full pointer-events-none"}`}
      >
        <button
          onClick={() => setMenuOpen(false)}
          className="absolute top-8 right-1 z-60 text-white hover:text-brand-gold px-2 bg-brand-blue hover:bg-white rounded-full transition-all"
          aria-label="Close menu"
        >
          <ChevronLeft className="text-white" size={16} />
        </button>

        <div className="pt-15 px-6 pb-0 h-full relative overflow-y-auto">
          <div className="relative text-center mb-8 pb-0 border-b border-gray-300">
            {/* <div className=" absolute -top-10 left-1/2 -translate-x-1/2 w-20 h-20 rounded-full flex items-center justify-center  z-20">
              <img
                src="./Aishahomeslogobg.png"
                alt="Aisha Homes Logo"
                className="w-14 h-14 object-contain"
              />
            </div> */}

            <div className="pt-12">
              <div className="text-brand-blue font-semibold font-serif text-2xl tracking-widest">
                AISHA
              </div>
              <div className="text-brand-gold text-sm tracking-widest">
                HOMES
              </div>
            </div>
          </div>

          {/* Mobile Menu Items */}
          <div className="space-y-0">
            {[
              { to: "/", label: "Home" },
              { to: "/rooms-suites", label: "Rooms & Suites" },
              { to: "/facilities-homes", label: "Facilities" },
              { to: "/conference", label: "Conference Hall" },
              { to: "/gallery", label: "Gallery" },
              { to: "/blog", label: "Blog" },
              { to: "/contact", label: "Contact" },
            ].map((item, index) => (
              <Link
                key={item.label}
                to={item.to}
                className={`block text-brand-stone hover:text-brand-gold hover:bg-gray-100 capitalize text-sm transition-all py-2.5 px-4 rounded-lg font-medium tracking-wide transform ${menuOpen ? "translate-x-0 opacity-100" : "-translate-x-4 opacity-0"}`}
                style={{
                  transitionDelay: menuOpen ? `${index * 50}ms` : "0ms",
                  transitionDuration: "300ms",
                }}
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div
            className={`mt-8 pl-2 transform transition-all duration-300 ${menuOpen ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"}`}
            style={{ transitionDelay: menuOpen ? "350ms" : "0ms" }}
          >
            <BookNowButton />
          </div>
        </div>
      </div>
    </>
  );
}
