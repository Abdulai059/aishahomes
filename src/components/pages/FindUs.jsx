import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';
import { Link } from 'react-router';

export default function FindUs() {
    return (
        <section className="md:py-16 py-8 px-4 bg-gray-50">
            <div className="max-w-350 mx-auto">
                <div className="grid lg:grid-cols-2 gap-12 items-start">

                    <div className="space-y-8" data-aos="fade-left">
                        <h2 className="text-4xl md:text-6xl font-light" style={{ fontFamily: "Columbia-Serial" }}>Find Us</h2>

                        <p className="text-gray-700 leading-relaxed md:text-sm text-sm">
                            Aisha Homes is perfectly situated in Northern Ghana and the Greater Accra area. We're just about 5 minutes from Aliu Mahama Stadium Airport Roundabout and only 2 minutes from Aisha Hospital.
                        </p>

                        <div className="space-y-4">
                            {/* Address */}
                            <div className="flex items-start gap-3">
                                <MapPin className="text-gray-900 mt-1 flex-shrink-0" size={20} />
                                <div>
                                    <p className="font-semibold text-gray-900">Address:</p>
                                    <p className="text-gray-700 text-sm">Aisha Homes, C45J+X5H, Old Airport Road, Tamale</p>
                                </div>
                            </div>


                            <div className="flex items-start gap-3">
                                <Phone className="text-gray-900 mt-1 flex-shrink-0" size={20} />
                                <div>
                                    <p className="font-semibold text-gray-900">Phone:</p>
                                    <p href="tel:+2349166105381" className="text-gray-600 hover:text-blue-800 transition-colors text-sm">
                                        Call us at 059 8948931 - 0203690506
                                    </p>
                                </div>
                            </div>


                            <div className="flex items-start gap-3">
                                <Mail className="text-gray-900 mt-1 flex-shrink-0" size={20} />
                                <div>
                                    <p className="font-semibold text-gray-900">Email:</p>
                                    <p href="mailto:info@arthotelng.com" className="text-blue-600 hover:text-blue-800 transition-colors text-sm">
                                        reservations@aishahomesgh.com
                                    </p>
                                </div>
                            </div>
                        </div>


                        <Link to="/contact" className="bg-black text-white px-8 py-4 rounded-sm hover:bg-gray-800 transition-colors font-medium text-xs tracking-wider">
                            SEND US A MESSAGE TODAY
                        </Link>
                    </div>


                    <Maps />
                </div>
            </div>
        </section>
    );
}




function Maps() {
    return (
        <div className="relative">
            <div className="bg-white rounded-sm  shadow-sm overflow-hidden md:h-125 h-100 md:pb-0 pb-8" data-aos="fade-right">

                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3936.1302929282324!2d-0.8720195242412514!3d9.409964782907794!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfd43d477fd9d1cf%3A0xd4568bb46fa5af06!2sAisha%20Homes!5e0!3m2!1sen!2sgh!4v1769104989719!5m2!1sen!2sgh"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="The Aisha Homes Location"
                ></iframe>

            </div>

        </div>
    )
}
