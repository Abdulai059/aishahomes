import { useState } from "react";
import { Calendar, Users, Coffee, FileText, ArrowRight, Sparkles } from "lucide-react";

export default function BookingForm({ guestData, initialData, onReview }) {
    const [form, setForm] = useState(initialData || {
        startDate: "",
        endDate: "",
        numGuests: 1,
        hasBreakfast: false,
        observations: "",
    });

    function handleChange(e) {
        const { name, value, type, checked } = e.target;
        setForm({
            ...form,
            [name]: type === "checkbox" ? checked : value,
        });
    }

    function handleContinueToReview() {
        if (!form.startDate || !form.endDate) {
            alert('Please select check-in and check-out dates');
            return;
        }
        onReview(form);
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
        <div className="min-h-screen md:py-20 py-12 px-4">
            <div className="max-w-2xl mx-auto">
                {/* Header Section */}
                <div className="text-center mb-8">

                    <h1 className="md:text-3xl text-2xl md:px-0 px-10 font-semibold text-gray-900 mb-2 tracking-wider"
                        style={{ fontFamily: "Columbia-Serial" }}>
                        Complete Your Booking
                    </h1>
                    <p className="text-gray-600 text-base">
                        Choose your dates and preferences
                    </p>
                </div>

                {/* Form Card */}
                <div className="bg-white rounded-sm shadow-sm p-4 md:p-10 border border-gray-100">
                    <div className="mb-8">
                        <div className="flex items-center gap-2 mb-2">
                            <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
                                <span className="text-green-600 font-semibold text-sm">2</span>
                            </div>
                            <h2 className="text-xl md:text-2xl font-bold text-gray-800">
                                Booking Details
                            </h2>
                        </div>
                        <p className="text-gray-500 ml-10 md:text-base text-sm">
                            Select your stay dates and preferences
                        </p>
                    </div>

                    {/* Guest Info Display */}
                    {guestData && (
                        <div className="bg-indigo-50 border-2 border-indigo-200 rounded-xl p-4 mb-6">
                            <p className="text-sm text-indigo-600 font-medium mb-1">Booking for:</p>
                            <p className="text-lg font-bold text-indigo-900">{guestData.fullName}</p>
                            {guestData.email && (
                                <p className="text-sm text-indigo-700">{guestData.email}</p>
                            )}
                        </div>
                    )}

                    <div className="space-y-6">
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
                                        value={form.startDate}
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
                                        value={form.endDate}
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
                                        checked={form.hasBreakfast}
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
                                    value={form.observations}
                                    onChange={handleChange}
                                    rows="4"
                                    className="w-full pl-12 pr-4 py-3.5 rounded-xl border-2 border-gray-200 focus:border-green-500 focus:ring-4 focus:ring-green-100 transition-all outline-none text-gray-900 placeholder-gray-400 resize-none"
                                />
                            </div>
                        </div>

                        {/* Review Button */}
                        <button
                            onClick={handleContinueToReview}
                            className="w-full mt-8 py-4 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-xl font-semibold text-base hover:from-green-700 hover:to-emerald-700 focus:ring-4 focus:ring-green-200 transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2 group"
                        >
                            Review Booking
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </button>
                    </div>
                </div>

                {/* Footer Note */}
                <div className="mt-6 bg-white/80 backdrop-blur rounded-2xl p-4 border border-gray-200">
                    <div className="flex items-start gap-3">
                        <Sparkles className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <p className="text-sm text-gray-600">
                            You'll have a chance to review all details before final confirmation
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}