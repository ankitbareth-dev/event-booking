import { NextFunction, Response } from "express";
import { AuthRequest } from "./auth.middleware.js";
export declare const authorize: (...roles: ("organizer" | "customer")[]) => (req: AuthRequest, res: Response, next: NextFunction) => Response<any, Record<string, any>> | undefined;
