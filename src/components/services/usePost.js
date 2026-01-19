import { useQuery } from "@tanstack/react-query";
import { getPosts } from "./apiblogpost";

export function usePosts() {
    return useQuery({
        queryKey: ["posts"],
        queryFn: getPosts,
    });
}
