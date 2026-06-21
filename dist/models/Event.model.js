import mongoose, { Schema } from "mongoose";
const eventSchema = new Schema({
    title: {
        type: String,
        required: true,
        trim: true,
    },
    description: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        required: true,
    },
    location: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
        min: 0,
    },
    availableTickets: {
        type: Number,
        required: true,
        min: 0,
    },
    organizer: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
}, {
    timestamps: true,
});
export const Event = mongoose.model("Event", eventSchema);
//# sourceMappingURL=Event.model.js.map