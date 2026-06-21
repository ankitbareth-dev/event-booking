import mongoose, { Document } from "mongoose";
export interface IEvent extends Document {
    title: string;
    description: string;
    date: Date;
    location: string;
    price: number;
    availableTickets: number;
    organizer: mongoose.Types.ObjectId;
}
export declare const Event: mongoose.Model<IEvent, {}, {}, {}, mongoose.Document<unknown, {}, IEvent, {}, mongoose.DefaultSchemaOptions> & IEvent & Required<{
    _id: mongoose.Types.ObjectId;
}> & {
    __v: number;
} & {
    id: string;
}, any, IEvent>;
