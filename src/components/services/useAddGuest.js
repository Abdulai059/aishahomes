import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { addGuest } from "./addGuest";

export function useAddGuest() {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: addGuest,
        onSuccess: (result) => {
            toast.success("Guest added successfully!");
            queryClient.invalidateQueries(["guests"]);
        },
        onError: (err) => {
            toast.error(err.message || "Failed to add guest");
        },
    });
}
