import { Schema, model, Document } from "mongoose";
import { CustomerDocumentInterface, CustomerSchema } from "./customers.js";
import { ProviderDocumentInterface, ProviderSchema } from "./providers.js";
import { FurnitureSchema } from "./furnitures.js";

export interface TransactionDocumentInterface extends Document {
  humanId: CustomerDocumentInterface | ProviderDocumentInterface
  type: string,
  furniture: typeof FurnitureSchema[],
  customer?: typeof CustomerSchema,
  provider?: typeof ProviderSchema,
  pay: number,
  time: Date,
}

export const TransactionSchema = new Schema<TransactionDocumentInterface>({
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
    ref: "Customers",
  },
  provider: {
    type: Schema.Types.ObjectId,
    ref: "Providers",
  },
  pay: {
    type: Number,
    required: true,
    validate: (value :number) => {
      if (value <0) {
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

export const Transactions = model<TransactionDocumentInterface>('Transaction', CustomerSchema);