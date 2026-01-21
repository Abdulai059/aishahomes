import supabase from "./SupabaseBooking";


export async function addGuest(guest) {
    const {
        fullName,
        email,
        nationality,
        countryFlag,
        nationalID,
    } = guest;

    // Required field check
    if (!fullName) {
        return {
            error: { message: "Full name is required" },
        };
    }

    const { data, error } = await supabase
        .from("Guests")
        .insert([
            {
                fullName,
                email,
                nationality,
                countryFlag,
                nationalID,
                // created_at will be set automatically by Supabase
            },
        ])
        .select()
        .single(); // return one inserted row

    if (error) {
        console.error("Insert failed for Guest:", error);
        return { error };
    }

    return { data };
}
