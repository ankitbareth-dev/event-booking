import { IEvent } from "../models/Event.model.js";
export declare const createEventService: (payload: Partial<IEvent>, organizerId: string) => Promise<import("mongoose").Document<unknown, {}, IEvent, {}, import("mongoose").DefaultSchemaOptions> & IEvent & Required<{
    _id: import("mongoose").Types.ObjectId;
}> & {
    __v: number;
} & {
    id: string;
}>;
export declare const getAllEventsService: () => Promise<(import("mongoose").Document<unknown, {}, IEvent, {}, import("mongoose").DefaultSchemaOptions> & IEvent & Required<{
    _id: import("mongoose").Types.ObjectId;
}> & {
    __v: number;
} & {
    id: string;
})[]>;
export declare const getMyEventsService: (organizerId: string) => Promise<(import("mongoose").Document<unknown, {}, IEvent, {}, import("mongoose").DefaultSchemaOptions> & IEvent & Required<{
    _id: import("mongoose").Types.ObjectId;
}> & {
    __v: number;
} & {
    id: string;
})[]>;
export declare const updateEventService: (eventId: string, organizerId: string, payload: Partial<IEvent>) => Promise<import("mongoose").Document<unknown, {}, IEvent, {}, import("mongoose").DefaultSchemaOptions> & IEvent & Required<{
    _id: import("mongoose").Types.ObjectId;
}> & {
    __v: number;
} & {
    id: string;
}>;
export declare const deleteEventService: (eventId: string, organizerId: string) => Promise<void>;
