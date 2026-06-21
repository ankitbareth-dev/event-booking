import { Response } from "express";
import { AuthRequest } from "../middlewares/auth.middleware.js";
export declare const createEvent: (req: AuthRequest, res: Response, next: import("express").NextFunction) => void;
export declare const getAllEvents: (req: import("express").Request<import("express-serve-static-core").ParamsDictionary, any, any, import("qs").ParsedQs, Record<string, any>>, res: Response, next: import("express").NextFunction) => void;
export declare const getMyEvents: (req: AuthRequest, res: Response, next: import("express").NextFunction) => void;
export declare const updateEvent: (req: AuthRequest, res: Response, next: import("express").NextFunction) => void;
export declare const deleteEvent: (req: AuthRequest, res: Response, next: import("express").NextFunction) => void;
