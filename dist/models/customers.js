import { Schema } from "mongoose";
import { model } from 'mongoose';
export const CustomerSchema = new Schema({
    id: {
        type: String,
        unique: true,
        required: true,
        trim: true,
    },
    dni: {
        type: String,
        unique: true,
        required: true,
        trim: true,
    },
    name: {
        type: String,
        required: true,
        trim: true,
    },
    buys: {
        type: String,
        required: false,
        trim: true,
    },
    money: {
        type: Number,
        required: false,
        trim: true,
    },
});
export const Customers = model('Customer', CustomerSchema);
