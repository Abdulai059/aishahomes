import { useState } from "react";
import GuestForm from "../ui/GuestForm.";
import BookingForm from "../ui/BookingForm";


export default function CreateReservation() {
  const [step, setStep] = useState("guest");
  const [guestId, setGuestId] = useState(null);

  return (
    <div className="min-h-screen bg-gray-50 py-10">
      {step === "guest" && (
        <GuestForm
          onSuccess={(id) => {
            setGuestId(id);
            setStep("booking");
          }}
        />
      )}

      {step === "booking" && (
        <BookingForm guestId={guestId} />
      )}
    </div>
  );
}
