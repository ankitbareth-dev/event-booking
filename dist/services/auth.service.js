import bcrypt from "bcrypt";
import { User } from "../models/User.model.js";
import { generateToken } from "../utils/jwt.js";
export const registerUserService = async (payload) => {
    const { name, email, password, role } = payload;
    const existingUser = await User.findOne({ email });
    if (existingUser) {
        throw new Error("Email already exists");
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({
        name,
        email,
        password: hashedPassword,
        role,
    });
    return User.findById(user._id).select("-password");
};
export const loginUserService = async (payload) => {
    const { email, password } = payload;
    const user = await User.findOne({ email });
    if (!user) {
        throw new Error("Invalid credentials");
    }
    const isMatched = await bcrypt.compare(password, user.password);
    if (!isMatched) {
        throw new Error("Invalid credentials");
    }
    const token = generateToken({
        id: user._id,
        role: user.role,
    });
    return {
        token,
        user: {
            id: user._id,
            name: user.name,
            email: user.email,
            role: user.role,
        },
    };
};
//# sourceMappingURL=auth.service.js.map