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


// geting single post 
export async function getPost(id) {
    const { data, error } = await supabase
        .from("posts")
        .select("*")
        .eq("id", id)
        .single();

    if (error) throw error;
    return data;
}

// geting all post 
export async function getAllPosts() {
    const { data, error } = await supabase
        .from("posts")
        .select("*")
        .order("created_at", { ascending: false });

    if (error) throw error;
    return data;
}
