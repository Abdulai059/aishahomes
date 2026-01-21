import { useState } from "react";
import { Calendar, Users, Coffee, FileText, Check, Sparkles } from "lucide-react";
import supabase from "../services/SupabaseBooking";

export default function BookingForm({ guestId }) {
    const [form, setForm] = useState({
        startDate: "",
        endDate: "",
        numGuests: 1,
        hasBreakfast: false,
        observations: "",
    });
    const [loading, setLoading] = useState(false);

    function handleChange(e) {
        const { name, value, type, checked } = e.target;
        setForm({
            ...form,
            [name]: type === "checkbox" ? checked : value,
        });
    }

    async function handleSubmit(e) {
        e.preventDefault();
        setLoading(true);

        const { error } = await supabase.from("bookings").insert([
            {
                ...form,
                guestId,
                status: "unconfirmed",
                isPaid: false,
            },
        ]);

        setLoading(false);

        if (error) {
            alert(error.message);
            return;
        }

        alert("Booking created successfully 🎉");
    }

    // Calculate nights if dates are selected
    const calculateNights = () => {
        if (form.startDate && form.endDate) {
            const start = new Date(form.startDate);
            const end = new Date(form.endDate);
            const nights = Math.ceil((end - start) / (1000 * 60 * 60 * 24));
            return nights > 0 ? nights : 0;
        }
        return 0;
    };

    const nights = calculateNights();

    return (
        <div className="min-h-screen  py-12 px-4">
            <div className="max-w-2xl mx-auto">
                {/* Header Section */}
                <div className="text-center mb-8">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl mb-4 shadow-lg">
                        <Calendar className="w-8 h-8 text-white" />
                    </div>
                    <h1 className="text-4xl font-bold text-gray-900 mb-2">
                        Complete Your Booking
                    </h1>
                    <p className="text-gray-600 text-lg">
                        Choose your dates and preferences
                    </p>
                </div>

                {/* Form Card */}
                <div className="bg-white rounded-3xl shadow-sm p-8 md:p-10 border border-gray-100">
                    <div className="mb-8">
                        <div className="flex items-center gap-2 mb-2">
                            <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
                                <span className="text-green-600 font-bold text-sm">2</span>
                            </div>
                            <h2 className="text-2xl font-bold text-gray-800">
                                Booking Details
                            </h2>
                        </div>
                        <p className="text-gray-500 ml-10">
                            Select your stay dates and preferences
                        </p>
                    </div>

                    <div onSubmit={handleSubmit} className="space-y-6">
                        {/* Date Selection */}
                        <div className="grid md:grid-cols-2 gap-6">
                            {/* Check-in Date */}
                            <div className="group">
                                <label className="block text-sm font-semibold text-gray-700 mb-2">
                                    Check-in Date *
                                </label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                        <Calendar className="h-5 w-5 text-gray-400 group-focus-within:text-green-500 transition-colors" />
                                    </div>
                                    <input
                                        type="date"
                                        name="startDate"
                                        required
                                        onChange={handleChange}
                                        className="w-full pl-12 pr-4 py-3.5 rounded-xl border-2 border-gray-200 focus:border-green-500 focus:ring-4 focus:ring-green-100 transition-all outline-none text-gray-900"
                                    />
                                </div>
                            </div>

                            {/* Check-out Date */}
                            <div className="group">
                                <label className="block text-sm font-semibold text-gray-700 mb-2">
                                    Check-out Date *
                                </label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                        <Calendar className="h-5 w-5 text-gray-400 group-focus-within:text-green-500 transition-colors" />
                                    </div>
                                    <input
                                        type="date"
                                        name="endDate"
                                        required
                                        onChange={handleChange}
                                        className="w-full pl-12 pr-4 py-3.5 rounded-xl border-2 border-gray-200 focus:border-green-500 focus:ring-4 focus:ring-green-100 transition-all outline-none text-gray-900"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Nights Display */}
                        {nights > 0 && (
                            <div className="bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-200 rounded-xl p-4">
                                <div className="flex items-center justify-between">
                                    <span className="text-gray-700 font-medium">Total Nights</span>
                                    <span className="text-2xl font-bold text-green-600">{nights}</span>
                                </div>
                            </div>
                        )}

                        {/* Number of Guests */}
                        <div className="group">
                            <label className="block text-sm font-semibold text-gray-700 mb-2">
                                Number of Guests *
                            </label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                    <Users className="h-5 w-5 text-gray-400 group-focus-within:text-green-500 transition-colors" />
                                </div>
                                <input
                                    type="number"
                                    min="1"
                                    name="numGuests"
                                    value={form.numGuests}
                                    onChange={handleChange}
                                    className="w-full pl-12 pr-4 py-3.5 rounded-xl border-2 border-gray-200 focus:border-green-500 focus:ring-4 focus:ring-green-100 transition-all outline-none text-gray-900"
                                />
                            </div>
                        </div>

                        {/* Breakfast Option */}
                        <div className="bg-gradient-to-r from-amber-50 to-orange-50 border-2 border-amber-200 rounded-xl p-5">
                            <label className="flex items-start gap-4 cursor-pointer group">
                                <div className="relative flex items-center">
                                    <input
                                        type="checkbox"
                                        name="hasBreakfast"
                                        onChange={handleChange}
                                        className="w-6 h-6 text-green-600 border-2 border-gray-300 rounded-lg focus:ring-4 focus:ring-green-100 transition-all cursor-pointer"
                                    />
                                </div>
                                <div className="flex-1">
                                    <div className="flex items-center gap-2 mb-1">
                                        <Coffee className="w-5 h-5 text-amber-600" />
                                        <span className="font-semibold text-gray-900">
                                            Include Breakfast
                                        </span>
                                    </div>
                                    <p className="text-sm text-gray-600">
                                        Start your day with a delicious complimentary breakfast
                                    </p>
                                </div>
                            </label>
                        </div>

                        {/* Observations */}
                        <div className="group">
                            <label className="block text-sm font-semibold text-gray-700 mb-2">
                                Special Requests or Notes
                            </label>
                            <div className="relative">
                                <div className="absolute top-3.5 left-4 pointer-events-none">
                                    <FileText className="h-5 w-5 text-gray-400 group-focus-within:text-green-500 transition-colors" />
                                </div>
                                <textarea
                                    name="observations"
                                    placeholder="Any special requirements or preferences..."
                                    onChange={handleChange}
                                    rows="4"
                                    className="w-full pl-12 pr-4 py-3.5 rounded-xl border-2 border-gray-200 focus:border-green-500 focus:ring-4 focus:ring-green-100 transition-all outline-none text-gray-900 placeholder-gray-400 resize-none"
                                />
                            </div>
                        </div>

                        {/* Submit Button */}
                        <button
                            onClick={handleSubmit}
                            disabled={loading}
                            className="w-full mt-8 py-4 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-xl font-semibold text-lg hover:from-green-700 hover:to-emerald-700 focus:ring-4 focus:ring-green-200 transition-all shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 group"
                        >
                            {loading ? (
                                <>
                                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                                    Processing...
                                </>
                            ) : (
                                <>
                                    <Check className="w-5 h-5 group-hover:scale-110 transition-transform" />
                                    Confirm Booking
                                </>
                            )}
                        </button>
                    </div>
                </div>

                {/* Footer Note */}
                <div className="mt-6 bg-white/80 backdrop-blur rounded-2xl p-4 border border-gray-200">
                    <div className="flex items-start gap-3">
                        <Sparkles className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <p className="text-sm text-gray-600">
                            Your booking will be confirmed once reviewed by our team. You'll receive an email confirmation shortly.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}