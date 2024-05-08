import { Schema } from "mongoose";
export const FurnitureSchema = new Schema({
    title: {
        type: String,
        unique: true,
        required: true,
        trim: true,
    },
    body: {
        type: String,
        required: true,
        trim: true,
    },
});
