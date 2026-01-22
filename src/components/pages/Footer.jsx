import { MapPin, Phone, Mail, Facebook, Instagram } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="bg-[#060a26] text-white">
            <div className="max-w-[1400px] mx-auto px-4 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                    {/* Logo and Description */}
                    <div className="space-y-6">
                        <div className="bg-white md:w-32 md:h-32  w-22 h-22 flex items-center justify-center">
                            <img
                                src="./Aishahomeslogobg.png"
                                alt="Aisha Homes Logo"
                                className="w-20 h-20 md:w-full md:h-full  object-contain"
                            />
                        </div>

                        <p className="text-white italic text-sm leading-relaxed">
                            “Your ultimate vacation retreat in the beauty of Northern Ghana.”
                        </p>
                    </div>



                    {/* Quick Links */}
                    <div>
                        <h3 className="text-white font-semibold text-lg  pb-2">Quick Links</h3>
                        <div className="mb-2 h-[3px] w-32 mb-8 bg-gradient-to-l from-transparent to-gray-100"></div>

                        <ul className="space-y-3">
                            <li>
                                <a href="#rooms" className="text-white hover:text-white transition-colors text-sm">
                                    Rooms & Suites
                                </a>
                            </li>
                            <li>
                                <a href="#offers" className="text-white hover:text-white transition-colors text-sm">
                                    Offers
                                </a>
                            </li>
                            <li>
                                <a href="#dining" className="text-white hover:text-white transition-colors text-sm">
                                    Dining
                                </a>
                            </li>
                            <li>
                                <a href="#meetings" className="text-white hover:text-white transition-colors text-sm">
                                    Meetings & Events
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Resources */}
                    <div>
                        <h3 className="text-white font-semibold text-lg -2">Resources</h3>
                        <div className="mb-2 h-[3px] w-32 mb-8 bg-gradient-to-l from-transparent to-gray-100"></div>

                        <ul className="space-y-3">
                            <li>
                                <a href="#gallery" className="text-white  hover:text-white transition-colors text-sm">
                                    Art Gallery
                                </a>
                            </li>
                            <li>
                                <a href="#press" className="text-white  hover:text-white transition-colors text-sm">
                                    Press & Media
                                </a>
                            </li>
                            <li>
                                <a href="#contact" className="text-white  hover:text-white transition-colors text-sm">
                                    Contact Us
                                </a>
                            </li>
                            <li>
                                <a href="#privacy" className="text-white hover:text-white transition-colors text-sm">
                                    Privacy Policy
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Us */}
                    <div>
                        <h3 className="text-white font-semibold text-lg">Contact Us</h3>
                        <div className="mb-2 h-[3px] w-32 mb-8 bg-gradient-to-l from-transparent to-gray-100"></div>

                        <div className="space-y-4">
                            <div className="flex items-start gap-3">
                                <MapPin className="text-gray-white flex-shrink-0 mt-1" size={18} />
                                <p className="text-gray-white text-sm">
                                    Aisha Homes, C45J+X5H, Old Airport Road, Tamale
                                </p>
                            </div>
                            <div className="flex items-center gap-3">
                                <Phone className="text-gray-white flex-shrink-0" size={18} />
                                <a href="tel:+2349166105381" className="text-white hover:text-white transition-colors text-sm">
                                    0598948931
                                </a>
                            </div>
                            <div className="flex items-center gap-3">
                                <Mail className="text-gray-white flex-shrink-0" size={18} />
                                <a href="mailto:info@arthotel.com" className="text-white hover:text-white transition-colors text-sm">
                                    reservations@aishahomesgh.com
                                </a>
                            </div>
                            <div className="flex gap-4 pt-2">
                                <a href="#" className="text-white hover:text-white transition-colors" aria-label="Facebook">
                                    <Facebook size={20} />
                                </a>
                                <a href="#" className="text-white hover:text-white transition-colors" aria-label="Instagram">
                                    <Instagram size={20} />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-gray-800">
                <div className="max-w-7xl mx-auto px-4 py-6">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-400">
                        <p>© 2026 The Art Hotel Limited. All Rights Reserved.</p>
                        <a className='text-gray-400' href="https://zesungdev.vercel.app/">Design & Developed by: Zesungdev</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}