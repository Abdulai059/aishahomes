import { useState, useCallback } from "react";
import {
    User,
    Mail,
    Phone,
    Globe,
    Calendar,
    Users,
    Coffee,
    FileText,
    Download,
    CheckCircle,
    Edit,
} from "lucide-react";
import toast from "react-hot-toast";
import supabase from "../services/SupabaseBooking";
import { usePDF } from 'react-to-pdf';

export default function BookingReview({ guestData, bookingData, onEdit, onBack }) {
    const [loading, setLoading] = useState(false);
    const [confirmed, setConfirmed] = useState(false);
    const [bookingId, setBookingId] = useState(null);

    // PDF hook
    const { toPDF, targetRef } = usePDF({ filename: 'booking-confirmation.pdf' });

    /* ---------------- Helpers ---------------- */
    const calculateNights = useCallback(() => {
        if (!bookingData?.startDate || !bookingData?.endDate) return 0;
        const start = new Date(bookingData.startDate);
        const end = new Date(bookingData.endDate);
        const diff = Math.ceil((end - start) / (1000 * 60 * 60 * 24));
        return diff > 0 ? diff : 0;
    }, [bookingData]);

    const nights = calculateNights();

    const formatDate = (dateString) => {
        if (!dateString) return "Not set";
        return new Date(dateString).toLocaleDateString("en-US", {
            weekday: "short",
            year: "numeric",
            month: "long",
            day: "numeric",
        });
    };

    /* ---------------- Confirm Booking ---------------- */
    const handleConfirm = async () => {
        if (loading) return;

        try {
            setLoading(true);

            // 1. Create guest
            const { data: guest, error: guestError } = await supabase
                .from("guests")
                .insert([guestData])
                .select()
                .single();

            if (guestError) throw guestError;

            // 2. Create booking
            const { data: booking, error: bookingError } = await supabase
                .from("bookings")
                .insert([
                    {
                        ...bookingData,
                        guestId: guest.id,
                        status: "unconfirmed",
                        isPaid: false,
                    },
                ])
                .select()
                .single();

            if (bookingError) throw bookingError;

            setBookingId(booking.id);
            setConfirmed(true);

            toast.success("Booking confirmed successfully");
        } catch (err) {
            console.error(err);
            toast.error(err.message || "Failed to confirm booking");
        } finally {
            setLoading(false);
        }
    };

    /* ---------------- Success Screen ---------------- */
    if (confirmed) {
        return (
            <div className="min-h-screen md:py-20 py-12 px-4">
                <div className="max-w-2xl mx-auto">
                    <div className="bg-white rounded-sm shadow-sm p-8 md:p-12 border border-gray-100 text-center">
                        <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full mb-6 shadow-lg">
                            <CheckCircle className="w-8 h-8 text-white" />
                        </div>

                        <h1 className="text-3xl font-semibold text-gray-900 mb-3">
                            Booking Confirmed! 🎉
                        </h1>

                        <p className="text-base text-gray-600 mb-8">
                            Your reservation has been successfully created
                        </p>

                        <div className="bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-200 rounded-2xl p-6 mb-8">
                            <p className="text-sm text-gray-600 mb-2">Booking Reference</p>
                            <p className="text-3xl font-bold text-green-600">#{bookingId}</p>
                        </div>

                        <div className="space-y-3">
                            <button
                                onClick={toPDF}
                                className="w-full py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl font-semibold text-base hover:from-blue-700 hover:to-indigo-700 focus:ring-4 focus:ring-blue-200 transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
                            >
                                <Download className="w-5 h-5" />
                                Download Confirmation
                            </button>

                            <button
                                onClick={() => window.location.reload()}
                                className="w-full py-3 text-base bg-gray-100 text-gray-700 rounded-xl font-semibold hover:bg-gray-200 transition-all"
                            >
                                Create New Booking
                            </button>
                        </div>

                        <div className="mt-8 bg-blue-50 border border-blue-200 rounded-xl p-4">
                            <p className="text-sm text-blue-800">
                                📧 A confirmation email has been sent to{" "}
                                <strong>{guestData.email}</strong>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    /* ---------------- Review Screen ---------------- */
    return (
        <div className="min-h-screen py-12 md:py-20 px-4">
            <div className="max-w-3xl mx-auto">
                <div className="text-center mb-8">
                    <h1 className="text-3xl font-semibold text-gray-900 mb-2">
                        Review Your Booking
                    </h1>
                    <p className="text-gray-600 text-base">
                        Please verify all details before confirming
                    </p>
                </div>

                <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-10 border border-gray-100">
                    {/* PDF Target */}
                    <div ref={targetRef}>
                        {/* Guest Info */}
                        <div className="mb-8">
                            <h2 className="text-2xl font-bold mb-4">Guest Information</h2>
                            <p><strong>Name:</strong> {guestData.fullName}</p>
                            <p><strong>Email:</strong> {guestData.email || 'Not provided'}</p>
                            {guestData.phone && <p><strong>Phone:</strong> {guestData.phone}</p>}
                            {guestData.country && <p><strong>Country:</strong> {guestData.country}</p>}
                        </div>

                        {/* Booking Info */}
                        <div className="mb-8">
                            <h2 className="text-2xl font-bold mb-4">Booking Details</h2>
                            <p><strong>Check-in:</strong> {formatDate(bookingData.startDate)}</p>
                            <p><strong>Check-out:</strong> {formatDate(bookingData.endDate)}</p>
                            <p><strong>Total Nights:</strong> {nights}</p>
                            <p><strong>Guests:</strong> {bookingData.numGuests}</p>
                            <p><strong>Breakfast:</strong> {bookingData.hasBreakfast ? 'Included' : 'Not included'}</p>
                            {bookingData.observations && <p><strong>Notes:</strong> {bookingData.observations}</p>}
                        </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-4 mt-4">
                        <button
                            onClick={onBack}
                            className="flex-1 py-4 bg-gray-100 text-gray-700 rounded-xl font-semibold hover:bg-gray-200 transition-all"
                        >
                            Go Back
                        </button>

                        <button
                            onClick={handleConfirm}
                            disabled={loading}
                            className="flex-1 py-4 bg-gradient-to-r from-violet-600 to-purple-600 text-white rounded-xl font-semibold hover:from-violet-700 hover:to-purple-700 focus:ring-4 focus:ring-violet-200 transition-all shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {loading ? 'Confirming...' : 'Confirm & Book'}
                        </button>
                    </div>

                    {/* Download Draft */}
                    <button
                        onClick={toPDF}
                        className="w-full mt-4 py-3 bg-blue-50 text-blue-700 rounded-xl font-semibold hover:bg-blue-100 transition-all"
                    >
                        <Download className="w-4 h-4 inline mr-2" />
                        Download Draft Confirmation
                    </button>
                </div>
            </div>
        </div>
    );
}
