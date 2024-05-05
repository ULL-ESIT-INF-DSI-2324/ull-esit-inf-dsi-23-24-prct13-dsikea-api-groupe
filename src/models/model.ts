import { Document } from "mongoose";

export interface FurnitureDocumentInterface extends Document {
  title: string,
  body: string,
}