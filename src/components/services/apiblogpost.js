import supabase from "./Supabase";

export async function getPosts() {
    const { data, error } = await supabase
        .from("posts")
        .select("*")
        .order("created_at", { ascending: false })
        .limit(3);

    console.log("Supabase posts data:", data);
    console.log("Supabase posts error:", error);

    if (error) throw error;
    return data;
}
