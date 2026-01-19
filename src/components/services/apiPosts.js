// services/usePosts.js
import { useQuery } from "@tanstack/react-query";
import supabase from "./Supabase";

export async function getPosts() {
    const { data, error } = await supabase
        .from("posts")
        .select("*")
        .order("created_at", { ascending: false });

    if (error) throw error;
    return data;
}

export function usePosts() {
    // ✅ Must use object syntax in v5
    return useQuery({
        queryKey: ["posts"],
        queryFn: getPosts,
    });
}
