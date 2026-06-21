import express, { Application } from "express";
import morgan from "morgan";
import cors from "cors";
import cookieParser from "cookie-parser";
import { globalErrorHandler } from "./middlewares/globalErrorHandler.js";
import authRoutes from "./routes/auth.routes.js";
import eventRoutes from "./routes/event.routes.js";

const app: Application = express();

app.use(
  cors({
    origin: "*",
  }),
);

app.use(express.json());
app.use(cookieParser());
app.use(morgan("dev"));

app.use("/api/auth", authRoutes);
app.use("/api/events", eventRoutes);

app.get("/", (_req, res) => {
  res.status(200).json({
    message: "Server is running",
  });
});
app.use(globalErrorHandler);

export default app;
