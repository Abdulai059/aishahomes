// pdfUtils.js
import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";

// Attach fonts
pdfMake.vfs = pdfFonts.pdfMake.vfs;

export const generateBookingPDF = (guestData, bookingData, bookingId) => {
    const start = new Date(bookingData.startDate);
    const end = new Date(bookingData.endDate);
    const nights = Math.ceil((end - start) / (1000 * 60 * 60 * 24));

    const formatDate = (dateString) =>
        new Date(dateString).toLocaleDateString("en-US", {
            weekday: "short",
            year: "numeric",
            month: "long",
            day: "numeric",
        });

    const docDefinition = {
        content: [
            { text: "Booking Confirmation", style: "header" },
            { text: `Booking Reference: #${bookingId}`, style: "subheader", margin: [0, 0, 0, 15] },

            { text: "Guest Information", style: "sectionHeader" },
            { text: `Full Name: ${guestData.fullName}` },
            { text: `Email: ${guestData.email}` },
            guestData.phone ? { text: `Phone: ${guestData.phone}` } : {},
            guestData.country ? { text: `Country: ${guestData.country}` } : {},

            { text: "Booking Details", style: "sectionHeader", margin: [0, 10, 0, 5] },
            { text: `Check-in: ${formatDate(bookingData.startDate)}` },
            { text: `Check-out: ${formatDate(bookingData.endDate)}` },
            { text: `Total Nights: ${nights}` },
            { text: `Number of Guests: ${bookingData.numGuests}` },
            { text: `Breakfast: ${bookingData.hasBreakfast ? "Included" : "Not included"}` },
            bookingData.observations ? { text: `Special Requests: ${bookingData.observations}` } : {},

            { text: "\nThank you for your booking! 🎉", style: "footer" },
        ],
        styles: {
            header: { fontSize: 22, bold: true, margin: [0, 0, 0, 10] },
            subheader: { fontSize: 16, bold: true },
            sectionHeader: { fontSize: 14, bold: true, margin: [0, 10, 0, 5] },
            footer: { fontSize: 12, italics: true, margin: [0, 20, 0, 0] },
        },
    };

    pdfMake.createPdf(docDefinition).download(`booking-${bookingId}.pdf`);
};
