import { Event, IEvent } from "../models/Event.model.js";

export const createEventService = async (
  payload: Partial<IEvent>,
  organizerId: string,
) => {
  return await Event.create({
    ...payload,
    organizer: organizerId,
  });
};

export const getAllEventsService = async () => {
  return await Event.find().populate("organizer", "name email");
};

export const getMyEventsService = async (organizerId: string) => {
  return await Event.find({
    organizer: organizerId,
  });
};

export const updateEventService = async (
  eventId: string,
  organizerId: string,
  payload: Partial<IEvent>,
) => {
  const event = await Event.findById(eventId);

  if (!event) {
    throw new Error("Event not found");
  }

  if (event.organizer.toString() !== organizerId) {
    throw new Error("You can only update your own events");
  }

  Object.assign(event, payload);

  await event.save();

  return event;
};

export const deleteEventService = async (
  eventId: string,
  organizerId: string,
) => {
  const event = await Event.findById(eventId);

  if (!event) {
    throw new Error("Event not found");
  }

  if (event.organizer.toString() !== organizerId) {
    throw new Error("You can only delete your own events");
  }

  await Event.findByIdAndDelete(eventId);
};
