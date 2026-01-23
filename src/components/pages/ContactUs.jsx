import { ChevronRight } from 'lucide-react';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

export default function ContactUs() {
    const [activeOffice, setActiveOffice] = useState('tamale');
    const [showToast, setShowToast] = useState(false);

    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        console.log('Form submitted:', data);
        setShowToast(true);
        setTimeout(() => setShowToast(false), 3000);
        reset();
    };

    const offices = {
        tamale: {
            name: 'Northern Region - Tamale',
            subtitle: 'Aisha Homes – Tamale Office',
            address: [
                'Aliu Mahama Stadium Airport Roundabout',
                'Tamale'
            ],
            tel: '054 933 7820',
            email: 'info@aishahomes.com',
            website: 'aishahomes.com'
        },
        accra: {
            name: 'Greater Accra',
            subtitle: 'Aisha Homes – Accra Office',
            address: [
                'Greater Accra Region, Ghana',
                'Near key city access routes'
            ],
            tel: '054 933 7820',
            email: 'info@aishahomes.com',
            website: 'aishahomes.com'
        },

    };

    const currentOffice = offices[activeOffice];

    return (
        <main className="min-h-screen w-full bg-white">
            <section
                className="relative text-white py-16 md:py-24 bg-cover bg-center"
                style={{ backgroundImage: "url('/Walkthrough-video.jpg')" }}
            >
                <div className="absolute inset-0 bg-black/60"></div>

                <div className="relative max-w-4xl mx-auto px-4 sm:px-6 text-center">
                    <div className="flex items-center justify-center gap-2 mb-6">
                        <span className="text-sm text-gray-100">HOME</span>
                        <span className="text-gray-100"><ChevronRight size={16} /></span>
                        <span className="text-sm text-yellow-500 font-medium tracking-wider">CONTACT</span>
                    </div>

                    <h1
                        className="text-3xl md:text-5xl font-semibold mb-6"
                        style={{ fontFamily: "Columbia-Serial" }}
                    >
                        Contact Us
                    </h1>

                    <p className="text-gray-300 md:text-base text-sm max-w-2xl mx-auto">
                        Get in touch with Aisha Homes for bookings, inquiries, or any assistance.
                        We’re always happy to hear from you.
                    </p>
                </div>
            </section>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-16">



                <section className="mb-12 md:mb-16">
                    <div className="grid md:grid-cols-2 gap-8 lg:gap-16">
                        <div className="md:col-span-2 mb-4">
                            <h2 className="text-2xl md:text-4xl text-blue-900 font-semibold tracking-wide" style={{ fontFamily: "Columbia-Serial" }}>Office Details</h2>
                        </div>

                        <div className="order-2 md:order-1">
                            <ul className="space-y-0 bg-white border border-gray-200 rounded-lg overflow-hidden">
                                {Object.keys(offices).map((key) => (
                                    <li
                                        key={key}
                                        onClick={() => setActiveOffice(key)}
                                        className={`py-4 px-4 border-b last:border-b-0 border-gray-200 cursor-pointer relative pl-10 text-sm transition-all ${activeOffice === key
                                            ? 'text-blue-900 font-bold text-base bg-blue-50'
                                            : 'text-gray-800 hover:bg-gray-50'
                                            }`}
                                    >
                                        <span className={`absolute left-3 top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-blue-900 transition-transform ${activeOffice === key ? 'scale-150' : 'scale-100'
                                            }`}></span>
                                        {offices[key].name}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="order-1 md:order-2 bg-gray-50 p-6 md:p-10 border-l-2 border-blue-900 rounded-r-lg">
                            <div className="text-xl md:text-3xl font-bold mb-2 text-gray-800">{currentOffice.name}</div>
                            <div className="text-base md:text-xl font-semibold mb-6 text-gray-600">{currentOffice.subtitle}</div>

                            <div className="mb-8 leading-7 text-sm md:text-base text-gray-700">
                                {currentOffice.address.map((line, idx) => (
                                    <div key={idx}>{line}</div>
                                ))}
                            </div>

                            <div className="space-y-3">
                                <div className="flex flex-col sm:grid sm:grid-cols-[80px_1fr] gap-1 sm:gap-0 sm:items-center">
                                    <span className="font-bold text-gray-800 text-sm md:text-base">Tel</span>
                                    <span className="text-gray-700 text-sm md:text-base">{currentOffice.tel}</span>
                                </div>

                                <div className="flex flex-col sm:grid sm:grid-cols-[80px_1fr] gap-1 sm:gap-0 sm:items-center">
                                    <span className="font-bold text-gray-800 text-sm md:text-base">Email</span>
                                    <span className="text-gray-700 text-sm md:text-base break-all">{currentOffice.email}</span>
                                </div>

                                <div className="flex flex-col sm:grid sm:grid-cols-[80px_1fr] gap-1 sm:gap-0 sm:items-center">
                                    <span className="font-bold text-gray-800 text-sm md:text-base">Website</span>
                                    <a href={`https://${currentOffice.website}`} className="text-blue-900 font-bold text-sm md:text-base hover:underline">
                                        {currentOffice.website}
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="mb-12 md:mb-16">
                    <div className="bg-gray-50 p-6 md:p-10 rounded-lg shadow-sm">
                        <h1 className="text-2xl md:text-4xl text-blue-900 font-bold mb-8" style={{ fontFamily: "Columbia-Serial" }}>Get In Touch</h1>

                        <div className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="block text-sm font-semibold text-gray-700">
                                        Full Name <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        {...register('fullName', {
                                            required: 'Full name is required',
                                            minLength: { value: 2, message: 'Name must be at least 2 characters' }
                                        })}
                                        className="w-full p-3 md:p-4 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-blue-600 bg-white text-gray-800 transition-all text-sm md:text-base"
                                        placeholder="Enter your full name"
                                    />
                                    {errors.fullName && (
                                        <span className="text-red-500 text-xs md:text-sm block mt-1">{errors.fullName.message}</span>
                                    )}
                                </div>

                                <div className="space-y-2">
                                    <label className="block text-sm font-semibold text-gray-700">
                                        Email <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="email"
                                        {...register('email', {
                                            required: 'Email is required',
                                            pattern: {
                                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                                message: 'Invalid email address'
                                            }
                                        })}
                                        className="w-full p-3 md:p-4 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-blue-600 bg-white text-gray-800 transition-all text-sm md:text-base"
                                        placeholder="example@email.com"
                                    />
                                    {errors.email && (
                                        <span className="text-red-500 text-xs md:text-sm block mt-1">{errors.email.message}</span>
                                    )}
                                </div>

                                <div className="space-y-2">
                                    <label className="block text-sm font-semibold text-gray-700">
                                        Mobile No. <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="tel"
                                        {...register('mobile', {
                                            required: 'Mobile number is required',
                                            pattern: {
                                                value: /^[0-9]{10,15}$/,
                                                message: 'Invalid mobile number'
                                            }
                                        })}
                                        className="w-full p-3 md:p-4 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-blue-600 bg-white text-gray-800 transition-all text-sm md:text-base"
                                        placeholder="0549337820"
                                    />
                                    {errors.mobile && (
                                        <span className="text-red-500 text-xs md:text-sm block mt-1">{errors.mobile.message}</span>
                                    )}
                                </div>

                                <div className="space-y-2">
                                    <label className="block text-sm font-semibold text-gray-700">
                                        WhatsApp No.
                                    </label>
                                    <input
                                        type="tel"
                                        {...register('whatsapp', {
                                            pattern: {
                                                value: /^[0-9]{10,15}$/,
                                                message: 'Invalid WhatsApp number'
                                            }
                                        })}
                                        className="w-full p-3 md:p-4 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-blue-600 bg-white text-gray-800 transition-all text-sm md:text-base"
                                        placeholder="0549337820 (Optional)"
                                    />
                                    {errors.whatsapp && (
                                        <span className="text-red-500 text-xs md:text-sm block mt-1">{errors.whatsapp.message}</span>
                                    )}
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="block text-sm font-semibold text-gray-700">
                                    Message <span className="text-red-500">*</span>
                                </label>
                                <textarea
                                    {...register('message', {
                                        required: 'Message is required',
                                        minLength: { value: 10, message: 'Message must be at least 10 characters' }
                                    })}
                                    rows="5"
                                    className="w-full p-3 md:p-4 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-blue-600 resize-none bg-white text-gray-800 transition-all text-sm md:text-base"
                                    placeholder="How can we help you?"
                                />
                                {errors.message && (
                                    <span className="text-red-500 text-xs md:text-sm block mt-1">{errors.message.message}</span>
                                )}
                            </div>

                            <button
                                onClick={handleSubmit(onSubmit)}
                                className="bg-blue-900 text-white px-8 md:px-12 py-3 md:py-4 rounded-sm text-sm font-semibold text-base md:text-lg hover:bg-blue-800 transition-all hover:shadow-xl hover:-translate-y-1 active:translate-y-0"
                            >
                                Send Message
                            </button>
                        </div>
                    </div>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl md:text-4xl tracking-wide text-blue-900 font-bold mb-8" style={{ fontFamily: "Columbia-Serial" }}> Our Location</h2>

                    <div className="w-full rounded-lg overflow-hidden shadow-md">
                        <div className="w-full h-80 md:h-96 lg:h-[600px]">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3936.1302929282324!2d-0.8720195242412514!3d9.409964782907794!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfd43d477fd9d1cf%3A0xd4568bb46fa5af06!2sAisha%20Homes!5e0!3m2!1sen!2sgh!4v1769104989719!5m2!1sen!2sgh"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            />
                        </div>


                        <p className="text-xs text-gray-600 mt-4 px-2 pb-2">
                            Find your nearest Aisha Homes office address and contact details or fill out the enquiry form above.
                        </p>
                    </div>
                </section>

            </div>

            {showToast && (
                <div className="fixed top-4 left-1/2 -translate-x-1/2 z-50 bg-gradient-to-r from-green-500 to-teal-400 text-white px-6 md:px-8 py-4 md:py-5 rounded-xl shadow-2xl w-11/12 max-w-md">
                    <div className="flex items-center justify-center gap-3 md:gap-4">
                        <div className="w-6 h-6 md:w-7 md:h-7 bg-white bg-opacity-30 rounded-full flex items-center justify-center text-base font-bold flex-shrink-0">
                            ✓
                        </div>
                        <div className="flex-1 text-sm md:text-base font-medium">
                            Your message has been sent successfully!
                        </div>
                    </div>
                </div>
            )}
        </main>
    );
}