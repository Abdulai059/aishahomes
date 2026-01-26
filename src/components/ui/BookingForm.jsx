// components/BookingForm.jsx
import { useState } from "react";
import { Calendar, Users, Coffee, FileText, ArrowRight, Sparkles } from "lucide-react";

export default function BookingForm({ guestData, initialData, onReview }) {
    const [form, setForm] = useState(
        initialData || {
            startDate: "",
            endDate: "",
            numGuests: 1,
            hasBreakfast: false,
            observations: "",
        }
    );

    function handleChange(e) {
        const { name, value, type, checked } = e.target;
        setForm((prev) => ({
            ...prev,
            [name]: type === "checkbox" ? checked : value,
        }));
    }

    // Calculate nights (at least 1 if valid dates)
    const numNights =
        form.startDate && form.endDate
            ? Math.max(
                1,
                Math.ceil(
                    (new Date(form.endDate) - new Date(form.startDate)) / (1000 * 60 * 60 * 24)
                )
            )
            : 0;

    function handleContinueToReview() {
        if (!form.startDate || !form.endDate) {
            alert("Please select both check-in and check-out dates.");
            return;
        }

        if (numNights <= 0) {
            alert("Check-out date must be after check-in date.");
            return;
        }

        // Auto-fill fields to prevent errors
        const bookingData = {
            ...form,
            numNights,
            cabinPrice: form.cabinPrice || 0,
            extrasPrice: form.extrasPrice || 0,
            totalPrice: form.totalPrice || 0,
            status: form.status || "pending",
            hasBreakfast: form.hasBreakfast || false,
            isPaid: form.isPaid || false,
            observations: form.observations || "",
            cabinId: form.cabinId || null,
            guestId: form.guestId || guestData?.id || null,
        };

        onReview(bookingData);
    }

    return (
        <div className="min-h-screen md:py-20 py-12 px-4">
            <div className="max-w-2xl mx-auto">
                <div className="text-center mb-8">
                    <h1
                        className="md:text-3xl text-2xl md:px-0 px-10 font-semibold text-gray-900 mb-2 tracking-wider"
                        style={{ fontFamily: "Columbia-Serial" }}
                    >
                        Complete Your Booking
                    </h1>
                    <p className="text-gray-600 text-base">Choose your dates and preferences</p>
                </div>

                <div className="bg-white rounded-sm shadow-sm p-4 md:p-10 border border-gray-100">
                    {guestData && (
                        <div className="bg-indigo-50 border-2 border-indigo-200 rounded-xl p-4 mb-6">
                            <p className="text-sm text-indigo-600 font-medium mb-1">Booking for:</p>
                            <p className="text-lg font-bold text-indigo-900">{guestData.fullName}</p>
                            {guestData.email && <p className="text-sm text-indigo-700">{guestData.email}</p>}
                        </div>
                    )}

                    <div className="space-y-6">
                        {/* Dates */}
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="group">
                                <label className="block text-sm font-semibold text-gray-700 mb-2">Check-in Date *</label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                        <Calendar className="h-5 w-5 text-gray-400" />
                                    </div>
                                    <input
                                        type="date"
                                        name="startDate"
                                        value={form.startDate}
                                        onChange={handleChange}
                                        className="w-full pl-12 pr-4 py-3.5 rounded-xl border-2 border-gray-200 focus:border-green-500 focus:ring-4 focus:ring-green-100 outline-none"
                                    />
                                </div>
                            </div>

                            <div className="group">
                                <label className="block text-sm font-semibold text-gray-700 mb-2">Check-out Date *</label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                        <Calendar className="h-5 w-5 text-gray-400" />
                                    </div>
                                    <input
                                        type="date"
                                        name="endDate"
                                        min={form.startDate}
                                        value={form.endDate}
                                        onChange={handleChange}
                                        className="w-full pl-12 pr-4 py-3.5 rounded-xl border-2 border-gray-200 focus:border-green-500 focus:ring-4 focus:ring-green-100 outline-none"
                                    />
                                </div>
                            </div>
                        </div>

                        {numNights > 0 && (
                            <div className="bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-200 rounded-xl p-4">
                                <div className="flex items-center justify-between">
                                    <span className="text-gray-700 font-medium">Total Nights</span>
                                    <span className="text-2xl font-bold text-green-600">{numNights}</span>
                                </div>
                            </div>
                        )}

                        {/* Guests */}
                        <div className="group">
                            <label className="block text-sm font-semibold text-gray-700 mb-2">Number of Guests *</label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                    <Users className="h-5 w-5 text-gray-400" />
                                </div>
                                <input
                                    type="number"
                                    min="1"
                                    name="numGuests"
                                    value={form.numGuests}
                                    onChange={handleChange}
                                    className="w-full pl-12 pr-4 py-3.5 rounded-xl border-2 border-gray-200 focus:border-green-500 focus:ring-4 focus:ring-green-100 outline-none"
                                />
                            </div>
                        </div>

                        {/* Breakfast */}
                        <label className="flex items-start gap-4 cursor-pointer bg-gradient-to-r from-amber-50 to-orange-50 border-2 border-amber-200 rounded-xl p-5">
                            <input
                                type="checkbox"
                                name="hasBreakfast"
                                checked={form.hasBreakfast}
                                onChange={handleChange}
                                className="w-6 h-6 text-green-600 border-2 border-gray-300 rounded-lg"
                            />
                            <div>
                                <div className="flex items-center gap-2 mb-1">
                                    <Coffee className="w-5 h-5 text-amber-600" />
                                    <span className="font-semibold text-gray-900">Include Breakfast</span>
                                </div>
                                <p className="text-sm text-gray-600">Complimentary breakfast included</p>
                            </div>
                        </label>

                        {/* Observations */}
                        <div className="group">
                            <label className="block text-sm font-semibold text-gray-700 mb-2">Special Requests or Notes</label>
                            <div className="relative">
                                <div className="absolute top-3.5 left-4 pointer-events-none">
                                    <FileText className="h-5 w-5 text-gray-400" />
                                </div>
                                <textarea
                                    name="observations"
                                    value={form.observations}
                                    onChange={handleChange}
                                    rows="4"
                                    className="w-full pl-12 pr-4 py-3.5 rounded-xl border-2 border-gray-200 focus:border-green-500 focus:ring-4 focus:ring-green-100 outline-none resize-none"
                                />
                            </div>
                        </div>

                        {/* Review Button */}
                        <button
                            type="button"
                            onClick={handleContinueToReview}
                            className="w-full mt-8 py-4 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-xl font-semibold hover:from-green-700 hover:to-emerald-700 focus:ring-4 focus:ring-green-200 transition-all flex items-center justify-center gap-2"
                        >
                            Review Booking
                            <ArrowRight className="w-5 h-5" />
                        </button>
                    </div>
                </div>

                <div className="mt-6 bg-white/80 backdrop-blur rounded-2xl p-4 border border-gray-200">
                    <div className="flex items-start gap-3">
                        <Sparkles className="w-5 h-5 text-green-600 mt-0.5" />
                        <p className="text-sm text-gray-600">
                            You'll review all details before confirmation
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
