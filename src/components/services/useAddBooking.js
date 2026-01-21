import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { addBooking } from "./addBooking";


export function useAddBooking() {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: addBooking,
        onSuccess: () => {
            toast.success("Booking created successfully!");
            queryClient.invalidateQueries(["bookings"]);
        },
        onError: (err) => {
            toast.error(err.message || "Failed to create booking");
        },
    });
}
