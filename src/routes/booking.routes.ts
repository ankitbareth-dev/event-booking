import { Router } from "express";
import { createBooking } from "../controllers/booking.controller.js";
import { authenticate } from "../middlewares/auth.middleware.js";
import { authorize } from "../middlewares/role.middleware.js";

const router = Router();

router.post("/", authenticate, authorize("customer"), createBooking);

export default router;
