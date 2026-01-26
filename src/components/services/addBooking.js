
import supabase from "./SupabaseBooking";

export async function addBooking(booking) {
    const {
        cabinPrice = 0,
        extrasPrice = 0,
        totalPrice = 0,
        status = "pending",
        hasBreakfast = false,
        isPaid = false,
        observations = "",
        numNights = 1,
        cabinId,
        guestId,
    } = booking;

    if (!guestId) {
        return { error: { message: "Guest ID is required for booking." } };
    }

    if (!cabinId) {
        return { error: { message: "Cabin ID is required for booking." } };
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
                numNights,
                isPaid,
                observations,
                cabinId,
                guestId,
            },
        ])
        .select()
        .single();

    if (error) {
        console.error("Insert failed for Booking:", error);
        return { error };
    }

    return { data };
}
