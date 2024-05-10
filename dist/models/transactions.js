import { Schema, model } from "mongoose";
import { CustomerSchema } from "./customers.js";
export const TransactionSchema = new Schema({
    type: {
        type: String,
        enum: ["Sell", "Buy"],
        required: true,
    },
    furniture: [
        {
            type: Schema.Types.ObjectId,
            ref: "Furniture",
            required: true,
        },
    ],
    customer: {
        type: Schema.Types.ObjectId,
        ref: "Customer",
    },
    provider: {
        type: Schema.Types.ObjectId,
        ref: "Provider",
    },
    pay: {
        type: Number,
        required: true,
        validate: (value) => {
            if (value < 0) {
                throw new Error("Transaction pay must be positive number");
            }
        },
    },
    time: {
        type: Date,
        default: Date.now,
        required: true,
    },
});
export const Transactions = model('Transaction', CustomerSchema);
