import { useState } from "react";

import GuestForm from "../ui/GuestForm";
import BookingForm from "../ui/BookingForm";
import BookingReview from "./BookingReview";

const STEPS = {
  GUEST: "guest",
  BOOKING: "booking",
  REVIEW: "review",
};

export default function CreateReservation() {
  const [step, setStep] = useState(STEPS.GUEST);
  const [guest, setGuest] = useState(null);
  const [booking, setBooking] = useState(null);

  function goTo(step) {
    setStep(step);
  }

  function handleGuestComplete(data) {
    setGuest(data);
    goTo(STEPS.BOOKING);
  }

  function handleBookingComplete(data) {
    setBooking(data);
    goTo(STEPS.REVIEW);
  }

  function handleEdit(section) {
    goTo(section === "guest" ? STEPS.GUEST : STEPS.BOOKING);
  }

  return (
    <>
      {step === STEPS.GUEST && (
        <GuestForm onSuccess={handleGuestComplete} />
      )}

      {step === STEPS.BOOKING && guest && (
        <BookingForm
          guestData={guest}
          onReview={handleBookingComplete}
        />
      )}

      {step === STEPS.REVIEW && guest && booking && (
        <BookingReview
          guestData={guest}
          bookingData={booking}
          onEdit={handleEdit}
          onBack={() => goTo(STEPS.BOOKING)}
        />
      )}
    </>
  );
}
