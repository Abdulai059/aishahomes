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
    Sparkles,
} from "lucide-react";
import toast from "react-hot-toast";
import supabase from "../services/SupabaseBooking";

export default function BookingReview({ guestData, bookingData, onEdit, onBack }) {
    const [loading, setLoading] = useState(false);
    const [confirmed, setConfirmed] = useState(false);
    const [bookingId, setBookingId] = useState(null);

    /* ---------------- derived helpers ---------------- */

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

    /* ---------------- core action ---------------- */

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

            // Email trigger goes here (Edge Function)

        } catch (err) {
            console.error(err);
            toast.error(err.message || "Failed to confirm booking");
        } finally {
            setLoading(false);
        }
    };

    /* ---------------- download ---------------- */

    const handleDownloadPDF = () => {
        const content = `
BOOKING CONFIRMATION
===================

Booking ID: ${bookingId || "PENDING"}
Date: ${new Date().toLocaleDateString()}

GUEST INFORMATION
-----------------
Name: ${guestData.fullName}
Email: ${guestData.email}
Phone: ${guestData.phone || "N/A"}
Country: ${guestData.country || "N/A"}

BOOKING DETAILS
---------------
Check-in: ${formatDate(bookingData.startDate)}
Check-out: ${formatDate(bookingData.endDate)}
Total Nights: ${nights}
Number of Guests: ${bookingData.numGuests}
Breakfast Included: ${bookingData.hasBreakfast ? "Yes" : "No"}

${bookingData.observations ? `Special Requests:\n${bookingData.observations}` : ""}

Thank you for your booking!
`;

        const blob = new Blob([content], { type: "text/plain" });
        const url = URL.createObjectURL(blob);

        const a = document.createElement("a");
        a.href = url;
        a.download = `booking-confirmation-${bookingId || "draft"}.txt`;
        a.click();

        URL.revokeObjectURL(url);
    };

    /* ---------------- success screen ---------------- */

    if (confirmed) {
        return (
            <div className="min-h-screen md:py-20 py-12 px-4">
                <div className="max-w-2xl mx-auto">
                    <div className="bg-white rounded-sm shadow-sm p-8 md:p-12 border border-gray-100 text-center">
                        <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full mb-6 shadow-lg">
                            <CheckCircle className="w-8 h-8 text-white" />
                        </div>

                        <h1 className="text-2xl font-semibold text-gray-900 mb-3">
                            Booking Confirmed! 🎉
                        </h1>

                        <p className="md:text-base text-sm text-gray-600 mb-8">
                            Your reservation has been successfully created
                        </p>

                        <div className="bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-200 rounded-2xl p-6 mb-8">
                            <p className="text-sm text-gray-600 mb-2">Booking Reference</p>
                            <p className="text-3xl font-bold text-green-600">#{bookingId}</p>
                        </div>

                        <div className="space-y-3">
                            <button
                                onClick={handleDownloadPDF}
                                className="w-full py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl font-semibold md:text-base text-sm hover:from-blue-700 hover:to-indigo-700 focus:ring-4 focus:ring-blue-200 transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
                            >
                                <Download className="w-5 h-5" />
                                Download Confirmation
                            </button>

                            <button
                                onClick={() => window.location.reload()}
                                className="w-full py-3 md:text-base text-sm bg-gray-100 text-gray-700 rounded-xl font-semibold hover:bg-gray-200 transition-all"
                            >
                                Create New Booking
                            </button>
                        </div>

                        <div className="mt-8 bg-blue-50 border border-blue-200 rounded-xl p-4">
                            <p className="md:text-sm text-xs text-blue-800">
                                A confirmation email has been sent to{" "}
                                <strong>{guestData.email}</strong>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    /* ---------------- review screen ---------------- */

    return (
        <div className="min-h-screen py-12 md:py-20 px-4">
            <div className="max-w-3xl mx-auto">
                {/* Header */}
                <div className="text-center mb-8">

                    <h1 className="text-3xl md:text-lg font-semibold text-gray-900 mb-2">
                        Review Your Booking
                    </h1>
                    <p className="text-gray-600 text-sm md:text-base">
                        Please verify all details before confirming
                    </p>
                </div>

                {/* Review Card */}
                <div className="bg-white rounded-sm shadow-sm  p-4 md:p-10 border border-gray-100">
                    {/* Guest Information Section */}
                    <div className="mb-8">
                        <div className="flex items-center justify-between mb-6">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center">
                                    <User className="w-5 h-5 text-indigo-600" />
                                </div>
                                <h2 className="md:text-2xl text-xl font-bold text-gray-800">
                                    Guest Information
                                </h2>
                            </div>
                            <button
                                onClick={() => onEdit('guest')}
                                className="flex items-center gap-2 px-4 py-2 text-indigo-600 hover:bg-indigo-50 rounded-lg transition-all"
                            >
                                <Edit className="w-4 h-4 text-white" />
                                <span className="text-sm text-white font-medium">Edit</span>
                            </button>
                        </div>

                        <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-sm p-6 space-y-4">
                            <div className="flex items-start gap-3">
                                <User className="w-5 h-5 text-gray-500 mt-0.5" />
                                <div>
                                    <p className="text-sm text-gray-600">Full Name</p>
                                    <p className="font-semibold text-gray-900">{guestData.fullName}</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-3">
                                <Mail className="w-5 h-5 text-gray-500 mt-0.5" />
                                <div>
                                    <p className="text-sm text-gray-600">Email</p>
                                    <p className="font-semibold text-gray-900">{guestData.email || 'Not provided'}</p>
                                </div>
                            </div>

                            {guestData.phone && (
                                <div className="flex items-start gap-3">
                                    <Phone className="w-5 h-5 text-gray-500 mt-0.5" />
                                    <div>
                                        <p className="text-sm text-gray-600">Phone</p>
                                        <p className="font-semibold text-gray-900">{guestData.phone}</p>
                                    </div>
                                </div>
                            )}

                            {guestData.country && (
                                <div className="flex items-start gap-3">
                                    <Globe className="w-5 h-5 text-gray-500 mt-0.5" />
                                    <div>
                                        <p className="text-sm text-gray-600">Country</p>
                                        <p className="font-semibold text-gray-900">{guestData.country}</p>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Booking Details Section */}
                    <div className="mb-8">
                        <div className="flex items-center justify-between mb-6">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                                    <Calendar className="w-5 h-5 text-green-600" />
                                </div>
                                <h2 className="md:text-2xl text-xl font-bold text-gray-800">
                                    Booking Details
                                </h2>
                            </div>
                            <button
                                onClick={() => onEdit('booking')}
                                className="flex items-center gap-2 px-4 py-2 text-green-600 hover:bg-green-50 rounded-lg transition-all"
                            >
                                <Edit className="w-4 h-4 text-white" />
                                <span className="text-sm text-white font-medium">Edit</span>
                            </button>
                        </div>

                        <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-6 space-y-4">
                            <div className="grid md:grid-cols-2 gap-4">
                                <div className="flex items-start gap-3">
                                    <Calendar className="w-5 h-5 text-gray-500 mt-0.5" />
                                    <div>
                                        <p className="text-sm text-gray-600">Check-in</p>
                                        <p className="font-semibold text-gray-900">{formatDate(bookingData.startDate)}</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-3">
                                    <Calendar className="w-5 h-5 text-gray-500 mt-0.5" />
                                    <div>
                                        <p className="text-sm text-gray-600">Check-out</p>
                                        <p className="font-semibold text-gray-900">{formatDate(bookingData.endDate)}</p>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-white rounded-xl p-4 border-2 border-green-200">
                                <div className="flex items-center justify-between">
                                    <span className="text-gray-700 font-medium">Total Nights</span>
                                    <span className="text-2xl font-bold text-green-600">{nights}</span>
                                </div>
                            </div>

                            <div className="flex items-start gap-3">
                                <Users className="w-5 h-5 text-gray-500 mt-0.5" />
                                <div>
                                    <p className="text-sm text-gray-600">Number of Guests</p>
                                    <p className="font-semibold text-gray-900">{bookingData.numGuests}</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-3">
                                <Coffee className="w-5 h-5 text-gray-500 mt-0.5" />
                                <div>
                                    <p className="text-sm text-gray-600">Breakfast</p>
                                    <p className="font-semibold text-gray-900">
                                        {bookingData.hasBreakfast ? '✓ Included' : '✗ Not included'}
                                    </p>
                                </div>
                            </div>

                            {bookingData.observations && (
                                <div className="flex items-start gap-3">
                                    <FileText className="w-5 h-5 text-gray-500 mt-0.5" />
                                    <div>
                                        <p className="text-sm text-gray-600">Special Requests</p>
                                        <p className="font-medium text-gray-900">{bookingData.observations}</p>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-4">
                        <button
                            onClick={onBack}
                            className="flex-1 py-2 md:py-4 bg-gray-100 text-gray-700 rounded-sm font-semibold hover:bg-gray-200 transition-all"
                        >
                            Go Back
                        </button>

                        <button
                            onClick={handleConfirm}
                            disabled={loading}
                            className="flex-2 py-4 md:px-8 md:py-2 bg-gradient-to-r from-violet-600 to-purple-600 text-white rounded-sm font-semibold text-base md:text-lg hover:from-violet-700 hover:to-purple-700 focus:ring-4 focus:ring-violet-200 transition-all shadow-lg hover:shadow-xl disabled:opacibasety-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                        >
                            {loading ? (
                                <>
                                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                                    Confirming...
                                </>
                            ) : (
                                <>
                                    <CheckCircle className="w-5 h-5" />
                                    Confirm & Book
                                </>
                            )}
                        </button>
                    </div>

                    {/* Download Draft */}
                    <button
                        onClick={handleDownloadPDF}
                        className="w-full mt-4 py-3 bg-blue-50 text-blue-600 rounded-sm text-xs font-medium hover:bg-blue-100 transition-all flex items-center justify-center gap-2"
                    >
                        <Download className="w-4 h-4" />
                        Download Draft Confirmation
                    </button>
                </div>
            </div>
        </div>
    );
}