import jwt from "jsonwebtoken";
import { env } from "../config/env.js";
const JWT_SECRET = env.JWT_SECRET;
export const generateToken = (payload) => {
    return jwt.sign(payload, JWT_SECRET, {
        expiresIn: "7d",
    });
};
//# sourceMappingURL=jwt.js.map