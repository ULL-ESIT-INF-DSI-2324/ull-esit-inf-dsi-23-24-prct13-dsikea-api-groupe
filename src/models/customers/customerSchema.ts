import { Schema } from "mongoose";
import { CustomerDocumentInterface } from "./customerModel.js";

export const CustomerSchema = new Schema<CustomerDocumentInterface>({
  id: {
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