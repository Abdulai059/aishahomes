import { useQuery } from "@tanstack/react-query";
import { getAllPosts, getPost } from "./apiblogpost";


export function usePosts() {
    return useQuery({
        queryKey: ["posts"],
        queryFn: getAllPosts,
    });
}

export function usePost(postId) {
    return useQuery({
        queryKey: ["post", postId],
        queryFn: () => getPost(postId),
        enabled: !!postId,
    });
}
