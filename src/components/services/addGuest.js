import supabase from "./SupabaseBooking";

export async function addGuest(guest) {
    const {
        fullName,
        email,
        nationality = "Ghana",         
        countryFlag = "https://flagcdn.com/gh.svg", 
        nationalID = "233000000000",           
    } = guest;

    if (!fullName) {
        return { error: { message: "Full name is required" } };
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
            },
        ])
        .select()
        .single();

    if (error) {
        console.error("Insert failed for Guest:", error);
        return { error };
    }

    return { data };
}
