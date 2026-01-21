import { useState } from "react";
import { User, Mail, Phone, Globe, ArrowRight, Sparkles } from "lucide-react";
import supabase from "../services/SupabaseBooking";

export default function GuestForm({ onSuccess }) {
    const [loading, setLoading] = useState(false);
    const [form, setForm] = useState({
        fullName: "",
        email: "",
        phone: "",
        country: "",
    });

    function handleChange(e) {
        setForm({ ...form, [e.target.name]: e.target.value });
    }

    async function handleSubmit(e) {
        e.preventDefault();
        setLoading(true);

        const { data, error } = await supabase
            .from("guests")
            .insert([form])
            .select()
            .single();

        setLoading(false);

        if (error) {
            alert(error.message);
            return;
        }

        onSuccess(data.id);
    }

    return (
        <div className="min-h-screen py-12 px-4">
            <div className="max-w-2xl mx-auto">
                {/* Header Section */}
                <div className="text-center mb-8">
                    {/* <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl mb-4 shadow-lg">
                        <Sparkles className="w-8 h-8 text-white" />
                    </div> */}
                    <h1 className="text-3xl font-semibold text-gray-900 mb-2">
                        Welcome Guest
                    </h1>
                    <p className="text-gray-600 text-base">
                        Let's start with your details
                    </p>
                </div>

                {/* Form Card */}
                <div className="bg-white rounded-3xl shadow-sm p-4  md:p-10 border border-gray-100">
                    <div className="mb-8">
                        <div className="flex items-center gap-2 mb-2">
                            <div className="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center">
                                <span className="text-indigo-600 font-bold text-sm">1</span>
                            </div>
                            <h2 className="text-2xl font-bold text-gray-800">
                                Guest Information
                            </h2>
                        </div>
                        <p className="text-gray-500 ml-10 text-base">
                            Please provide your contact details
                        </p>
                    </div>

                    <div onSubmit={handleSubmit} className="space-y-6">
                        {/* Full Name */}
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
                                    placeholder="Uosuman Zesung"
                                    required
                                    onChange={handleChange}
                                    className="w-full pl-12 pr-4 py-3.5 rounded-xl border-2 border-gray-200 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100 transition-all outline-none text-gray-900 placeholder-gray-400"
                                />
                            </div>
                        </div>

                        {/* Email */}
                        <div className="group">
                            <label className="block text-sm font-semibold text-gray-700 mb-2">
                                Email Address *
                            </label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                    <Mail className="h-5 w-5 text-gray-400 group-focus-within:text-indigo-500 transition-colors" />
                                </div>
                                <input
                                    name="email"
                                    type="email"
                                    placeholder="john@example.com"
                                    required
                                    onChange={handleChange}
                                    className="w-full pl-12 pr-4 py-3.5 rounded-xl border-2 border-gray-200 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100 transition-all outline-none text-gray-900 placeholder-gray-400"
                                />
                            </div>
                        </div>

                        {/* Phone */}
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
                                    placeholder=" 0240239000"
                                    onChange={handleChange}
                                    className="w-full pl-12 pr-4 py-3.5 rounded-xl border-2 border-gray-200 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100 transition-all outline-none text-gray-900 placeholder-gray-400"
                                />
                            </div>
                        </div>

                        {/* Country */}
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
                                    placeholder="Ghana"
                                    onChange={handleChange}
                                    className="w-full pl-12 pr-4 py-3.5 rounded-xl border-2 border-gray-200 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100 transition-all outline-none text-gray-900 placeholder-gray-400"
                                />
                            </div>
                        </div>

                        {/* Submit Button */}
                        <button
                            onClick={handleSubmit}
                            disabled={loading}
                            className="w-full mt-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl font-semibold text-lg hover:from-indigo-700 hover:to-purple-700 focus:ring-4 focus:ring-indigo-200 transition-all shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 group"
                        >
                            {loading ? (
                                <>
                                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                                    Saving...
                                </>
                            ) : (
                                <>
                                    Continue to Booking
                                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </>
                            )}
                        </button>
                    </div>
                </div>

                {/* Footer Note */}
                <p className="text-center text-gray-500 text-sm mt-6">
                    Your information is secure and will only be used for booking purposes
                </p>
            </div>
        </div>
    );
}