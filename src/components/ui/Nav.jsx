import { useState } from "react";
import { Menu, X, ChevronDown } from 'lucide-react';
import BookNowButton from "./BookNowButton";


export default function Nav() {
    const [menuOpen, setMenuOpen] = useState(false);
    return (
        <nav className="fixed md:top-8 top-0 left-0 w-full z-40 bg-white bg-opacity-30 backdrop-blur-sm">

            <div className="max-w-7xl mx-auto px-4">
                <div className="flex justify-between items-center py-2">

                    <button
                        onClick={() => setMenuOpen(!menuOpen)}
                        className="text-white lg:hidden"
                    >
                        {menuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>


                    <div className="hidden lg:flex items-center gap-8 text-white">
                        <a href="/" className="hover:text-yellow-500 transition">Homes</a>
                        <a href="#rooms" className="hover:text-yellow-500 transition flex items-center gap-1">
                            Rooms <ChevronDown size={16} />
                        </a>
                        <a href="#conferences" className="hover:text-yellow-500 transition flex items-center gap-1">
                            Conferences <ChevronDown size={16} />
                        </a>
                        <a href="#leisure" className="hover:text-yellow-500 transition flex items-center gap-1">
                            Leisure <ChevronDown size={16} />
                        </a>
                    </div>

                    <div className="flex-1 lg:flex-none flex justify-center">
                        <div className="text-center">
                            <div className="w-16 h-16 mx-auto mb-1 flex items-center justify-center">
                                <div className="text-yellow-600 text-3xl"><img src="./Aishahomeslogobg.png" alt="logo" /></div>
                            </div>
                            <div className="text-blue-900 font-serif text-xl tracking-widest">AISHA</div>
                            <div className="text-yellow-600 text-xs tracking-widest">HOMES</div>
                        </div>
                    </div>


                    <div className="hidden lg:flex items-center gap-8 text-white">
                        <a href="#tavern" className="hover:text-yellow-500 transition flex items-center gap-1">
                            Tarven <ChevronDown size={16} />
                        </a>
                        <a href="blog" className="hover:text-yellow-500 transition flex items-center gap-1">
                            Blog
                        </a>
                        <a href="#contact" className="hover:text-yellow-500 transition">Contact</a>
                        <BookNowButton />
                    </div>
                </div>


                {menuOpen && (
                    <div className="lg:hidden pb-4 text-white space-y-3">
                        <a href="/" className="block hover:text-yellow-500">HOME</a>
                        <a href="#rooms" className="block hover:text-yellow-500">ROOMS</a>
                        <a href="#conferences" className="block hover:text-yellow-500">CONFERENCES</a>
                        <a href="#leisure" className="block hover:text-yellow-500">LEISURE</a>
                        <a href="#tavern" className="block hover:text-yellow-500">TAVERN</a>
                        <a href="blog" className="block hover:text-yellow-500">BLOG</a>
                        <a href="#contact" className="block hover:text-yellow-500">CONTACT</a>
                        <BookNowButton />
                    </div>
                )}
            </div>
        </nav>
    )
}
