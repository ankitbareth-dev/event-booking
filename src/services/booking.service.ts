import { Booking } from "../models/Booking.model.js";
import { Event } from "../models/Event.model.js";
import { IBooking } from "../models/Booking.model.js";
import { sendBookingConfirmation } from "../jobs/booking.job.js";

export const createBookingService = async (
  customerId: string,
  payload: Partial<IBooking>,
) => {
  const { event: eventId, quantity } = payload;

  const event = await Event.findById(eventId);

  if (!event) {
    throw new Error("Event not found");
  }

  if (event.availableTickets < quantity!) {
    throw new Error("Not enough tickets available");
  }

  event.availableTickets -= quantity!;

  await event.save();

  const booking = await Booking.create({
    customer: customerId,
    event: eventId,
    quantity,
  });

  sendBookingConfirmation(customerId, eventId!.toString(), quantity!);

  return booking;
};
