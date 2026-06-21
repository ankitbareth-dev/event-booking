export const sendBookingConfirmation = (
  customerId: string,
  eventId: string,
  quantity: number,
) => {
  setTimeout(() => {
    console.log(`
===============================
BOOKING CONFIRMATION
===============================
Customer : ${customerId}
Event    : ${eventId}
Tickets  : ${quantity}

Booking confirmation email sent successfully.
===============================
`);
  }, 0);
};
