import { Response } from "express";
import { catchAsync } from "../utils/catchAsync.js";
import { AuthRequest } from "../middlewares/auth.middleware.js";
import { createBookingService } from "../services/booking.service.js";

export const createBooking = catchAsync(
  async (req: AuthRequest, res: Response) => {
    const result = await createBookingService(req.user!.id, req.body);

    res.status(201).json({
      success: true,
      message: "Booking successful",
      data: result,
    });
  },
);
