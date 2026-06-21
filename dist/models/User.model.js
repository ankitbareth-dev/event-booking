import mongoose, { Schema } from "mongoose";
const userSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true,
    },
    password: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        enum: ["organizer", "customer"],
        required: true,
    },
}, {
    timestamps: true,
});
export const User = mongoose.model("User", userSchema);
//# sourceMappingURL=User.model.js.map