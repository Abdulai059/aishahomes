import supabase from "./SupabaseBooking";

export async function addBooking(booking) {
    const {
        cabinPrice,
        extrasPrice,
        totalPrice,
        status = "pending",
        hasBreakfast = false,
        isPaid = false,
        observations = "",
        cabinId,
        guestId,
    } = booking;

    // Validation
    if (!guestId) {
        return { error: { message: "Guest ID is required for booking." } };
    }

    const { data, error } = await supabase
        .from("Bookings")
        .insert([
            {
                cabinPrice,
                extrasPrice,
                totalPrice,
                status,
                hasBreakfast,
                isPaid,
                observations,
                cabinId,
                guestId,
            },
        ])
        .select(); // returns the inserted row(s)

    if (error) {
        console.error("Insert failed for Booking:", error);
        return { error };
    }

    console.log("Inserted booking:", data);
    return { data };
}
