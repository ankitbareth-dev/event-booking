import { IUser } from "../models/User.model.js";
export declare const registerUserService: (payload: Partial<IUser>) => Promise<IUser>;
export declare const loginUserService: (payload: Partial<IUser>) => Promise<{
    token: string;
    user: {
        id: import("mongoose").Types.ObjectId;
        name: string;
        email: string;
        role: import("../models/User.model.js").UserRole;
    };
}>;
