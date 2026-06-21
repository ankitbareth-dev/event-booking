import { Router } from "express";
import {
  createEvent,
  deleteEvent,
  getAllEvents,
  getMyEvents,
  updateEvent,
} from "../controllers/event.controller.js";
import { authenticate } from "../middlewares/auth.middleware.js";
import { authorize } from "../middlewares/role.middleware.js";

const router = Router();

router.get("/", getAllEvents);

router.post("/", authenticate, authorize("organizer"), createEvent);

router.get("/my-events", authenticate, authorize("organizer"), getMyEvents);

router.put("/:id", authenticate, authorize("organizer"), updateEvent);

router.delete("/:id", authenticate, authorize("organizer"), deleteEvent);

export default router;
