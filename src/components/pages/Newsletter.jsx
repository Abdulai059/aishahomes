
import { Download, ArrowRight, ChevronRight } from 'lucide-react';

export default function Newsletter() {
    return (
        < div className="min-h-screen bg-gray-50">

            <section section
                className="relative text-white py-16 md:py-24 bg-cover bg-center"
                style={{ backgroundImage: "url('/Walkthrough-video.jpg')" }
                }
            >

                <div className="absolute inset-0 bg-black/60"></div>

                <div className="relative max-w-4xl mx-auto px-4 sm:px-6 text-center">
                    <div className="flex items-center justify-center gap-2 mb-6">
                        <span className="text-sm text-gray-100">HOME</span>
                        <span className="text-gray-100"><ChevronRight size={16} /></span>
                        <span className="text-sm text-yellow-500 font-medium">NEWSLETTER</span>
                    </div>

                    <h1 className="text-3xl md:text-5xl font-semibold mb-6" style={{ fontFamily: "Columbia-Serial" }}>
                        Our Newsletter
                    </h1>

                    <p className="text-gray-300 md:text-base text-sm max-w-2xl mx-auto">
                        Stay updated with our latest news, insights, and stories delivered straight from Aisha Homes.
                    </p>
                </div>
            </section >



            <div className="max-w-6xl mx-auto px-0 sm:px-6 -mt-12">
                <div className="mb-8">
                    <button className="bg-gray-900 text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-gray-800 transition-all">
                        ★ LATEST EDITION
                    </button>
                </div>

                <div className="bg-white rounded-sm shadow-sm p-6 md:p-8 mb-16 overflow-hidden hover:shadow-xl transition-all group">
                    <div className="grid md:grid-cols-2 gap-8 items-center">
                        <div className="relative group">
                            <div className="absolute top-4 left-4 bg-white px-3 py-1 rounded text-xs font-semibold text-gray-700 shadow-md z-10">
                                NEW
                            </div>
                            <img
                                src="https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&h=600&fit=crop"
                                alt="Newsletter Preview"
                                className="w-full h-80 object-cover rounded-sm shadow-md group-hover:shadow-xl transition-all"
                            />
                        </div>

                        <div>
                            <div className="inline-flex items-center text-[10px] font-semibold uppercase tracking-[0.25em] bg-yellow-100 text-yellow-700 px-4 py-1 rounded-full mb-3">
                                ★ Featured Newsletter
                            </div>


                            <h2 className="text-xl md:text-2xl font-semibold text-gray-900 mb-4" style={{ fontFamily: "Columbia-Serial" }}>November 2025 Edition</h2>

                            <div className="flex items-center gap-2 text-sm text-gray-500 mb-6">
                                <span>📅</span>
                                <span>November 20, 2025</span>
                            </div>
                            <p className="text-gray-600 mb-8 text-sm md:text-base leading-relaxed">
                                A blend of art, comfort, and curated moments! This November issue's style notes have continued in the month of December 2025 to come!
                            </p>
                            <div className="flex flex-wrap gap-4">
                                <button className="bg-gray-900 text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-all flex items-center gap-2 hover:shadow-lg hover:-translate-y-0.5">
                                    <Download className="w-4 h-4" />
                                    Read Full Newsletter
                                </button>
                                <button className="border-2 border-gray-300 text-white px-6 py-3 rounded-lg font-semibold hover:text-black hover:border-gray-900 hover:bg-gray-50 transition-all flex items-center gap-2">
                                    <Download className="w-4 h-4" />
                                    Download PDF
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <section className="mb-8">
                    <h2 className="text-2xl md:text-4xl font-bold text-gray-900 text-center mb-4 tracking-wide" style={{ fontFamily: "Columbia-Serial" }}>Previous Editions</h2>
                    <p className="text-center md:text-base text-sm md:px-0 px-4 text-gray-600 mb-12">
                        Browse through our collection of past newsletters
                    </p>

                    <div className="grid md:grid-cols-2 gap-8 p-6">
                        <div className="bg-white rounded-sm shadow-sm overflow-hidden hover:shadow-xl transition-all group">
                            <div className="relative">
                                <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full text-xs font-semibold text-gray-700 shadow-md z-10">
                                    Oct 2025
                                </div>
                                <img
                                    src="https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&h=500&fit=crop"
                                    alt="November 2025 Edition"
                                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                                />
                            </div>
                            <div className="p-6">
                                <h3 className="text-2xl font-semibold text-gray-900 mb-3" style={{ fontFamily: "Columbia-Serial" }}>November 2025 Edition</h3>

                                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                                    A blend of art, comfort, and curated moments! This November issue's style notes have continued in the month of December 2025 to come!
                                </p>
                                <button className="border-2 border-gray-900 text-white px-5 py-2 rounded-lg font-semibold hover:bg-gray-900 hover:text-white transition-all flex items-center gap-2">
                                    Read More
                                    <ArrowRight className="w-4 h-4" />
                                </button>
                            </div>
                        </div>

                        <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all group">
                            <div className="relative">
                                <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full text-xs font-semibold text-gray-700 shadow-md z-10">
                                    Oct 2025
                                </div>
                                <img
                                    src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&h=500&fit=crop"
                                    alt="October 2025 Edition"
                                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                                />
                            </div>
                            <div className="p-6">
                                <h3 className="text-2xl font-semibold text-gray-900 mb-3" style={{ fontFamily: "Columbia-Serial" }}>October 2025 Edition</h3>
                                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                                    Discover autumn's finest moments at The Art Hotel. Explore seasonal highlights, guest stories, and exclusive experiences from October.
                                </p>
                                <button className="border-2 border-gray-900 text-white px-5 py-2 rounded-lg font-semibold hover:bg-gray-900 hover:text-white transition-all flex items-center gap-2">
                                    Read More
                                    <ArrowRight className="w-4 h-4" />
                                </button>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div >
    );
}