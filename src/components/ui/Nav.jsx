import { useState } from "react";
import { Menu, X, ChevronDown, ChevronRight, ChevronLeft } from 'lucide-react';
import BookNowButton from "./BookNowButton";



export default function Nav() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <>
            <nav className="fixed md:top-8 top-0 left-0 w-full z-50 bg-white bg-opacity-30 backdrop-blur-sm">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="flex justify-between items-center py-2">
                        {/* Mobile Menu Button */}
                        <button
                            onClick={() => setMenuOpen(!menuOpen)}
                            className="text-white lg:hidden z-50 p-2 hover:bg-white hover:bg-opacity-20 rounded-md transition-all"
                            aria-label="Toggle menu"
                        >
                            {menuOpen ? <X size={28} /> : <Menu size={28} />}
                        </button>

                        {/* Desktop Left Menu */}
                        <div className="hidden lg:flex items-center gap-8 text-white">
                            <a href="/" className="hover:text-yellow-400 transition-colors">Homes</a>
                            <a href="#rooms" className="hover:text-yellow-400 transition-colors flex items-center gap-1">
                                Rooms <ChevronDown size={16} />
                            </a>
                            <a href="#conferences" className="hover:text-yellow-400 transition-colors flex items-center gap-1">
                                Conferences <ChevronDown size={16} />
                            </a>
                            <a href="#leisure" className="hover:text-yellow-400 transition-colors flex items-center gap-1">
                                Leisure <ChevronDown size={16} />
                            </a>
                        </div>

                        {/* Logo */}
                        <div className="flex-1 lg:flex-none flex justify-center">
                            <div className="text-center">
                                <div className="w-16 h-16 mx-auto mb-1 flex items-center justify-center">
                                    <div className="text-yellow-600 text-3xl">
                                        <img src="./Aishahomeslogobg.png" alt="Aisha Homes Logo" className="w-full h-full object-contain" />
                                    </div>
                                </div>
                                <div className="text-blue-900 font-semibold font-serif text-xl tracking-widest">AISHA</div>
                                <div className="text-yellow-600 text-xs tracking-widest">HOMES</div>
                            </div>
                        </div>

                        {/* Desktop Right Menu */}
                        <div className="hidden lg:flex items-center gap-8 text-white">
                            <a href="#tavern" className="hover:text-yellow-400 transition-colors flex items-center gap-1">
                                Tavern <ChevronDown size={16} />
                            </a>
                            <a href="blog" className="hover:text-yellow-400 transition-colors">
                                Blog
                            </a>
                            <a href="#contact" className="hover:text-yellow-400 transition-colors">Contact</a>
                            <BookNowButton />
                        </div>
                    </div>
                </div>
            </nav>

            {/* Mobile Menu Overlay */}
            <div
                className={`lg:hidden fixed inset-0 bg-black z-40 transition-opacity duration-300 ${menuOpen ? 'opacity-50 pointer-events-auto' : 'opacity-0 pointer-events-none'
                    }`}
                onClick={() => setMenuOpen(false)}
            />

            {/* Mobile Menu Sidebar */}
            <div
                className={`lg:hidden fixed top-0 left-0 h-full w-80 max-w-[85vw] bg-gradient-to-b from-blue-900 to-blue-950 shadow-2xl z-50 transform transition-transform duration-500 ease-out ${menuOpen ? 'translate-x-0' : '-translate-x-full'
                    }`}
            >
                {/* Close Button Inside Menu */}
                <button
                    onClick={() => setMenuOpen(false)}
                    className="absolute top-8 right-1 z-60 text-white hover:text-yellow-400 px-2 bg-white hover:bg-white rounded-full transition-all"
                    aria-label="Close menu"
                >
                    <ChevronLeft className="text-black" size={16} />
                </button>


                <div className="pt-15 px-6 pb-8 h-full relative overflow-y-auto">
                    {/* Mobile Menu Header */}

                    <div className="relative text-center mb-8 pb-8 border-b border-white">

                        {/* Floating Logo */}
                        <div className=" absolute -top-10 left-1/2 -translate-x-1/2 w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-xl z-20">
                            <img
                                src="./Aishahomeslogobg.png"
                                alt="Aisha Homes Logo"
                                className="w-14 h-14 object-contain"
                            />
                        </div>

                        {/* Spacer so content doesn't overlap */}
                        <div className="pt-12">
                            <div className="text-yellow-400 font-semibold font-serif text-2xl tracking-widest">
                                AISHA
                            </div>
                            <div className="text-yellow-500 text-sm tracking-widest">
                                HOMES
                            </div>
                        </div>


                    </div>


                    {/* Mobile Menu Items */}
                    <div className="space-y-0">
                        {[
                            { href: '/', label: 'HOME' },
                            { href: '#rooms', label: 'ROOMS' },
                            { href: '#conferences', label: 'CONFERENCES' },
                            // { href: '#leisure', label: 'LEISURE' },
                            { href: '#tavern', label: 'EVENTS' },
                            { href: 'blog', label: 'BLOG' },
                            { href: '#contact', label: 'CONTACT' }
                        ].map((item, index) => (
                            <a
                                key={item.href}
                                href={item.href}
                                className={`block text-white hover:text-yellow-400 hover:bg-white hover:bg-opacity-10 transition-all py-3 px-4 rounded-lg font-medium tracking-wide transform ${menuOpen ? 'translate-x-0 opacity-100' : '-translate-x-4 opacity-0'
                                    }`}
                                style={{
                                    transitionDelay: menuOpen ? `${index * 50}ms` : '0ms',
                                    transitionDuration: '300ms'
                                }}
                                onClick={() => setMenuOpen(false)}
                            >
                                {item.label}
                            </a>
                        ))}
                    </div>

                    {/* Mobile Book Now Button */}
                    <div
                        className={`mt-8 transform transition-all duration-300 ${menuOpen ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                            }`}
                        style={{ transitionDelay: menuOpen ? '350ms' : '0ms' }}
                    >
                        <BookNowButton />
                    </div>
                </div>
            </div>
        </>
    );
}