import { useState } from "react";
import { User, Mail, Phone, Globe, ArrowRight } from "lucide-react";

export default function GuestForm({ onSuccess }) {
    const [loading, setLoading] = useState(false);
    const [form, setForm] = useState({
        fullName: "",
        email: "",
        phone: "",
        country: "Ghana",
    });

    function handleChange(e) {
        const { name, value } = e.target;
        setForm((prev) => ({ ...prev, [name]: value }));
    }

    async function handleSubmit(e) {
        e.preventDefault();
        setLoading(true);

        // Auto-inject Ghana flag and Ghana Card ID
        const guestData = {
            ...form,
            countryFlag: "https://flagcdn.com/gh.svg",
            nationalID: "GHA-233000000000",
            nationality: "Ghana",
        };

        onSuccess(guestData);
        setLoading(false);
    }

    return (
        <div className="min-h-screen md:pt-20 py-12 p-2 md:px-4">
            <div className="max-w-2xl mx-auto">
                <div className="text-center mb-8">
                    <h1
                        className="md:text-3xl text-2xl md:px-0 tracking-wider font-semibold text-gray-900 mb-2"
                        style={{ fontFamily: "Columbia-Serial" }}
                    >
                        Welcome Guest
                    </h1>
                    <p className="text-gray-600 text-base">
                        Let's start with your details
                    </p>
                </div>

                <div className="bg-white rounded-sm shadow-sm p-8 md:p-10 border border-gray-100">
                    <div className="mb-8">
                        <div className="flex items-center gap-2 mb-2">
                            <div className="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center">
                                <span className="text-indigo-600 font-bold text-sm">1</span>
                            </div>
                            <h2 className="md:text-2xl text-xl font-bold text-gray-800">
                                Guest Information
                            </h2>
                        </div>
                        <p className="text-gray-500 md:text-base text-sm ml-10">
                            Please provide your contact details
                        </p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="group">
                            <label className="block text-sm font-semibold text-gray-700 mb-2">
                                Full Name *
                            </label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                    <User className="h-5 w-5 text-gray-400 group-focus-within:text-indigo-500 transition-colors" />
                                </div>
                                <input
                                    name="fullName"
                                    value={form.fullName}
                                    onChange={handleChange}
                                    required
                                    placeholder="Uosumanu Zesung"
                                    className="w-full pl-12 pr-4 py-3.5 rounded-xl border-2 border-gray-200 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100 outline-none"
                                />
                            </div>
                        </div>

                        <div className="group">
                            <label className="block text-sm font-semibold text-gray-700 mb-2">
                                Email Address *
                            </label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                    <Mail className="h-5 w-5 text-gray-400 group-focus-within:text-indigo-500 transition-colors" />
                                </div>
                                <input
                                    type="email"
                                    name="email"
                                    value={form.email}
                                    onChange={handleChange}
                                    required
                                    placeholder="john@example.com"
                                    className="w-full pl-12 pr-4 py-3.5 rounded-xl border-2 border-gray-200 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100 outline-none"
                                />
                            </div>
                        </div>

                        <div className="group">
                            <label className="block text-sm font-semibold text-gray-700 mb-2">
                                Phone Number
                            </label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                    <Phone className="h-5 w-5 text-gray-400 group-focus-within:text-indigo-500 transition-colors" />
                                </div>
                                <input
                                    name="phone"
                                    value={form.phone}
                                    onChange={handleChange}
                                    placeholder="0245000400"
                                    className="w-full pl-12 pr-4 py-3.5 rounded-xl border-2 border-gray-200 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100 outline-none"
                                />
                            </div>
                        </div>

                        <div className="group">
                            <label className="block text-sm font-semibold text-gray-700 mb-2">
                                Country
                            </label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                    <Globe className="h-5 w-5 text-gray-400 group-focus-within:text-indigo-500 transition-colors" />
                                </div>
                                <input
                                    name="country"
                                    value={form.country}
                                    onChange={handleChange}
                                    placeholder="Ghana"
                                    className="w-full pl-12 pr-4 py-3.5 rounded-xl border-2 border-gray-200 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100 outline-none"
                                />
                            </div>
                        </div>

                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full mt-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl font-semibold text-sm md:text-base hover:from-indigo-700 hover:to-purple-700 focus:ring-4 focus:ring-indigo-200 transition-all shadow-lg flex items-center justify-center gap-2 disabled:opacity-50"
                        >
                            {loading ? (
                                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                            ) : (
                                <>
                                    Continue to Booking
                                    <ArrowRight className="w-5 h-5" />
                                </>
                            )}
                        </button>
                    </form>
                </div>

                <p className="text-center text-gray-500 md:text-sm px-6 text-xs mt-6">
                    Your information is secure and will only be used for booking purposes
                </p>
            </div>
        </div>
    );
}
