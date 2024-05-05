import { Schema } from "mongoose";
import { FurnitureDocumentInterface } from "./model.js";

export const FurnitureSchema = new Schema<FurnitureDocumentInterface>({
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