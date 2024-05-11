import { Schema, model } from "mongoose";
export const TransactionSchema = new Schema({
    id: {
        type: String,
        unique: true,
        required: true,
        trim: true,
    },
    type: {
        type: String,
        enum: ["Sell", "Buy"],
        required: true,
        trim: true,
    },
    furniture: [
        {
            type: Schema.Types.ObjectId,
            ref: "Furniture",
            required: true,
            trim: true,
        },
    ],
    customer: {
        type: Schema.Types.ObjectId,
        ref: "Customer",
        trim: true,
    },
    provider: {
        type: Schema.Types.ObjectId,
        ref: "Provider",
        trim: true,
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
export const Transactions = model('Transaction', TransactionSchema);
