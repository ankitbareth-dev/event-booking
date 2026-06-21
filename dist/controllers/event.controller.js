import { catchAsync } from "../utils/catchAsync.js";
import { createEventService, deleteEventService, getAllEventsService, getMyEventsService, updateEventService, } from "../services/event.service.js";
export const createEvent = catchAsync(async (req, res) => {
    const result = await createEventService(req.body, req.user.id);
    res.status(201).json({
        success: true,
        message: "Event created successfully",
        data: result,
    });
});
export const getAllEvents = catchAsync(async (_req, res) => {
    const result = await getAllEventsService();
    res.status(200).json({
        success: true,
        data: result,
    });
});
export const getMyEvents = catchAsync(async (req, res) => {
    const result = await getMyEventsService(req.user.id);
    res.status(200).json({
        success: true,
        data: result,
    });
});
export const updateEvent = catchAsync(async (req, res) => {
    const result = await updateEventService(req.params.id, req.user.id, req.body);
    res.status(200).json({
        success: true,
        message: "Event updated successfully",
        data: result,
    });
});
export const deleteEvent = catchAsync(async (req, res) => {
    await deleteEventService(req.params.id, req.user.id);
    res.status(200).json({
        success: true,
        message: "Event deleted successfully",
    });
});
//# sourceMappingURL=event.controller.js.map